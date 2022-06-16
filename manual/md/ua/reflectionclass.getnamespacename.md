- [« ReflectionClass::getName](reflectionclass.getname.md)
- [ReflectionClass::getParentClass
»](reflectionclass.getparentclass.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Повертає назву простору імен

# ReflectionClass::getNamespaceName

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

ReflectionClass::getNamespaceName — Повертає назву простору
імен

### Опис

public **ReflectionClass::getNamespaceName**(): string

Повертає назву простору імен.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Назва простору імен.

### Приклади

**Приклад #1 Приклад використання
**ReflectionClass::getNamespaceName()****

` <?phpnamespace A\B;class Foo { }$class u003d new \ReflectionClass('stdClass');var_dump($class->inNamespace());var_dump($class->getName());var_dump($class ->getNamespaceName());var_dump($class->getShortName());$class u003d new \ReflectionClass('A\B\Foo');var_dump($class->inNamespace());var_dump($class- >getName());var_dump($class->getNamespaceName());var_dump($class->getShortName());?> `

Результат виконання цього прикладу:

bool(false)
string(8) "stdClass"
string(0) ""
string(8) "stdClass"

bool(true)
string(7) "A\B\Foo"
string(3) "A\B"
string(3) "Foo"

### Дивіться також

- [ReflectionClass::getParentClass()](reflectionclass.getparentclass.md) -
Повертає батьківський клас
- [namespaces](language.namespaces.md)
