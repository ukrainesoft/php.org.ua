- [«class_alias](function.class-alias.md)
- [enum_exists »](function.enum-exists.md)

- [PHP Manual](index.md)
- [Функції роботи з класами та об'єктами](ref.classobj.md)
- Перевіряє, чи був оголошений клас

#class_exists

(PHP 4, PHP 5, PHP 7, PHP 8)

class_exists — Перевіряє, чи був оголошений клас

### Опис

**class_exists**(string `$class`, bool `$autoload` u003d **`true`**): bool

Ця функція перевіряє, чи був оголошений зазначений клас чи ні.

### Список параметрів

`class`
Назва класу. Сприймається без урахування регістру.

`autoload`
Чи викликати за промовчанням [\_\_autoload](language.oop5.autoload.md).

### Значення, що повертаються

Повертає **`true`**, якщо клас `class` оголошений, інакше **`false`**.

### Приклади

**Приклад #1 Приклад використання **class_exists()****

` <?php// Перевіряємо існування класу перед його використаннямif (class_exists('MyClass')) {    $myclass u003d new MyClass();}?> `

**Приклад #2 Приклад використання з параметром `autoload`**

` <?phpspl_autoload_register(function ($class_name) {    include $class_name . '.php';    // Проверяем необходимость подключения указанного класса    if (!class_exists($class_name, false)) {        throw new LogicException("Unable to load class: $ class_name");    }});if(class_exists(MyClass::class)) {   $myclass u003d new MyClass();}?> `

### Дивіться також

- [function_exists()](function.function-exists.md) - Повертає
true, якщо зазначена функція визначена
- [enum_exists()](function.enum-exists.md) - Перевіряє, чи визначено
чи перерахування
- [interface_exists()](function.interface-exists.md) - Перевіряє,
чи визначено інтерфейс
- [get_declared_classes()](function.get-declared-classes.md) -
Повертає масив із іменами оголошених класів
