- [«
SimpleXMLIterator::getChildren](simplexmliterator.getchildren.md)
- [SimpleXMLIterator::key »](simplexmliterator.key.md)

- [PHP Manual](index.md)
- [SimpleXMLIterator](class.simplexmliterator.md)
- Перевіряє, чи поточний елемент має вкладені елементи

# SimpleXMLIterator::hasChildren

(PHP 5, PHP 7, PHP 8)

SimpleXMLIterator::hasChildren — Перевіряє, чи має поточний елемент
вкладені елементи

### Опис

public **SimpleXMLIterator::hasChildren**(): bool

Цей метод перевіряє, чи має поточний елемент
[SimpleXMLIterator](class.simplexmliterator.md) вкладені елементи.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**`true`**, якщо поточний елемент має вкладені елементи; в
в іншому випадку **`false`**

### Приклади

**Приклад #1 Перевіряє, чи поточний елемент має вкладені елементи**

`<?php$xml u003d <<<<XML<books>    <book>        <title>Основи PHP</title>        <author>Джим Сміт</author> >>>>> books>XML;$xmlIterator u003d new SimpleXMLIterator( $xml );for( $xmlIterator->rewind(); $xmlIterator->valid(); $xmlIterator->next() ) ) {    var_dump($xmlIterator->current()); }}?> `

Результат виконання цього прикладу:

object(SimpleXMLIterator)#2 (2) {
["title"]u003d>
string(10) "Основи PHP"
["author"]u003d>
string(9) "Джим Сміт"
}
