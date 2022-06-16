- [«ob_get_contents](function.ob-get-contents.md)
- [ob_get_length »](function.ob-get-length.md)

- [PHP Manual](index.md)
- [Функції контролю виведення](ref.outcontrol.md)
- Скинути буфер виводу, повернути його у вигляді рядка та відключити
буферизацію виведення

#ob_get_flush

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

ob_get_flush — Скинути буфер виводу, повернути його у вигляді рядка та
відключити буферизацію виводу

### Опис

**ob_get_flush**(): string\|false

**ob_get_flush()** скидає буфер виводу, повертаючи його вміст у
вигляді рядка та відключає буферизацію виведення.

Буфер виводу має запускатися функцією
[ob_start()](function.ob-start.md) з прапором
[PHP_OUTPUT_HANDLER_FLUSHABLE](outcontrol.constants.md#constant.php-output-handler-flushable).
Інакше не спрацює **ob_get_flush()**.

> **Примітка**: Ця функція аналогічна
> [ob_end_flush()](function.ob-end-flush.md) за винятком того, що
> Ця функція також повертає буфер у вигляді рядка.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає буфер виводу або ** false, якщо буферизація не активна.

### Приклади

**Приклад #1 Приклад використання функції **ob_get_flush()****

` <?php//Використовується output_bufferingu003dOnprint_r(ob_list_handlers());//зберегти буфер в файл$bufferu003du003dob_get_flush();file_put_contents('buffer.txt',_$;buf `

Результат виконання цього прикладу:

Array
(
[0] u003d> default output handler
)
Array
(
)

### Дивіться також

- [ob_end_clean()](function.ob-end-clean.md) - Очистити (стерти)
буфер виводу та вимкнути буферизацію виводу
- [ob_end_flush()](function.ob-end-flush.md) - Скинути (надіслати)
буфер виведення та вимкнути буферизацію виводу
- [ob_list_handlers()](function.ob-list-handlers.md) - Список всіх
використовуваних обробників виводу
