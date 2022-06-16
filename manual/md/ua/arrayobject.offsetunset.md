- [« ArrayObject::offsetSet](arrayobject.offsetset.md)
- [ArrayObject::serialize »](arrayobject.serialize.md)

- [PHP Manual](index.md)
- [ArrayObject](class.arrayobject.md)
- Видаляє значення за вказаним індексом

# ArrayObject::offsetUnset

(PHP 5, PHP 7, PHP 8)

ArrayObject::offsetUnset — Видаляє значення за вказаним індексом

### Опис

public
**ArrayObject::offsetUnset**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`): void

Видаляє значення за вказаним індексом.

### Список параметрів

`key`
Індекс, значення якого потрібно видалити.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **ArrayObject::offsetUnset()****

` <?php$arrayobj u003d new ArrayObject(array(0u003d>'zero',2u003d>'two'));$arrayobj->offsetUnset(2);var_dump($arrayobj);?> `

Результат виконання цього прикладу:

object(ArrayObject)#1 (1) {
[0]u003d>
string(4) "zero"
}
