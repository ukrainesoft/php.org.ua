- [«grapheme_strrpos](function.grapheme-strrpos.md)
- [grapheme_substr »](function.grapheme-substr.md)

- [PHP Manual](index.md)
- [Функції Grapheme](ref.intl.grapheme.md)
- Повертає частину рядка haystack від першої появи needle до
кінця haystack

#grapheme_strstr

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

grapheme_strstr — Повертає частину рядка haystack від першої появи
needle до кінця haystack

### Опис

Процедурний стиль

**grapheme_strstr**(string `$haystack`, string `$needle`, bool
`$beforeNeedle` u003d **`false`**): string\|false

Повертає частину рядка haystack від першої появи needle до кінця
haystack (включаючи needle).

### Список параметрів

`haystack`
Вхідний рядок. Має бути коректним UTF-8.

`needle`
Рядок, який потрібно знайти. Має бути коректним UTF-8.

`beforeNeedle`
Якщо **`true`**, grapheme_strstr() повертає частину haystack перед
першою появою needle (виключаючи needle).

### Значення, що повертаються

Повертає частину рядка або **`false`**, якщо входження needle не
знайдено.

### Приклади

**Приклад #1 Приклад використання **grapheme_strstr()****

` <?php$char_a_ring_nfdu003du003d"a\xCC\x8A"; //'LATIN SMALL LETTER A WITH RING ABOVE' (U+00E5) normalization form "D"$char_o_diaeresis_nfd u003d"o\xCC\x88"; // 'LATIN SMALL LETTER O WITH DIAERESIS' (U+00F6) normalization form "D"print urlencode(grapheme_stristr( $char_a_ring_nfd . $char_o_diaeresis_n_$_?

Результат виконання цього прикладу:

o%CC%88a%CC%8A

### Дивіться також

- [grapheme_stristr()](function.grapheme-stristr.md) - Повертає
частина рядка haystack від першої появи needle без урахування регістру
до кінця haystack
- [grapheme_stripos()](function.grapheme-stripos.md) - Знаходить
позицію (в одиницях графеми) першої появи рядка без урахування
регістру
- [grapheme_strpos()](function.grapheme-strpos.md) - Знаходить позицію
(в одиницях графеми) першого входження рядка
- [grapheme_strripos()](function.grapheme-strripos.md) - Знаходить
позицію (в одиницях графеми) останнього входження рядка без урахування
регістру
- [grapheme_strrpos()](function.grapheme-strrpos.md) - Знаходить
позицію (в одиницях графеми) останнього входження рядка
- [»  Сегментація тексту в Unicode: межі кластера
графеми](http://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries)
