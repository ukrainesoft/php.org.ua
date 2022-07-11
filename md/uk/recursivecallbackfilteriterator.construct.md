- [«
RecursiveCallbackFilterIterator](class.recursivecallbackfilteriterator.md)
- [RecursiveCallbackFilterIterator::getChildren
»](recursivecallbackfilteriterator.getchildren.md)

- [PHP Manual](index.md)
- [RecursiveCallbackFilterIterator](class.recursivecallbackfilteriterator.md)
- Створює об'єкт класу RecursiveCallbackFilterIterator на основі
об'єкту RecursiveIterator

# RecursiveCallbackFilterIterator::\_\_construct

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

RecursiveCallbackFilterIterator::\_\_construct — Створює об'єкт класу
RecursiveCallbackFilterIterator на основі об'єкта RecursiveIterator

### Опис

public
**RecursiveCallbackFilterIterator::\_\_construct**([RecursiveIterator](class.recursiveiterator.md)
`$iterator`, [callable](language.types.callable.md) `$callback`)

Створює фільтруючий ітератор на основі об'єкта-ітератора
[RecursiveIterator](class.recursiveiterator.md), використовуючи функцію
callback для відбору потрібних елементів.

### Список параметрів

`iterator`
Рекурсивний ітератор, якого потрібно застосувати фільтр.

`callback`
Callback-функція, яка повинна повертати **`true`**, якщо поточний
елемент підходить під умови фільтра, і **`false`**, якщо елемент потрібний
виключити із перебору. Дивіться
[Приклади](class.recursivecallbackfilteriterator.md#recursivecallbackfilteriterator.examples).

Може бути будь-яким допустимим [callable](language.types.callable.md)
значенням.

### Дивіться також

- [Приклади використання
RecursiveCallbackFilterIterator](class.recursivecallbackfilteriterator.md#recursivecallbackfilteriterator.examples)
- [RecursiveCallbackFilterIterator::getChildren()](recursivecallbackfilteriterator.getchildren.md) -
Повертає дочірні елементи ітератора, що зберігається всередині
RecursiveCallbackFilterIterator
- [RecursiveCallbackFilteriterator::hasChildren()](recursivecallbackfilteriterator.haschildren.md) -
Перевіряє, чи містить поточний елемент внутрішнього ітератора
дочірні елементи
