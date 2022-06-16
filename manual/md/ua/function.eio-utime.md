- [«eio_unlink](function.eio-unlink.md)
- [eio_write »](function.eio-write.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Змінює дату та час останньої модифікації та доступу до файлу

#eio_utime

(PECL eio \>u003d 0.0.1dev)

eio_utime — Змінює дату та час останньої модифікації та доступу до
файлу

### Опис

**eio_utime**(
string `$path`,
float `$atime`,
float `$mtime`,
int `$pri` u003d EIO_PRI_DEFAULT,
[callable](language.types.callable.md) `$callback` u003d NULL,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$data u003d NULL
): resource

### Список параметрів

`path`
Шлях до файлу.

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

**eio_utime()** повертає вказівник на запит у разі успішного
виконання або **`false`** у разі виникнення помилки.

### Дивіться також

- [eio_futime()](function.eio-futime.md) - Змінює дату та час
останньої модифікації та доступу до файлу
