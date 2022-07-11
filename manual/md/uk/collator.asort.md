- [«Collator](class.collator.md)
- [Collator::compare »](collator.compare.md)

- [PHP Manual](index.md)
- [Collator](class.collator.md)
- Сортує масив із збереженням асоціації індексу

# Collator::asort

#collator_asort

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Collator::asort -- collator_asort — Сортує масив із збереженням
асоціації індексу

### Опис

Об'єктно-орієнтований стиль

public **Collator::asort**(array `&$array`, int `$flags` u003d
Collator::SORT_REGULAR): bool

Процедурний стиль

**collator_asort**([Collator](class.collator.md) `$object`, array
`&$array`, int `$flags` u003d Collator::SORT_REGULAR): bool

Функція сортує масив таким чином, щоб індекси масиву зберігали
свою кореляцію з елементами масиву, із якими пов'язані. Це
використовується в основному при сортуванні асоціативних масивів, де важливий
фактичний порядок елементів. Елементи масиву матимуть порядок
сортування відповідно до поточних правил локалі.

Еквівалентно до стандартної функції PHP [asort()](function.asort.md).

### Список параметрів

`object`
Об'єкт [Collator](class.collator.md).

`array`
Масив рядків для сортування.

`flags`
Необов'язковий тип сортування, один із таких:

- **`Collator::SORT_REGULAR`** - порівнює елементи як звичайно (не
змінюючи тип)

- **`Collator::SORT_NUMERIC`** - порівнює елементи, як числа

- **`Collator::SORT_STRING`** - порівнює елементи, як рядки

Значення `flags` за замовчуванням - **`Collator::SORT_REGULAR`**. Також
використовується, якщо вказано неприпустиме значення flags.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **collator_asort()****

` <?php$coll u003d collator_create( 'en_US' );$arr u003d array(    'a' u003d> '100',    'b' u003d> '50', '   coll, $arr, Collator::SORT_NUMERIC );var_export( $arr );collator_asort( $coll, $arr, Collator::SORT_STRING );var_export( $arr );?> `

Результат виконання цього прикладу:

array (
'c' u003d> '7',
'b' u003d> '50',
'a' u003d> '100',
)array (
'a' u003d> '100',
'b' u003d> '50',
'c' u003d> '7',
)

### Дивіться також

- [Константи
[Collator](class.collator.md)](class.collator.md#intl.collator-constants)
- [collator_sort()](collator.sort.md) - Сортує масив з
використанням зазначеного засобу сортування
- [collator_sort_with_sort_keys()](collator.sortwithsortkeys.md) -
Сортує масив з використанням вказаного Collator та ключів
сортування
