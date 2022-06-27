- [« ArrayObject::setIteratorClass](arrayobject.setiteratorclass.md)
- [ArrayObject::uksort »](arrayobject.uksort.md)

- [PHP Manual](index.md)
- [ArrayObject](class.arrayobject.md)
- Сортувати записи, використовуючи функцію користувача для порівняння
елементів та зберігаючи при цьому зв'язок ключ/значення

# ArrayObject::uasort

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

ArrayObject::uasort — Сортувати записи за допомогою користувача
функцію для порівняння елементів та зберігаючи при цьому зв'язок ключ/значення

### Опис

public **ArrayObject::uasort**([callable](language.types.callable.md)
`$callback`): bool

Ця функція сортує значення із збереженням ключів, використовуючи
функцію порівняння.

Функція використовується в основному при сортуванні асоціативних масивів,
яких важливим є актуальний порядок елементів.

> **Примітка**:
>
> Якщо обидва порівнювані значення еквівалентні, вони зберігають свій
> Початковий порядок. До PHP 8.0.0 їх відносний порядок
> відсортованому масиві був визначений.

### Список параметрів

`callback`
Функція порівняння повинна повертати ціле, яке менше, або
більше нуля, якщо перший аргумент є відповідно меншим,
рівним чи більшим, ніж другий.

callback([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$a`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$b`): int

### Значення, що повертаються

Функція завжди повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **ArrayObject::uasort()****

` <?php// Функція порівнянняfunction cmp($a, $b) {    if ($a u003du003d $b) {        return 0; }   return ($a < $b) ? -1 : 1;}// Масив для сортування$array u003d array('a' u003d> 4, 'b' u003d> 8, 'c' u003d> -1, 'd' u003d> -9, 'e' u003d > 2, 'f' u003d> 5, 'g' u003d> 3, 'h' u003d> -4);$arrayObject u003d new ArrayObject($array);print_r($arrayObject);// Сортування і виведення массива ->uasort('cmp');print_r($arrayObject);?> `

Результат виконання цього прикладу:

Array
(
[a] u003d> 4
[b] u003d> 8
[c] u003d> -1
[d] u003d> -9
[e] u003d> 2
[f] u003d> 5
[g] u003d> 3
[h] u003d> -4
)
Array
(
[d] u003d> -9
[h] u003d> -4
[c] u003d> -1
[e] u003d> 2
[g] u003d> 3
[a] u003d> 4
[f] u003d> 5
[b] u003d> 8
)

### Дивіться також

- [ArrayObject::asort()](arrayobject.asort.md) - Сортувати записи
за значенням
- [ArrayObject::ksort()](arrayobject.ksort.md) - Сортувати записи
за ключами
- [ArrayObject::natsort()](arrayobject.natsort.md) - Сортувати
масив, використовуючи алгоритм "natural order"
- [ArrayObject::natcasesort()](arrayobject.natcasesort.md) -
Сортувати масив, використовуючи реєстронезалежний алгоритм "natural
order"
- [ArrayObject::uksort()](arrayobject.uksort.md) - Сортувати
масив за ключами, використовуючи користувальницьку функцію для порівняння
- [uasort()](function.uasort.md) - Сортує масив, використовуючи
користувальницьку функцію для порівняння елементів із збереженням
ключів
