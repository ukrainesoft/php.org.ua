- [« ReflectionClass::newInstance](reflectionclass.newinstance.md)
- [ReflectionClass::newInstanceWithoutConstructor
»](reflectionclass.newinstancewithoutconstructor.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- створює екземпляр класу з переданими параметрами

# ReflectionClass::newInstanceArgs

(PHP 5 \>u003d 5.1.3, PHP 7, PHP 8)

ReflectionClass::newInstanceArgs — Створює екземпляр класу з
переданими параметрами

### Опис

public **ReflectionClass::newInstanceArgs**(array `$args` u003d \[\]):
?object

Створює новий екземпляр класу. Прийняті аргументи передаються в
конструктор класу.

### Список параметрів

`args`
Масив (array) аргументів, який потім передається до конструктора
класу.

### Значення, що повертаються

Повертає новий екземпляр класу або **`null`** у разі виникнення
помилки.

### Помилки

Якщо конструктор не є public (загальнодоступним), це призведе до
генерації виключення
[ReflectionException](class.reflectionexception.md).

Якщо конструктор відсутній, а параметр args має один і більше
аргументів, це призведе до генерації виключення
[ReflectionException](class.reflectionexception.md).

### Приклади

**Приклад #1 Приклад використання
**ReflectionClass::newInstanceArgs()****

` <?php$class u003d new ReflectionClass('ReflectionFunction');$instance u003d $class->newInstanceArgs(array('substr'));var_dump($instance);?> `

Результат виконання цього прикладу:

object(ReflectionFunction)#2 (1) {
["name"]u003d>
string(6) "substr"
}

### Дивіться також

- [ReflectionClass::newInstance()](reflectionclass.newinstance.md) -
Створює екземпляр класу з переданими аргументами
- [ReflectionClass::newInstanceWithoutConstructor()](reflectionclass.newinstancewithoutconstructor.md) -
Створює новий екземпляр класу без виклику конструктора
