- [«
ReflectionFunctionAbstract::hasReturnType](reflectionfunctionabstract.hasreturntype.md)
- [ReflectionFunctionAbstract::inNamespace
»](reflectionfunctionabstract.innamespace.md)

- [PHP Manual](index.md)
- [ReflectionFunctionAbstract](class.reflectionfunctionabstract.md)
- Визначає, чи має функція попередній тип повертається
значення

# ReflectionFunctionAbstract::hasTentativeReturnType

(PHP 8 \>u003d 8.1.0)

ReflectionFunctionAbstract::hasTentativeReturnType — Визначає, чи є
у функції попередній тип значення, що повертається

### Опис

public **ReflectionFunctionAbstract::hasTentativeReturnType**(): bool

Визначає, чи має функція попередній тип повертається
значення.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо функція має попередній тип
повертається значення, інакше повертає **`false`**.

### Приклади

**Приклад #1 Приклад використання
**ReflectionFunctionAbstract::hasTentativeReturnType()****

` <?php$method u003d new ReflectionMethod(\ArrayAccess::class, 'offsetGet');var_dump($method->hasTentativeReturnType()); `

Результат виконання цього прикладу:

bool(true)

### Дивіться також

- [ReflectionFunctionAbstract::getTentativeReturnType()](reflectionfunctionabstract.gettentativereturntype.md) -
Повертає попередній тип значення, що повертається, пов'язаний з
функцією
- [ReflectionFunctionAbstract::hasReturnType()](reflectionfunctionabstract.hasreturntype.md) -
Перевіряє, чи має функція оголошений тип значення, що повертається
- [Сумісність типів значень, що повертаються, з внутрішніми
класами](language.oop5.inheritance.md#language.oop5.inheritance.internal-classes)
