- [«eio_busy](function.eio-busy.md)
- [eio_chmod»] (function.eio-chmod.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Скасує запит

#eio_cancel

(PECL eio \>u003d 0.0.1dev)

eio_cancel — Скасовує запит

### Опис

**eio_cancel**(resource `$req`): void

**eio_cancel()** скасовує запит, визначений в `req`

### Список параметрів

`req`
Ресурс запиту

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

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 **eio_cancel()** example**

` <?php /* Викликається при завершенні eio_nop() */ function my_nop_cb($data, $result) {  echo "my_nop ", $data, "
"; }// Цей  виклик eio_nop() буде скасований$req u003d eio_nop(EIO_PRI_DEFAULT, "my_nop_cb", "1");var_dump($req);eio_cancel($eq| , "my_nop_cb", "2");// Виконання запитівeio_event_loop();?> `

Результатом виконання цього прикладу буде щось подібне:

resource(4) of type (EIO Request Descriptor)
my_nop 2

### Дивіться також

- [eio_grp_cancel()](function.eio-grp-cancel.md) - Скасує групу
запитів
