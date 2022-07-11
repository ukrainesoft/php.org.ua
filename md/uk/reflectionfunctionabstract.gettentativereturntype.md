- [«
ReflectionFunctionAbstract::getStaticVariables](reflectionfunctionabstract.getstaticvariables.md)
- [ReflectionFunctionAbstract::hasReturnType
»](reflectionfunctionabstract.hasreturntype.md)

- [PHP Manual](index.md)
- [ReflectionFunctionAbstract](class.reflectionfunctionabstract.md)
- Повертає попередній тип значення, що повертається, пов'язаний з
функцією

# ReflectionFunctionAbstract::getTentativeReturnType

(PHP 8 \>u003d 8.1.0)

ReflectionFunctionAbstract::getTentativeReturnType — Повертає
попередній тип значення, що повертається, пов'язаний з функцією

### Опис

public **ReflectionFunctionAbstract::getTentativeReturnType**():
?[ReflectionType](class.reflectiontype.md)

Повертає попередній тип значення, що повертається, пов'язаний з
функцією.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає об'єкт [ReflectionType](class.reflectiontype.md), якщо
вказаний попередній тип значення, що повертається, в іншому випадку
повертає **`null`**.

### Приклади

**Приклад #1 Приклад використання
**ReflectionFunctionAbstract::getTentativeReturnType()****

` <?php$method u003d new ReflectionMethod(\ArrayAccess::class, 'offsetGet');var_dump($method->getTentativeReturnType()); `

Результатом виконання цього прикладу буде щось подібне:

object(ReflectionNamedType)#2 (0) {
}

### Дивіться також

- [ReflectionFunctionAbstract::getReturnType()](reflectionfunctionabstract.getreturntype.md) -
Отримує оголошений тип значення, що повертається функцією значення
- [ReflectionFunctionAbstract::hasTentativeReturnType()](reflectionfunctionabstract.hastentativereturntype.md) -
Визначає, чи має функція попередній тип повертається
значення
- [Сумісність типів значень, що повертаються, з внутрішніми
класами](language.oop5.inheritance.md#language.oop5.inheritance.internal-classes)
