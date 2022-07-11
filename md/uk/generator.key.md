- [« Generator::getReturn](generator.getreturn.md)
- [Generator::next »](generator.next.md)

- [PHP Manual](index.md)
- [Generator](class.generator.md)
- Отримати ключ згенерованого елемента

# Generator::key

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

Generator::key — Отримати ключ згенерованого елемента

### Опис

public **Generator::key**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Отримує ключ генерованого елемента.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ключ згенерованого елемента.

### Приклади

**Приклад #1 Приклад використання **Generator::key()****

` <?phpfunction Gen(){   yield 'key' u003d> 'value';}$gen u003d Gen();echo "{$gen->key()} u003d> {$gen->current()}"; `

Результат виконання цього прикладу:

key u003d> value
