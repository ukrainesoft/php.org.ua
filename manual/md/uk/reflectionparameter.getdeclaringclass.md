- [« ReflectionParameter::getClass](reflectionparameter.getclass.md)
- [ReflectionParameter::getDeclaringFunction
»](reflectionparameter.getdeclaringfunction.md)

- [PHP Manual](index.md)
- [ReflectionParameter](class.reflectionparameter.md)
- Отримання класу, що оголошує

# ReflectionParameter::getDeclaringClass

(PHP 5 \>u003d 5.1.3, PHP 7, PHP 8)

ReflectionParameter::getDeclaringClass — Отримання класу, що оголошує

### Опис

public **ReflectionParameter::getDeclaringClass**():
?[ReflectionClass](class.reflectionclass.md)

Отримує клас, що оголошує.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Об'єкт класу [ReflectionClass](class.reflectionclass.md), або
**`null`**, якщо викликано для функції.

### Приклади

**Приклад #1 Отримання класу, в якому оголошено метод**

`<?phpclass Foo{    public function bar(\DateTime $datetime)    {    }}class Baz extends Foo{}$param u003d new \ReflectionParameter(''| getDeclaringClass()); `

Результат виконання цього прикладу:

object(ReflectionClass)#2 (1) {
["name"]u003d>
string(3) "Foo"
}

### Дивіться також

- [ReflectionParameter::getClass()](reflectionparameter.getclass.md) -
Отримує об'єкт ReflectionClass для параметра, що відображається, або null
