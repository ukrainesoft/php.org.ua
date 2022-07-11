- [«is_tainted](function.is-tainted.md)
- [untaint »](function.untaint.md)

- [PHP Manual](index.md)
- [Функції Taint](ref.taint.md)
- зіпсувати рядок

# taint

(PECL taint \>u003d0.1.0)

taint — Зіпсувати рядок

### Опис

**taint**(string `&$string`, string `...$strings`): bool

Робить рядок зіпсований рядок. Використовується з метою налагодження.

### Список параметрів

`string`

`strings`

### Значення, що повертаються

Повертає **`true`**, якщо перетворення рядка виконано. Завжди
повертає **`true`**, якщо модуль taint не включений.
