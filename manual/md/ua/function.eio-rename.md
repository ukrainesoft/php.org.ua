- [«eio_realpath](function.eio-realpath.md)
- [eio_rmdir »] (function.eio-rmdir.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Змінює ім'я або переміщує файл

#eio_rename

(PECL eio \>u003d 0.0.1dev)

eio_rename — Змінює ім'я або переміщує файл

### Опис

**eio_rename**(
string `$path`,
string `$new_path`,
int `$pri` u003d EIO_PRI_DEFAULT,
[callable](language.types.callable.md) `$callback` u003d NULL,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$data u003d NULL
): resource

**eio_rename()** здійснює переміщення або перейменування файлу.

### Список параметрів

`path`
Вихідний шлях до файлу

`new_path`
Кінцевий шлях до файлу під час переміщення

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

**eio_rename()** повертає ресурс запиту у разі успішного виконання
або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **eio_rename()****

` <?php$filename u003d dirname(__FILE__)."/eio-temp-file.dat";touch($filename);$new_filename u003d dirname(__FILE__)."/eio-temp-file-new.dat"; function my_rename_cb($data, $result) {    global $filename, $new_filename; if ($result u003du003d 0 && !file_exists($filename) && file_exists($new_filename)) {         @unlink($new_filename); echo "eio_rename_ok"; } else {        @unlink($filename); }}eio_rename($filename, $new_filename, EIO_PRI_DEFAULT, "my_rename_cb", $filename); eio_event_loop();?> `

Результатом виконання цього прикладу буде щось подібне:

eio_rename_ok
