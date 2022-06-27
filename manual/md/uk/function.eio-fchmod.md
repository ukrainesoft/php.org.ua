- [«eio_fallocate](function.eio-fallocate.md)
- [eio_fchown »] (function.eio-fchown.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Змінює права доступу до файлу

#eio_fchmod

(PECL eio \>u003d 0.0.1dev)

eio_fchmod — Змінює права доступу до файлу

### Опис

**eio_fchmod**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd`,
int `$mode`,
int `$pri` u003d EIO_PRI_DEFAULT,
[callable](language.types.callable.md) `$callback` u003d NULL,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$data u003d NULL
): resource

**eio_fchmod()** змінює права доступу до файлу, дескриптор якого
вказано в `fd`.

### Список параметрів

`fd`
Потік, покажчик на сокет або числовий дескриптор файлу, наприклад,
повернутий [eio_open()](function.eio-open.md).

`mode`
Нові права доступу. Наприклад, 0644.

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

**eio_fchmod()** повертає вказівник на запит у разі успішного
виконання або **`false`** у разі виникнення помилки.

### Дивіться також

- [eio_fchown()](function.eio-fchown.md) - Змінює власника файлу
