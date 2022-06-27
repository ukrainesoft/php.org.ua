- [«ob_flush](function.ob-flush.md)
- [ob_get_contents »](function.ob-get-contents.md)

- [PHP Manual](index.md)
- [Функції контролю виведення](ref.outcontrol.md)
- Отримати вміст поточного буфера та видалити його

#ob_get_clean

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

ob_get_clean — Отримати вміст поточного буфера та видалити його

### Опис

**ob_get_clean**(): string\|false

Отримує вміст поточного буфера, а потім видаляє поточний буфер.

**ob_get_clean()** по суті виконує
[ob_get_contents()](function.ob-get-contents.md) та
[ob_end_clean()](function.ob-end-clean.md).

Буфер виводу має запускатися функцією
[ob_start()](function.ob-start.md) із прапорами
[PHP_OUTPUT_HANDLER_CLEANABLE](outcontrol.constants.md#constant.php-output-handler-cleanable)
і
[PHP_OUTPUT_HANDLER_REMOVABLE](outcontrol.constants.md#constant.php-output-handler-removable).
Інакше **ob_get_clean()** не спрацює.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає вміст буфера виводу та закінчує буферизацію виводу.
Якщо буферизація виводу не активована, то функція поверне ** false **.

### Приклади

**Приклад #1 Простий приклад використання функції **ob_get_clean()****

` <?phpob_start();echo "Привіт світ";$out u003d ob_get_clean();$out u003d strtolower($out);var_dump($out);?> `

Результат виконання цього прикладу:


string(11) "привіт світ"

### Дивіться також

- [ob_get_contents()](function.ob-get-contents.md) - Повертає
вміст буфера виводу
- [ob_start()](function.ob-start.md) - Увімкнення буферизації виводу
