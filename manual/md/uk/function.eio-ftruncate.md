- [«eio_fsync](function.eio-fsync.md)
- [eio_futime »](function.eio-futime.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Урізує розмір файлу

#eio_ftruncate

(PECL eio \>u003d 0.0.1dev)

eio_ftruncate — Зменшує розмір файлу

### Опис

**eio_ftruncate**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd`,
int `$offset` u003d 0,
int `$pri` u003d EIO_PRI_DEFAULT,
[callable](language.types.callable.md) `$callback` u003d NULL,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$data u003d NULL
): resource

**eio_ftruncate()** урізує файл, дескриптор якого вказаний у параметрі
`fd` точно до `length` байт.

### Список параметрів

`fd`
Потік, покажчик на сокет або числовий дескриптор файлу.

`offset`
Зміщення від початку файлу

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

**eio_ftruncate()** повертає вказівник на запит у разі успішного
виконання або **`false`** у разі виникнення помилки.

### Дивіться також

- [eio_truncate()](function.eio-truncate.md) - Урізує розмір файлу
