- [« ArrayObject::natsort](arrayobject.natsort.md)
- [ArrayObject::offsetGet »](arrayobject.offsetget.md)

- [PHP Manual](index.md)
- [ArrayObject](class.arrayobject.md)
- Повертає, чи існує зазначений індекс

# ArrayObject::offsetExists

(PHP 5, PHP 7, PHP 8)

ArrayObject::offsetExists — Повертає, чи вказаний індекс існує

### Опис

public
**ArrayObject::offsetExists**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`): bool

### Список параметрів

`key`
Індекс, який має бути перевірено.

### Значення, що повертаються

**`true`**, якщо зазначений індекс існує, інакше
**`false`**

### Приклади

**Приклад #1 Приклад використання **ArrayObject::offsetExists()****

` <?php$arrayobj u003d new ArrayObject(array('zero', 'one', 'example'u003d>'e.g.'));var_dump($arrayobj->offsetExists(1));var_dump($arrayobj->offsetExists ('example'));var_dump($arrayobj->offsetExists('notfound'));?> `

Результат виконання цього прикладу:

bool(true)
bool(true)
bool(false)
