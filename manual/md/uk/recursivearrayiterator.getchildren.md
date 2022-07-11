- [«RecursiveArrayIterator](class.recursivearrayiterator.md)
- [RecursiveArrayIterator::hasChildren
»](recursivearrayiterator.haschildren.md)

- [PHP Manual](index.md)
- [RecursiveArrayIterator](class.recursivearrayiterator.md)
- Повертає ітератор до поточного елемента, якщо цей елемент
є масивом (array) чи об'єктом (object)

# RecursiveArrayIterator::getChildren

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

RecursiveArrayIterator::getChildren — Повертає ітератор для поточного
елемента, якщо цей елемент є масивом (array) чи об'єктом
(object)

### Опис

public **RecursiveArrayIterator::getChildren**():
?[RecursiveArrayIterator](class.recursivearrayiterator.md)

Повертає ітератор до поточного елемента.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Ітератор для поточного елемента, якщо цей елемент є масивом
(array) чи об'єктом (object); Повертає **`null`** у разі
виникнення помилки.

### Помилки

Метод викидає виняток
[InvalidArgumentException](class.invalidargumentexception.md), якщо
поточний елемент не містить масивів (array) чи об'єктів (object).

### Приклади

**Приклад #1 Приклад використання
**RecursiveArrayIterator::getChildren()****

` <?php$fruits u003d array("a" u003d> "lemon", "b" u003d> "orange", array("a" u003d> "apple", "p" u003d> "pear"));$ iterator u003d new RecursiveArrayIterator($fruits);while ($iterator->valid()) {    if ($iterator->hasChildren()) {        // выводим информацию о всех дочерних элементах        foreach ($iterator->getChildren() as $ key u003d> $value) {            echo$key. ' : ' . $value . "
;;        }    }}else {        echo "Дочірніх елементів не виявлено.
";    }    $iterator->next();}?> `

Результат виконання цього прикладу:

Дочірніх елементів не виявлено.
Дочірніх елементів не виявлено.
a: apple
p: pear

### Дивіться також

- [RecursiveArrayIterator::hasChildren()](recursivearrayiterator.haschildren.md) -
Визначає, чи є поточний елемент масивом чи об'єктом
