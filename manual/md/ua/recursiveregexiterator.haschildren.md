- [«
RecursiveRegexIterator::getChildren](recursiveregexiterator.getchildren.md)
- [RecursiveTreeIterator »](class.recursivetreeiterator.md)

- [PHP Manual](index.md)
- [RecursiveRegexIterator](class.recursiveregexiterator.md)
- Визначає, чи можлива навігація вмісту поточного елемента

# RecursiveRegexIterator::hasChildren

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

RecursiveRegexIterator::hasChildren — Визначає, чи можлива навігація
за вмістом поточного елемента

### Опис

public **RecursiveRegexIterator::hasChildren**(): bool

Визначає, чи можлива навігація вмісту поточного елемента. В
якщо поточний елемент має дочірні елементи, ітератор для них
можна отримати методом
[RecursiveRegexIterator::getChildren()](recursiveregexiterator.getchildren.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо можлива навігація за вмістом поточного
елемента, **`false`** інакше.

### Приклади

**Приклад #1 Приклад використання
**RecursiveRegexIterator::hasChildren()****

` <?php$rArrayIterator u003d new RecursiveArrayIterator(array('test1', array('tet3', 'test4', 'test5')));$rRegexIterator u003d new RecursiveRegexItera   ::ALL_MATCHES);foreach ($rRegexIterator as $value) {    var_dump($rRegexIterator->hasChildren());}?> `

Результат виконання цього прикладу:

bool(false)
bool(true)

### Дивіться також

- [RecursiveRegexIterator::getChildren()](recursiveregexiterator.getchildren.md) -
Повертає ітератор для поточного елемента
