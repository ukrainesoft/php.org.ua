- [« ArrayObject::offsetUnset](arrayobject.offsetunset.md)
- [ArrayObject::setFlags »](arrayobject.setflags.md)

- [PHP Manual](index.md)
- [ArrayObject](class.arrayobject.md)
- Серіалізувати ArrayObject

# ArrayObject::serialize

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

ArrayObject::serialize — Серіалізувати ArrayObject

### Опис

public **ArrayObject::serialize**(): string

Серіалізує [ArrayObject](class.arrayobject.md).

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Серіалізоване уявлення [ArrayObject](class.arrayobject.md).

### Приклади

**Приклад #1 Приклад використання **ArrayObject::serialize()****

` <?php$o u003d new ArrayObject();$s1 u003d serialize($o);$s2 u003d $o->serialize();var_dump($s1);var_dump($s2);?> `

Результат виконання цього прикладу:

string(45) "C:11:"ArrayObject":21:{x:i:0;a:0:{};m:a:0:{}}"
string(21) "x:i:0;a:0:{};m:a:0:{}"

### Дивіться також

- [ArrayObject::unserialize()](arrayobject.unserialize.md) -
Десеріалізувати ArrayObject
- [serialize()](function.serialize.md) - Генерує придатне для
зберігання уявлення змінної
- [Серіалізація об'єктів](language.oop5.serialization.md)
