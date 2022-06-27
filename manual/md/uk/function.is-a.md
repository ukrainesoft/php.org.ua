- [«interface_exists](function.interface-exists.md)
- [is_subclass_of »](function.is-subclass-of.md)

- [PHP Manual](index.md)
- [Функції роботи з класами та об'єктами](ref.classobj.md)
- Перевіряє, чи належить об'єкт до даного класу, чи є
цей клас одним із його батьків

#is_a

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

is_a — Перевіряє, чи об'єкт належить до цього класу, чи є
цей клас одним із його батьків

### Опис

**is_a**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$object_or_class`, string `$class`, bool `$allow_string` u003d
**`false`**): bool

Перевіряє, чи об'єкт object_or_class належить до даного класу.
чи є цей клас одним із його батьків.

### Список параметрів

`object_or_class`
Ім'я класу чи об'єкт

`class`
Ім'я класу

`allow_string`
Якщо параметр встановлено в **`false`**, то не допускається ім'я класу
вигляді рядка як параметр `object_or_class`. це також
запобігає виклику автозавантажувача, якщо клас не існує.

### Значення, що повертаються

Повертає **`true`**, якщо об'єкт належить даному класу або
чи є цей клас одним з його батьків, інакше повертається
**`false`**.

### Приклади

**Приклад #1 Приклад використання **is_a()****

`<?php// оголошення класуclass WidgetFactory{  var $oink u003d 'moo';}// створення нового об'єкта$WF u003d new WidgetFactory();f y| $WF все ще WidgetFactory
";}?> `

**Приклад #2 Використання оператора *instanceof***

` <?phpif ($WF instanceof WidgetFactory) {    echo 'Так, $WF - WidgetFactory';}?> `

### Дивіться також

- [get_class()](function.get-class.md) - Повертає ім'я класу, до
якому належить об'єкт
- [get_parent_class()](function.get-parent-class.md) - Повертає
ім'я батьківського класу для об'єкта чи класу
- [is_subclass_of()](function.is-subclass-of.md) - Перевіряє,
чи містить об'єкт у своєму дереві предків зазначений клас чи прямо
реалізує його
