- [«eio_fstat](function.eio-fstat.md)
- [eio_fsync »](function.eio-fsync.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Повертає статистику файлової системи

# eio_fstatvfs

(PECL eio \>u003d 0.0.1dev)

eio_fstatvfs — Повертає статистику файлової системи

### Опис

**eio_fstatvfs**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd`,
int `$pri`,
[callable](language.types.callable.md) `$callback`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$ data` u003d ?
): resource

**eio_fstatvfs()** повертає статистику файлової системи в `result`
аргумент `callback`.

### Список параметрів

`fd`
Файловий дескриптор файлу вмонтованої файлової системи.

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

**eio_fstatvfs()** повертає вказівник на запит у разі успішного
виконання або **`false`** у разі виникнення помилки.

### Дивіться також

- [eio_statvfs()](function.eio-statvfs.md) - Повертає статистику
файлової системи
