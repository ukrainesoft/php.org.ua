- [«ob_end_clean](function.ob-end-clean.md)
- [ob_flush »](function.ob-flush.md)

- [PHP Manual](index.md)
- [Функції контролю виведення](ref.outcontrol.md)
- Скинути (надіслати) буфер виведення та відключити буферизацію виводу

#ob_end_flush

(PHP 4, PHP 5, PHP 7, PHP 8)

ob_end_flush — Скинути (надіслати) буфер виведення та вимкнути буферизацію
висновку

### Опис

**ob_end_flush**(): bool

Ця функція надішле вміст найвищого буфера виводу (якщо воно
є) та відключить цей буфер виводу. Якщо ви хочете використати
вміст буфера, то вам необхідно викликати
[ob_get_contents()](function.ob-get-contents.md) перед
**ob_end_flush()**, т.к. весь вміст буфера видаляється під час виклику
**ob_end_flush()**.

Буфер виводу має запускатися функцією
[ob_start()](function.ob-start.md) із прапорами
[PHP_OUTPUT_HANDLER_FLUSHABLE](outcontrol.constants.md#constant.php-output-handler-flushable)
і
[PHP_OUTPUT_HANDLER_REMOVABLE](outcontrol.constants.md#constant.php-output-handler-removable).

> **Примітка**: Ця функція аналогічна
> [ob_get_flush()](function.ob-get-flush.md), за винятком того, що
> [ob_get_flush()](function.ob-get-flush.md) повертає вміст
> Буфер у вигляді рядка.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. Основною причиною невдалого завершення
роботи функції є її виклик без активного буфера або якщо буфер не
може бути вилучений (спеціальний тип буфера).

### Помилки

Якщо функція завершується помилкою, генерується **`E_NOTICE`**.

### Приклади

**Приклад #1 Приклад використання функції **ob_end_flush()****

Наступний приклад показує простий спосіб скидання та завершення всіх
буферів виводу:

`<?php  while (@ob_end_flush());?> `

### Дивіться також

- [ob_start()](function.ob-start.md) - Увімкнення буферизації виводу
- [ob_get_contents()](function.ob-get-contents.md) - Повертає
вміст буфера виводу
- [ob_get_flush()](function.ob-get-flush.md) - Скинути буфер
виводу, повернути його у вигляді рядка та відключити буферизацію виводу
- [ob_flush()](function.ob-flush.md) - Скинути (надіслати) буфер
висновку
- [ob_end_clean()](function.ob-end-clean.md) - Очистити (стерти)
буфер виводу та вимкнути буферизацію виводу
