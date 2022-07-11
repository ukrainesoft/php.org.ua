- [«eio_lstat](function.eio-lstat.md)
- [eio_mknod »](function.eio-mknod.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- створення директорії

#eio_mkdir

(PECL eio \>u003d 0.0.1dev)

eio_mkdir - Створення директорії

### Опис

**eio_mkdir**(
string `$path`,
int `$mode`,
int `$pri` u003d EIO_PRI_DEFAULT,
[callable](language.types.callable.md) `$callback` u003d NULL,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$data u003d NULL
): resource

**eio_mkdir()** створює директорію із заданим режимом доступу `mode`.

### Список параметрів

`path`
Дорога до нової директорії.

`mode`
Режим доступу, наприклад, 0755

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
Змінна, яку необхідно передати callback-функції `callback`.

### Значення, що повертаються

У разі успішного виконання операції **eio_mkdir()** поверне ресурс
запиту або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **eio_mkdir()****

` <?php$temp_dirname u003d "eio-temp-dir";/* Викликається, коли eio_mkdir() завершить роботу */function my_mkdir_callback($data, $result) { if &$ && !is_readable($temp_dirname)  && is_writable($temp_dirname)) { echo "eio_mkdir_ok"; } // Удаляем директорию    if (file_exists($data))        rmdir($temp_dirname);}// Создаём директорию с режимом доступа 0300eio_mkdir($temp_dirname, 0300, EIO_PRI_DEFAULT, "my_mkdir_callback", $temp_dirname);eio_event_loop();?> `

Результатом виконання цього прикладу буде щось подібне:

eio_mkdir_ok

### Дивіться також

- [eio_rmdir()](function.eio-rmdir.md) - Видаляє директорію
