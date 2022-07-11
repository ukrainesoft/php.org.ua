- [«$\_FILES](reserved.variables.files.md)
- [$\_SESSION »](reserved.variables.session.md)

- [PHP Manual](index.md)
- [Предвизначені змінні](reserved.variables.md)
- Змінні HTTP-запиту

# $\_REQUEST

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

$\_REQUEST - Змінні HTTP-запиту

### Опис

Асоціативний масив (array), який за умовчанням містить дані
змінних `$_GET`, `$_POST` та `$_COOKIE`.

### Примітки

> **Примітка**:
>
> Це 'суперглобальна' або автоматична глобальна змінна. Це
> просто означає, що вона є у всіх контекстах скрипта. Ні
> необхідності виконувати **global $variable;** для доступу до неї всередині
> методу чи функції.

> **Примітка**:
>
> Під час роботи в [командному рядку](features.commandline.md) змінні
> [argv](reserved.variables.argv.md) та
> [argc](reserved.variables.argc.md) *не* включаються до цього масиву -
> вони є у масиві `$_SERVER`.

> **Примітка**:
>
> Змінні в масиві `$_REQUEST` передаються у скрипт за допомогою
> методів GET, POST чи COOKIE, тому не можна довіряти, т.к. вони
> можна змінити віддаленим користувачем. Їх наявність та порядок
> додавання даних до відповідних масивів визначається директивою
> конфігурації PHP [request_order](ini.core.md#ini.request-order) та
> [variables_order](ini.core.md#ini.variables-order).

### Дивіться також

- "[Робота із зовнішніми даними](language.variables.external.md)"
- "[Фільтрування даних](book.filter.md)"
