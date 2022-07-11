- [« ReflectionClass::isAnonymous](reflectionclass.isanonymous.md)
- [ReflectionClass::isEnum »](reflectionclass.isenum.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Перевіряє, чи можна клонувати цей клас

# ReflectionClass::isCloneable

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

ReflectionClass::isCloneable — Перевіряє, чи можна клонувати цей
клас

### Опис

public **ReflectionClass::isCloneable**(): bool

Перевіряє, чи можна клонувати цей клас.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо клас можна клонувати, інакше
**`false`**.

### Приклади

**Приклад #1 Приклад використання **ReflectionClass::isCloneable()****

` <?phpclass NotCloneable {    public $var1; private function __clone() {    }}classCloneable {    public $var1;}$notCloneable u003d new ReflectionClass('NotCloneable');$cloneable u003d new ReflectionClass ($cloneable->isCloneable());?> `

Результат виконання цього прикладу:

bool(false)
bool(true)
