- [«eio_read](function.eio-read.md)
- [eio_readdir »] (function.eio-readdir.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Поміщає дані з файлу в кеш сторінки

#eio_readahead

(PECL eio \>u003d 0.0.1dev)

eio_readahead — Поміщає дані з файлу до кешу сторінки

### Опис

**eio_readahead**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd`,
int `$offset`,
int `$length`,
int `$pri` u003d EIO_PRI_DEFAULT,
[callable](language.types.callable.md) `$callback` u003d NULL,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$data u003d NULL
): resource

**eio_readahead()** заповнює кеш сторінки даними з файлу. Таким
Таким чином, подальші звернення до цього файлу не впливатимуть на роботу
дискової підсистеми. Більш детальну інформацію можна отримати на
сторінці посібника `READAHEAD(2)`.

### Список параметрів

`fd`
Потік, ресурс сокету чи числовий файловий дескриптор.

`offset`
Позиція у файлі, з якою читатимуться дані.

`length`
Кількість байт, що зчитуються.

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

**eio_readahead()** повертає ресурс запиту у разі успішного
виконання або **`false`** у разі виникнення помилки.
