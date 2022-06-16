- [«
ReflectionFunctionAbstract::getTentativeReturnType](reflectionfunctionabstract.gettentativereturntype.md)
- [ReflectionFunctionAbstract::hasTentativeReturnType
»](reflectionfunctionabstract.hastentativereturntype.md)

- [PHP Manual](index.md)
- [ReflectionFunctionAbstract](class.reflectionfunctionabstract.md)
- Перевіряє, чи має функція оголошений тип значення, що повертається

# ReflectionFunctionAbstract::hasReturnType

(PHP 7, PHP 8)

ReflectionFunctionAbstract::hasReturnType — Перевіряє, чи має функція
оголошений тип значення, що повертається

### Опис

public **ReflectionFunctionAbstract::hasReturnType**(): bool

Перевіряє, чи має функція оголошений тип значення, що повертається.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо функція має оголошений тип повертається
значення, **`false`** інакше.

### Приклади

**Приклад #1 Приклад **ReflectionFunctionAbstract::hasReturnType()****

` <?phpfunction to_int($param) : int {    return (int) $param;}$reflection1 u003d new ReflectionFunction('to_int');var_dump($reflection1->hasReturnType() `

Результат виконання цього прикладу:

bool(true)

**Приклад #2 Застосування до вбудованих функцій**

` <?php$reflection2 u003d new ReflectionFunction('array_merge');var_dump($reflection2->hasReturnType()); `

Результат виконання цього прикладу:

bool(false)

Це відбувається через те, що багато внутрішніх функцій не мають
оголошених типів для аргументів або значення, що повертається. Тому
Краще уникати використання цього методу на внутрішніх функціях.

### Дивіться також

- [ReflectionFunctionAbstract::getReturnType()](reflectionfunctionabstract.getreturntype.md) -
Отримує оголошений тип значення, що повертається функцією значення
