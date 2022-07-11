- [«flush](function.flush.md)
- [ob_end_clean »](function.ob-end-clean.md)

- [PHP Manual](index.md)
- [Функції контролю виведення](ref.outcontrol.md)
- Очистити (стерти) буфер виводу

#ob_clean

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

ob_clean — Очистити (стерти) буфер виводу

### Опис

**ob_clean**(): bool

Ця функція очищає вміст вихідного буфера, не відправляючи його в
браузер.

Ця функція не знищує буфер виводу, як це робить
[ob_end_clean()](function.ob-end-clean.md).

Буфер виводу має запускатися функцією
[ob_start()](function.ob-start.md) з прапором
[PHP_OUTPUT_HANDLER_CLEANABLE](outcontrol.constants.md#constant.php-output-handler-cleanable).
Інакше **ob_clean()** не спрацює.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ob_flush()](function.ob-flush.md) - Скинути (надіслати) буфер
висновку
- [ob_end_flush()](function.ob-end-flush.md) - Скинути (надіслати)
буфер виведення та вимкнути буферизацію виводу
- [ob_end_clean()](function.ob-end-clean.md) - Очистити (стерти)
буфер виводу та вимкнути буферизацію виводу
