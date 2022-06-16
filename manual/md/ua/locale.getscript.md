- [« Locale::getRegion](locale.getregion.md)
- [Locale::lookup »](locale.lookup.md)

- [PHP Manual](index.md)
- [Locale](class.locale.md)
- Отримати алфавіт для локалі

# Locale::getScript

#local_get_script

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Locale::getScript -- locale_get_script — Отримати алфавіт для локалі

### Опис

Об'єктно-орієнтований стиль

public static **Locale::getScript**(string `$locale`): ?string

Процедурний стиль

**locale_get_script**(string `$locale`): ?string

Отримує абетку для локалі.

### Список параметрів

`locale`
Локаль для отримання алфавіту

### Значення, що повертаються

Алфавіт, пов'язаний з локаллю або **`null`**, якщо відсутня.

### Приклади

**Приклад #1 Приклад використання **locale_get_script()****

`<?phpecho locale_get_script('sr-Cyrl');?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?phpecho Locale::getScript('sr-Cyrl');?> `

Результат виконання цього прикладу:

Cyrl

### Дивіться також

- [locale_get_primary_language()](locale.getprimarylanguage.md) -
Отримати первинну мову для локалі
- [locale_get_region()](locale.getregion.md) - Отримати регіон для
локалі
- [locale_get_all_variants()](locale.getallvariants.md) - Отримання
варіантів із переданої локалі
