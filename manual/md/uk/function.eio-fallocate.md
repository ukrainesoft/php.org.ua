- [«eio_event_loop](function.eio-event-loop.md)
- [eio_fchmod »] (function.eio-fchmod.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Дозволяє безпосередньо керувати розміром дискового
простору для файлу

#eio_fallocate

(PECL eio \>u003d 0.0.1dev)

eio_fallocate — Дозволяє безпосередньо керувати розміром використовуваного
дискового простору для файлу

### Опис

**eio_fallocate**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd`,
int `$mode`,
int `$offset`,
int `$length`,
int `$pri` u003d EIO_PRI_DEFAULT,
[callable](language.types.callable.md) `$callback` u003d NULL,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$data u003d NULL
): resource

**eio_fallocate()** дозволяє безпосередньо керувати розміром використовуваного
дисковий простір для файлу. Дескриптор файлу вказується в
параметрі `fd`, розмір визначається діапазоном у байтах, починаючи від
усунення `offset` і до `length`.

> **Примітка**: **Файл повинен бути відкритим для запису**
>
> **`EIO_O_CREAT`** *OR* (одна з констант **`EIO_O_WRONLY`**,
> **`EIO_O_RDWR`**

### Список параметрів

`fd`
Потік, покажчик на сокет або числовий дескриптор файлу, наприклад
повернутий [eio_open()](function.eio-open.md).

`mode`
Доступний тільки один прапор: **`EIO_FALLOC_FL_KEEP_SIZE`** (те саме,
що **`FALLOC_FL_KEEP_SIZE`** в POSIX).

`offset`
Визначає усунення діапазону в байтах.

`length`
Визначає розміри діапазону.

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

**eio_fallocate()** повертає вказівник на запит у разі успішного
виконання або **`false`** у разі виникнення помилки.
