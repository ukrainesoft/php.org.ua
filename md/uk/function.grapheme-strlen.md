- [«grapheme_stristr](function.grapheme-stristr.md)
- [grapheme_strpos »](function.grapheme-strpos.md)

- [PHP Manual](index.md)
- [Функції Grapheme](ref.intl.grapheme.md)
- отримує довжину рядка в одиницях графеми

#grapheme_strlen

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

grapheme_strlen — Отримує довжину рядка в одиницях графеми

### Опис

Процедурний стиль

**grapheme_strlen**(string `$string`): int\|false\|null

Отримує довжину рядка в одиницях графеми (не байти чи символи)

### Список параметрів

`string`
Рядок, який необхідно виміряти. Має бути коректний рядок у
кодування UTF-8.

### Значення, що повертаються

Довжина рядка у разі успішного виконання або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **grapheme_strlen()****

` <?php$char_a_ring_nfdu003du003d"a\xCC\x8A"; //'LATIN SMALL LETTER A WITH RING ABOVE' (U+00E5) normalization form "D"$char_o_diaeresis_nfd u003d"o\xCC\x88"; // 'LATIN SMALL LETTER O WITH DIAERESIS' (U+00F6) normalization form "D"print grapheme_strlen( 'abc' . $char_a_ring_nfd . $char_o____|

Результат виконання цього прикладу:

6

### Дивіться також

- [»  Сегментація тексту в Unicode: межі кластера
графеми](http://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries)
- [iconv_strlen()](function.iconv-strlen.md) - Повертає кількість
символів у рядку
- [mb_strlen()](function.mb-strlen.md) - Отримує довжину рядка
- [strlen()](function.strlen.md) - Повертає довжину рядка
