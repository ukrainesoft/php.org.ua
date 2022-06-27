- [«
ReflectionMethod::getModifiers](reflectionmethod.getmodifiers.md)
- [ReflectionMethod::invoke »](reflectionmethod.invoke.md)

- [PHP Manual](index.md)
- [ReflectionMethod](class.reflectionmethod.md)
- Отримує прототип методу (якщо такий є)

# ReflectionMethod::getPrototype

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

ReflectionMethod::getPrototype — Отримує прототип методу (якщо такий)
є)

### Опис

public **ReflectionMethod::getPrototype**():
[ReflectionMethod](class.reflectionmethod.md)

Отримує прототип методу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Об'єкт [ReflectionMethod](class.reflectionmethod.md) прототипу методу.

### Помилки

Виняток [ReflectionException](class.reflectionexception.md)
викидається, якщо метод не має прототипу.

### Приклади

**Приклад #1 Приклад використання **ReflectionMethod::getPrototype()****

`<?phpclass Hello {    public function sayHelloTo($name) {       return 'Привіт, ' . $name; }}class HelloWorld extends Hello {    public function sayHelloTo($name) {        return 'Привіт, світ: ' . $name; }}$reflectionMethod u003d new ReflectionMethod('HelloWorld', 'sayHelloTo');var_dump($reflectionMethod->getPrototype());?> `

Результат виконання цього прикладу:

object(ReflectionMethod)#2 (2) {
["name"]u003d>
string(10) "sayHelloTo"
["class"]u003d>
string(5) "Hello"
}

### Дивіться також

- [ReflectionMethod::getModifiers()](reflectionmethod.getmodifiers.md) -
Отримує модифікатори методу
