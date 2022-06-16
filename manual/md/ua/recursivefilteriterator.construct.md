- [«RecursiveFilterIterator](class.recursivefilteriterator.md)
- [RecursiveFilterIterator::getChildren
»](recursivefilteriterator.getchildren.md)

- [PHP Manual](index.md)
- [RecursiveFilterIterator](class.recursivefilteriterator.md)
- Створює об'єкт RecursiveFilterIterator на основі об'єкта-ітератора
RecursiveIterator

# RecursiveFilterIterator::\_\_construct

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

RecursiveFilterIterator::\_\_construct — Створює об'єкт
RecursiveFilterIterator на основі об'єкта-ітератора RecursiveIterator

### Опис

public
**RecursiveFilterIterator::\_\_construct**([RecursiveIterator](class.recursiveiterator.md)
`$iterator`)

Створює ітератор
[RecursiveFilterIterator](class.recursivefilteriterator.md) на основі
[RecursiveIterator](class.recursiveiterator.md).

### Список параметрів

`iterator`
Об'єкт-ітератор [RecursiveIterator](class.recursiveiterator.md),
елементи якого потрібно відфільтрувати.

### Приклади

**Приклад #1 Приклад використання **RecursiveFilterIterator()****

` <?phpclass TestsOnlyFilter extends RecursiveFilterIterator {    public function accept() {        // текущий элемент пройдёт фильтр, если имеет дочерние элементы или        // его значение начинается со строки "test"        return $this->hasChildren() || (strpos($this->current(), "test") !u003du003d FALSE); }}$array    u003d array("test1", array("taste2", test3", test4"), test5");$iteratoru003du003dnew RecursiveArrayIterator($array);$filter $$ ;foreach(new RecursiveIteratorIterator($filter) as $key u003d> $value){   echo $value . "
";}?> `

Результатом виконання цього прикладу буде щось подібне:

test1
test3
test4
test5

**Приклад #2 Ще приклад з **RecursiveFilterIterator()****

` <?phpclass StartsWithFilter extends RecursiveFilterIterator {    protected $word; public function __construct(RecursiveIterator $rit, $word) {         $this->word u003d $word; parent::__construct($rit); }    public function accept() {        return $this->hasChildren() OR strpos($this->current(), $this->word) u003du003du003d 0; }    public function getChildren() {        return new self($this->getInnerIterator()->getChildren(), $this->word); }}$array    u003d array("test1", array("taste2", test3", test4"), test5");$iteratoru003du003dnew RecursiveArrayIterator($array);$filter   "test");foreach(new RecursiveIteratorIterator($filter) as $key u003d> $value){   echo $value . "
";}?> `

Результатом виконання цього прикладу буде щось подібне:

test1
test3
test4
test5

### Дивіться також

- [RecursiveFilterIterator::getChildren()](recursivefilteriterator.getchildren.md) -
Повертає дочірні елементи внутрішнього ітератора як об'єкта
RecursiveFilterIterator
- [RecursiveFilterIterator::hasChildren()](recursivefilteriterator.haschildren.md) -
Перевіряє, чи має поточний елемент внутрішнього ітератора.
дочірні елементи
- [FilterIterator::accept()](filteriterator.accept.md) - Перевіряє,
чи є поточний елемент ітератора допустимим
