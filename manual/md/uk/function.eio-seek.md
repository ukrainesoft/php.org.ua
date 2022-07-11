- [«eio_rmdir](function.eio-rmdir.md)
- [eio_sendfile »] (function.eio-sendfile.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Переміщує файловий покажчик файлу fd на число байт offset в
відповідно до директиви whence

#eio_seek

(PECL eio \>u003d 0.5.0b)

eio_seek - Переміщує файловий покажчик файлу `fd` на число байт
`offset` відповідно до директиви `whence`

### Опис

**eio_seek**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd`,
int `$offset`,
int `$whence`,
int `$pri` u003d EIO_PRI_DEFAULT,
[callable](language.types.callable.md) `$callback` u003d NULL,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$data u003d NULL
): resource

**eio_seek()** змінює зсув файлового покажчика, пов'язаного з
потоком, ресурсом сокету або файловим дескриптором `fd` на значення
`offset`. При цьому поточна позиція файлового покажчика обчислюватиметься
відповідно до значення директиви `whence` наступним чином:

- **`EIO_SEEK_SET`** - Встановлення поточної позиції на `offset` байт від
початку файлу.
- **`EIO_SEEK_CUR`** - Зміщення поточної позиції на `offset` байт
наперед.
- **`EIO_SEEK_END`** - Встановлення вказівника на позицію кінець-файлу плюс
`offset` байт.

### Список параметрів

`fd`
Потік, ресурс сокету чи числовий дескриптор файлу

`offset`
Початкова позиція, з якою читатимуться дані

`length`
Число байт, яке необхідно прочитати

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

**eio_seek()** повертає ресурс запиту у разі успішного виконання
або **`false`** у разі виникнення помилки.
