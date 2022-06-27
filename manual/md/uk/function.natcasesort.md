- [«list](function.list.md)
- [natsort »] (function.natsort.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- Сортує масив, використовуючи алгоритм "natural order" без урахування
регістру символів

# natcasesort

(PHP 4, PHP 5, PHP 7, PHP 8)

natcasesort — Сортує масив, використовуючи алгоритм "natural order" без
обліку регістру символів

### Опис

**natcasesort**(array `&$array`): bool

**natcasesort()** - це реєстронезалежний аналог
[natsort()](function.natsort.md).

Ця функція реалізує алгоритм сортування, за якого порядок
буквено-цифрових рядків буде звичним для людини. Такий алгоритм
називається "natural ordering".

> **Примітка**:
>
> Якщо обидва порівнювані значення еквівалентні, вони зберігають свій
> Початковий порядок. До PHP 8.0.0 їх відносний порядок
> відсортованому масиві був визначений.

> **Примітка**:
>
> Скидає внутрішній покажчик масиву перший елемент.

### Список параметрів

`array`
Вхідний масив.

### Значення, що повертаються

Функція завжди повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **natcasesort()****

` <?php$array1 u003d $array2 u003d array('IMG0.png', 'img12.png', 'img10.png', 'img2.png', 'img1.png', 'IMG3.png');sort ($array1);echo "Звичайне сортування
";print_r($array1);natcasesort($array2);echo "
Natural order сортування (без обліку реєстру)
";print_r($array2);?> `

Результат виконання цього прикладу:

Звичайне сортування
Array
(
[0] u003d> IMG0.png
[1] u003d> IMG3.png
[2] u003d> img1.png
[3] u003d> img10.png
[4] u003d> img12.png
[5] u003d> img2.png
)

Natural order сортування (без урахування регістру)
Array
(
[0] u003d> IMG0.png
[4] u003d> img1.png
[3] u003d> img2.png
[5] u003d> IMG3.png
[2] u003d> img10.png
[1] u003d> img12.png
)

Детальніше дивіться статтю Martin Pool [» Natural Order String
Comparison](https://github.com/sourcefrog/natsort).

### Дивіться також

- [natsort()](function.natsort.md) - Сортує масив, використовуючи
алгоритм "natural order"
- [Порівняння функцій сортування масивів](array.sorting.md)
- [strnatcmp()](function.strnatcmp.md) - Порівняння рядків з
використанням алгоритму "natural order"
- [strnatcasecmp()](function.strnatcasecmp.md) - Порівняння рядків без
обліку регістру з використанням алгоритму "natural order"
