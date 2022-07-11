- [« Generator::send](generator.send.md)
- [Generator::valid »](generator.valid.md)

- [PHP Manual](index.md)
- [Generator](class.generator.md)
- Кинути виняток у генератор

# Generator::throw

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

Generator::throw — Кинути виняток у генератор

### Опис

public **Generator::throw**([Throwable](class.throwable.md)
`$exception`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Викидає виняток у генератор та відновлює його виконання.
Поведінка буде такою, начебто поточне значення
[yield](language.generators.syntax.md#control-structures.yield)
замінили на вираз `throw $exception`.

Якщо на момент виклику цього методу генератор закрито, виняток буде
викинуто в контексті коду, що викликає.

### Список параметрів

`exception`
Виняток, який треба викинути в генератор.

### Значення, що повертаються

Повертає згенероване значення.

### Приклади

**Приклад #1 Викидання виключення в ітератор**

` <?phpfunction gen() {    echo "Foo
";   try {        yield;    } catch (Exception $e) {       echo "Exception: {$e->getMessage
";    }    echo "Bar
";}$gen u003d gen();$gen->rewind();$gen->throw(new Exception('Test'));?> `

Результат виконання цього прикладу:

Foo
Exception: Test
Bar
