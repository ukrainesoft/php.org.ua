- [« Locale::getKeywords](locale.getkeywords.md)
- [Locale::getRegion »](locale.getregion.md)

- [PHP Manual](index.md)
- [Locale](class.locale.md)
- Отримати первинну мову для локалі

# Locale::getPrimaryLanguage

#local_get_primary_language

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Locale::getPrimaryLanguage -- locale_get_primary_language — Отримати
первинна мова для локалі

### Опис

Об'єктно-орієнтований стиль

public static **Locale::getPrimaryLanguage**(string `$locale`): ?string

Процедурний стиль

**locale_get_primary_language**(string `$locale`): ?string

Отримує первинну мову для локалі.

### Список параметрів

`locale`
Локаль для отримання первинної мови

### Значення, що повертаються

Код мови, пов'язаний із локаллю.

Повертає **`null`**, якщо довжина `locale` перевищує
**`INTL_MAX_LOCALE_LEN`**.

### Приклади

**Приклад #1 Приклад використання **locale_get_primary_language()****

`<?phpecho locale_get_primary_language('zh-Hant');?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

`<?phpecho Locale::getPrimaryLanguage('zh-Hant');?> `

Результат виконання цього прикладу:

zh

### Дивіться також

- [locale_get_script()](locale.getscript.md) - Отримати алфавіт для
локалі
- [locale_get_region()](locale.getregion.md) - Отримати регіон для
локалі
- [locale_get_all_variants()](locale.getallvariants.md) - Отримання
варіантів із переданої локалі
