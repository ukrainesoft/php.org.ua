- [« Ds\Vector::allocate](ds-vector.allocate.md)
- [Ds\Vector::capacity »](ds-vector.capacity.md)

- [PHP Manual](index.md)
- [Вектор](class.ds-vector.md)
- Оновлює всі значення, застосовуючи до них передану callback-функцію

# Ds\Vector::apply

(PECL ds \>u003d 1.0.0)

Ds\Vector::apply — Оновлює всі значення, застосовуючи до них передану
callback-функцію

### Опис

public **Ds\Vector::apply**([callable](language.types.callable.md)
`$callback`): void

Оновлює всі значення, застосовуючи до них передану callback-функцію.

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

**Приклад #1 Приклад використання **Ds\Vector::apply()****

` <?php$vector u003d new \Ds\Vector([1, 2, 3]);$vector->apply(function($value) { return $value * 2; });print_r($vector);? > `

Результатом виконання цього прикладу буде щось подібне:

Ds\Vector Object
(
[0] u003d> 2
[1] u003d> 4
[2] u003d> 6
)
