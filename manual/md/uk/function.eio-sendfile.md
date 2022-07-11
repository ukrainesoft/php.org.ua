- [«eio_seek](function.eio-seek.md)
- [eio_set_max_idle »](function.eio-set-max-idle.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Переміщує дані між файлами

#eio_sendfile

(PECL eio \>u003d 0.0.1dev)

eio_sendfile — Переміщує дані між файлами

### Опис

**eio_sendfile**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$out_fd,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$in_fd`,
int `$offset`,
int `$length`,
int `$pri` u003d ?,
[callable](language.types.callable.md) `$callback` u003d ?,
string `$data` u003d ?
): resource

**eio_sendfile()** копіює дані з одного файлу до іншого. Дивіться
додатково опис `SENDFILE(2)`.

### Список параметрів

`out_fd`
Вихідний потік, ресурс сокету чи дескриптор цільового файлу. Повинен бути
відкрито для запису.

`in_fd`
Вхідний потік, ресурс сокету або дескриптор файлу-джерела. Повинен бути
відкритий читання.

`offset`
Зміщення у файлі-джерелі.

`length`
Кількість байт, яке потрібно скопіювати.

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

**eio_sendfile()** повертає ресурс запиту у разі успішного
виконання або **`false`** у разі виникнення помилки.
