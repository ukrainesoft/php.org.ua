- [«get_class_methods](function.get-class-methods.md)
- [get_class »](function.get-class.md)

- [PHP Manual](index.md)
- [Функції роботи з класами та об'єктами](ref.classobj.md)
- Повертає оголошені за умовчанням властивості класу

#get_class_vars

(PHP 4, PHP 5, PHP 7, PHP 8)

get_class_vars — Повертає оголошені за умовчанням властивості класу

### Опис

**get_class_vars**(string `$class`): array

Повертає оголошені за умовчанням властивості зазначеного класу.

### Список параметрів

`class`
Ім'я класу

### Значення, що повертаються

Повертає асоціативний масив оголошених властивостей класу, видимих з
поточної області видимості, з їх значенням за промовчанням. Отримані
елементи масиву мають форму `varnameu003d>value`. У разі виникнення
помилки повертається **`false`**.

### Приклади

**Приклад #1 Приклад використання **get_class_vars()****

`<?phpclass myclass {    var $var1; // змінна не має початкового значення...    var $var2 u003d "xyz"; var$$var3u003d100; private$var4; // конструктор    function __construct() {         // змінимо значення деяких властивостей| $this->var2u003du003d"bar"; return true; }}$my_class u003d new myclass();$class_vars u003d get_class_vars(get_class($my_class));foreach ($class_vars as $name u003d> $value) {    echo "$$ 
";}?> `

Результат виконання цього прикладу:

var1 :
var2 : xyz
var3 : 100

**Приклад #2 **get_class_vars()** та поведінка області видимості**

` <?phpfunction format($array){ return implode('|', array_keys($array)) . "
";}class TestCase{    public $a    u003d 1;    protected $b u003d 2;    private $c   u003d 3;    public static function expose()    {        echo format(get_class_vars(__CLASS__));    }}TestCase::expose();echo format(get_class_vars('TestCase'));?> `

Результат виконання цього прикладу:

// 5.0.0
a| * b | TestCase c
a| * b | TestCase c

// 5.0.1 - 5.0.2
a|b|c
a|b|c

// 5.0.3 +
a|b|c
a

### Дивіться також

- [get_class_methods()](function.get-class-methods.md) - Повертає
масив імен методів класу
- [get_object_vars()](function.get-object-vars.md) - Повертає
властивості вказаного об'єкта
