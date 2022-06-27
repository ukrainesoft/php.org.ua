- [«grapheme_strripos](function.grapheme-strripos.md)
- [grapheme_strstr »](function.grapheme-strstr.md)

- [PHP Manual](index.md)
- [Функції Grapheme](ref.intl.grapheme.md)
- знаходить позицію (в одиницях графеми) останнього входження рядка

#grapheme_strrpos

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

grapheme_strrpos — Знаходить позицію (в одиницях графеми) останнього
входження рядка

### Опис

Процедурний стиль

**grapheme_strrpos**(string `$haystack`, string `$needle`, int `$offset`
u003d 0): int \ | false

Знаходить позицію (в одиницях графеми) останнього входження рядка.

### Список параметрів

`haystack`
Рядок для пошуку. Має бути коректним UTF-8.

`needle`
Рядок, який потрібно знайти. Має бути коректним UTF-8.

`offset`
Необов'язковий параметр $offset дозволяє вказати, де в $haystack
починати пошук у вигляді зміщення в одиницях графеми (не в байтах або
символи). Якщо зсув негативний, воно обробляється відносно
кінця рядка. Повернена позиція, як і раніше, щодо початку
$haystack, незалежно від значення $offset.

### Значення, що повертаються

Повертає позицію як ціле число. Якщо входження needle не знайдено,
grapheme_strrpos() поверне **`false`**.

### Приклади

**Приклад #1 Приклад використання **grapheme_strrpos()****

` <?php$char_a_ring_nfdu003du003d"a\xCC\x8A"; //'LATIN SMALL LETTER A WITH RING ABOVE' (U+00E5) normalization form "D"$char_o_diaeresis_nfd u003d"o\xCC\x88"; // 'LATIN SMALL LETTER O WITH DIAERESIS' (U+00F6) normalization form "D"print grapheme_strrpos( $char_a_ring_nfd . $char_o_diaeresis_nfd_n_ _?

Результат виконання цього прикладу:

2

### Дивіться також

- [grapheme_stripos()](function.grapheme-stripos.md) - Знаходить
позицію (в одиницях графеми) першої появи рядка без урахування
регістру
- [grapheme_stristr()](function.grapheme-stristr.md) - Повертає
частина рядка haystack від першої появи needle без урахування регістру
до кінця haystack
- [grapheme_strpos()](function.grapheme-strpos.md) - Знаходить позицію
(в одиницях графеми) першого входження рядка
- [grapheme_strripos()](function.grapheme-strripos.md) - Знаходить
позицію (в одиницях графеми) останнього входження рядка без урахування
регістру
- [grapheme_strstr()](function.grapheme-strstr.md) - Повертає
частина рядка haystack від першої появи needle до кінця haystack
- [»  Сегментація тексту в Unicode: межі кластера
графеми](http://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries)
