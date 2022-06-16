- [«
ReflectionClass::getReflectionConstants](reflectionclass.getreflectionconstants.md)
- [ReflectionClass::getStartLine »](reflectionclass.getstartline.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Повертає коротке ім'я

# ReflectionClass::getShortName

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

ReflectionClass::getShortName — Повертає коротке ім'я

### Опис

public **ReflectionClass::getShortName**(): string

Повертає коротке ім'я класу, частина, що не належить до назви
простору імен.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Коротка назва класу.

### Приклади

**Приклад #1 Приклад використання **ReflectionClass::getShortName()****

` <?phpnamespace A\B;class Foo { }$function u003d new \ReflectionClass('stdClass');var_dump($function->inNamespace());var_dump($function->getName());var_dump($function ->getNamespaceName());var_dump($function->getShortName());$function u003d new \ReflectionClass('A\B\Foo');var_dump($function->inNamespace());var_dump($function- >getName());var_dump($function->getNamespaceName());var_dump($function->getShortName());?> `

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

- [ReflectionClass::getName()](reflectionclass.getname.md) -
Повертає ім'я класу
