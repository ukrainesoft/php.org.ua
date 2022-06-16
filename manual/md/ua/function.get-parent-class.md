- [«get_object_vars](function.get-object-vars.md)
- [interface_exists »](function.interface-exists.md)

- [PHP Manual](index.md)
- [Функції роботи з класами та об'єктами](ref.classobj.md)
- Повертає ім'я батьківського класу для об'єкта чи класу

#get_parent_class

(PHP 4, PHP 5, PHP 7, PHP 8)

get_parent_class — Повертає ім'я батьківського класу для об'єкта або
класу

### Опис

**get_parent_class**(object\|string `$object_or_class` u003d ?):
string\|false

Повертає ім'я батьківського класу для об'єкта чи класу.

### Список параметрів

`object_or_class`
Тестований об'єкт чи ім'я класу. Якщо викликається з методу об'єкта, то
цей параметр не є обов'язковим.

### Значення, що повертаються

Повертає ім'я батьківського класу, якщо `object_or_class` є
об'єктом чи ім'ям класу.

> **Примітка**:
>
> Якщо об'єкт не має батька або переданого класу з такою назвою не
> Існує, то повертається **`false`**.

Якщо функція викликана без параметрів поза об'єктом, ця функція повертає
**`false`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------|
| 8.0.0 | Параметр `object_or_class` тепер приймає лише об'єкти чи коректні імена класів |

### Приклади

**Приклад #1 Приклад використання **get_parent_class()****

` <?phpclass Dad {    function __construct()    {    // реализация какой-нибудь логики    }}class Child extends Dad {    function __construct()    {        echo "I'm " , get_parent_class($this) , "'s son
";    }}class Child2 extends Dad {    function __construct()   {       echo "I'm " , get_parent_class('  
";    }}$foo u003d new child();$bar u003d new child2();?> `

Результат виконання цього прикладу:

I'm Dad's son
I'm Dad's son too

### Дивіться також

- [get_class()](function.get-class.md) - Повертає ім'я класу, до
якому належить об'єкт
- [is_subclass_of()](function.is-subclass-of.md) - Перевіряє,
чи містить об'єкт у своєму дереві предків зазначений клас чи прямо
реалізує його
- [class_parents()](function.class-parents.md) - Повертає список
батьківських класів заданого класу
