- [«enum_exists](function.enum-exists.md)
- [get_class_methods »](function.get-class-methods.md)

- [PHP Manual](index.md)
- [Функції роботи з класами та об'єктами](ref.classobj.md)
- Ім'я класу, отримане за допомогою пізнього статичного зв'язування

#get_called_class

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

get_called_class - Ім'я класу, отримане за допомогою пізнього
статичного зв'язування

### Опис

**get_called_class**(): string

Повертає ім'я класу, з якого викликано статичний метод.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ім'я класу. Повертає **`false`**, якщо було викликано поза
класу.

### Приклади

**Приклад #1 Приклад використання **get_called_class()****

`<?phpclass foo {   static public function test() {        var_dump(get_called_class()); }}class bar extends foo {}foo::test();bar::test();?> `

Результат виконання цього прикладу:

string(3) "foo"
string(3) "bar"

### Дивіться також

- [get_parent_class()](function.get-parent-class.md) - Повертає
ім'я батьківського класу для об'єкта чи класу
- [get_class()](function.get-class.md) - Повертає ім'я класу, до
якому належить об'єкт
- [is_subclass_of()](function.is-subclass-of.md) - Перевіряє,
чи містить об'єкт у своєму дереві предків зазначений клас чи прямо
реалізує його
