- [« Locale::getDefault](locale.getdefault.md)
- [Locale::getDisplayName »](locale.getdisplayname.md)

- [PHP Manual](index.md)
- [Locale](class.locale.md)
- Повертає відповідним чином локалізоване ім'я мови для
заданої локалі

# Locale::getDisplayLanguage

#local_get_display_language

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Locale::getDisplayLanguage -- locale_get_display_language — Повертає
відповідним чином локалізоване ім'я мови для заданої локалі

### Опис

Об'єктно-орієнтований стиль

public static **Locale::getDisplayLanguage**(string `$locale`, ?string
`$displayLocale` u003d **`null`**): string\|false

Процедурний стиль

**locale_get_display_language**(string `$locale`, ?string
`$displayLocale` u003d **`null`**): string\|false

Повертає відповідним чином локалізоване ім'я мови для заданої
локалі. Якщо **`null`**, то буде використано локаль за замовчуванням.

### Список параметрів

`locale`
Локаль, для якої буде повернено назву мови

`displayLocale`
Необов'язковий параметр, що задає локаль, у якій треба буде
відобразити назву

### Значення, що повертаються

Назва мови для локалі `locale` у форматі, що відповідає локалі
`displayLocale` або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------|
| 8.0.0 | `displayLocale` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **locale_get_display_language()****

`<?phpecho locale_get_display_language('sl-Latn-IT-nedis', 'en');echo ";
";echo locale_get_display_language('sl-Latn-IT-nedis', 'fr');echo ";
";echo locale_get_display_language('sl-Latn-IT-nedis', 'de');?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

`<?phpecho Locale::getDisplayLanguage('sl-Latn-IT-nedis', 'en');echo ";
";echo Locale::getDisplayLanguage('sl-Latn-IT-nedis', 'fr');echo ";
";echo Locale::getDisplayLanguage('sl-Latn-IT-nedis', 'de');?> `

Результат виконання цього прикладу:

Slovenian;
slov\xc3\xa8ne;
Slowenisch

### Дивіться також

- [locale_get_display_name()](locale.getdisplayname.md) - Повертає
відповідним чином локалізоване ім'я локалі
- [locale_get_display_script()](locale.getdisplayscript.md) -
Повертає відповідним чином локалізовану назву алфавіту
для заданої локалі
- [locale_get_display_region()](locale.getdisplayregion.md) -
Повертає відповідним чином локалізовану назву регіону
для заданої локалі
- [locale_get_display_variant()](locale.getdisplayvariant.md) -
Повертає відповідним чином локалізовану назву варіанта
для заданої локалі
