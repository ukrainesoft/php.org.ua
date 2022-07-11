- [« ReflectionMethod::isStatic](reflectionmethod.isstatic.md)
- [ReflectionMethod::\_\_toString »](reflectionmethod.tostring.md)

- [PHP Manual](index.md)
- [ReflectionMethod](class.reflectionmethod.md)
- Робить метод доступним

# ReflectionMethod::setAccessible

(PHP 5 \>u003d 5.3.2, PHP 7, PHP 8)

ReflectionMethod::setAccessible — Робить метод доступним

### Опис

public **ReflectionMethod::setAccessible**(bool `$accessible`): void

Забезпечує доступ до захищеної або закритої властивості за допомогою
методу [ReflectionMethod::invoke()](reflectionmethod.invoke.md).

> **Примітка**: Починаючи з PHP 8.1.0, виклик методу не має сенсу; всі
> методи викликаються за промовчанням.

### Список параметрів

`accessible`
**`true`**, щоб зробити метод доступним, або **`false`**.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Визначення простого класу**

`<?phpclass MyClass{    private function foo()    {       return 'bar'; }}$method u003d new ReflectionMethod("MyClass", "foo");$method->setAccessible(true);$obj u003d new MyClass();echo $method->invoke($obj);echo $obj-> foo();?> `

Результатом виконання цього прикладу буде щось подібне:

bar
Fatal error: Uncaught Error: Call до private method MyClass::foo() from global scope in /in/qdaZS:16

### Дивіться також

- [ReflectionMethod::isPrivate()](reflectionmethod.isprivate.md) -
Перевіряє, чи є метод закритим
- [ReflectionMethod::isProtected()](reflectionmethod.isprotected.md) -
Перевіряє, чи є метод захищеним
