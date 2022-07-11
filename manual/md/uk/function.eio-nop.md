- [«eio_mknod](function.eio-mknod.md)
- [eio_npending »] (function.eio-npending.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Прохід по циклу запиту, не здійснюючи жодних операцій

#eio_nop

(PECL eio \>u003d 0.0.1dev)

eio_nop — Прохід циклу запиту, не здійснюючи жодних операцій

### Опис

**eio_nop**(int `$pri` u003d EIO_PRI_DEFAULT,
[callable](language.types.callable.md) `$callback` u003d NULL,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$data u003d NULL): resource

**eio_nop()** проходить по циклу запиту, нічого не роблячи. Може
виявитися корисною при налагодженні.

### Список параметрів

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
Дані, які будуть передані в callback-функцію.

### Значення, що повертаються

**eio_nop()** повертає ресурс запиту у разі успішного виконання
або **`false`** у разі виникнення помилки.

### Дивіться також

- [eio_busy()](function.eio-busy.md) - Штучно збільшує
навантаження. Можливо корисно при тестуванні, вивченні
продуктивності
