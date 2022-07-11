- [« natcasesort] (function.natcasesort.md)
- [next »] (function.next.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- Сортує масив, використовуючи алгоритм "natural order"

# natsort

(PHP 4, PHP 5, PHP 7, PHP 8)

natsort - Сортує масив, використовуючи алгоритм "natural order"

### Опис

**natsort**(array `&$array`): bool

Ця функція реалізує алгоритм сортування, за якого порядок
буквено-цифрових рядків буде звичним для людини. Такий алгоритм
називається "natural ordering". Відмінність алгоритму "natural ordering" від
звичайних алгоритмів сортування, що застосовуються, наприклад, функцією
[sort()](function.sort.md) можна побачити на прикладі нижче.

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

**Приклад #1 Простий приклад використання **natsort()****

` <?php$array1 u003d $array2 u003d array("img12.png", "img10.png", "img2.png", "img1.png");asort($array1);echo "Звичайне сортування
";print_r($array1);natsort($array2);echo "
Сортування natural order
";print_r($array2);?> `

Результат виконання цього прикладу:

Звичайне сортування
Array
(
[3] u003d> img1.png
[1] u003d> img10.png
[0] u003d> img12.png
[2] u003d> img2.png
)

Сортування ордер
Array
(
[3] u003d> img1.png
[2] u003d> img2.png
[1] u003d> img10.png
[0] u003d> img12.png
)

Детальніше дивіться статтю Martin Pool [» Natural Order String
Comparison](https://github.com/sourcefrog/natsort).

**Приклад #2 Приклади використання різних трюків з **natsort()****

`<?phpecho "Негативні числа
";$negative u003d array('-5','3','-2','0','-1000','9','1');print_r($negative);natsort($negative) ;print_r($negative);echo "Відбивка нулями
$zerosu003du003darray('09', '8', '10', '009', '011', '0');print_r($zeros);natsort($zeros);print_r($zeros); ?> `

Результат виконання цього прикладу:

Негативні числа
Array
(
[0] u003d> -5
[1] u003d> 3
[2] u003d> -2
[3] u003d> 0
[4] u003d> -1000
[5] u003d> 9
[6] u003d> 1
)
Array
(
[2] u003d> -2
[0] u003d> -5
[4] u003d> -1000
[3] u003d> 0
[6] u003d> 1
[1] u003d> 3
[5] u003d> 9
)

Відбиття нулями
Array
(
[0] u003d> 09
[1] u003d> 8
[2] u003d> 10
[3] u003d> 009
[4] u003d> 011
[5] u003d> 0
)
Array
(
[5] u003d> 0
[1] u003d> 8
[3] u003d> 009
[0] u003d> 09
[2] u003d> 10
[4] u003d> 011
)

### Дивіться також

- [natcasesort()](function.natcasesort.md) - Сортує масив,
використовуючи алгоритм "natural order" без урахування регістру символів
- [Порівняння функцій сортування масивів](array.sorting.md)
- [strnatcmp()](function.strnatcmp.md) - Порівняння рядків з
використанням алгоритму "natural order"
- [strnatcasecmp()](function.strnatcasecmp.md) - Порівняння рядків без
обліку регістру з використанням алгоритму "natural order"
