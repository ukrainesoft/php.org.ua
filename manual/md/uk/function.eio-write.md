- [«eio_utime](function.eio-utime.md)
- [Ev »](book.ev.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Запис у файл

#eio_write

(PECL eio \>u003d 0.0.1dev)

eio_write — Запис до файлу

### Опис

**eio_write**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd`,
string `$str`,
int `$length` u003d 0,
int `$offset` u003d 0,
int `$pri` u003d EIO_PRI_DEFAULT,
[callable](language.types.callable.md) `$callback` u003d NULL,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$data u003d NULL
): resource

**eio_write()** записує до `length` байт із `str` у файл, починаючи з
позиції offset байт від початку файлу.

### Список параметрів

`fd`
Потік, ресурс сокету або числовий файловий дескриптор, наприклад,
отриманий з [eio_open()](function.eio-open.md).

`str`
Записуваний рядок

`length`
Максимальна кількість байт, що записуються.

`offset`
Зміщення з початку файлу.

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
Дані, які потрібно передати в функцію callback.

### Значення, що повертаються

**eio_write()** повертає ресурс запиту у разі успішного виконання
або **`false`** у разі виникнення помилки.

### Дивіться також

- [eio_open()](function.eio-open.md) - Відкриває файл
