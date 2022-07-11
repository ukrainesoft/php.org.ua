- [« Ds\Sequence::allocate](ds-sequence.allocate.md)
- [Ds\Sequence::capacity »](ds-sequence.capacity.md)

- [PHP Manual](index.md)
- [Послідовність](class.ds-sequence.md)
- Оновлення всіх значень застосуванням до них переданої
callback-функції

# Ds\Sequence::apply

(PECL ds \>u003d 1.0.0)

Ds\Sequence::apply — Оновлення всіх значень їх застосуванням
переданої callback-функції

### Опис

abstract public
**Ds\Sequence::apply**([callable](language.types.callable.md)
`$callback`): void

Оновлення всіх значень застосуванням до них переданої
'callback'-функції.

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

**Приклад #1 Приклад використання **Ds\Sequence::apply()****

` <?php$sequence u003d new \Ds\Sequence([1, 2, 3]);$sequence->apply(function($value) { return $value * 2; });print_r($sequence);? > `

Результатом виконання цього прикладу буде щось подібне:

Ds\Vector Object
(
[0] u003d> 2
[1] u003d> 4
[2] u003d> 6
)
