- [« Collator::sortWithSortKeys](collator.sortwithsortkeys.md)
- [NumberFormatter »](class.numberformatter.md)

- [PHP Manual](index.md)
- [Collator](class.collator.md)
- Сортує масив із використанням зазначеного засобу сортування

# Collator::sort

#collator_sort

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Collator::sort -- collator_sort — Сортує масив з використанням
зазначеного засобу сортування

### Опис

Об'єктно-орієнтований стиль

public **Collator::sort**(array `&$array`, int `$flags` u003d
Collator::SORT_REGULAR): bool

Процедурний стиль

**collator_sort**([Collator](class.collator.md) `$object`, array
`&$array`, int `$flags` u003d Collator::SORT_REGULAR): bool

Функція сортує масив відповідно до поточних правил локалі.

Еквівалентна стандартній функції PHP [sort()](function.sort.md) .

### Список параметрів

`object`
Об'єкт [Collator](class.collator.md).

`array`
Array of strings to sort.

`flags`
Необов'язковий тип сортування, один із таких:

- **`Collator::SORT_REGULAR`** - порівнює елементи як звичайно (не
змінюючи тип)

- **`Collator::SORT_NUMERIC`** - порівнює елементи, як числа

- **`Collator::SORT_STRING`** - порівнює елементи, як рядки

Тип сортування за промовчанням - **`Collator::SORT_REGULAR`**. він також
використовується, якщо вказано неприпустиме значення flags.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **collator_sort()****

`<?php$coll u003d collator_create( 'en_US' );$arr  u003d array( 'at', 'às', 'as' );var_export( $arr );collator_sort( $coll, $arr ); arr );?> `

Результат виконання цього прикладу:

array (
0 u003d> 'at',
1 u003d> 'às',
2 u003d> 'as',
)array (
0 u003d> 'as',
1 u003d> 'às',
2 u003d> 'at',
)

### Дивіться також

- [Константи
[Collator](class.collator.md)](class.collator.md#intl.collator-constants)
- [collator_asort()](collator.asort.md) - Сортує масив з
збереженням асоціації індексу
- [collator_sort_with_sort_keys()](collator.sortwithsortkeys.md) -
Сортує масив з використанням вказаного Collator та ключів
сортування
