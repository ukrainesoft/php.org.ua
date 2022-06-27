- [« Serializable::unserialize](serializable.unserialize.md)
- [Closure::\_\_construct »](closure.construct.md)

- [PHP Manual](index.md)
- [Вбудовані інтерфейси та класи](reserved.interfaces.md)
- Клас Closure

# Клас Closure

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

## Вступ

Клас, який використовується для створення [анонімних
функцій] (functions.anonymous.md).

Анонімні функції видають об'єкти цього. Клас отримав методи,
що дозволяють контролювати анонімну функцію після її створення.

Крім методів, описаних тут, цей клас також має метод "__invoke".
Даний метод необхідний тільки для сумісності з іншими класами,
яких реалізовано [магічний
виклик](language.oop5.magic.md#language.oop5.magic.invoke), тому що
цей метод не використовується під час виклику функції.

## Огляд класів

final class **Closure** {

/\* Методи \*/

private [\_\_construct](closure.construct.md)()

public static [bind](closure.bind.md)([Closure](class.closure.md)
`$closure`, ?object `$newThis`, object\|string\|null `$newScope` u003d
"static"): ?[Closure](class.closure.md)

public [bindTo](closure.bindto.md)(?object `$newThis`,
object\|string\|null `$newScope` u003d "static"):
?[Closure](class.closure.md)

public [call](closure.call.md)(object `$newThis`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$args`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public static
[fromCallable](closure.fromcallable.md)([callable](language.types.callable.md)
`$callback`): [Closure](class.closure.md)

}

## Зміст

- [Closure::\_\_construct](closure.construct.md) - Конструктор,
забороняє створення екземпляра
- [Closure::bind](closure.bind.md) — Дублює замикання із зазначенням
конкретного зв'язаного об'єкта та області видимості класу
- [Closure::bindTo](closure.bindto.md) — Дублює замикання з
зазначенням пов'язаного об'єкта та області видимості класу
- [Closure::call](closure.call.md) — Зв'язує та запускає замикання
- [Closure::fromCallable](closure.fromcallable.md) — Конвертує
callable у замикання
