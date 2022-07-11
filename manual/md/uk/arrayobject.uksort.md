- [« ArrayObject::uasort](arrayobject.uasort.md)
- [ArrayObject::unserialize »](arrayobject.unserialize.md)

- [PHP Manual](index.md)
- [ArrayObject](class.arrayobject.md)
- Сортувати масив за ключами, використовуючи користувальницьку функцію для
порівняння

# ArrayObject::uksort

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

ArrayObject::uksort — Сортування масиву за ключами, використовуючи
користувальницьку функцію для порівняння

### Опис

public **ArrayObject::uksort**([callable](language.types.callable.md)
`$callback`): bool

Ця функція сортує ключі записів, використовуючи надану
користувачем функцію. Відносини між ключами та елементами зберігаються.

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

**Приклад #1 Приклад використання **ArrayObject::uksort()****

` <?phpfunction cmp($a, $b) {    $a u003d preg_replace('@^(a|an|the) @', '', $a); $b u003d preg_replace('@^(a|an|the) @', '', $b); return strcasecmp($a, $b);}$array u003d array("John" u003d> 1, "the Earth" u003d> 2, "an apple" u003d> 3, "a banana" u003d> 4); u003d new ArrayObject($array);$arrayObject->uksort('cmp');foreach ($arrayObject as $key u003d> $value) {    echo "$key: $value
";}?> `

Результат виконання цього прикладу:

an apple: 3
a banana: 4
the Earth: 2
John: 1

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
- [ArrayObject::uasort()](arrayobject.uasort.md) - Сортувати
записи, використовуючи функцію користувача для порівняння елементів і
зберігаючи при цьому зв'язок ключ/значення
- [uksort()](function.uksort.md) - Сортує масив за ключами,
використовуючи функцію користувача для порівняння ключів
