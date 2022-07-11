- [«eio_statvfs](function.eio-statvfs.md)
- [eio_sync_file_range »](function.eio-sync-file-range.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Створює символічне посилання

#eio_symlink

(PECL eio \>u003d 0.0.1dev)

eio_symlink — Створює символічне посилання

### Опис

**eio_symlink**(
string `$path`,
string `$new_path`,
int `$pri` u003d EIO_PRI_DEFAULT,
[callable](language.types.callable.md) `$callback` u003d NULL,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$data u003d NULL
): resource

**eio_symlink()** створює символічне посилання `new_path` на шлях
`path`.

### Список параметрів

`path`
Шлях-джерело

`new_path`
Цільовий шлях

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
Дані, які потрібно передати функції `callback`.

### Значення, що повертаються

**eio_symlink()** повертає ресурс запиту у разі успішного
виконання або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **eio_symlink()****

` <?php$filename u003d dirname(__FILE__)."/symlink.dat";touch($filename);$link u003d dirname(__FILE__)."/symlink.link";function my_symlink_cb($data, $result) { global $link, $filename; var_dump(file_exists($data) && is_link($data)); if (!eio_readlink($data, EIO_PRI_DEFAULT, "my_readlink_cb", NULL)) {        @unlink($link); @unlink($filename); }}function my_readlink_cb($data, $result) {    global $filename, $link; var_dump($result); @unlink($link); @unlink($filename);}eio_symlink($filename, $link, EIO_PRI_DEFAULT, "my_symlink_cb", $link);eio_event_loop();?> `

Результатом виконання цього прикладу буде щось подібне:

bool(true)
string(16) "/tmp/symlink.dat"

### Дивіться також

- [eio_link()](function.eio-link.md) - Створює жорстке посилання на
файл
