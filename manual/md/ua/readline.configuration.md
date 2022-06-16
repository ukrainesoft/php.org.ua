- [« Установка](readline.installation.md)
- [Типи ресурсів»] (readline.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](readline.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- ---------|----------------|-----------------|----- -------------|
| [cli.pager](readline.configuration.md#ini.cli.pager) | "" | PHP_INI_ALL | |
| [cli.prompt](readline.configuration.md#ini.cli.prompt) | "\\\>" | PHP_INI_ALL | |

**Опції налаштування Readline**

Коротке пояснення конфігураційних директив.

`cli.pager` string
Зовнішня утиліта для відображення виведення в [командну
рядок](features.commandline.md).

`cli.prompt` string
Підказка [командного рядка](features.commandline.md).
