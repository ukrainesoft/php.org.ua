- [«eio_fchmod](function.eio-fchmod.md)
- [eio_fdatasync »](function.eio-fdatasync.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Змінює власника файлу

#eio_fchown

(PECL eio \>u003d 0.0.1dev)

eio_fchown — Змінює власника файлу

### Опис

**eio_fchown**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd`,
int `$uid`,
int `$gid` u003d -1,
int `$pri` u003d EIO_PRI_DEFAULT,
[callable](language.types.callable.md) `$callback` u003d NULL,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$data u003d NULL
): resource

**eio_fchown()** змінює власника файлу, дескриптор якого вказаний у
`fd`.

### Список параметрів

`fd`
Потік, покажчик на сокет або числовий дескриптор файлу.

`uid`
Код користувача. Ігнорується при значенні, що дорівнює -1.

`gid`
Код групи. Ігнорується при значенні, що дорівнює -1.

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

[eio_chmod()](function.eio-chmod.md) повертає вказівник на запит у
у разі успішного виконання або **`false`** у разі виникнення
помилки.

### Дивіться також

- [eio_fchmod()](function.eio-fchmod.md) - Змінює права доступу до
файлу
