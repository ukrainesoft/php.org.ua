- [« UConverter::toUCallback](uconverter.toucallback.md)
- [Функції Grapheme »](ref.intl.grapheme.md)

- [PHP Manual](index.md)
- [UConverter](class.uconverter.md)
- Перетворює рядок з одного кодування символів на інше

# UConverter::transcode

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

UConverter::transcode — Перетворює рядок з одного кодування символів на
іншу

### Опис

public static **UConverter::transcode**(
string `$str`,
string `$toEncoding`,
string `$fromEncoding`,
?array `$options` u003d **`null`**
): string\|false

Перетворює рядок `str` з кодування `fromEncoding` у `toEncoding`.

### Список параметрів

`str`
Рядок (string) для перетворення.

`toEncoding`
Необхідне кодування результату.

`fromEncoding`
Поточне кодування рядка `str`.

`options`
Необов'язковий масив (array), який може містити такі ключі:

- ``to_subst'` - підстановковий символ, який використовується замість будь-якого
символу рядка `str`, який не може бути закодований у
`toEncoding`. Якщо ключ вказано, він повинен представляти один символ
цільового кодування.

### Значення, що повертаються

Повертає перетворений рядок або **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Перетворення з UTF-8 на UTF-16 і назад**

` <?php$utf8_string u003d "\x5A\x6F\xC3\xAB"; // 'Zoë' в UTF-8$utf16_string u003d UConverter::transcode($utf8_string, 'UTF-16BE', 'UTF-8');echo bin2hex($utf16_string), "
";$new_utf8_string u003d UConverter::transcode($utf16_string, 'UTF-8', 'UTF-16BE');echo bin2hex($new_utf8_string), "
";?> `

Результат виконання цього прикладу:

005a006f00eb
5a6fc3ab

**Приклад #2 Неприпустимі символи у вхідному рядку**

Якщо вхідний рядок містить послідовність байтів, яка не
є допустимим у кодуванні, зазначеному в `fromEncoding`, то перед
перетворенням на `toEncoding` вона замінюється кодовою точкою Unicode
U+FFFD (Замінний символ).

` <?php$invalid_utf8_string u003d "\xC3"; // неповна многобайтова послідовність UTF-8$utf16_string u003d UConverter::transcode($invalid_utf8_string, 'UTF-16BE', 'UTF-8');echo bin2hex($utf16_string), 
";?> `

Результат виконання цього прикладу:

fffd

**Приклад #3 Символи, які не можуть бути закодовані**

Якщо вхідний рядок містить символи, які не можуть бути представлені
у кодуванні `toEncoding`, вони замінюються одним символом. Використовується за
замовчування символ залежить від кодування і може керуватися за допомогою
параметра "to_subst".

` <?php$utf8_string u003d "\xE2\x82\xAC"; // € (Знак євро) не існує в ISO 8859-1// Заміна за замовчуванням в ISO 8859-1 - "\x1A" (Змінник)$iso8859_1_string u003d' : , 'UTF-8');echo bin2hex($iso8859_1_string), "
";// Використання в якості замінника символу '?' ("\x3F").$iso8859_1_string u003d UConverter::transcode(   $utf8_string, 'ISO-8859-1', 'UTF-8', ['to_subst' u003d> '?']);echo$ , "
";// Поскольку ISO 8859-1 не может отобразить U+FFFD, недействительная входная строка также заменяется на to_subst$invalid_utf8_string u003d "\xC3"; // неполная многобайтовая последовательность UTF-8$iso8859_1_string u003d UConverter::transcode(    $invalid_utf8_string, 'ISO-8859-1', 'UTF-8', ['to_subst' u003d> '?']);echo bin2hex($iso8859_1_string), "
";?> `

Результат виконання цього прикладу:

1a
3f
3f

### Дивіться також

- [mb_convert_encoding()](function.mb-convert-encoding.md) -
Перетворює рядок з одного кодування символів на інше
- [iconv()](function.iconv.md) - Перетворює рядок з одного
кодування символів в іншу
