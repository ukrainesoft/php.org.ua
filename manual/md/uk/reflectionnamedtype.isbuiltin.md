- [« ReflectionNamedType::getName](reflectionnamedtype.getname.md)
- [ReflectionObject »](class.reflectionobject.md)

- [PHP Manual](index.md)
- [ReflectionNamedType](class.reflectionnamedtype.md)
- Перевіряє, чи є тип вбудованим

# ReflectionNamedType::isBuiltin

(PHP 7, PHP 8)

ReflectionNamedType::isBuiltin — Перевіряє, чи є тип вбудованим

### Опис

public **ReflectionNamedType::isBuiltin**(): bool

Перевіряє, чи тип вбудованого типу PHP. Вбудований тип – будь-який
тип, який не є класом, інтерфейсом або трейтом.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**`true`**, якщо тип вбудований, **`false`** в іншому випадку.

### Приклади

**Приклад #1 Приклад використання **ReflectionNamedType::isBuiltin()****

`<?phpclass SomeClass {}function someFunction(string|$param,'SomeClass');$$; [0]->getType()->isBuiltin());var_dump($reflectionParams[1]->getType()->isBuiltin());var_dump($reflectionParams[2]->getType()->isBuiltin( )); `

Результат виконання цього прикладу:

bool(true)
bool(false)
bool(false)

Зауважте, що метод **ReflectionNamedType::isBuiltin()** не розрізняє
внутрішні та користувальницькі класи. Щоб їх розрізнити, потрібно
використовувати метод
[ReflectionClass::isInternal()](reflectionclass.isinternal.md) для
імені класу, що повертається.

### Дивіться також

- [ReflectionType::allowsNull()](reflectiontype.allowsnull.md) -
Перевіряє, чи допустимо NULL
- [ReflectionType::\_\_toString()](reflectiontype.tostring.md) -
Перетворення на рядок
- [ReflectionClass::isInternal()](reflectionclass.isinternal.md) -
Перевіряє, чи є клас вбудованим у модуль чи ядро
- [ReflectionParameter::getType()](reflectionparameter.gettype.md) -
Отримати тип параметра
