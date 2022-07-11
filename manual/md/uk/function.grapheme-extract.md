- [« Функції Grapheme](ref.intl.grapheme.md)
- [grapheme_stripos »](function.grapheme-stripos.md)

- [PHP Manual](index.md)
- [Функції Grapheme](ref.intl.grapheme.md)
- Функція для отримання послідовності кластерів графем по
замовчуванням з текстового буфера, яка має бути закодована в
UTF-8

#grapheme_extract

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

grapheme_extract — Функція для отримання послідовності кластерів
графем за замовчуванням із текстового буфера, яка має бути
закодована в UTF-8

### Опис

Процедурний стиль

**grapheme_extract**(
string `$haystack`,
int `$size`,
int `$type` u003d **`GRAPHEME_EXTR_COUNT`**,
int `$offset` u003d 0,
int `&$next` u003d **`null`**
): string\|false

Функція для отримання послідовності кластерів графем за замовчуванням
з текстового буфера, що має бути закодована в UTF-8.

### Список параметрів

`haystack`
Рядок для пошуку.

`size`
Максимальна кількість елементів, що повертаються на основі $extract_type.

`type`
Визначає тип одиниць, які вказує параметр $size:

- GRAPHEME_EXTR_COUNT (за замовчуванням) - $size - це кількість
кластерів графеми для вилучення за замовчуванням.
- GRAPHEME_EXTR_MAXBYTES - $size - максимальна кількість
байтів, що повертаються.
- GRAPHEME_EXTR_MAXCHARS - $size - це максимальна кількість
символів UTF-8, що повертаються.

`offset`
Початкова позиція $haystack в байтах - якщо поставлено, воно має бути
нулем або позитивним значенням, яке менше або дорівнює довжині
$haystack в байтах, або негативним значенням, що відраховується від кінця
$haystack. Якщо $start не вказує на перший байт символу UTF-8,
Початкова позиція переміщується на межу наступного символу.

`next`
Посилання на значення, яке буде встановлене для наступної початкової
позиції. Коли дзвінок повертається, це може вказувати на позицію
першого байта за кінцем рядка.

### Значення, що повертаються

Рядок, що починається зі зміщення $start і закінчується кордоном
кластера графеми за замовчуванням, яка відповідає вказаним $size та
$extract_type або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- --------------|
| 7.1.0 | Додано підтримку негативних значень `offset`. |

### Приклади

**Приклад #1 Приклад використання **grapheme_extract()****

` <?php$char_a_ring_nfdu003du003d"a\xCC\x8A"; //'LATIN SMALL LETTER A WITH RING ABOVE' (U+00E5) normalization form "D"$char_o_diaeresis_nfd u003d"o\xCC\x88"; // 'LATIN SMALL LETTER O WITH DIAERESIS' (U+00F6) normalization form "D"print urlencode(grapheme_extract( $char_a_ring_nfd . $char_o_diaeresis_n_)|

Результат виконання цього прикладу:

o%CC%88

### Дивіться також

- [grapheme_substr()](function.grapheme-substr.md) - Повертає
частина рядка
- [»  Сегментація тексту в Unicode: межі кластера
графеми](http://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries)
