- [«
CallbackFilterIterator::accept](callbackfilteriterator.accept.md)
- [DirectoryIterator »](class.directoryiterator.md)

- [PHP Manual](index.md)
- [CallbackFilterIterator](class.callbackfilteriterator.md)
- Створює фільтруючий ітератор на основі іншого ітератора

# CallbackFilterIterator::\_\_construct

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

CallbackFilterIterator::\_\_construct — Створює фільтруючий ітератор на
основі іншого ітератора

### Опис

public
**CallbackFilterIterator::\_\_construct**([Iterator](class.iterator.md)
`$iterator`, [callable](language.types.callable.md) `$callback`)

Створює фільтруючий ітератор, використовуючи функцію callback для відбору
або відхилення елементів.

### Список параметрів

`iterator`
Ітератор, до якого застосовується фільтр.

`callback`
Callback-функція, яка повинна повертати **`true`**, якщо поточний
елемент пройшов фільтр, і **`false`**, якщо елемент відхилено. Дивіться
[Приклади](class.callbackfilteriterator.md#callbackfilteriterator.examples).

Може бути будь-яким значенням [callable](language.types.callable.md).

### Дивіться також

- [Приклади використання
CallbackFilterIterator](class.callbackfilteriterator.md#callbackfilteriterator.examples)
- [CallbackFilterIterator::accept()](callbackfilteriterator.accept.md) -
Викликає callback-функцію та передає їй як аргументи
поточне значення, поточний ключ та внутрішній покажчик
