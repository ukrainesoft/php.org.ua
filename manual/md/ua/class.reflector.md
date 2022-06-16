- [«
ReflectionAttribute::newInstance](reflectionattribute.newinstance.md)
- [Reflector::export »](reflector.export.md)

- [PHP Manual](index.md)
- [Reflection](book.reflection.md)
- Інтерфейс Reflector

# Інтерфейс Reflector

(PHP 5, PHP 7, PHP 8)

## Вступ

Інтерфейс **Reflector** реалізують усі експортовані Reflection-класи.

## Огляд інтерфейсів

interface **Reflector** extends [Stringable](class.stringable.md) {

/\* Методи \*/

public static [export](reflector.export.md)(): string

public [\_\_toString](reflector.tostring.md)(): string

/\* Наслідувані методи \*/

public [Stringable::\_\_toString](stringable.tostring.md)(): string

}

## Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------------------------------------------|
| 8.0.0 | Клас **Reflector** тепер реалізує інтерфейс [Stringable](class.stringable.md). |

## Зміст

- [Reflector::export](reflector.export.md) — Експорт
- [Reflector::\_\_toString](reflector.tostring.md) — Подання в
вигляді рядка
