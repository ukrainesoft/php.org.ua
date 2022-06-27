- [«
RecursiveCallbackFilterIterator::\_\_construct](recursivecallbackfilteriterator.construct.md)
- [RecursiveCallbackFilterIterator::hasChildren
»](recursivecallbackfilteriterator.haschildren.md)

- [PHP Manual](index.md)
- [RecursiveCallbackFilterIterator](class.recursivecallbackfilteriterator.md)
- Повертає дочірні елементи ітератора, що зберігається всередині
RecursiveCallbackFilterIterator

# RecursiveCallbackFilterIterator::getChildren

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

RecursiveCallbackFilterIterator::getChildren — Повертає дочірні
елементи ітератора, що зберігається всередині RecursiveCallbackFilterIterator

### Опис

public **RecursiveCallbackFilterIterator::getChildren**():
[RecursiveCallbackFilterIterator](class.recursivecallbackfilteriterator.md)

Вибирає дочірні елементи внутрішнього ітератора, які підходять під умови
фільтра.

Перш ніж викликати метод, необхідно переконатися, що внутрішній
Ітератор містить дочірні елементи. Зробити це можна за допомогою методу
[RecursiveCallbackFilterIterator::hasChildren()](recursivecallbackfilteriterator.haschildren.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає об'єкт
[RecursiveCallbackFilterIterator](class.recursivecallbackfilteriterator.md),
що містить дочірні елементи внутрішнього ітератора.

### Дивіться також

- [Приклади використання
RecursiveCallbackFilterIterator](class.recursivecallbackfilteriterator.md#recursivecallbackfilteriterator.examples)
- [RecursiveCallbackFilterIterator::\_\_construct()](recursivecallbackfilteriterator.construct.md) -
Створює об'єкт класу RecursiveCallbackFilterIterator на основі
об'єкту RecursiveIterator
- [RecursiveCallbackFilteriterator::hasChildren()](recursivecallbackfilteriterator.haschildren.md) -
Перевіряє, чи містить поточний елемент внутрішнього ітератора
дочірні елементи
