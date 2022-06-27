- [«eio_init](function.eio-init.md)
- [eio_lstat »] (function.eio-lstat.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Створює жорстке посилання на файл

#eio_link

(PECL eio \>u003d 0.0.1dev)

eio_link — Створює жорстке посилання на файл

### Опис

**eio_link**(
string `$path`,
string `$new_path`,
int `$pri` u003d EIO_PRI_DEFAULT,
[callable](language.types.callable.md) `$callback` u003d NULL,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$data u003d NULL
): resource

**eio_link()** створює жорстке посилання `new_path` на файл, вказаний у
`path`.

### Список параметрів

`path`
Шлях до файлу.

`new_path`
Ім'я жорсткого заслання.

`pri`
Пріоритет запитів: **`EIO_PRI_DEFAULT`**, **`EIO_PRI_MIN`**,
**`EIO_PRI_MAX`**, або **`null`**. Якщо переданий **`null`**, то `pri`
встановлюється у **`EIO_PRI_DEFAULT`**.

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

### Приклади

**Приклад #1 Приклад використання **eio_link()****

` <?php$filename u003d dirname(__FILE__)."/symlink.dat";touch($filename);$link u003d dirname(__FILE__)."/symlink.link";$hardlink u003d dirname(__FILE__)."/ hardlink.link";function my_hardlink_cb($data, $result) {    global $link, $filename; var_dump(file_exists($data) && !is_link($data)); @unlink($data); eio_symlink($filename, $link, EIO_PRI_DEFAULT, "my_symlink_cb", $link);}function my_symlink_cb($data, $result) {    global $link, $filename; var_dump(file_exists($data) && is_link($data)); if (!eio_readlink($data, EIO_PRI_DEFAULT, "my_readlink_cb", NULL)) {        @unlink($link); @unlink($filename); }}function my_readlink_cb($data, $result) {    global $filename, $link; var_dump($result); @unlink($link); @unlink($filename);}eio_link($filename, $hardlink, EIO_PRI_DEFAULT, "my_hardlink_cb", $hardlink);eio_event_loop();?> `

Результатом виконання цього прикладу буде щось подібне:

bool(true)
bool(true)
string(%d) "%ssymlink.dat"

### Дивіться також

- [eio_symlink()](function.eio-symlink.md) - Створює символічну
посилання
