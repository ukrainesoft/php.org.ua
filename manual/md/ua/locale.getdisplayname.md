- [« Locale::getDisplayLanguage](locale.getdisplaylanguage.md)
- [Locale::getDisplayRegion »](locale.getdisplayregion.md)

- [PHP Manual](index.md)
- [Locale](class.locale.md)
- Повертає відповідним чином локалізоване ім'я локалі

# Locale::getDisplayName

# locale_get_display_name

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Locale::getDisplayName -- locale_get_display_name — Повертає
відповідним чином локалізоване ім'я локалі

### Опис

Об'єктно-орієнтований стиль

public static **Locale::getDisplayName**(string `$locale`, ?string
`$displayLocale` u003d **`null`**): string\|false

Процедурний стиль

**locale_get_display_name**(string `$locale`, ?string `$displayLocale` u003d
**`null`**): string\|false

Повертає відповідним чином ім'я локалізоване локалі. Якщо
`locale` дорівнює **`null`**, то буде використана локаль за умовчанням.

### Список параметрів

`locale`
Локаль.

`displayLocale`
Необов'язковий локаль для форматування

### Значення, що повертаються

Ім'я локалі у форматі локалі `displayLocale` або **`false`** у випадку
виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------|
| 8.0.0 | `displayLocale` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **locale_get_display_name()****

`<?phpecho locale_get_display_name('sl-Latn-IT-nedis', 'en');echo ";
";echo locale_get_display_name('sl-Latn-IT-nedis', 'fr');echo ";
";echo locale_get_display_name('sl-Latn-IT-nedis', 'de');?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?phpecho Locale::getDisplayName('sl-Latn-IT-nedis', 'en');echo ";
";echo Locale::getDisplayName('sl-Latn-IT-nedis', 'fr');echo ";
";echo Locale::getDisplayName('sl-Latn-IT-nedis', 'de');?> `

Результат виконання цього прикладу:

Slovenian (Latin, Italy, Natisone dialect);
slov\xc3\xa8ne (latin, Italie, dialecte de Natisone;
Slowenisch (Lateinisch, Italien, NEDIS)

### Дивіться також

- [locale_get_display_language()](locale.getdisplaylanguage.md) -
Повертає відповідним чином локалізоване ім'я мови для
заданої локалі
- [locale_get_display_script()](locale.getdisplayscript.md) -
Повертає відповідним чином локалізовану назву алфавіту
для заданої локалі
- [locale_get_display_region()](locale.getdisplayregion.md) -
Повертає відповідним чином локалізовану назву регіону
для заданої локалі
- [locale_get_display_variant()](locale.getdisplayvariant.md) -
Повертає відповідним чином локалізовану назву варіанта
для заданої локалі
