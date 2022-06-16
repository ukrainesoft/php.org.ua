- [« Closure::call](closure.call.md)
- [Generator »](class.generator.md)

- [PHP Manual](index.md)
- [Closure](class.closure.md)
- Конвертує callable у замикання

# Closure::fromCallable

(PHP 7 \>u003d 7.1.0)

Closure::fromCallable — Конвертує callable у замикання

### Опис

public static
**Closure::fromCallable**([callable](language.types.callable.md)
`$callback`): [Closure](class.closure.md)

Створює та повертає нову [анонімну функцію](functions.anonymous.md)
із заданого `callback`, використовуючи поточну область видимості. Цей метод
перевіряє, що `callback` є типом callable у поточній області
видимості і викидає виняток [TypeError](class.typeerror.md),
якщо це не так.

> **Примітка**:
>
> Починаючи з PHP 8.1.0, у [Callback-функцій як об'єктів першого
> класу](functions.first_class_callable_syntax.md) та сама семантика,
> що й цього методу.

### Список параметрів

`callback`
Об'єкт типу callable.

### Значення, що повертаються

Повертає новий об'єкт класу [Closure](class.closure.md) або
викидає виняток [TypeError](class.typeerror.md), якщо
callback не є об'єктом типу callable в поточній області
видимості.

### Дивіться також

- [Анонімні функції](functions.anonymous.md)
- [Callback-функції як об'єкти першого
класу](functions.first_class_callable_syntax.md)
