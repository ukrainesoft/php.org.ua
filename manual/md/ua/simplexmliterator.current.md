- [« SimpleXMLIterator](class.simplexmliterator.md)
- [SimpleXMLIterator::getChildren
»](simplexmliterator.getchildren.md)

- [PHP Manual](index.md)
- [SimpleXMLIterator](class.simplexmliterator.md)
- Повертає поточний елемент

# SimpleXMLIterator::current

(PHP 5, PHP 7, PHP 8)

SimpleXMLIterator::current — Повертає поточний елемент

### Опис

public **SimpleXMLIterator::current**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Цей метод повертає поточний елемент як об'єкт класу
[SimpleXMLIterator](class.simplexmliterator.md) або **`null`**.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає поточний елемент як об'єкт класу
[SimpleXMLIterator](class.simplexmliterator.md) або **`null`**
у разі виникнення помилки.

### Приклади

**Приклад #1 Повернення поточного елемента**

` <?php$xmlIterator u003d new SimpleXMLIterator('<books><book>Основи PHP</book><book>Основи XML</book></books>');var_dump($xmlIterator->current()); $xmlIterator->rewind(); // скидає курсор до першому елементу var_dump($xmlIterator->current());?> `

Результат виконання цього прикладу:

NULL
object(SimpleXMLIterator)#2 (1) {
[0]u003d>
string(10) "Основи PHP"
}

### Дивіться також

- [SimpleXMLIterator::key()](simplexmliterator.key.md) - Повертає
поточний ключ
- [SimpleXMLIterator::next()](simplexmliterator.next.md) -
Переміщує ітератор до наступного елемента
- [SimpleXMLIterator::rewind()](simplexmliterator.rewind.md) -
Повертає ітератор до першого елементу
- [SimpleXMLIterator::valid()](simplexmliterator.valid.md) -
Перевіряє, чи є поточний елемент допустимим
- [SimpleXMLElement](class.simplexmlelement.md)
