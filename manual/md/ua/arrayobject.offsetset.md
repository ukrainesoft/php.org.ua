- [« ArrayObject::offsetGet](arrayobject.offsetget.md)
- [ArrayObject::offsetUnset »](arrayobject.offsetunset.md)

- [PHP Manual](index.md)
- [ArrayObject](class.arrayobject.md)
- Встановлює нове значення за вказаним індексом

# ArrayObject::offsetSet

(PHP 5, PHP 7, PHP 8)

ArrayObject::offsetSet — Встановлює нове значення за вказаним
індексу

### Опис

public
**ArrayObject::offsetSet**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

Встановлює нове значення за вказаним індексом.

### Список параметрів

`key`
Індекс для встановлення значення.

`value`
Нове значення для `key`.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ArrayObject::offsetSet()****

` <?phpclass Example {    public $property u003d 'prop:public';}$arrayobj u003d new ArrayObject(new Example());$arrayobj->offsetSet(4, 'four');$arrayobj-'group ', array('g1', 'g2'));var_dump($arrayobj);$arrayobj u003d new ArrayObject(array('zero','one'));$arrayobj->offsetSet(null, 'last') ;var_dump($arrayobj);?> `

Результат виконання цього прикладу:

object(ArrayObject)#1 (3) {
["property"]u003d>
string(11) "prop:public"
[4]u003d>
string(4) "four"
["group"]u003d>
array(2) {
[0]u003d>
string(2) "g1"
[1]u003d>
string(2) "g2"
}
}
object(ArrayObject)#3 (3) {
[0]u003d>
string(4) "zero"
[1]u003d>
string(3) "one"
[2]u003d>
string(4) "last"
}

### Дивіться також

- [ArrayObject::append()](arrayobject.append.md) - Додає
значення в кінець масиву
