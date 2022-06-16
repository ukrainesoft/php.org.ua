- [«eio_ftruncate](function.eio-ftruncate.md)
- [eio_get_event_stream »](function.eio-get-event-stream.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Змінює дату та час останньої модифікації та доступу до файлу

#eio_futime

(PECL eio \>u003d 0.0.1dev)

eio_futime — Змінює дату та час останньої модифікації та доступу до
файлу

### Опис

**eio_futime**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd`,
float `$atime`,
float `$mtime`,
int `$pri` u003d EIO_PRI_DEFAULT,
[callable](language.types.callable.md) `$callback` u003d NULL,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$data u003d NULL
): resource

**eio_futime()** змінює дату та час останньої модифікації та доступу до
файлу.

### Список параметрів

`fd`
Потік, покажчик на сокет або числовий дескриптор файлу, повернутий,
наприклад, [eio_open()](function.eio-open.md)

`atime`
Час останнього доступу

`mtime`
Час останньої зміни

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

**eio_futime()** повертає вказівник на запит у разі успішного
виконання або **`false`** у разі виникнення помилки.

### Дивіться також

- [eio_utime()](function.eio-utime.md) - Змінює дату та час
останньої модифікації та доступу до файлу
