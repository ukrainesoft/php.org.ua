- [«eio_grp_limit](function.eio-grp-limit.md)
- [eio_init »](function.eio-init.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Створює групу запитів

#eio_grp

(PECL eio \>u003d 0.0.1dev)

eio_grp — Створює групу запитів

### Опис

**eio_grp**([callable](language.types.callable.md) `$callback`, string
$data u003d NULL): resource

**eio_grp()** створює групу запитів.

### Список параметрів

`callback`
Функція callback викликається при завершенні запиту. Вона повинна
задовольняти наступний прототип:

` void callback(mixed $data, int $result[, resource $req]);'

`data`
є даними користувача, переданими в запиті.

`result`
містить результуюче значення, що залежить від запиту; зазвичай це
значення, яке повертається відповідним системним викликом.

`req`
є опціональним запитуваним ресурсом, який може
використовуватися з такими функціями як
[eio_get_last_error()](function.eio-get-last-error.md)

`data`
Довільна змінна, що передається в `callback`-функцію.

### Значення, що повертаються

**eio_grp()** повертає вказівник на запит у разі успішного
виконання або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **eio_grp()****

` <?php$temp_filename u003d dirname(__FILE__) ."/eio-file.tmp";$fp u003d fopen($temp_filename, "w");fwrite($fp, "some data");fclose($fp) ;$my_file_fd u003d NULL;/* Викликається, коли група запитів буде виконана */function my_grp_done($data, $result) { // Якщо файл від'є  function my_grp_file_opened_callback($data, $result) { global $my_file_fd, $grp; $my_file_fdu003du003d$result; $req u003d eio_read($my_file_fd, 4, 0,  EIO_PRI_DEFAULT, "my_grp_file_read_callback"); eio_grp_add($grp, $req);}/* Викликається, коли файл прочитаний */function my_grp_file_read_callback($data, $result) { global $my_file_fd, $gr var_dump($result); // Створення запиту на закриття файлу $req u003d eio_close($my_file_fd); // Добавление запроса в группу eio_grp_add($grp, $req);}// Создание группы$grp u003d eio_grp("my_grp_done", $temp_filename);// Создание запроса$req u003d eio_open($temp_filename, EIO_O_RDWR | EIO_O_APPEND , NULL ,  EIO_PRI_DEFAULT, "my_grp_file_opened_callback", NULL);// Додавання запиту в групуeio_grp_add($grp, $req);// Виконання запитівeio_e;

Результатом виконання цього прикладу буде щось подібне:

string(4) "some"

### Дивіться також

- [eio_grp_cancel()](function.eio-grp-cancel.md) - Скасує групу
запитів
- [eio_grp_add()](function.eio-grp-add.md) - Додає запит у
групу запитів
