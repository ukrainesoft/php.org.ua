- [« Locale::composeLocale](locale.composelocale.md)
- [Locale::getAllVariants »](locale.getallvariants.md)

- [PHP Manual](index.md)
- [Locale](class.locale.md)
- Перевірити, чи тег фільтра мови локалі відповідає

# Locale::filterMatches

#local_filter_matches

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Locale::filterMatches -- locale_filter_matches — Перевірити,
чи відповідає тег фільтра мови локалі

### Опис

Об'єктно-орієнтований стиль

public static **Locale::filterMatches**(string `$languageTag`, string
`$locale`, bool `$canonicalize` u003d **`false`**): ?bool

Процедурний стиль

**locale_filter_matches**(string `$langtag`, string `$locale`, bool
`$canonicalize` u003d **`false`**): ?bool

Перевірити, чи відповідає фільтр `languageTag` локалі `locale`
керуючись базовими фільтруючими алгоритмами RFC 4647

### Список параметрів

`languageTag`
Мовний тег

`locale`
Локаль

`canonicalize`
Якщо **`true`**, аргумент буде перетворено до канонічної форми перед
перевіркою.

### Значення, що повертаються

**`true`** якщо `locale` підходить для `languageTag`, або **`false`**,
якщо ні.

Повертає **`null`**, якщо довжина `locale` перевищує
**`INTL_MAX_LOCALE_LEN`**.

### Приклади

**Приклад #1 Приклад використання **locale_filter_matches()****

`<?phpecho (locale_filter_matches('de-DEVA','de-DE', false)) ? "Підходить" : "Не підходить";echo '; ';echo (locale_filter_matches('de-DE_1996','de-DE', false)) ? "Підходить" : "Не підходить";?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

`<?phpecho (Locale::filterMatches('de-DEVA','de-DE', false)) ? "Підходить" : "Не підходить";echo '; ';echo (Locale::filterMatches('de-DE-1996','de-DE', false)) ? "Підходить" : "Не підходить";?> `

Результат виконання цього прикладу:

Не підходить; Підходить

### Дивіться також

- [locale_lookup()](locale.lookup.md) - Пошук мовних позначок
найбільш відповідних заданої локалі
