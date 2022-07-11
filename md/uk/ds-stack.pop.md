- [« Ds\Stack::peek](ds-stack.peek.md)
- [Ds\Stack::push »](ds-stack.push.md)

- [PHP Manual](index.md)
- [Стек](class.ds-stack.md)
- Видаляє та повертає значення з вершини стека

# Ds\Stack::pop

(PECL ds \>u003d 1.0.0)

Ds\Stack::pop — Видаляє та повертає значення з вершини стека

### Опис

public **Ds\Stack::pop**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Видаляє та повертає значення з вершини стека.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Видалене з вершини стека значення.

### Помилки

Викидає виняток
[UnderflowException](class.underflowexception.md), якщо колекція
порожня.

### Приклади

**Приклад #1 Приклад використання **Ds\Stack::pop()****

` <?php$stack u003d new \Ds\Stack();$stack->push("a");$stack->push("b");$stack->push("c");var_dump( $stack->pop());var_dump($stack->pop());var_dump($stack->pop());?> `

Результатом виконання цього прикладу буде щось подібне:

string(1) "c"
string(1) "b"
string(1) "a"
