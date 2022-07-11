- [«
ReflectionFunctionAbstract::getParameters](reflectionfunctionabstract.getparameters.md)
- [ReflectionFunctionAbstract::getShortName
»](reflectionfunctionabstract.getshortname.md)

- [PHP Manual](index.md)
- [ReflectionFunctionAbstract](class.reflectionfunctionabstract.md)
- Отримує оголошений тип значення, що повертається функцією значення

# ReflectionFunctionAbstract::getReturnType

(PHP 7, PHP 8)

ReflectionFunctionAbstract::getReturnType — Отримує оголошений тип
значення, що повертається функцією значення

### Опис

public **ReflectionFunctionAbstract::getReturnType**():
?[ReflectionType](class.reflectiontype.md)

Отримує оголошений тип значення, що повертається функцією.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає об'єкт класу [ReflectionType](class.reflectiontype.md),
якщо у функції оголошено тип значення, що повертається, **`null`** в
інакше.

### Приклади

**Приклад #1 Приклад **ReflectionFunctionAbstract::getReturnType()****

`<?phpfunction to_int($param) : int {   return (int) $param;}$reflection1 u003d new ReflectionFunction('to_int');echo $reflection1->getReturnType(); `

Результат виконання цього прикладу:

int

**Приклад #2 Застосування до вбудованих функцій**

` <?php$reflection2 u003d new ReflectionFunction('array_merge');var_dump($reflection2->getReturnType()); `

Результат виконання цього прикладу:

null

Це відбувається через те, що багато внутрішніх функцій не мають
оголошених типів для аргументів або значення, що повертається. Тому
краще уникати використання цього методу на вбудованих функціях.

### Дивіться також

- [ReflectionFunctionAbstract::hasReturnType()](reflectionfunctionabstract.hasreturntype.md) -
Перевіряє, чи має функція оголошений тип значення, що повертається
- [ReflectionType::\_\_toString()](reflectiontype.tostring.md) -
Перетворення на рядок
