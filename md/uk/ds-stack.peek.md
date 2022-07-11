- [« Ds\Stack::jsonSerialize](ds-stack.jsonserialize.md)
- [Ds\Stack::pop »](ds-stack.pop.md)

- [PHP Manual](index.md)
- [Стек](class.ds-stack.md)
- Повертає значення з вершини стека

# Ds\Stack::peek

(PECL ds \>u003d 1.0.0)

Ds\Stack::peek — Повертає значення з вершини стека

### Опис

public **Ds\Stack::peek**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає значення з вершини стека, але не видаляє його.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Значення з вершини стека.

### Помилки

Викидає виняток
[UnderflowException](class.underflowexception.md), якщо колекція
порожня.

### Приклади

**Приклад #1 Приклад використання **Ds\Stack::peek()****

` <?php$stack u003d new \Ds\Stack();$stack->push("a");$stack->push("b");$stack->push("c");var_dump( $stack->peek());?> `

Результатом виконання цього прикладу буде щось подібне:

string(1) "c"
