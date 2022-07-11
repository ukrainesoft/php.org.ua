- [«vsprintf](function.vsprintf.md)
- [Список змін »](changelog.strings.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Переносить рядок за вказаною кількістю символів

#wordwrap

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

wordwrap — Перенесення рядка за вказаною кількістю символів

### Опис

**wordwrap**(
string `$string`,
int `$width` u003d 75,
string `$break` u003d "
",
bool `$cut_long_words` u003d **`false`**
): string

Переносить рядок за вказаною кількістю символів.

### Список параметрів

`string`
Вхідний рядок.

`width`
Кількість символів, за якими рядок буде перенесено.

`break`
Символ переносу рядка можна вказати за допомогою необов'язкового параметра
`break`.

`cut_long_words`
Якщо параметр `cut_long_words` встановлено в **`true`**, рядок завжди
буде переноситись на вказаній ширині `width` або раніше. Тому, якщо
вихідний рядок містить слово довше заданої ширини рядка, то воно
буде розірвано. (Дивіться другий приклад). Якщо встановлено
**`false`**, функція не розділяє слово, навіть якщо `width` менше довжини
слова.

### Значення, що повертаються

Повертає рядок із вставленими символами перенесення на вказану довжину.

### Приклади

**Приклад #1 Приклад використання **wordwrap()****

` <?php$text u003d "The quick brown fox jumped over the lazy dog.";$newtext u003d wordwrap($text, 20, "<br />
");echo $newtext;?> `

Результат виконання цього прикладу:

The quick brown fox<br />
скакнув над лаєм<br />
dog.

**Приклад #2 Приклад використання **wordwrap()****

` <?php$text u003d "A very long woooooooooooord.";$newtext u003d wordwrap($text, 8, "
", true);echo "$newtext
";?> `

Результат виконання цього прикладу:

A very
long
wooooooo
ooooord.

**Приклад #3 Приклад використання **wordwrap()****

` <?php$text u003d "A very long woooooooooooooooooord. and something";$newtext u003d wordwrap($text, 8, "
", false);echo "$newtext
";?> `

Результат виконання цього прикладу:

A very
long
wooooooooooooooooooord.
and
something

### Дивіться також

- [nl2br()](function.nl2br.md) - Вставляє HTML-код розриву рядка
перед кожним перекладом рядка
- [chunk_split()](function.chunk-split.md) - Розбиває рядок на
фрагменти
