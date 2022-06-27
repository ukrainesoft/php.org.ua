- [«get_called_class](function.get-called-class.md)
- [get_class_vars »](function.get-class-vars.md)

- [PHP Manual](index.md)
- [Функції роботи з класами та об'єктами](ref.classobj.md)
- Повертає масив імен методів класу

#get_class_methods

(PHP 4, PHP 5, PHP 7, PHP 8)

get_class_methods - Повертає масив імен методів класу

### Опис

**get_class_methods**(object\|string `$object_or_class`): array

Повертає масив назв методів класу.

### Список параметрів

`object_or_class`
Ім'я класу чи об'єкт

### Значення, що повертаються

Повертає масив імен методів, оголошених у класі object_or_class.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- |
| 8.0.0 | Параметр object_or_class тепер приймає тільки об'єкти або коректні імена класів. |

### Приклади

**Приклад #1 Приклад використання **get_class_methods()****

`<?phpclass myclass {    // конструктор   function __construct()   {        return(true); }    // метод 1    function myfunc1()    {        return(true); }    // метод 2    function myfunc2()    {        return(true); }}$class_methods u003d get_class_methods('myclass');// або$class_methods u003d get_class_methods(new myclass());foreach ($class_methods as $method_name) {             
";}?> `

Результат виконання цього прикладу:

myclass
myfunc1
myfunc2

### Дивіться також

- [get_class()](function.get-class.md) - Повертає ім'я класу, до
якому належить об'єкт
- [get_class_vars()](function.get-class-vars.md) - Повертає
оголошені за замовчуванням властивості класу
- [get_object_vars()](function.get-object-vars.md) - Повертає
властивості вказаного об'єкта
