- [« ReflectionClass::isInstance](reflectionclass.isinstance.md)
- [ReflectionClass::isInterface »](reflectionclass.isinterface.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Перевіряє, чи можна створити екземпляр класу

# ReflectionClass::isInstantiable

(PHP 5, PHP 7, PHP 8)

ReflectionClass::isInstantiable — Перевіряє, чи можна створити екземпляр
класу

### Опис

public **ReflectionClass::isInstantiable**(): bool

Перевіряє, чи можна створити екземпляр класу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **ReflectionClass::isInstantiable()****

` <?phpclass C { }interface iface {    function f1();}class ifaceImpl implements iface {    function f1() {}}abstract class abstractClass {    function f1() { }    abstract function f2();}class D extends abstractClass { function f2() { }}trait T {    function f1() {}}class privateConstructor {    private function __construct() { }}$classes u003d array(    "C",    "iface",    "ifaceImpl",    "abstractClass",    " D",   "T",    "privateConstructor",);foreach($classes  as $class ) {    $reflectionClass u003d new ReflectionClass($class); echo "Можна ли створити примірник класу $class?  "; var_dump($reflectionClass->isInstantiable());}?> `

Результат виконання цього прикладу:

Чи можна створити екземпляр класу C? bool(true)
Чи можна створити екземпляр класу iface? bool(false)
Чи можна створити екземпляр класу ifaceImpl? bool(true)
Чи можна створити екземпляр класу abstractClass? bool(false)
Чи можна створити екземпляр класу D? bool(true)
Чи можна створити екземпляр класу T? bool(false)
Чи можна створити екземпляр класу privateConstructor? bool(false)

### Дивіться також

- [ReflectionClass::isInstance()](reflectionclass.isinstance.md) -
Перевіряє, чи об'єкт належить класу
