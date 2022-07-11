- [« ReflectionMethod::getClosure](reflectionmethod.getclosure.md)
- [ReflectionMethod::getModifiers
»](reflectionmethod.getmodifiers.md)

- [PHP Manual](index.md)
- [ReflectionMethod](class.reflectionmethod.md)
- Отримує клас, що оголошує відбитий метод

# ReflectionMethod::getDeclaringClass

(PHP 5, PHP 7, PHP 8)

ReflectionMethod::getDeclaringClass — Отримує клас, який оголошує
відбитий метод

### Опис

public **ReflectionMethod::getDeclaringClass**():
[ReflectionClass](class.reflectionclass.md)

Отримує клас, який оголошує відбитий метод.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Об'єкт класу [ReflectionClass](class.reflectionclass.md), частиною
якого є відбитий метод.

### Приклади

**Приклад #1 Приклад використання
**ReflectionMethod::getDeclaringClass()****

` <?phpclass HelloWorld {   protected function sayHelloTo($name) {        return 'Привіт, ' . $name; }}$reflectionMethod u003d new ReflectionMethod(new HelloWorld(), 'sayHelloTo');var_dump($reflectionMethod->getDeclaringClass());?> `

Результат виконання цього прикладу:

object(ReflectionClass)#2 (1) {
["name"]u003d>
string(10) "HelloWorld"
}

### Дивіться також

- [ReflectionMethod::isAbstract()](reflectionmethod.isabstract.md) -
Перевіряє, чи є метод абстрактним
