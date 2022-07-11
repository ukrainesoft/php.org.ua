- [«
ReflectionFunctionAbstract::getClosureThis](reflectionfunctionabstract.getclosurethis.md)
- [ReflectionFunctionAbstract::getDocComment
»](reflectionfunctionabstract.getdoccomment.md)

- [PHP Manual](index.md)
- [ReflectionFunctionAbstract](class.reflectionfunctionabstract.md)
- Повертає масив змінних, що використовуються в замиканні.

# ReflectionFunctionAbstract::getClosureUsedVariables

(PHP 8 \>u003d 8.1.0)

ReflectionFunctionAbstract::getClosureUsedVariables — Повертає масив
використовуваних у замиканні змінних

### Опис

public **ReflectionFunctionAbstract::getClosureUsedVariables**(): array

Повертає масив (array), що використовуються в [Closure](class.closure.md)
змінних.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив (array), що використовуються в [Closure](class.closure.md)
змінних.

### Приклади

**Приклад #1 Приклад використання
**ReflectionFunctionAbstract::getClosureUsedVariables()****

` <?php$one u003d 1;$two u003d 2;$function u003d function() use ($one, $two) {    static $three u003d 3;};$reflectoru003du003dnew ReflectionFun$ reflector->getClosureUsedVariables());?> `

Результатом виконання цього прикладу буде щось подібне:

array(2) {
["one"]u003d>
int(1)
["two"]u003d>
int(2)
}

### Дивіться також

- [ReflectionFunctionAbstract::getClosureScopeClass()](reflectionfunctionabstract.getclosurescopeclass.md) -
Повертає клас, в рамках якого було оголошено замикання
- [ReflectionFunctionAbstract::getClosureThis()](reflectionfunctionabstract.getclosurethis.md) -
Повертає вказівник, прив'язаний до замикання
