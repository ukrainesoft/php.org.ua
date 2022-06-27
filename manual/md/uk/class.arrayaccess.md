- [« Throwable::\_\_toString](throwable.tostring.md)
- [ArrayAccess::offsetExists »](arrayaccess.offsetexists.md)

- [PHP Manual](index.md)
- [Вбудовані інтерфейси та класи](reserved.interfaces.md)
- Інтерфейс ArrayAccess

# Інтерфейс ArrayAccess

(PHP 5, PHP 7, PHP 8)

## Вступ

Інтерфейс забезпечує доступ до об'єктів як масивів.

## Огляд інтерфейсів

interface **ArrayAccess** {

/\* Методи \*/

public
[offsetExists](arrayaccess.offsetexists.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$offset`): bool

public
[offsetGet](arrayaccess.offsetget.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$offset`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[offsetSet](arrayaccess.offsetset.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$offset`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public
[offsetUnset](arrayaccess.offsetunset.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$offset`): void

}

**Приклад #1 Основи використання**

` <?phpclass Obj implements ArrayAccess {    private $container u003d array(); public function __construct() {        $this->container u003d array(            "one"   u003d> 1,            "two"   u003d> 2,            "three" u003d> 3,        ); }   public function offsetSet($offset, $value) {       if (is_null($offset)) {             $$$| } else {             $this->container[$offset] u003d $value; }    }    public function offsetExists($offset) {       return isset($this->container[$offset]); }    public function offsetUnset($offset) {        unset($this->container[$offset]); }    public function offsetGet($offset) {        return isset($this->container[$offset]) ? $this->container[$offset] : null; }}$obj u003d new Obj;var_dump(isset($obj["two"]));var_dump($obj["two"]);unset($obj["two"]);var_dump(isset($obj ["two"]));$obj["two"] u003d "A value";var_dump($obj["two"]);$obj[] u003d 'Append 1';$obj[] u003d 'Append 2 ';$obj[] u003d 'Append 3';print_r($obj);?> `

Результатом виконання цього прикладу буде щось подібне:

bool(true)
int(2)
bool(false)
string(7) "A value"
obj Object
(
[container:obj:private] u003d> Array
(
[one] u003d> 1
[three] u003d> 3
[two] u003d> A value
[0] u003d> Append 1
[1] u003d> Append 2
[2] u003d> Append 3
)

)

## Зміст

- [ArrayAccess::offsetExists](arrayaccess.offsetexists.md) -
Визначає, чи існує задане усунення (ключ)
- [ArrayAccess::offsetGet](arrayaccess.offsetget.md) — Повертає
задане зміщення (ключ)
- [ArrayAccess::offsetSet](arrayaccess.offsetset.md) - Надає
значення заданого зміщення
- [ArrayAccess::offsetUnset](arrayaccess.offsetunset.md) — Видаляє
зміщення
