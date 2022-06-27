- [«
RecursiveArrayIterator::getChildren](recursivearrayiterator.getchildren.md)
- [RecursiveCachingIterator »](class.recursivecachingiterator.md)

- [PHP Manual](index.md)
- [RecursiveArrayIterator](class.recursivearrayiterator.md)
- Визначає, чи є поточний елемент масивом чи об'єктом

# RecursiveArrayIterator::hasChildren

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

RecursiveArrayIterator::hasChildren — Визначає, чи є поточний
елемент масивом чи об'єктом

### Опис

public **RecursiveArrayIterator::hasChildren**(): bool

Визначає, чи є поточний елемент масивом (array) чи об'єктом
(object). Ці відомості необхідно перевіряти, перш ніж викликати метод
[RecursiveArrayIterator::getChildren()](recursivearrayiterator.getchildren.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо поточний елемент є масивом (array)
або об'єктом (object), **`false`** інакше.

### Приклади

**Приклад #1 Приклад використання
**RecursiveArrayIterator::hasChildren()****

` <?php$fruits u003d array("a" u003d> "lemon", "b" u003d> "orange", array("a" u003d> "apple", "p" u003d> "pear"));$ iterator u003d new RecursiveArrayIterator($fruits);while ($iterator->valid()) {    // проверим, есть ли дочерние элементы    if ($iterator->hasChildren()) {        // выведем информацию о дочерних элементах        foreach ($iterator ->getChildren() as $key u003d> $value) {            echo $key . ' : ' . $value . "
;;        }    }}else {        echo "Дочірніх елементів ні.
";    }    $iterator->next();}?> `

Результат виконання цього прикладу:

Дочірніх елементів немає.
Дочірніх елементів немає.
a: apple
p: pear

### Дивіться також

- [RecursiveArrayIterator::getChildren()](recursivearrayiterator.getchildren.md) -
Повертає ітератор для поточного елемента, якщо цей елемент
є масивом (array) чи об'єктом (object)
