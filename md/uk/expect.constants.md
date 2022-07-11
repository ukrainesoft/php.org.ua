- [« Типи ресурсів](expect.resources.md)
- [Приклади »](expect.examples.md)

- [PHP Manual](index.md)
- [Expect](book.expect.md)
- Обумовлені константи

# Зумовлені константи

Наведені нижче константи визначені даним модулем і можуть бути
доступні лише в тому випадку, якщо PHP був зібраний за допомогою цього
модуля або в тому випадку, якщо даний модуль був динамічно завантажений
під час виконання.

**`EXP_GLOB`** (int)
Вказує, що шаблон є шаблон пошуку файлу (glob).

**`EXP_EXACT`** (int)
Вказує, що шаблон є точним рядком.

**`EXP_REGEXP`** (int)
Вказує на те, що шаблон є регулярним виразом.

**`EXP_EOF`** (int)
Значення, яке повертається [expect_expectl()](function.expect-expectl.md),
коли досягнуто кінець файлу.

**`EXP_TIMEOUT`** (int)
Значення, яке повертається [expect_expectl()](function.expect-expectl.md)
після вичерпання часу очікування, заданого в
[expect.timeout](expect.configuration.md#ini.expect.timeout)

**`EXP_FULLBUFFER`** (int)
Значення, яке повертається [expect_expectl()](function.expect-expectl.md),
коли збігів із шаблоном не знайдено.
