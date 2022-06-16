- [« ReflectionClass::getMethod](reflectionclass.getmethod.md)
- [ReflectionClass::getModifiers »](reflectionclass.getmodifiers.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Повертає список методів у вигляді масиву

# ReflectionClass::getMethods

(PHP 5, PHP 7, PHP 8)

ReflectionClass::getMethods — Повертає список методів у вигляді масиву

### Опис

public **ReflectionClass::getMethods**(?int `$filter` u003d **`null`**):
array

Повертає список методів як масиву.

### Список параметрів

`filter`
Фільтрування результату для включення до списку тільки методів
певними атрибутами. За промовчанням фільтрації немає.

Комбінація з наступних констант через логічне АБО:
**`ReflectionMethod::IS_STATIC`**, **`ReflectionMethod::IS_PUBLIC`**,
**`ReflectionMethod::IS_PROTECTED`**,
**`ReflectionMethod::IS_PRIVATE`**, **`ReflectionMethod::IS_ABSTRACT`**,
**`ReflectionMethod::IS_FINAL`**, так що всі методи з *любим* з
перерахованих атрибутів буде повернено.

> **Примітка**: Зверніть увагу, що інші побітові операції, до
> прикладу `~` не працюватимуть так, як очікується. Іншими словами,
> наприклад, неможливо отримати всі нестатичні методи.

### Значення, що повертаються

Масив (array) об'єктів класу
[ReflectionMethod](class.reflectionmethod.md), що відображають кожен
метод.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- --|
| 7.2.0 | `filter` тепер припускає значення null. |

### Приклади

**Приклад #1 Приклад використання **ReflectionClass::getMethods()****

` <?phpclass Apple {    public function firstMethod() { }    final protected function secondMethod() { }    private static function thirdMethod() { }}$class u003d new ReflectionClass('Apple');$methods u003d $class->getMethods( );var_dump($methods);?> `

Результат виконання цього прикладу:

array(3) {
[0]u003d>
object(ReflectionMethod)#2 (2) {
["name"]u003d>
string(11) "firstMethod"
["class"]u003d>
string(5) "Apple"
}
[1]u003d>
object(ReflectionMethod)#3 (2) {
["name"]u003d>
string(12) "secondMethod"
["class"]u003d>
string(5) "Apple"
}
[2]u003d>
object(ReflectionMethod)#4 (2) {
["name"]u003d>
string(11) "thirdMethod"
["class"]u003d>
string(5) "Apple"
}
}

**Приклад #2 Приклад фільтрації результату виклику
**ReflectionClass::getMethods()****

` <?phpclass Apple {    public function firstMethod() { }    final protected function secondMethod() { }    private static function thirdMethod() { }}$class u003d new ReflectionClass('Apple');$methods u003d $class->getMethods( ReflectionMethod::IS_STATIC | ReflectionMethod::IS_FINAL);var_dump($methods);?> `

Результат виконання цього прикладу:

array(2) {
[0]u003d>
object(ReflectionMethod)#2 (2) {
["name"]u003d>
string(12) "secondMethod"
["class"]u003d>
string(5) "Apple"
}
[1]u003d>
object(ReflectionMethod)#3 (2) {
["name"]u003d>
string(11) "thirdMethod"
["class"]u003d>
string(5) "Apple"
}
}

### Дивіться також

- [ReflectionClass::getMethod()](reflectionclass.getmethod.md) -
Повертає екземпляр ReflectionMethod для методу класу
- [get_class_methods()](function.get-class-methods.md) - Повертає
масив імен методів класу
