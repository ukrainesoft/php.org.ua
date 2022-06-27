- [«ob_clean](function.ob-clean.md)
- [ob_end_flush »](function.ob-end-flush.md)

- [PHP Manual](index.md)
- [Функції контролю виведення](ref.outcontrol.md)
- Очистити (стерти) буфер виводу та вимкнути буферизацію виводу

#ob_end_clean

(PHP 4, PHP 5, PHP 7, PHP 8)

ob_end_clean — Очистити (стерти) буфер виводу та вимкнути буферизацію
висновку

### Опис

**ob_end_clean**(): bool

Ця функція видаляє вміст верхнього буфера виводу і відключає
цю буферизацію. Якщо ви хочете використати вміст буфера, то вам
необхідно викликати [ob_get_contents()](function.ob-get-contents.md)
перед **ob_end_clean()**, тому що весь вміст буфера видаляється при
виклик **ob_end_clean()**.

Буфер виводу має запускатися функцією
[ob_start()](function.ob-start.md) із прапорами
[PHP_OUTPUT_HANDLER_CLEANABLE](outcontrol.constants.md#constant.php-output-handler-cleanable)
і
[PHP_OUTPUT_HANDLER_REMOVABLE](outcontrol.constants.md#constant.php-output-handler-removable).
Інакше не спрацює **ob_end_clean()**.

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

Наступний приклад показує простий спосіб позбутися всіх вихідних
буферів:

**Приклад #1 Приклад використання функції **ob_end_clean()****

` <?phpob_start();echo 'Текст, не відобразиться.';ob_end_clean();?> `

### Дивіться також

- [ob_start()](function.ob-start.md) - Увімкнення буферизації виводу
- [ob_get_contents()](function.ob-get-contents.md) - Повертає
вміст буфера виводу
- [ob_flush()](function.ob-flush.md) - Скинути (надіслати) буфер
висновку
