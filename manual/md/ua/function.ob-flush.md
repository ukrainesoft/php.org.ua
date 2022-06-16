- [«ob_end_flush](function.ob-end-flush.md)
- [ob_get_clean »](function.ob-get-clean.md)

- [PHP Manual](index.md)
- [Функції контролю виведення](ref.outcontrol.md)
- Скинути (надіслати) буфер виводу

#ob_flush

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

ob_flush — Скинути (надіслати) буфер виводу

### Опис

**ob_flush**(): bool

Ця функція надішле вміст буфера виводу (якщо є). Якщо
необхідна подальша обробка буфера виведення, слід викликати
[ob_get_contents()](function.ob-get-contents.md) перед **ob_flush()**,
оскільки вміст буфера буде видалено після дзвінка **ob_flush()**.

Ця функція не знищує буфер виводу, як це робить
[ob_end_flush()](function.ob-end-flush.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ob_get_contents()](function.ob-get-contents.md) - Повертає
вміст буфера виводу
- [ob_clean()](function.ob-clean.md) - Очистити (стерти) буфер
висновку
- [ob_end_flush()](function.ob-end-flush.md) - Скинути (надіслати)
буфер виведення та вимкнути буферизацію виводу
- [ob_end_clean()](function.ob-end-clean.md) - Очистити (стерти)
буфер виводу та вимкнути буферизацію виводу
