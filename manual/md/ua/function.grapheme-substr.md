- [«grapheme_strstr](function.grapheme-strstr.md)
- [Функції IDN »](ref.intl.idn.md)

- [PHP Manual](index.md)
- [Функції Grapheme](ref.intl.grapheme.md)
- Повертає частину рядка

#grapheme_substr

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

grapheme_substr — Повертає частину рядка

### Опис

Процедурний стиль

**grapheme_substr**(string `$string`, int `$offset`, ?int `$length` u003d
**`null`**): string\|false

Повертає частину рядка.

### Список параметрів

`string`
Вхідний рядок. Має бути коректним UTF-8.

`offset`
Початкова позиція в одиницях графеми за промовчанням. Якщо $start більше,
або дорівнює нулю, рядок, що повертається, буде починатися з позиції $start в
$string, починаючи з нуля. Якщо значення $start негативне,
рядок, що повертається, буде починатися з одиниці графеми $start від кінця
рядки.

`length`
Довжина у графемних одиницях. Якщо встановлено позитивне значення $length,
рядок, що повертається, міститиме не більше $length одиниць графеми,
починаючи зі значення $start (залежно від довжини рядка). Якщо поставлено
негативне значення $length, така кількість одиниць графеми буде
опущено в кінці рядка (після того, як початкова позиція була
обчислено, якщо параметр $start негативний). Якщо $start означає
позицію за межами цього усічення, буде повернено **`false`**.

### Значення, що повертаються

Повертає витягнуту частину `string` або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **grapheme_substr()****

` <?php$char_a_ring_nfdu003du003d"a\xCC\x8A"; //'LATIN SMALL LETTER A WITH RING ABOVE' (U+00E5) normalization form "D"$char_o_diaeresis_nfd u003d"o\xCC\x88"; // 'LATIN SMALL LETTER O WITH DIAERESIS' (U+00F6) normalization form "D"print urlencode(grapheme_substr( "ao" . $char_a_ring_nfd . ; | ?> `

Результат виконання цього прикладу:

a%CC%8Abco%CC%88

### Дивіться також

- [grapheme_extract()](function.grapheme-extract.md) - Функція для
вилучення послідовності кластерів графем за замовчуванням
текстового буфера, яка має бути закодована в UTF-8
- [»  Сегментація тексту в Unicode: межі кластера
графеми](http://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries)
