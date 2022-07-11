- [« Ds\Deque::allocate](ds-deque.allocate.md)
- [Ds\Deque::capacity »](ds-deque.capacity.md)

- [PHP Manual](index.md)
- [Двостороння черга](class.ds-deque.md)
- Оновлює всі значення, застосовуючи callback-функцію до кожного значення

# Ds\Deque::apply

(PECL ds \>u003d 1.0.0)

Ds\Deque::apply — Оновлює всі значення, використовуючи функцію callback до
кожному значенню

### Опис

public **Ds\Deque::apply**([callable](language.types.callable.md)
`$callback`): void

Оновлює всі значення, застосовуючи callback-функцію до кожного значення.

### Список параметрів

`callback`
callback([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Об'єкт типу [callable](language.types.callable.md).

Callback-функція має повертати нове значення, яке замінить
поточний.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Ds\Deque::apply()****

` <?php$deque u003d new \Ds\Deque([1, 2, 3]);$deque->apply(function($value) { return $value * 2; });print_r($deque);? > `

Результатом виконання цього прикладу буде щось подібне:

Ds\Deque Object
(
[0] u003d> 2
[1] u003d> 4
[2] u003d> 6
)
