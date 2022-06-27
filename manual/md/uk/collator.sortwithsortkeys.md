- [«Collator::setStrength](collator.setstrength.md)
- [Collator::sort »](collator.sort.md)

- [PHP Manual](index.md)
- [Collator](class.collator.md)
- Сортує масив з використанням зазначеного Collator та ключів
сортування

# Collator::sortWithSortKeys

#collator_sort_with_sort_keys

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Collator::sortWithSortKeys -- collator_sort_with_sort_keys — Сортування
масив з використанням зазначеного Collator та ключів сортування

### Опис

Об'єктно-орієнтований стиль

public **Collator::sortWithSortKeys**(array `&$array`): bool

Процедурний стиль

**collator_sort_with_sort_keys**([Collator](class.collator.md)
`$object`, array `&$array`): bool

Те саме, що і [collator_sort()](collator.sort.md), але використовує ключі
сортування ICU, створені ucol_getSortKey() для збільшення швидкості
роботи з великими масивами.

### Список параметрів

`object`
Об'єкт [Collator](class.collator.md).

`array`
Масив рядків для сортування

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **collator_sort_with_sort_keys()****

`<?php$arr  u003d array( 'Köpfe', 'Kypper', 'Kopfe' );$coll u003d collator_create( 'sv' );collator_sort_with_sort_keys( $coll, $arr );

Результат виконання цього прикладу:

array (
0 u003d> 'Kopfe',
1 u003d> 'Kypper',
2 u003d> 'Köpfe',
)

### Дивіться також

- [Константи
[Collator](class.collator.md)](class.collator.md#intl.collator-constants)
- [collator_sort()](collator.sort.md) - Сортує масив з
використанням зазначеного засобу сортування
- [collator_asort()](collator.asort.md) - Сортує масив з
збереженням асоціації індексу
