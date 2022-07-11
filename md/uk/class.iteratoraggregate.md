- [« Iterator::valid](iterator.valid.md)
- [IteratorAggregate::getIterator
»](iteratoraggregate.getiterator.md)

- [PHP Manual](index.md)
- [Вбудовані інтерфейси та класи](reserved.interfaces.md)
- Інтерфейс IteratorAggregate

# Інтерфейс IteratorAggregate

(PHP 5, PHP 7, PHP 8)

## Вступ

Інтерфейс створення зовнішнього ітератора.

## Огляд інтерфейсів

interface **IteratorAggregate** extends
[Traversable](class.traversable.md) {

/\* Методи \*/

public [getIterator](iteratoraggregate.getiterator.md)():
[Traversable](class.traversable.md)

}

**Приклад #1 Основи використання**

`<?phpclass myData implements IteratorAggregate {    public $property1 u003d "Перша загальнодоступна властивість"; public $property2 u003d "Друга загальнодоступна властивість"; public $property3 u003d "Третя загальнодоступна властивість"; public function __construct() {         $this->property4 u003d "останнє властивість"; }    public function getIterator() {        return new ArrayIterator($this); }}$obj u003d new myData;foreach($obj as $key u003d> $value) {    var_dump($key, $value); echo "
";}?> `

Результатом виконання цього прикладу буде щось подібне:

string(9) "property1"
string(56) "Перша загальнодоступна властивість"

string(9) "property2"
string(56) "Друга загальнодоступна властивість"

string(9) "property3"
string(56) "Третя загальнодоступна властивість"

string(9) "property4"
string(35) "остання властивість"

## Зміст

- [IteratorAggregate::getIterator](iteratoraggregate.getiterator.md)
— Отримує зовнішній ітератор
