- [«eio_readdir](function.eio-readdir.md)
- [eio_realpath »](function.eio-realpath.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Читає значення символічного посилання

#eio_readlink

(PECL eio \>u003d 0.0.1dev)

eio_readlink — Читає значення символічного посилання

### Опис

**eio_readlink**(
string `$path`,
int `$pri`,
[callable](language.types.callable.md) `$callback`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$data u003d NULL
): resource

### Список параметрів

`path`
Шлях до самого посилання

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
Дані, які необхідно передати у функцію callback.

### Значення, що повертаються

**eio_readlink()** повертає ресурс запиту у разі успішного
виконання або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **eio_readlink()****

` <?php$filename u003d dirname(__FILE__)."/symlink.dat";touch($filename);$link u003d dirname(__FILE__)."/symlink.link";$hardlink u003d dirname(__FILE__)."/ hardlink.link";function my_hardlink_cb($data, $result) {    global $link, $filename; var_dump(file_exists($data) && !is_link($data)); @unlink($data); eio_symlink($filename, $link, EIO_PRI_DEFAULT, "my_symlink_cb", $link);}function my_symlink_cb($data, $result) {    global $link, $filename; var_dump(file_exists($data) && is_link($data)); if (!eio_readlink($data, EIO_PRI_DEFAULT, "my_readlink_cb", NULL)) {        @unlink($link); @unlink($filename); }}function my_readlink_cb($data, $result) {    global $filename, $link; var_dump($result); @unlink($link); @unlink($filename);}eio_link($filename, $hardlink, EIO_PRI_DEFAULT, "my_hardlink_cb", $hardlink);eio_event_loop();?> `

Результатом виконання цього прикладу буде щось подібне:

bool(true)
bool(true)
string(16) "/tmp/symlink.dat"

### Дивіться також

- [eio_symlink()](function.eio-symlink.md) - Створює символічну
посилання
