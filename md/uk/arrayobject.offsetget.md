- [« ArrayObject::offsetExists](arrayobject.offsetexists.md)
- [ArrayObject::offsetSet »](arrayobject.offsetset.md)

- [PHP Manual](index.md)
- [ArrayObject](class.arrayobject.md)
- Повертає значення за вказаним індексом

# ArrayObject::offsetGet

(PHP 5, PHP 7, PHP 8)

ArrayObject::offsetGet — Повертає значення за вказаним індексом

### Опис

public
**ArrayObject::offsetGet**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

### Список параметрів

`key`
Індекс, який посилається на значення.

### Значення, що повертаються

Значення за вказаним індексом або **`null`**.

### Помилки

Викликає помилку рівня **`E_NOTICE`**, якщо зазначений індекс не
існує.

### Приклади

**Приклад #1 Приклад використання **ArrayObject::offsetGet()****

` <?php$arrayobj u003d new ArrayObject(array('zero', 7, 'example'u003d>'e.g.'));var_dump($arrayobj->offsetGet(1));var_dump($arrayobj->offsetGet(' example'));var_dump($arrayobj->offsetExists('notfound'));?> `

Результат виконання цього прикладу:

int(7)
string(4) "e.g."
bool(false)
