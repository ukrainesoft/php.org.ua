- [« Locale::canonicalize](locale.canonicalize.md)
- [Locale::filterMatches »](locale.filtermatches.md)

- [PHP Manual](index.md)
- [Locale](class.locale.md)
- Повертає коректно відсортовані та розділені ідентифікатори
локалі

# Locale::composeLocale

#local_compose

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Locale::composeLocale -- locale_compose — Повертає коректно
відсортовані та розділені ідентифікатори локалі

### Опис

Об'єктно-орієнтований стиль

public static **Locale::composeLocale**(array `$subtags`): string\|false

Процедурний стиль

**locale_compose**(array `$subtags`): string\|false

Повертає рядок, що складається з коректно відсортованих та розділених
ідентифікаторів локалі, зібрану з масиву, ключі якого позначають
підтеги ідентифікатора, а значення відповідні значення цих
підтегів.

### Список параметрів

`subtags`
Масив (array), що містить список пар ключ-значення, де ключі є
іменами підтегів ідентифікатора локалі, а значення відповідно
значеннями цих підтегів.

> **Примітка**:
>
> Підтегів ``variant'' та ``private'` може бути не більше 15, підтегів
> ``extlang'` не більше 3 і т.д. Варіанти допустимі із суфіксами від 0
> до 14. Ключі для цього підтегу мають називатися так: `variant0`,
> `variant1`, …, `variant14`. У ідентифікаторі локалі
> вкладений тег упорядкований по суфіксу, внаслідок чого слідує
> `variant0`, за яким слідує `variant1`, за яким слідує
> `variant2` і таке інше.
>
> Як альтернатива, множинні підтеги ``variant'`,
> ``private'' та ``extlang'` можна задати у вигляді масиву під
> відповідним ключем (наприклад, 'variant'). В цьому випадку
> обмеження кількість розпізнаних вкладених тегів не застосовуються.

### Значення, що повертаються

Відповідний ідентифікатор локалі або **`false`**, якщо параметр
`subtags` не заданий.

### Приклади

**Приклад #1 Приклад використання **locale_compose()****

` <?php$arr u003d array(   'language'u003d>'en',   'script'  u003d>'Hans',   'region'  u003d>'CN',    'variant2'u003d>' > 'nedis',   'private1'u003d>'prv1',   'private2'u003d>'prv2',);echo locale_compose($arr);?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$arr u003d array(   'language'u003d>'en' ,   'script'  u003d>'Hans',   'region'  u003d>'CN',    'variant2'u003d''> 'nedis',   'private1'u003d>'prv1',   'private2'u003d>'prv2',);echo Locale::composeLocale($arr);?> `

Результат виконання цього прикладу:

Locale: en_Hans_CN_nedis_rozaj_x_prv1_prv2

**Приклад #3 Межі підтегів**

Якщо `subtags` задані як окремі ключі з числовим суфіксом,
непідтримувані ключі ігноруються (в даному випадку ``extlang3'`) та
упорядковуються в результаті за числовим суфіксом. Нема ніяких
обмежень, якщо вкладені теги задано як масив (array); упорядковані
як зазначено.

`<?php$arr u003d array(   'language' u003d> 'en',   'script'   u003d> 'Hans',   'region'   u003d> 'CN',   'c',   'extlang1' u003d> 'b',   'extlang0' u003d> 'a',);echo locale_compose($arr), PHP_EOL;$arr u003d array(      u003d> 'Hans',   'region'   u003d> 'CN',   'extlang' u003d> ['a', 'b', 'c', 'd'],);echo locale_compose($arr); > `

Результат виконання цього прикладу:

en_a_b_c_Hans_CN
en_a_b_c_d_Hans_CN

### Дивіться також

- [locale_parse()](locale.parselocale.md) - Отримати асоціативний
масив усіх підтегів локалі
