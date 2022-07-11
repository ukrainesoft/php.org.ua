- [«ArrayAccess](class.arrayaccess.md)
- [ArrayAccess::offsetGet »](arrayaccess.offsetget.md)

- [PHP Manual](index.md)
- [ArrayAccess](class.arrayaccess.md)
- Визначає, чи існує задане усунення (ключ)

# ArrayAccess::offsetExists

(PHP 5, PHP 7, PHP 8)

ArrayAccess::offsetExists - Визначає, чи існує задане зміщення
(ключ)

### Опис

public
**ArrayAccess::offsetExists**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$offset`): bool

Визначає, чи існує дане зміщення (ключ).

Цей метод виконується при використанні
[isset()](function.isset.md) або [empty()](function.empty.md) на
об'єкти, що реалізують інтерфейс [ArrayAccess](class.arrayaccess.md).

> **Примітка**:
>
> При використанні функції [empty()](function.empty.md) викликається
> метод [ArrayAccess::offsetGet()](arrayaccess.offsetget.md) та
> перевірка на порожнечу відбудеться, лише якщо метод
> **ArrayAccess::offsetExists()** поверне **`true`**.

### Список параметрів

`offset`
Переміщення (ключ) для перевірки.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

> **Примітка**:
>
> Значення, що повертається, буде приведено до логічного типу (bool), якщо
> значення, що повертається не є логічним.

### Приклади

**Приклад #1 Приклад використання **ArrayAccess::offsetExists()****

";var_dump(isset($obj["foobar"]));echo "
}    public function offsetUnset($var): void {        var_dump(__METHOD__); Виконується obj::offsetExists() і obj::offsetGet()
`<?phpclass obj implements ArrayAccess {    public function offsetSet($offset, $value): void {       var_dump(__METHOD__); ";var_dump(empty($obj["foobar"]));echo "
}   #[\ReturnTypeWillChange]    public function offsetGet($var) {       var_dump(__METHOD__); }    public function offsetExists($var): bool {        var_dump(__METHOD__); Виконується obj::offsetExists(), але *не* obj:offsetGet(), оскільки не повертати
return "value"; if ($var u003du003d "foobar") {            return true; ";var_dump(empty($obj["foobaz"]));?> `}}$obj u003d new obj;echo "Виконується obj::offsetExists()
}    return false; 

Результатом виконання цього прикладу буде щось подібне:

Виконується obj::offsetExists()
string(17) "obj::offsetExists"
bool(true)

Виконується obj::offsetExists() та obj::offsetGet()
string(17) "obj::offsetExists"
string(14) "obj::offsetGet"
bool(false)

Виконується obj::offsetExists(), але *не* obj:offsetGet(), оскільки нічого повертати
string(17) "obj::offsetExists"
bool(true)
