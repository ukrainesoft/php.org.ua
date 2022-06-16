- [« Locale::getScript](locale.getscript.md)
- [Locale::parseLocale »](locale.parselocale.md)

- [PHP Manual](index.md)
- [Locale](class.locale.md)
- Пошук мовних позначок найбільш відповідних заданої локалі

# Locale::lookup

#local_lookup

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Locale::lookup -- locale_lookup — Пошук мовних позначок
відповідних заданої локалі

### Опис

Об'єктно-орієнтований стиль

public static **Locale::lookup**(
array `$languageTag`,
string `$locale`,
bool `$canonicalize` u003d **`false`**,
?string `$defaultLocale` u003d **`null`**
): ?string

Процедурний стиль

**locale_lookup**(
array `$languageTag`,
string `$locale`,
bool `$canonicalize` u003d **`false`**,
?string `$defaultLocale` u003d **`null`**
): ?string

Шукає елементи `languageTag`, що найкраще підходять для діапазону
мов, зазначеного в `locale`, відповідно до алгоритму пошуку RFC
4647.

### Список параметрів

`languageTag`
Масив (array), що містить список міток для порівняння з `locale`.
Не більше ніж 100 елементів.

`locale`
Локаль.

`canonicalize`
Якщо **`true`**, то аргументи спершу будуть приведені до канонічного
виду.

`defaultLocale`
За умовчанням локаль, якщо збігів не буде знайдено.

### Значення, що повертаються

Найбільш відповідна цій локалі мітка мови.

Повертає **`null`**, якщо довжина `locale` перевищує
**`INTL_MAX_LOCALE_LEN`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------|
| 7.4.0 | `defaultLocale` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **locale_lookup()****

` <?php$arr u003d array(   'de-DEVA',   'de-DE-1996',   'de','   'de-De');echo locale_lookup($arr, 'de-de-DE -prv2', true, 'en_US');?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$arr u003d array(   'de-DEVA',   'de-DE-1996',   'de','   'de-De');echo Locale::lookup($arr, 9 x-prv1-prv2', true, 'en_US');?> `

Результат виконання цього прикладу:

de_de_1996

### Дивіться також

- [locale_filter_matches()](locale.filtermatches.md) - Перевірити,
чи відповідає тег фільтра мови локалі
