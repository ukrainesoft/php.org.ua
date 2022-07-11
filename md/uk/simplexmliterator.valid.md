- [« SimpleXMLIterator::rewind](simplexmliterator.rewind.md)
- [Функції SimpleXML »](ref.simplexml.md)

- [PHP Manual](index.md)
- [SimpleXMLIterator](class.simplexmliterator.md)
- Перевіряє, чи є поточний елемент допустимим

# SimpleXMLIterator::valid

(PHP 5, PHP 7, PHP 8)

SimpleXMLIterator::valid — Перевіряє, чи є поточний елемент
допустимим

### Опис

public **SimpleXMLIterator::valid**(): bool

Цей метод перевіряє, чи є поточний елемент допустимим після
виклику [SimpleXMLIterator::rewind()](simplexmliterator.rewind.md) або
[SimpleXMLIterator::next()](simplexmliterator.next.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо поточний елемент допустимо; в іншому випадку
**`false`**

### Приклади

**Приклад #1 Перевіряє, чи поточний елемент є допустимим**

` <?php$xmlIterator u003d new SimpleXMLIterator('<books><book>Основи SQL</book></books>');$xmlIterator->rewind(); // повернення до першого елементуecho var_dump($xmlIterator->valid()); //bool(true)$xmlIterator->next(); // перейти до наступного елементуecho var_dump($xmlIterator->valid()); // bool(false), оскільки є тільки один елемент?> `
