- [«is_a](function.is-a.md)
- [method_exists »](function.method-exists.md)

- [PHP Manual](index.md)
- [Функції роботи з класами та об'єктами](ref.classobj.md)
- Перевіряє, чи містить об'єкт у своєму дереві предків зазначений клас
або прямо реалізує його

#is_subclass_of

(PHP 4, PHP 5, PHP 7, PHP 8)

is_subclass_of — Перевіряє, чи міститься об'єкт у своєму дереві предків
зазначений клас або прямо реалізує його

### Опис

**is_subclass_of**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$object_or_class`, string `$class`, bool `$allow_string` u003d **`true`**):
bool

Перевіряє, чи об'єкт `object_or_class` містить у своєму дереві предків
клас `class` або прямо реалізує його.

### Список параметрів

`object_or_class`
Назва класу або екземпляр об'єкта. У разі відсутності такого класу
ніякої помилки згенеровано не буде.

`class`
Ім'я класу

`allow_string`
Якщо параметр встановлено в false, то не допускається назва класу у вигляді
рядки як параметр `object_or_class`. Це також запобігає
виклик автозавантажувача, якщо клас не існує.

### Значення, що повертаються

Ця функція повертає **`true`**, якщо об'єкт `object_or_class`
належить до класу, що успадковує від `class`, інакше вона повертає
**`false`**.

### Приклади

**Приклад #1 Приклад використання **is_subclass_of()****

`<?php// оголошуємо класclass WidgetFactory{ var $oink u003d 'moo';}// оголошуємо спадкоємцяclass WidgetFactory_Child extends WidgetFactory{ w| WFC u003d new WidgetFactory_Child();if (is_subclass_of($WFC, 'WidgetFactory')) {  echo "так, \$WFC успадковує WidgetFactory
";} else {  echo "ні, \$WFC не успадковує WidgetFactory
";}if(is_subclass_of($WF, 'WidgetFactory')) {  echo "так, \$WF успадковує WidgetFactory
";} else {  echo "ні, \$WF не успадковує WidgetFactory
";}if (is_subclass_of('WidgetFactory_Child', 'WidgetFactory')) {  echo ""так, WidgetFactory_Child успадковує WidgetFactory
";} else {  echo "ні, WidgetFactory_Child не успадковує WidgetFactory
";}?> `

Результат виконання цього прикладу:

так, $WFC успадковує WidgetFactory
ні, $WF не успадковує WidgetFactory
так, WidgetFactory_Child успадковує WidgetFactory

**Приклад #2 Приклад використання **is_subclass_of()** з інтерфейсами**

`<?php// Визначаємо інтерфейсinterface MyInterface{  public function MyFunction();}// Визначаємо класс з реалізацією інтерфейсуclass MyClass implements MyInterface{ MyFunction }}// Створюємо об'єкт $ my_object u003d MyClass; MyInterface
";} else {  echo "Ні, \$my_object не є підкласом MyInterface
";}// Перевірка з допомогою імені класу у виді рядкиif (is_subclass_of('MyClass', 'MyInterface')) { echo "Так, MyClass є підкласом 
";} else {  echo "Ні, MyClass не є підкласом MyInterface
";}?> `

Результат виконання цього прикладу:

Так, $my_object є підкласом MyInterface
Так, MyClass є підкласом MyInterface

### Примітки

> **Примітка**:
>
> Виклик цієї функції використовуватиме всі зареєстровані [функції
> автозавантаження](language.oop5.autoload.md), якщо клас ще не
> відомий.

### Дивіться також

- [get_class()](function.get-class.md) - Повертає ім'я класу, до
якому належить об'єкт
- [get_parent_class()](function.get-parent-class.md) - Повертає
ім'я батьківського класу для об'єкта чи класу
- [is_a()](function.is-a.md) - Перевіряє, чи об'єкт належить до
даному класу чи є цей клас одним з його батьків
- [class_parents()](function.class-parents.md) - Повертає список
батьківських класів заданого класу
