- [« Locale::getDisplayRegion](locale.getdisplayregion.md)
- [Locale::getDisplayVariant »](locale.getdisplayvariant.md)

- [PHP Manual](index.md)
- [Locale](class.locale.md)
- Повертає відповідним чином локалізовану назву алфавіту
для заданої локалі

# Locale::getDisplayScript

#local_get_display_script

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Locale::getDisplayScript -- locale_get_display_script — Повертає
відповідним чином локалізована назва алфавіту для заданої
локалі

### Опис

Об'єктно-орієнтований стиль

public static **Locale::getDisplayScript**(string `$locale`, ?string
`$displayLocale` u003d **`null`**): string\|false

Процедурний стиль

**locale_get_display_script**(string `$locale`, ?string `$displayLocale`
u003d **`null`**): string\|false

Повертає відповідним чином локалізовану назву алфавіту для
заданої локалі. Якщо **`null`**, то буде використано локаль по
замовчуванням.

### Список параметрів

`locale`
Локаль.

`displayLocale`
Необов'язковий локаль для форматування

### Значення, що повертаються

Назва алфавіту для `locale` у форматі локалі `displayLocale` або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------|
| 8.0.0 | `displayLocale` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **locale_get_display_script()****

`<?phpecho locale_get_display_script('sl-Latn-IT-nedis', 'en');echo ";
";echo locale_get_display_script('sl-Latn-IT-nedis', 'fr');echo ";
";echo locale_get_display_script('sl-Latn-IT-nedis', 'de');?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?phpecho Locale::getDisplayScript('sl-Latn-IT-nedis', 'en');echo ";
";echo Locale::getDisplayScript('sl-Latn-IT-nedis', 'fr');echo ";
";echo Locale::getDisplayScript('sl-Latn-IT-nedis', 'de');?> `

Результат виконання цього прикладу:

Latin;
latin;
Lateinisch

### Дивіться також

- [locale_get_display_name()](locale.getdisplayname.md) - Повертає
відповідним чином локалізоване ім'я локалі
- [locale_get_display_language()](locale.getdisplaylanguage.md) -
Повертає відповідним чином локалізоване ім'я мови для
заданої локалі
- [locale_get_display_region()](locale.getdisplayregion.md) -
Повертає відповідним чином локалізовану назву регіону
для заданої локалі
- [locale_get_display_variant()](locale.getdisplayvariant.md) -
Повертає відповідним чином локалізовану назву варіанта
для заданої локалі
