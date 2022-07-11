- [« IntlException](class.intlexception.md)
- [IntlIterator::current »](intliterator.current.md)

- [PHP Manual](index.md)
- [intl](book.intl.md)
- Клас IntlIterator

# Клас IntlIterator

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

## Вступ

Цей клас представляє ітератор об'єктів модуля intl у тих випадках,
коли не можна призначити будь-який інший ітератор для цього об'єкта
модуля. Єдиний об'єкт ітератора для використання у [конструкції
`foreach`](control-structures.foreach.md) може бути отриманий тільки (у
відповідної частини тут) з об'єктів, так що об'єкти даного класу
служать щоб одержати таких внутрішніх об'єктів. Для зручності даний
клас також реалізує інтерфейс [Iterator](class.iterator.md),
дозволяючи взаємодіяти з колекціями значень використовуючи методи
визначені у цьому інтерфейсі. Обидва ці методи і внутрішні об'єкти
ітератора зберігають свій стан під час передачі в `foreach`. (Тобто.
внутрішній покажчик та поточне значення залишаються незмінними).

Класи нащадки можуть надавати ширшу функціональність.

## Огляд класів

class **IntlIterator** implements [Iterator](class.iterator.md) {

/\* Методи \*/

public [current](intliterator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [key](intliterator.key.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [next](intliterator.next.md)(): void

public [rewind](intliterator.rewind.md)(): void

public [valid](intliterator.valid.md)(): bool

}

## Зміст

- [IntlIterator::current](intliterator.current.md) - Отримати
поточний елемент
- [IntlIterator::key](intliterator.key.md) — Отримати ключ поточного
елемента
- [IntlIterator::next](intliterator.next.md) — Перейти до наступного
елементу
- [IntlIterator::rewind](intliterator.rewind.md) — Перейти до першого
елементу
- [IntlIterator::valid](intliterator.valid.md) — Перевірити,
чи коректна поточна позиція
