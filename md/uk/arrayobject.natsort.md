- [« ArrayObject::natcasesort](arrayobject.natcasesort.md)
- [ArrayObject::offsetExists »](arrayobject.offsetexists.md)

- [PHP Manual](index.md)
- [ArrayObject](class.arrayobject.md)
- Сортувати масив, використовуючи алгоритм "natural order"

# ArrayObject::natsort

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

ArrayObject::natsort — Сортувати масив за допомогою алгоритму "natural"
order"

### Опис

public **ArrayObject::natsort**(): bool

Цей метод реалізує алгоритм сортування, за якого порядок
буквено-цифрових рядків буде звичним для людини, зберігаючи при цьому
зв'язок ключ/значення. Такий алгоритм називається "природний порядок"
(Natural ordering). Приклад різниці між цим алгоритмом та звичайними
алгоритмами сортування, (використовуються в
[ArrayObject::asort](arrayobject.asort.md)) можна побачити у прикладі
нижче.

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

**Приклад #1 Приклад використання **ArrayObject::natsort()****

` <?php$array u003d array("img12.png", "img10.png", "img2.png", "img1.png");$arr1 u003d new ArrayObject($array);$arr2 u003d clone $arr1 ;$arr1->asort();echo "Стандартне сортування
";print_r($arr1);$arr2->natsort();echo "
Сортування в природному порядку
";print_r($arr2);?> `

Результат виконання цього прикладу:

Стандартне сортування
ArrayObject Object
(
[3] u003d> img1.png
[1] u003d> img10.png
[0] u003d> img12.png
[2] u003d> img2.png
)

Сортування у природному порядку
ArrayObject Object
(
[3] u003d> img1.png
[2] u003d> img2.png
[1] u003d> img10.png
[0] u003d> img12.png
)

Докладніше дивіться сторінку Мартіна Пула (Martin
Pool) [» Natural Order String
Comparison](https://github.com/sourcefrog/natsort).

### Дивіться також

- [ArrayObject::asort()](arrayobject.asort.md) - Сортувати записи
за значенням
- [ArrayObject::ksort()](arrayobject.ksort.md) - Сортувати записи
за ключами
- [ArrayObject::natcasesort()](arrayobject.natcasesort.md) -
Сортувати масив, використовуючи реєстронезалежний алгоритм "natural
order"
- [ArrayObject::uasort()](arrayobject.uasort.md) - Сортувати
записи, використовуючи функцію користувача для порівняння елементів і
зберігаючи при цьому зв'язок ключ/значення
- [ArrayObject::uksort()](arrayobject.uksort.md) - Сортувати
масив за ключами, використовуючи користувальницьку функцію для порівняння
- [natsort()](function.natsort.md) - Сортує масив, використовуючи
алгоритм "natural order"
