- [«strnatcasecmp](function.strnatcasecmp.md)
- [strncasecmp »] (function.strncasecmp.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Порівняння рядків із використанням алгоритму "natural order"

#strnatcmp

(PHP 4, PHP 5, PHP 7, PHP 8)

strnatcmp — Порівняння рядків із використанням алгоритму "natural order"

### Опис

**strnatcmp**(string `$string1`, string `$string2`): int

Ця функція реалізує алгоритм порівняння, який упорядковує
алфавітно-цифрові рядки подібно до того, як це зробив би чоловік, такий
Алгоритм називається "natural ordering". Порівняння відбувається з урахуванням
регістру.

### Список параметрів

`string1`
Перший рядок.

`string2`
Другий рядок.

### Значення, що повертаються

Подібно до інших функцій порівняння рядків, ця функція повертає
негативне число, якщо `string1` менше, ніж `string2`, позитивне
число, якщо `string1` більше, ніж `string2`, і якщо рядки рівні.

### Приклади

Приклад, який показує відмінність цього алгоритму від звичайних функцій
порівняння (використані в [strcmp()](function.strcmp.md)), наведений
нижче:

` <?php$arr1 u003d $arr2 u003d array("img12.png", "img10.png", "img2.png", "img1.png");echo "Стандартний алгоритм порівняння
";usort($arr1, "strcmp");print_r($arr1);echo "
Алгоритм \"natural order\"
";usort($arr2, "strnatcmp");print_r($arr2);?> `

Результат виконання цього прикладу:

Стандартний алгоритм порівняння
Array
(
[0] u003d> img1.png
[1] u003d> img10.png
[2] u003d> img12.png
[3] u003d> img2.png
)

Алгоритм "natural order"
Array
(
[0] u003d> img1.png
[1] u003d> img2.png
[2] u003d> img10.png
[3] u003d> img12.png
)

Для отримання додаткової інформації дивіться [Natural Order String
Comparison](https://github.com/sourcefrog/natsort).

### Дивіться також

- [preg_match()](function.preg-match.md) - Виконує перевірку на
відповідність регулярному виразу
- [strcasecmp()](function.strcasecmp.md) - Бінарно-безпечне
порівняння рядків без урахування регістру
- [substr()](function.substr.md) - Повертає підрядок
- [stristr()](function.stristr.md) - Реєстронезалежний варіант
функції strstr
- [strcmp()](function.strcmp.md) - Бінарно-безпечне порівняння
рядків
- [strncmp()](function.strncmp.md) - Бінарно-безпечне порівняння
перших n символів рядків
- [strncasecmp()](function.strncasecmp.md) - Бінарно-безпечне
порівняння перших n символів рядків без урахування регістру
- [strnatcasecmp()](function.strnatcasecmp.md) - Порівняння рядків без
обліку регістру з використанням алгоритму "natural order"
- [strstr()](function.strstr.md) - Знаходить перше входження
підрядки
- [natsort()](function.natsort.md) - Сортує масив, використовуючи
алгоритм "natural order"
- [natcasesort()](function.natcasesort.md) - Сортує масив,
використовуючи алгоритм "natural order" без урахування регістру символів
