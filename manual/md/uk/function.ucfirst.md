- [«trim](function.trim.md)
- [ucwords»] (function.ucwords.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Перетворює перший символ рядка у верхній регістр

# ucfirst

(PHP 4, PHP 5, PHP 7, PHP 8)

ucfirst — Перетворює перший символ рядка у верхній регістр

### Опис

**ucfirst**(string `$string`): string

Повертає рядок `string`, у якому перший символ переведено у верхній
регістр, якщо символ є буквою.

Приналежність того чи іншого символу до буквених визначається з урахуванням
поточної локалі. Це означає, що, наприклад, використовуваної за замовчуванням
локалі "C", символ ä не буде перетворено.

### Список параметрів

`string`
Вхідний рядок.

### Значення, що повертаються

Повертає результуючий рядок.

### Приклади

**Приклад #1 Приклад використання **ucfirst()****

` <?php$foo u003d 'hello world!';$foo u003d ucfirst($foo); // Hello world!$bar u003d 'HELLO WORLD!';$bar u003d ucfirst($bar); // HELLO WORLD! $ bar u003d u003d ucfirst (strtolower ($ bar)); // Hello world!?> `

### Дивіться також

- [lcfirst()](function.lcfirst.md) - Перетворює перший символ
рядки в нижній регістр
- [strtolower()](function.strtolower.md) - Перетворює рядок на
нижній регістр
- [strtoupper()](function.strtoupper.md) - Перетворює рядок на
верхній регістр
- [ucwords()](function.ucwords.md) - Перетворює на верхній регістр
перший символ кожного слова у рядку
