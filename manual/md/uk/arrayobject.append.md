- [«ArrayObject](class.arrayobject.md)
- [ArrayObject::asort »](arrayobject.asort.md)

- [PHP Manual](index.md)
- [ArrayObject](class.arrayobject.md)
- Додає значення до кінця масиву

# ArrayObject::append

(PHP 5, PHP 7, PHP 8)

ArrayObject::append — Додає значення до кінця масиву

### Опис

public
**ArrayObject::append**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

Додає нове значення на кінець масиву.

> **Примітка**:
>
> Цей метод може бути викликаний, якщо
> [ArrayObject](class.arrayobject.md) було створено з об'єкта. В цьому
> випадку використовуйте замість нього
> [ArrayObject::offsetSet()](arrayobject.offsetset.md).

### Список параметрів

`value`
Значення, яке має бути додане.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ArrayObject::append()****

` <?php$arrayobj u003d new ArrayObject(array('first','second','third'));$arrayobj->append('fourth');$arrayobj->append(array('five', ') six'));var_dump($arrayobj);?> `

Результат виконання цього прикладу:

object(ArrayObject)#1 (5) {
[0]u003d>
string(5) "first"
[1]u003d>
string(6) "second"
[2]u003d>
string(5) "third"
[3]u003d>
string(6) "fourth"
[4]u003d>
array(2) {
[0]u003d>
string(4) "five"
[1]u003d>
string(3) "six"
}
}

### Дивіться також

- [ArrayObject::offsetSet()](arrayobject.offsetset.md) -
Встановлює нове значення за вказаним індексом
