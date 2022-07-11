- [« SplFixedArray::rewind](splfixedarray.rewind.md)
- [SplFixedArray::toArray »](splfixedarray.toarray.md)

- [PHP Manual](index.md)
- [SplFixedArray](class.splfixedarray.md)
- Змінює розмір масиву

# SplFixedArray::setSize

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SplFixedArray::setSize — Змінює розмір масиву

### Опис

public **SplFixedArray::setSize**(int `$size`): bool

Встановлює розмір масиву значення “size”. Якщо `size` менше
поточного розміру масиву, всі зайві значення відкидаються. Якщо ж
`size` більше поточного розміру масиву, то масив буде доповнено
**`null`** значеннями.

### Список параметрів

`size`
Нове значення розміру масиву. Очікується значення між `0` та
**`PHP_INT_MAX`**.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Викидає виняток
[InvalidArgumentException](class.invalidargumentexception.md), коли
`size` менше нуля.

Викликає помилку рівня **`E_WARNING`**, коли `size` не можна обробити
як число.

### Приклади

**Приклад #1 Приклад використання **SplFixedArray::setSize()****

` <?php  $arrayu003du003dnew SplFixedArray(5); echo $array->getSize()."
";   $array->setSize(10);  echo $array->getSize()."
";?> `

Результат виконання цього прикладу:

5
10
