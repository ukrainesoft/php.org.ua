- [«ob_get_clean](function.ob-get-clean.md)
- [ob_get_flush »](function.ob-get-flush.md)

- [PHP Manual](index.md)
- [Функції контролю виведення](ref.outcontrol.md)
- Повертає вміст буфера виводу

#ob_get_contents

(PHP 4, PHP 5, PHP 7, PHP 8)

ob_get_contents — Повертає вміст буфера виводу

### Опис

**ob_get_contents**(): string\|false

Отримує вміст буфера без його очищення.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція поверне вміст буфера виводу або **`false`**, якщо
буферизація виведення не активована.

### Приклади

**Приклад #1 Простий приклад використання функції **ob_get_contents()****

` <?phpob_start();echo "Привіт ";$out1 u003d ob_get_contents();echo "Світ";$out2 u003d ob_get_contents();ob_end_clean();var_dump($out1, $out2);?> `

Результат виконання цього прикладу:

string(6) "Привіт"
string(11) "Привіт Світ"

### Дивіться також

- [ob_start()](function.ob-start.md) - Увімкнення буферизації виводу
- [ob_get_length()](function.ob-get-length.md) - Повертає розмір
буфера виводу
