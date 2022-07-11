- [«CallbackFilterIterator](class.callbackfilteriterator.md)
- [CallbackFilterIterator::\_\_construct
»](callbackfilteriterator.construct.md)

- [PHP Manual](index.md)
- [CallbackFilterIterator](class.callbackfilteriterator.md)
- Викликає callback-функцію та передає їй як аргументи
поточне значення, поточний ключ та внутрішній покажчик

# CallbackFilterIterator::accept

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

CallbackFilterIterator::accept — Викликає callback-функцію та передає їй
як аргументи поточне значення, поточний ключ і внутрішній
покажчик

### Опис

public **CallbackFilterIterator::accept**(): bool

Викликає callback-функцію і передає їй як аргументи поточне
значення, поточний ключ та внутрішній покажчик.

Callback-функція повинна повертати **`true`**, якщо поточний елемент
пройшов фільтр, **`false`** в іншому випадку.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо поточний елемент пройшов фільтр, **`false`** в
інакше.

### Дивіться також

- [Приклади використання
CallbackFilterIterator](class.callbackfilteriterator.md#callbackfilteriterator.examples)
- [CallbackFilterIterator::\_\_construct()](callbackfilteriterator.construct.md) -
Створює ітератор, що фільтрує, на основі іншого ітератора.
