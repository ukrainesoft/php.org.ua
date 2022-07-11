- [« Normalizer::isNormalized](normalizer.isnormalized.md)
- [MessageFormatter »](class.messageformatter.md)

- [PHP Manual](index.md)
- [Normalizer](class.normalizer.md)
- Нормалізація рядка

# Normalizer::normalize

# normalizer_normalize

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Normalizer::normalize -- normalizer_normalize — Нормалізація рядка

### Опис

Об'єктно-орієнтований стиль

public static **Normalizer::normalize**(string `$string`, int `$form` u003d
Normalizer::FORM_C): string\|false

Процедурний стиль

**normalizer_normalize**(string `$string`, int `$form` u003d
Normalizer::FORM_C): string\|false

Нормалізує переданий рядок

### Список параметрів

`string`
Рядок для нормалізації

`form`
Одна з форм нормалізації

### Значення, що повертаються

Нормалізований рядок або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **normalizer_normalize()****

`<?php$char_A_ringu003du003d"\xC3\x85"; // 'LATIN CAPITAL LETTER A WITH RING ABOVE' (U+00C5)$char_combining_ring_above u003d "\xCC\x8A"; // 'COMBINING RING ABOVE' (U+030A)$char_1 u003d normalizer_normalize( $char_A_ring, Normalizer::FORM_C );$char_2 u003d normalizer_normalize( 'A' :| ;echo ' ';echo urlencode($char_2);?> `

**Приклад #2 Приклад в об'єктно-орієнтованому стилі**

`<?php$char_A_ringu003du003d"\xC3\x85"; // 'LATIN CAPITAL LETTER A WITH RING ABOVE' (U+00C5)$char_combining_ring_above u003d "\xCC\x8A"; // 'COMBINING RING ABOVE' (U+030A)$char_1 u003d Normalizer::normalize( $char_A_ring, Normalizer::FORM_C );$char_2 u003d Normalizer::normalize( ; echo urlencode($char_1);echo ' ';echo urlencode($char_2);?> `

Результат виконання цього прикладу:

%C3%85 %C3%85

### Дивіться також

- [normalizer_is_normalized()](normalizer.isnormalized.md) -
Перевірити, чи переданий рядок відповідає заданій формі
нормалізації
