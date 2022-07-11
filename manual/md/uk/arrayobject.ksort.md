- [« ArrayObject::getIteratorClass](arrayobject.getiteratorclass.md)
- [ArrayObject::natcasesort »](arrayobject.natcasesort.md)

- [PHP Manual](index.md)
- [ArrayObject](class.arrayobject.md)
- Сортувати записи за ключами

# ArrayObject::ksort

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

ArrayObject::ksort — Сортування записів за ключами

### Опис

public **ArrayObject::ksort**(int `$flags` u003d **`SORT_REGULAR`**): bool

Сортує масив за ключами, зберігаючи відносини між ключами та
значеннями. Це корисно в основному для роботи з асоціативними
масивами.

> **Примітка**:
>
> Якщо обидва порівнювані значення еквівалентні, вони зберігають свій
> Початковий порядок. До PHP 8.0.0 їх відносний порядок
> відсортованому масиві був визначений.

### Список параметрів

`flags`
Необов'язковий другий параметр `flags` може використовуватись для
зміни поведінки сортування з використанням таких значень:

Прапори типу сортування:

- **`SORT_REGULAR`** - звичайне порівняння елементів; подробиці
описані в розділі [оператори
порівняння](language.operators.comparison.md)
- **`SORT_NUMERIC`** - числове порівняння елементів
- **`SORT_STRING`** - рядкове порівняння елементів
- **`SORT_LOCALE_STRING`** - порівняння елементів як рядки на основі
поточний мовний стандарт. Використовується мовний стандарт,
який можна змінити за допомогою
[setlocale()](function.setlocale.md)
- **`SORT_NATURAL`** - порівняння елементів як рядки, використовуючи
"природний порядок", наприклад, [natsort()](function.natsort.md)
- **`SORT_FLAG_CASE`** - можна об'єднувати (побітове АБО) з
**`SORT_STRING`** або **`SORT_NATURAL`** для сортування рядків без
обліку регістру

### Значення, що повертаються

Функція завжди повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **ArrayObject::ksort()****

` <?php$fruits u003d array("d" u003d> "lemon", "a" u003d> "orange", "b" u003d> "banana", "c" u003d> "apple");$fruitArrayObject u003d new ArrayObject($fruits);$fruitArrayObject->ksort();foreach ($fruitArrayObject as $key u003d> $val) {    echo "$key u003d $val
";} ?> `

Результат виконання цього прикладу:

a u003d orange
b u003d banana
c u003d apple
d u003d lemon

### Дивіться також

- [ArrayObject::asort()](arrayobject.asort.md) - Сортувати записи
за значенням
- [ArrayObject::natsort()](arrayobject.natsort.md) - Сортувати
масив, використовуючи алгоритм "natural order"
- [ArrayObject::natcasesort()](arrayobject.natcasesort.md) -
Сортувати масив, використовуючи реєстронезалежний алгоритм "natural
order"
- [ArrayObject::uasort()](arrayobject.uasort.md) - Сортувати
записи, використовуючи функцію користувача для порівняння елементів і
зберігаючи при цьому зв'язок ключ/значення
- [ArrayObject::uksort()](arrayobject.uksort.md) - Сортувати
масив за ключами, використовуючи користувальницьку функцію для порівняння
- [ksort()](function.ksort.md) - Сортує масив за ключем у порядку
зростання
