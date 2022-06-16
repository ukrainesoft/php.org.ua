- [« ArrayObject::ksort](arrayobject.ksort.md)
- [ArrayObject::natsort »](arrayobject.natsort.md)

- [PHP Manual](index.md)
- [ArrayObject](class.arrayobject.md)
- Сортувати масив, використовуючи реєстронезалежний алгоритм "natural"
order"

# ArrayObject::natcasesort

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

ArrayObject::natcasesort — Сортувати за допомогою масиву
реєстронезалежний алгоритм "natural order"

### Опис

public **ArrayObject::natcasesort**(): bool

Цей метод є реєстронезалежною версією
[ArrayObject::natsort](arrayobject.natsort.md).

Цей метод реалізує алгоритм сортування, за якого порядок
буквено-цифрових рядків буде звичним для людини, зберігаючи при цьому
зв'язок ключ/значення. Такий алгоритм називається "природний порядок"
(Natural ordering).

> **Примітка**:
>
> Якщо обидва порівнювані значення еквівалентні, вони зберігають свій
> Початковий порядок. До PHP 8.0.0 їх відносний порядок
> відсортованому масиві був визначений.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ArrayObject::natcasesort()****

` <?php$array u003d array('IMG0.png', 'img12.png', 'img10.png', 'img2.png', 'img1.png', 'IMG3.png');$arr1 u003d new ArrayObject($array);$arr2 u003d clone $arr1;$arr1->asort();echo "Стандартне сортування
";print_r($arr1);$arr2->natcasesort();echo "
Сортування в природному порядку (без обліку реєстру)
";print_r($arr2);?> `

Результат виконання цього прикладу:

Стандартне сортування
ArrayObject Object
(
[0] u003d> IMG0.png
[5] u003d> IMG3.png
[4] u003d> img1.png
[2] u003d> img10.png
[1] u003d> img12.png
[3] u003d> img2.png
)

Сортування в природному порядку (без урахування регістру)
ArrayObject Object
(
[0] u003d> IMG0.png
[4] u003d> img1.png
[3] u003d> img2.png
[5] u003d> IMG3.png
[2] u003d> img10.png
[1] u003d> img12.png
)

Докладніше дивіться сторінку Мартіна Пула (Martin
Pool) [» Natural Order String
Comparison](https://github.com/sourcefrog/natsort).

### Дивіться також

- [ArrayObject::asort()](arrayobject.asort.md) - Сортувати записи
за значенням
- [ArrayObject::ksort()](arrayobject.ksort.md) - Сортувати записи
за ключами
- [ArrayObject::natsort()](arrayobject.natsort.md) - Сортувати
масив, використовуючи алгоритм "natural order"
- [ArrayObject::uasort()](arrayobject.uasort.md) - Сортувати
записи, використовуючи функцію користувача для порівняння елементів і
зберігаючи при цьому зв'язок ключ/значення
- [ArrayObject::uksort()](arrayobject.uksort.md) - Сортувати
масив за ключами, використовуючи користувальницьку функцію для порівняння
- [natcasesort()](function.natcasesort.md) - Сортує масив,
використовуючи алгоритм "natural order" без урахування регістру символів
