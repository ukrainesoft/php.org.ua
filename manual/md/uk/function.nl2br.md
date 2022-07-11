- [«nl_langinfo](function.nl-langinfo.md)
- [number_format »](function.number-format.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Вставляє HTML-код розриву рядка перед кожним перекладом рядка

# nl2br

(PHP 4, PHP 5, PHP 7, PHP 8)

nl2br — Вставляє HTML код розриву рядка перед кожним перекладом рядка

### Опис

**nl2br**(string `$string`, bool `$use_xhtml` u003d **`true`**): string

Повертає рядок `string`, в якому перед кожним перекладом рядка
(``
`,`
`,`
`і``) вставлено `<br />` або `<br>`.

### Список параметрів

`string`
Вхідний рядок.

`use_xhtml`
Чи використовувати сумісні з XHTML переклади рядків чи ні.

### Значення, що повертаються

Повертає змінений рядок.

### Приклади

**Приклад #1 Приклад використання **nl2br()****

` <?phpecho nl2br("foo - це вам не
bar");?> `

Результат виконання цього прикладу:

foo - це вам не<br />
bar

**Приклад #2 Генерування коректної HTML-верстки за допомогою параметра
`use_xhtml`**

` <?phpecho nl2br("Привіт!
Цією мій HTML-документ", false);?> `

Результат виконання цього прикладу:

Привіт!
Цей мій HTML-документ

**Приклад #3 Різні роздільники рядків**

` <?php$string u003d "This
is
a
string";echo nl2br($string);?> `

Результат виконання цього прикладу:

This<br />
is<br />
a<br />
string<br />

### Дивіться також

- [htmlspecialchars()](function.mdspecialchars.md) - Перетворює
спеціальні символи в HTML-сутності
- [htmlentities()](function.mdentities.md) - Перетворює всі
можливі символи у відповідні HTML-сутності
- [wordwrap()](function.wordwrap.md) - Переносить рядок по
вказаній кількості символів
- [str_replace()](function.str-replace.md) - Замінює всі входження
рядки пошуку на рядок заміни
