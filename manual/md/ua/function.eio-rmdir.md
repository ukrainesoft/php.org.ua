- [«eio_rename](function.eio-rename.md)
- [eio_seek »] (function.eio-seek.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Видаляє директорію

#eio_rmdir

(PECL eio \>u003d 0.0.1dev)

eio_rmdir - Видаляє директорію

### Опис

**eio_rmdir**(
string `$path`,
int `$pri` u003d EIO_PRI_DEFAULT,
[callable](language.types.callable.md) `$callback` u003d NULL,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$data u003d NULL
): resource

**eio_rmdir()** видаляє директорію.

### Список параметрів

`path`
Шлях до директорії

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

**eio_rmdir()** повертає вказівник на запит у разі успішного
виконання або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **eio_rmdir()****

`<?php$temp_dirname u003d "eio-temp-dir";mkdir($temp_dirname);function my_rmdir_callback($data, $result) {   if ($result u003du003d 0 &&          "; }else if (file_exists($data)) {      rmdir($data); }}eio_rmdir($temp_dirname, EIO_PRI_DEFAULT, "my_rmdir_callback", $temp_dirname);eio_event_loop();?> `

Результатом виконання цього прикладу буде щось подібне:

eio_rmdir_ok

### Дивіться також

- [eio_mkdir()](function.eio-mkdir.md) - Створення директорії
