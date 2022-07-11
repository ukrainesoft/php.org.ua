- [«
SimpleXMLIterator::hasChildren](simplexmliterator.haschildren.md)
- [SimpleXMLIterator::next »](simplexmliterator.next.md)

- [PHP Manual](index.md)
- [SimpleXMLIterator](class.simplexmliterator.md)
- Повертає поточний ключ

# SimpleXMLIterator::key

(PHP 5, PHP 7, PHP 8)

SimpleXMLIterator::key — Повертає поточний ключ

### Опис

public **SimpleXMLIterator::key**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Цей метод отримує ім'я XML тега поточного елемента.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ім'я XML-тегу елемента, на який посилається поточний об'єкт
[SimpleXMLIterator](class.simplexmliterator.md), або **`false`**

### Приклади

**Приклад #1 Отримує ім'я поточного XML-тегу**

` <?php$xmlIterator u003d new SimpleXMLIterator('<books><book>Основи PHP</book><book>Основи XML</book></books>');echo var_dump($xmlIterator->key()) ;$xmlIterator->rewind(); // повернення до першого елементуecho var_dump($xmlIterator->key());?> `

Результат виконання цього прикладу:

bool(false)
string(4) "book"
