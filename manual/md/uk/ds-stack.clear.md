- [Ds\Stack::capacity](ds-stack.capacity.md)
- [Ds\Stack::\_\_construct »](ds-stack.construct.md)

- [PHP Manual](index.md)
- [Стек](class.ds-stack.md)
- Видаляє всі значення з колекції

# Ds\Stack::clear

(PECL ds \>u003d 1.0.0)

Ds\Stack::clear — Видаляє всі значення колекції.

### Опис

public **Ds\Stack::clear**(): void

Видаляє всі значення колекції.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Ds\Stack::clear()****

` <?php$stack u003d new \Ds\Stack([1, 2, 3]);print_r($stack);$stack->clear();print_r($stack);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Stack Object
(
[0] u003d> 3
[1] u003d> 2
[2] u003d> 1
)
Ds\Stack Object
(
)
