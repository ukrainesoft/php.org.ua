- [« ReflectionClass::getConstants](reflectionclass.getconstants.md)
- [ReflectionClass::getDefaultProperties
»](reflectionclass.getdefaultproperties.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Повертає конструктор класу

# ReflectionClass::getConstructor

(PHP 5, PHP 7, PHP 8)

ReflectionClass::getConstructor — Повертає конструктор класу

### Опис

public **ReflectionClass::getConstructor**():
?[ReflectionMethod](class.reflectionmethod.md)

Повертає конструктор відбитого класу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Об'єкт [ReflectionMethod](class.reflectionmethod.md), що відбиває
конструктор класу, або **`null`** якщо клас не має конструктора.

### Приклади

**Приклад #1 Приклад використання **ReflectionClass::getConstructor()****

` <?php$class u003d new ReflectionClass('ReflectionClass');$constructor u003d $class->getConstructor();var_dump($constructor);?> `

Результат виконання цього прикладу:

object(ReflectionMethod)#2 (2) {
["name"]u003d>
string(11) "__construct"
["class"]u003d>
string(15) "ReflectionClass"
}

### Дивіться також

- [ReflectionClass::getName()](reflectionclass.getname.md) -
Повертає ім'я класу
