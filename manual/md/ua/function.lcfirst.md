- [«join](function.join.md)
- [levenshtein »] (function.levenshtein.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Перетворює перший символ рядка на нижній регістр

#lcfirst

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

lcfirst — Перетворює перший символ рядка на нижній регістр

### Опис

**lcfirst**(string `$string`): string

Повертає рядок `string`, перший символ якого було перетворено на
нижній регістр, якщо символ є буквою.

Приналежність того чи іншого символу до буквених визначається з урахуванням
поточної локалі. Це означає, що, наприклад, використовуваної за замовчуванням
локалі "C", символ ä не буде перетворено.

### Список параметрів

`string`
Вхідний рядок.

### Значення, що повертаються

Повертає результуючий рядок.

### Приклади

**Приклад #1 Приклад використання **lcfirst()****

` <?php$foo u003d 'HelloWorld';$foo u003d lcfirst($foo); // helloWorld$bar u003d 'HELLO WORLD!';$bar u003d lcfirst($bar); // hELLO WORLD!$bar u003dlcfirst(strtoupper($bar)); // hELLO WORLD!?> `

### Дивіться також

- [ucfirst()](function.ucfirst.md) - Перетворює перший символ
рядки у верхній регістр
- [strtolower()](function.strtolower.md) - Перетворює рядок на
нижній регістр
- [strtoupper()](function.strtoupper.md) - Перетворює рядок на
верхній регістр
- [ucwords()](function.ucwords.md) - Перетворює на верхній регістр
перший символ кожного слова у рядку
