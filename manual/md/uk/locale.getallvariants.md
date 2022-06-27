- [« Locale::filterMatches](locale.filtermatches.md)
- [Locale::getDefault »](locale.getdefault.md)

- [PHP Manual](index.md)
- [Locale](class.locale.md)
- Отримання варіантів із переданої локалі

# Locale::getAllVariants

#local_get_all_variants

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Locale::getAllVariants -- locale_get_all_variants — Отримання варіантів
з переданої локалі

### Опис

Об'єктно-орієнтований стиль

public static **Locale::getAllVariants**(string `$locale`): ?array

Процедурний стиль

**locale_get_all_variants**(string `$locale`): ?array

Отримання варіантів із переданої локалі

### Список параметрів

`locale`
Локаль з якої будуть вилучені варіанти

### Значення, що повертаються

Масив, що містить список варіантів заданої локалі, або **`null`**,
якщо таких немає

Повертає **`null`**, якщо довжина `locale` перевищує
**`INTL_MAX_LOCALE_LEN`**.

### Приклади

**Приклад #1 Приклад використання **locale_get_all_variants()****

` <?php$arr u003d locale_get_all_variants('sl_IT_NEDIS_ROJAZ_1901');var_export( $arr );?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php $arr u003d Locale::getAllVariants('sl_IT_NEDIS_ROJAZ_1901'); var_export($arr);?> `

Результат виконання цього прикладу:

array (
0 u003d> 'NEDIS',
1 u003d> 'ROJAZ',
2 u003d> '1901',
)

### Дивіться також

- [locale_get_primary_language()](locale.getprimarylanguage.md) -
Отримати первинну мову для локалі
- [locale_get_script()](locale.getscript.md) - Отримати алфавіт для
локалі
- [locale_get_region()](locale.getregion.md) - Отримати регіон для
локалі
