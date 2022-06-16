- [«
ReflectionClass::implementsInterface](reflectionclass.implementsinterface.md)
- [ReflectionClass::isAbstract »](reflectionclass.isabstract.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Перевіряє, чи визначений клас у просторі імен

# ReflectionClass::inNamespace

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

ReflectionClass::inNamespace — Перевіряє, чи клас у
просторі імен

### Опис

public **ReflectionClass::inNamespace**(): bool

Перевіряє, чи клас у просторі імен.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **ReflectionClass::inNamespace()****

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

- [ReflectionClass::getNamespaceName()](reflectionclass.getnamespacename.md) -
Повертає назву простору імен
- [Простори імен PHP](language.namespaces.md)
