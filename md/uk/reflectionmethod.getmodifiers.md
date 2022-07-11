- [«
ReflectionMethod::getDeclaringClass](reflectionmethod.getdeclaringclass.md)
- [ReflectionMethod::getPrototype
»](reflectionmethod.getprototype.md)

- [PHP Manual](index.md)
- [ReflectionMethod](class.reflectionmethod.md)
- Отримує модифікатори методу

# ReflectionMethod::getModifiers

(PHP 5, PHP 7, PHP 8)

ReflectionMethod::getModifiers — Отримує модифікатори методу

### Опис

public **ReflectionMethod::getModifiers**(): int

Повертає поле біта модифікаторів доступу для методу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Числове уявлення модифікаторів. Описи та значення цих
модифікаторів наведено у списку [визначених
констант](class.reflectionmethod.md#reflectionmethod.constants.modifiers).

### Приклади

**Приклад #1 Приклад використання **ReflectionMethod::getModifiers()****

` <?phpclass Testing{    final public static function foo()    {        return; }    public function bar()    {        return; }}$foo u003d new ReflectionMethod('Testing', 'foo');echo "Модифікатори методу foo():
";echo $foo->getModifiers() . "
";echo implode(' ', Reflection::getModifierNames($foo->getModifiers())) . "
";$bar u003d new ReflectionMethod('Testing', 'bar');echo "Модифікатори методу bar():
";echo $bar->getModifiers() . "
";echo implode(' ', Reflection::getModifierNames($bar->getModifiers()));?> `

Результатом виконання цього прикладу буде щось подібне:

Модифікатори методу foo():
49
final public static
Модифікатори методу bar():
1
public

### Дивіться також

- [Reflection::getModifierNames()](reflection.getmodifiernames.md) -
Отримання імен модифікаторів
