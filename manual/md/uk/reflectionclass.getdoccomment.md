- [«
ReflectionClass::getDefaultProperties](reflectionclass.getdefaultproperties.md)
- [ReflectionClass::getEndLine »](reflectionclass.getendline.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Повертає doc-блоки коментарів

# ReflectionClass::getDocComment

(PHP 5, PHP 7, PHP 8)

ReflectionClass::getDocComment — Повертає doc-блоки коментарів

### Опис

public **ReflectionClass::getDocComment**(): string\|false

Повертає doc-блоки із коментарів класу. Doc-блок - це коментар
що починається з /\*\*. Якщо над декларацією класу є кілька
doc-блоків, то буде повернено найближчий до декларації.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

doc-блок коментарів, якщо він існує, інакше
**`false`**.

### Приклади

**Приклад #1 Приклад використання **ReflectionClass::getDocComment()****

` <?php/*** Тестовий клас** @param  foo bar* @return baz*/class TestClass { }$rc u003d new ReflectionClass('TestClass');var_dump($rc->getDocComment()); `

Результат виконання цього прикладу:

string(55) "/**
* Тестовий клас
*
* @param foo bar
* @return baz
*/"

### Дивіться також

- [ReflectionClass::getName()](reflectionclass.getname.md) -
Повертає ім'я класу
