- [«ob_implicit_flush](function.ob-implicit-flush.md)
- [ob_start »](function.ob-start.md)

- [PHP Manual](index.md)
- [Функції контролю виведення](ref.outcontrol.md)
- Список всіх використовуваних обробників виводу

#ob_list_handlers

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

ob_list_handlers — Список всіх обробників виводу, що використовуються.

### Опис

**ob_list_handlers**(): array

Список всіх обробників виведення.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція поверне масив із використовуваними обробниками виводу (якщо
є). Якщо увімкнено
[output_buffering](outcontrol.configuration.md#ini.output-buffering)
або використовувалася анонімна функція разом з
[ob_start()](function.ob-start.md), то **ob_list_handlers()** поверне
"default output handler".

### Приклади

**Приклад #1 Приклад використання функції **ob_list_handlers()****

` <?php//використовується output_bufferingu003dOnprint_r(ob_list_handlers());ob_end_flush();ob_start("ob_gzhandler");print_r(ob_list_handlers());ob_end_flush();// анонімна $string; });print_r(ob_list_handlers());ob_end_flush();?> `

Результат виконання цього прикладу:

Array
(
[0] u003d> default output handler
)

Array
(
[0] u003d> ob_gzhandler
)

Array
(
[0] u003d> Closure::__invoke
)

### Дивіться також

- [ob_end_clean()](function.ob-end-clean.md) - Очистити (стерти)
буфер виводу та вимкнути буферизацію виводу
- [ob_end_flush()](function.ob-end-flush.md) - Скинути (надіслати)
буфер виведення та вимкнути буферизацію виводу
- [ob_get_flush()](function.ob-get-flush.md) - Скинути буфер
виводу, повернути його у вигляді рядка та відключити буферизацію виводу
- [ob_start()](function.ob-start.md) - Увімкнення буферизації виводу
