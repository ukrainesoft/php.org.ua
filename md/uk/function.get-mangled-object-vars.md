- [«get_declared_traits](function.get-declared-traits.md)
- [get_object_vars »](function.get-object-vars.md)

- [PHP Manual](index.md)
- [Функції роботи з класами та об'єктами](ref.classobj.md)
- Повертає масив спотворених властивостей об'єкту

#get_mangled_object_vars

(PHP 7 \>u003d 7.4.0, PHP 8)

get_mangled_object_vars — Повертає масив спотворених властивостей об'єкту

### Опис

**get_mangled_object_vars**(object `$object`): array

Повертає масив (array), в елементах якого властивості
(Змінні-члени) цього об'єкта. Ключами будуть імена змінних-членів,
з деякими примітними винятками: до закритих полів класу
(private) попереду буде дописано ім'я класу; до захищених полів класу
(protected) попереду буде додано символ `*`. Ці додані значення
з обох боків також мають `NUL` байти. Неініціалізовані
[типізовані
властивості](language.oop5.properties.md#language.oop5.properties.typed-properties)
автоматично відкидаються.

### Список параметрів

`object`
Примірник об'єкта.

### Значення, що повертаються

Повертає масив (array), що містить усі властивості об'єкта `object`,
незалежно від області видимості.

### Приклади

**Приклад #1 Приклад використання **get_mangled_object_vars()****

`<?phpclass A{    public $public u003d 1; protected $protected u003d 2; private $private u003d 3;}class B extends A{   private $private u003d 4;}$object u003d new B;$object->dynamic u003d 5;$object->{'6'}_u003d_6; object));class AO extends ArrayObject{    private $private u003d 1;}$arrayObject u003d new AO(['x' u003d> 'y']);$arrayObject->dynamic u003d _2;var_dump ; `

Результат виконання цього прикладу:

array(6) {
["Bprivate"]u003d>
int(4)
["public"]u003d>
int(1)
["*protected"]u003d>
int(2)
["Aprivate"]u003d>
int(3)
["dynamic"]u003d>
int(5)
[6]u003d>
int(6)
}
array(2) {
["AOprivate"]u003d>
int(1)
["dynamic"]u003d>
int(2)
}

### Дивіться також

- [get_class_vars()](function.get-class-vars.md) - Повертає
оголошені за замовчуванням властивості класу
- [get_object_vars()](function.get-object-vars.md) - Повертає
властивості вказаного об'єкта
