- [« Locale::getPrimaryLanguage](locale.getprimarylanguage.md)
- [Locale::getScript »](locale.getscript.md)

- [PHP Manual](index.md)
- [Locale](class.locale.md)
- Отримати регіон для локалі

# Locale::getRegion

#local_get_region

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Locale::getRegion -- locale_get_region — Отримати регіон для локалі

### Опис

Об'єктно-орієнтований стиль

public static **Locale::getRegion**(string `$locale`): ?string

Процедурний стиль

**locale_get_region**(string `$locale`): ?string

Отримує регіон для локалі.

### Список параметрів

`locale`
Локаль для отримання коду регіону

### Значення, що повертаються

Код регіону, пов'язаний з локаллю або **`null`**, якщо відсутня.

Повертає **`null`**, якщо довжина `locale` перевищує
**`INTL_MAX_LOCALE_LEN`**.

### Приклади

**Приклад #1 Приклад використання **locale_get_region()****

`<?phpecho locale_get_region('de-CH-1901');?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

`<?phpecho Locale::getRegion('de-CH-1901');?> `

Результат виконання цього прикладу:

CH

### Дивіться також

- [locale_get_primary_language()](locale.getprimarylanguage.md) -
Отримати первинну мову для локалі
- [locale_get_script()](locale.getscript.md) - Отримати алфавіт для
локалі
- [locale_get_all_variants()](locale.getallvariants.md) - Отримання
варіантів із переданої локалі
