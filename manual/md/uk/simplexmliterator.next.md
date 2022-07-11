- [« SimpleXMLIterator::key](simplexmliterator.key.md)
- [SimpleXMLIterator::rewind »](simplexmliterator.rewind.md)

- [PHP Manual](index.md)
- [SimpleXMLIterator](class.simplexmliterator.md)
- Переміщує ітератор до наступного елементу

# SimpleXMLIterator::next

(PHP 5, PHP 7, PHP 8)

SimpleXMLIterator::next — Переміщення ітератора до наступного елемента

### Опис

public **SimpleXMLIterator::next**(): void

Цей метод переміщує [SimpleXMLIterator](class.simplexmliterator.md)
до наступного елемента.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Переміщення до наступного елемента**

` <?php$xmlIterator u003d new SimpleXMLIterator('<books><book>Основи PHP</book><book>Основи XML</book></books>');$xmlIterator->rewind(); // повернення до першого елементу$xmlIterator->next();var_dump($xmlIterator->current());?> `

Результат виконання цього прикладу:

object(SimpleXMLIterator)#2 (1) {
[0]u003d>
string(10) "Основи XML"
}
