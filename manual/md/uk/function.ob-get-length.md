- [«ob_get_flush](function.ob-get-flush.md)
- [ob_get_level »](function.ob-get-level.md)

- [PHP Manual](index.md)
- [Функції контролю виведення](ref.outcontrol.md)
- Повертає розмір буфера виводу

#ob_get_length

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

ob_get_length — Повертає розмір буфера виводу

### Опис

**ob_get_length**(): int\|false

Поверне розмір у байтах вмісту у буфері виводу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає розмір у байтах вмісту буфера виводу або **`false`**,
якщо буферизація не активна.

### Приклади

**Приклад #1 Простий приклад використання функції **ob_get_length()****

` <?phpob_start();echo "Привіт ";$len1 u003d ob_get_length();echo "Світ";$len2 u003d ob_get_length();ob_end_clean();echo $len1 . ", " . $ len2;?> `

Результат виконання цього прикладу:

13, 19

### Дивіться також

- [ob_start()](function.ob-start.md) - Увімкнення буферизації виводу
- [ob_get_contents()](function.ob-get-contents.md) - Повертає
вміст буфера виводу
