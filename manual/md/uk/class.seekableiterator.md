- [«
RecursiveIterator::hasChildren](recursiveiterator.haschildren.md)
- [SeekableIterator::seek »](seekableiterator.seek.md)

- [PHP Manual](index.md)
- [Інтерфейси](spl.interfaces.md)
- Інтерфейс SeekableIterator

# Інтерфейс SeekableIterator

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

## Вступ

Ітератор Seekable.

## Огляд інтерфейсів

interface **SeekableIterator** extends [Iterator](class.iterator.md) {

/\* Методи \*/

public [seek](seekableiterator.seek.md)(int `$offset`): void

/\* Наслідувані методи \*/

public [Iterator::current](iterator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [Iterator::key](iterator.key.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [Iterator::next](iterator.next.md)(): void

public [Iterator::rewind](iterator.rewind.md)(): void

public [Iterator::valid](iterator.valid.md)(): bool

}

**Приклад #1 Просте використання**

Цей приклад демонструє створення ітератора користувача
**SeekableIterator**, який шукає позицію та обробляє
недійсну позицію.

` <?phpclass MySeekableIterator implements SeekableIterator {    private $position; private $array u003d array(        "перший елемент",        "другий елемент",  ...| /* Метод, требуемый для интерфейса SeekableIterator */    public function seek($position) {      if (!isset($this->array[$position])) {          throw new OutOfBoundsException("недействительная позиция ($position)"); }     $this->position u003d $position; }    /*  Методи, потрібні для інтерфейсу Iterator */    public function rewind() {        $this->position u003d 0; }    public function current() {        return $this->array[$this->position]; }    public function key() {        return $this->position; }    public function next() {        ++$this->position; }    public function valid() {        return isset($this->array[$this->position]); }}try {   $it u003d new MySeekableIterator; echo $it->current(), "
";   $it->seek(2);    echo $it->current(), "
";   $it->seek(1);    echo $it->current(), "
";   $it->seek(10);} catch (OutOfBoundsException $e) {   echo $e->getMessage();}?> `

Результатом виконання цього прикладу буде щось подібне:

перший елемент
третій елемент
другий елемент
недійсна позиція (10)

## Зміст

- [SeekableIterator::seek](seekableiterator.seek.md) — Переміщується
до позиції
