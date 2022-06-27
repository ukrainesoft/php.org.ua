- [« Locale::getDisplayVariant](locale.getdisplayvariant.md)
- [Locale::getPrimaryLanguage »](locale.getprimarylanguage.md)

- [PHP Manual](index.md)
- [Locale](class.locale.md)
- Отримати ключові слова для локалі

# Locale::getKeywords

#local_get_keywords

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Locale::getKeywords -- locale_get_keywords — Отримати ключові слова для
локалі

### Опис

Об'єктно-орієнтований стиль

public static **Locale::getKeywords**(string `$locale`):
array\|false\|null

Процедурний стиль

**locale_get_keywords**(string `$locale`): array\|false\|null

Отримує ключові слова для локалі.

### Список параметрів

`locale`
Локаль для отримання ключових слів

### Значення, що повертаються

Асоціативний масив (array) з парами ключ-значення для заданої локалі

Повертає **`null`**, якщо довжина `locale` перевищує
**`INTL_MAX_LOCALE_LEN`**.

### Приклади

**Приклад #1 Приклад використання **locale_get_keywords()****

`<?php$keywords_arr u003d locale_get_keywords('de_DE@currencyu003dEUR;collationu003dPHONEBOOK');if ($keywords_arr) {                                         ???
";    }}?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

`<?php$keywords_arr u003d Locale::getKeywords('de_DE@currencyu003dEUR;collationu003dPHONEBOOK');if ($keywords_arr) {   foreach ($keywords_arr as $key u003d>                                                       り| value
";    }}?> `

Результат виконання цього прикладу:

collation u003d PHONEBOOK
currency u003d EUR

### Дивіться також

- [locale_get_all_variants()](locale.getallvariants.md) - Отримання
варіантів із переданої локалі
