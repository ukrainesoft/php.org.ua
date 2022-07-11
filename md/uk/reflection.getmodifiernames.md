- [« Reflection::export](reflection.export.md)
- [ReflectionClass »](class.reflectionclass.md)

- [PHP Manual](index.md)
- [Reflection](class.reflection.md)
- Отримання імен модифікаторів

# Reflection::getModifierNames

(PHP 5, PHP 7, PHP 8)

Reflection::getModifierNames — Отримання імен модифікаторів

### Опис

public static **Reflection::getModifierNames**(int `$modifiers`): array

Отримує імена модифікаторів.

### Список параметрів

`modifiers`
Бітова маска модифікаторів.

### Значення, що повертаються

Масив імен модифікаторів.

### Приклади

**Приклад #1 Приклад використання **Reflection::getModifierNames()****

` <?phpclass Testing{    final public static function foo()    {        return; }    public function bar()    {        return; }}$foo u003d new ReflectionMethod('Testing', 'foo');echo "Модифікатори для методу foo():
";echo $foo->getModifiers() . "
";echo implode(' ', Reflection::getModifierNames($foo->getModifiers())) . "
";$bar u003d new ReflectionMethod('Testing', 'bar');echo "Модифікатори для методу bar():
";echo $bar->getModifiers() . "
";echo implode(' ', Reflection::getModifierNames($bar->getModifiers())); `

Результатом виконання цього прикладу буде щось подібне:

Модифікатори для методу foo():
261
final public static
Модифікатори для методу bar():
65792
public

### Дивіться також

- [ReflectionClass::getModifiers()](reflectionclass.getmodifiers.md) -
Повертає інформацію про модифікаторів класу
- [ReflectionClassConstant::getModifiers()](reflectionclassconstant.getmodifiers.md) -
Отримує модифікатори константи класу
- [ReflectionMethod::getModifiers()](reflectionmethod.getmodifiers.md) -
Отримує модифікатори методу
- [ReflectionProperty::getModifiers()](reflectionproperty.getmodifiers.md) -
Отримання модифікаторів властивостей класу
