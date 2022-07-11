- [« SimpleXMLIterator::current](simplexmliterator.current.md)
- [SimpleXMLIterator::hasChildren
»](simplexmliterator.haschildren.md)

- [PHP Manual](index.md)
- [SimpleXMLIterator](class.simplexmliterator.md)
- Повертає вкладені елементи поточного елемента

# SimpleXMLIterator::getChildren

(PHP 5, PHP 7, PHP 8)

SimpleXMLIterator::getChildren — Повертає вкладені елементи поточного
елемента

### Опис

public **SimpleXMLIterator::getChildren**():
[SimpleXMLIterator](class.simplexmliterator.md)

Цей метод повертає об'єкт
[SimpleXMLIterator](class.simplexmliterator.md), що містить вкладені
елементи поточного елемента
[SimpleXMLIterator](class.simplexmliterator.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає об'єкт [SimpleXMLIterator](class.simplexmliterator.md),
що містить вкладені елементи поточного елемента.

### Приклади

**Приклад #1 Повертає вкладені елементи поточного елемента**

`<?php$xml u003d <<<<XML<books>    <book>        <title>Основи PHP</title>        <author>Джим Сміт</author> >>> books>XML;$xmlIteratoru003du003dnew SimpleXMLIterator($xml);for( $xmlIterator->rewind(); $xmlIterator->valid(); $xmlIterator->next() ) {     foreach as $name u003d> $data) {    echo "$name: '$data' з класу " . get_class($data) . "
";    }}?> `

Результат виконання цього прикладу:

title: 'Основи PHP' з класу SimpleXMLIterator
author: 'Джим Сміт' з класу SimpleXMLIterator
