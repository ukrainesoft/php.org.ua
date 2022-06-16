- [« Оператори, що працюють із масивами](language.operators.array.md)
- [Керуючі конструкції »](language.control-structures.md)

- [PHP Manual](index.md)
- [Оператори](language.operators.md)
- оператор перевірки типу

## Оператор перевірки типу

Оператор `instanceof` використовується для визначення того, чи є
поточний об'єкт екземпляром зазначеного
[класу](language.oop5.basic.md#language.oop5.basic.class).

**Приклад #1 Використання `instanceof` з класами**

` <?phpclass MyClass{}class NotMyClass{}$a u003d new MyClass;var_dump($a instanceof MyClass);var_dump($a instanceof NotMyClass);?> `

Результат виконання цього прикладу:

bool(true)
bool(false)

Оператор `instanceof` також може бути використаний для визначення,
чи успадковує певний об'єкт якийсь клас:

**Приклад #2 Використання `instanceof` з успадкованими класами**

` <?phpclass ParentClass{}class MyClass extends ParentClass{}$a u003d new MyClass;var_dump($a instanceof MyClass);var_dump($a instanceof ParentClass);?> `

Результат виконання цього прикладу:

bool(true)
bool(true)

Для перевірки *неналежності* об'єкта деякому класу, використовуйте
[логічний оператор `not`] (language.operators.logical.md).

**Приклад #3 Використання `instanceof` для перевірки того, що об'єкт
*не* є екземпляром класу**

` <?phpclass MyClass{}$a u003d new MyClass;var_dump(!($a instanceof stdClass));?> `

Результат виконання цього прикладу:

bool(true)

Нарешті, `instanceof` може бути також використаний для перевірки
реалізації об'єктом деякого
[інтерфейсу](language.oop5.interfaces.md):

**Приклад #4 Використання `instanceof` з інтерфейсами**

`<?phpinterface MyInterface{}class MyClass implements MyInterface{}$a u003d new MyClass;var_dump($a instanceof MyClass);var_dump($a instanceof MyInterface);?> `

Результат виконання цього прикладу:

bool(true)
bool(true)

Хоча `instanceof` зазвичай використовується з прямо вказаним ім'ям класу,
він також може бути використаний з іншим об'єктом або рядковим
змінної:

**Приклад #5 Використання `instanceof` з іншими змінними**

` <?phpinterface MyInterface{}class MyClass implements MyInterface{}$a u003d new MyClass;$b u003d new MyClass;$c u003d 'MyClass';$d u003d 'NotMyClass';var_dump($a // $b - об'єкт класу MyClassvar_dump($a instanceof $c); // $c - рядок 'MyClass'var_dump($a instanceof $d); // $d - рядок 'NotMyClass'?> `

Результат виконання цього прикладу:

bool(true)
bool(true)
bool(false)

Оператор instanceof не генерує жодних помилок, якщо перевіряється
змінна перестав бути об'єктом. І тут він просто повертає
**`false`**. Проте Константи не допускалися до PHP 7.3.0.

**Приклад #6 Приклад використання оператора `instanceof` для перевірки
інших змінних**

` <?php$a u003d 1;$b u003d NULL;$c u003d imagecreate(5, 5);var_dump($a instanceof stdClass); // $a - ціле типу integervar_dump($b instanceof stdClass); // $b - NULLvar_dump($c instanceof stdClass); // $c - значення типу resourcevar_dump(FALSE instanceof stdClass);?> `

Результат виконання цього прикладу:

bool(false)
bool(false)
bool(false)
PHP Fatal error: instanceof expects an object instance, constant given

Починаючи з PHP 7.3.0, константи дозволені у лівій частині оператора
`instanceof`.

**Приклад #7 Використання `instanceof` для перевірки констант**

`<?phpvar_dump(FALSE instanceof stdClass);?> `

Результат виконання цього прикладу в PHP 7.3:

bool(false)

Починаючи з PHP 8.0.0, `instanceof` тепер можна використовувати з
довільними висловлюваннями. Вираз має бути поміщений у круглі
дужки і є рядком (string).

**Приклад #8 Приклад використання `instanceof` з довільним
виразом**

`<?phpclass ClassA extends \stdClass {}class ClassB extends \stdClass {}class ClassC extends ClassB {}class ClassD extends ClassA {}function getSomeClass():         std' . 'Class'));var_dump(new ClassB instanceof ('Class' . 'B'));var_dump(new ClassC instanceof ('Class' . 'A'));var_dump(new ClassD in ));?> `

Результат виконання цього прикладу в PHP 8:

bool(true)
bool(true)
bool(false)
bool(true)

Оператор `instanceof` аналогічний до функції [is_a()](function.is-a.md).

### Дивіться також

- [get_class()](function.get-class.md)
- [is_a()](function.is-a.md)
