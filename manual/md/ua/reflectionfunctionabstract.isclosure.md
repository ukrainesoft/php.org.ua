- [«
ReflectionFunctionAbstract::inNamespace](reflectionfunctionabstract.innamespace.md)
- [ReflectionFunctionAbstract::isDeprecated
»](reflectionfunctionabstract.isdeprecated.md)

- [PHP Manual](index.md)
- [ReflectionFunctionAbstract](class.reflectionfunctionabstract.md)
- Перевіряє, чи є функція замикання (Closure)

# ReflectionFunctionAbstract::isClosure

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

ReflectionFunctionAbstract::isClosure — Перевіряє, чи є функція
замиканням ([Closure](class.closure.md))

### Опис

public **ReflectionFunctionAbstract::isClosure**(): bool

Перевірка, чи є функція замикання.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо функція є замиканням
([Closure](class.closure.md)), **`false`** інакше.

### Приклади

**Приклад #1 Приклад використання методу
**ReflectionFunctionAbstract::isClosure()****

` <?php// Не замикання$function1 u003d 'str_replace';$reflection1 u003d new ReflectionFunction($function1);var_dump($reflection1->isClosure());// Замикання$function2 u003d $ u003d new ReflectionFunction($function2);var_dump($reflection2->isClosure());?> `

Результат виконання цього прикладу:

bool(false)
bool(true)

### Дивіться також

- [ReflectionFunctionAbstract::isGenerator()](reflectionfunctionabstract.isgenerator.md) -
Перевіряє, чи є функція генератором
