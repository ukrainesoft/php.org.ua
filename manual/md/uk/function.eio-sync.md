- [« eio_sync_file_range](function.eio-sync-file-range.md)
- [eio_syncfs »](function.eio-syncfs.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Записує кеш із буфера на диск

#eio_sync

(PECL eio \>u003d 0.0.1dev)

eio_sync — Записує кеш із буфера на диск

### Опис

**eio_sync**(int `$pri` u003d EIO_PRI_DEFAULT,
[callable](language.types.callable.md) `$callback` u003d NULL,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$data u003d NULL): resource

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**eio_sync()** повертає вказівник на запит у разі успішного
виконання або **`false`** у разі виникнення помилки.
