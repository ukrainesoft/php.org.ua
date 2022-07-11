- [« eio_get_last_error](function.eio-get-last-error.md)
- [eio_grp_cancel »](function.eio-grp-cancel.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Додає запит до групи запитів

#eio_grp_add

(PECL eio \>u003d 0.0.1dev)

eio_grp_add — Додає запит до групи запитів

### Опис

**eio_grp_add**(resource `$grp`, resource `$req`): void

**eio_grp_add()** додає запит до групи запитів.

### Список параметрів

`grp`
Вказівник на групу запитів, повернутий
[eio_grp()](function.eio-grp.md)

`req`
Покажчик на ресурс

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Створення групи запитів**

` <?php/* * Створення групи запитів для відкриття, читання і закриття файла *///Створеннятимчасового файла і запис в него декілька байт$temp_filename  fopen($temp_filename, "w");fwrite($fp, "some data");fclose($fp);/* Викликається, коли група запитів буде виконана */function my_grp_done($da $resultu003du003du003d0); @unlink($data);}/* Викликається після виконання eio_open() */function my_grp_file_opened_callback($data, $result) { global $grp; // $result повинен містити дескриптор файла var_dump($result > 0); // Створення запиту eio_read() і додавання в групу // Дескриптор файла передається в callback-функцію $req u003d eio_read($result, 4, 0, ; eio_grp_add($grp, $req);}/* Викликається після виконання eio_read() */function my_grp_file_read_callback($data, $result) { global $grp; // Читання байтів var_dump($result); // Створення запиту eio_close() і додавання в групу // $data мусить містити дескриптор файлу $req u003d eio_close($data); eio_grp_add($grp, $req);}// Створення групу запросів$grp u003d eio_grp("my_grp_done", $temp_filename);var_dump($grp);// Створення запросу e | $temp_filename, EIO_O_RDWR EIO_O_APPEND, NULL, EIO_PRI_DEFAULT, "my_grp_file_opened_callback", NULL);

Результатом виконання цього прикладу буде щось подібне:

resource(6) of type (EIO Group Descriptor)
bool(true)
string(4) "some"
bool(true)

### Дивіться також

- [eio_grp()](function.eio-grp.md) - Створює групу запитів
- [eio_grp_cancel()](function.eio-grp-cancel.md) - Скасує групу
запитів
- [eio_grp_limit()](function.eio-grp-limit.md) - Встановлює
гранична кількість запитів у групі
