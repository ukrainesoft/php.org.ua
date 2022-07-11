- [«get_mangled_object_vars](function.get-mangled-object-vars.md)
- [get_parent_class »](function.get-parent-class.md)

- [PHP Manual](index.md)
- [Функції роботи з класами та об'єктами](ref.classobj.md)
- Повертає властивості вказаного об'єкту

#get_object_vars

(PHP 4, PHP 5, PHP 7, PHP 8)

get_object_vars — Повертає властивості вказаного об'єкту

### Опис

**get_object_vars**(object `$object`): array

Повертає видимі нестатичні властивості зазначеного об'єкту `object`
відповідно до області видимості.

### Список параметрів

`object`
Примірник об'єкту

### Значення, що повертаються

Повертає асоціативний масив нестатичних властивостей об'єкту `object`,
доступних у цій галузі видимості.

### Приклади

**Приклад #1 Приклад використання **get_object_vars()****

`<?phpclass foo {    private $a; public $b u003d 1; public $c; private$d; static $e; public function test() {         var_dump(get_object_vars($this)); }}$test u003d new foo;var_dump(get_object_vars($test));$test->test();?> `

Результат виконання цього прикладу:

array(2) {
["b"]u003d>
int(1)
["c"]u003d>
NULL
}
array(4) {
["a"]u003d>
NULL
["b"]u003d>
int(1)
["c"]u003d>
NULL
["d"]u003d>
NULL
}

> **Примітка**:
>
> Неініціалізовані властивості вважаються недоступними і тому
> включаються до масиву.

### Дивіться також

- [get_class_methods()](function.get-class-methods.md) - Повертає
масив імен методів класу
- [get_class_vars()](function.get-class-vars.md) - Повертає
оголошені за замовчуванням властивості класу
