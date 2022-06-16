- [« Closure::fromCallable](closure.fromcallable.md)
- [Generator::current »](generator.current.md)

- [PHP Manual](index.md)
- [Вбудовані інтерфейси та класи](reserved.interfaces.md)
- Клас Generator

# Клас Generator

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

## Вступ

Створення об'єктів типу **Generator** описано у розділі
[Генератори](language.generators.md).

**Застереження**

Об'єкти **Generator** не можуть бути створені за допомогою оператора
[new](language.oop5.basic.md#language.oop5.basic.new).

## Огляд класів

final class **Generator** implements [Iterator](class.iterator.md) {

/\* Методи \*/

public [current](generator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getReturn](generator.getreturn.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [key](generator.key.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [next](generator.next.md)(): void

public [rewind](generator.rewind.md)(): void

public
[send](generator.send.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [throw](generator.throw.md)([Throwable](class.throwable.md)
`$exception`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [valid](generator.valid.md)(): bool

public [\_\_wakeup](generator.wakeup.md)(): void

}

## Дивіться також

Дивіться також розділ [Ітератори
об'єктів] (language.oop5.iterations.md).

## Зміст

- [Generator::current](generator.current.md) — Отримати поточне
значення генератора
- [Generator::getReturn](generator.getreturn.md) — Отримати
значення, що повертається генератором
- [Generator::key](generator.key.md) — Отримати ключ
згенерованого елемента
- [Generator::next](generator.next.md) — Відновити роботу
генератора
- [Generator::rewind](generator.rewind.md) - Перемотати ітератор
- [Generator::send](generator.send.md) — Передати значення в
генератор
- [Generator::throw](generator.throw.md) — Кинути виняток у
генератор
- [Generator::valid](generator.valid.md) — Перевірка, чи закритий
ітератор
- [Generator::\_\_wakeup](generator.wakeup.md) - Callback-функція
серіалізації
