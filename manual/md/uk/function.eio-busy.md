- [« Eio Функції](ref.eio.md)
- [eio_cancel »](function.eio-cancel.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Штучно збільшує навантаження. Може бути корисно при
тестування, вивчення продуктивності

#eio_busy

(PECL eio \>u003d 0.0.1dev)

eio_busy - Штучно збільшує навантаження. Може бути корисно при
тестування, вивчення продуктивності

### Опис

**eio_busy**(
int `$delay`,
int `$pri` u003d EIO_PRI_DEFAULT,
[callable](language.types.callable.md) `$callback` u003d NULL,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$data u003d NULL
): resource

Функція **eio_busy()** штучно збільшує навантаження, додаючи
`delay` секунд до часу виконання. Корисно при налагодженні та тестуванні
продуктивність.

### Список параметрів

`delay`
Затримка за секунди

`pri`
Пріоритет запитів: **`EIO_PRI_DEFAULT`**, **`EIO_PRI_MIN`**,
**`EIO_PRI_MAX`**, або **`null`**. Якщо переданий **`null`**, то `pri`
встановлюється у **`EIO_PRI_DEFAULT`**.

`callback`
Callback-функція, що виконується, коли всі запити групи будуть виконані.

`data`
Довільна змінна, що передається в `callback`-функцію.

### Значення, що повертаються

**eio_busy()** повертає запит типу resource у разі успішного
виконання або **`false`** у разі виникнення помилки.

### Дивіться також

- [eio_nop()](function.eio-nop.md) - Прохід циклу запиту, не
здійснюючи жодних операцій
