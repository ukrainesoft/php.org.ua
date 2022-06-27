- [« Locale::getDisplayScript](locale.getdisplayscript.md)
- [Locale::getKeywords »](locale.getkeywords.md)

- [PHP Manual](index.md)
- [Locale](class.locale.md)
- Повертає відповідним чином локалізовану назву варіанта
для заданої локалі

# Locale::getDisplayVariant

#local_get_display_variant

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Locale::getDisplayVariant -- locale_get_display_variant — Повертає
відповідним чином локалізована назва варіанта для заданої
локалі

### Опис

Об'єктно-орієнтований стиль

public static **Locale::getDisplayVariant**(string `$locale`, ?string
`$displayLocale` u003d **`null`**): string\|false

Процедурний стиль

**locale_get_display_variant**(string `$locale`, ?string
`$displayLocale` u003d **`null`**): string\|false

Повертає відповідним чином локалізовану назву варіанта для
заданої локалі. Якщо **`null`**, то буде використано локаль по
замовчуванням.

### Список параметрів

`locale`
Локаль.

`displayLocale`
Необов'язковий локаль для форматування

### Значення, що повертаються

Назва варіанта для `locale` у форматі локалі `displayLocale` або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------|
| 8.0.0 | `displayLocale` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **locale_get_display_variant()****

`<?phpecho locale_get_display_variant('sl-Latn-IT-nedis', 'en');echo ";
";echo locale_get_display_variant('sl-Latn-IT-nedis', 'fr');echo ";
";echo locale_get_display_variant('sl-Latn-IT-nedis', 'de');?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

`<?phpecho Locale::getDisplayVariant('sl-Latn-IT-nedis', 'en');echo ";
";echo Locale::getDisplayVariant('sl-Latn-IT-nedis', 'fr');echo ";
";echo Locale::getDisplayVariant('sl-Latn-IT-nedis', 'de');?> `

Результат виконання цього прикладу:

Natisone dialect;
dialecte de Natisone;
NEDIS

### Дивіться також

- [locale_get_display_name()](locale.getdisplayname.md) - Повертає
відповідним чином локалізоване ім'я локалі
- [locale_get_display_language()](locale.getdisplaylanguage.md) -
Повертає відповідним чином локалізоване ім'я мови для
заданої локалі
- [locale_get_display_script()](locale.getdisplayscript.md) -
Повертає відповідним чином локалізовану назву алфавіту
для заданої локалі
- [locale_get_display_region()](locale.getdisplayregion.md) -
Повертає відповідним чином локалізовану назву регіону
для заданої локалі
