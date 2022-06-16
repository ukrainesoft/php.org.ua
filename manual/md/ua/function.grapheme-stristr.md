- [«grapheme_stripos](function.grapheme-stripos.md)
- [grapheme_strlen »](function.grapheme-strlen.md)

- [PHP Manual](index.md)
- [Функції Grapheme](ref.intl.grapheme.md)
- Повертає частину рядка haystack від першої появи needle без
обліку регістру до кінця haystack

#grapheme_stristr

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

grapheme_stristr — Повертає частину рядка haystack від першої появи
needle без урахування регістру до кінця haystack

### Опис

Процедурний стиль

**grapheme_stristr**(string `$haystack`, string `$needle`, bool
`$beforeNeedle` u003d **`false`**): string\|false

Повертає частину рядка haystack від першої появи needle без урахування
регістру до кінця haystack.

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

**Приклад #1 Приклад використання **grapheme_stristr()****

` <?php$char_a_ring_nfdu003du003d"a\xCC\x8A"; //'LATIN SMALL LETTER A WITH RING ABOVE' (U+00E5) normalization form "D"$char_o_diaeresis_nfd u003d"o\xCC\x88"; // 'LATIN SMALL LETTER O WITH DIAERESIS' (U+00F6) normalization form "D"$char_O_diaeresis_nfd u003d"O\xCC\x88"; // 'LATIN CAPITAL LETTER O WITH DIAERESIS' (U+00D6) normalization form "D"print urlencode(grapheme_stristr( $char_a_ring_nfd . $char_o_diaeresis_n_$_;

Результат виконання цього прикладу:

o%CC%88a%CC%8A

### Дивіться також

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
- [grapheme_strstr()](function.grapheme-strstr.md) - Повертає
частина рядка haystack від першої появи needle до кінця haystack
- [»  Сегментація тексту в Unicode: межі кластера
графеми](http://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries)
