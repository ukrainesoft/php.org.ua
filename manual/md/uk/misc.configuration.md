- [« Установка](misc.installation.md)
- [Типи ресурсів»] (misc.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](misc.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- ---------------------|--------------|------------- ----|------------------|
| [ignore_user_abort](misc.configuration.md#ini.ignore-user-abort) | "0" | PHP_INI_ALL | |
| [highlight.string](misc.configuration.md#ini.syntax-highlighting) | "#DD0000" | PHP_INI_ALL | |
| [highlight.comment](misc.configuration.md#ini.syntax-highlighting) | "#FF8000" | PHP_INI_ALL | |
| [highlight.keyword](misc.configuration.md#ini.syntax-highlighting) | "#007700" | PHP_INI_ALL | |
| [highlight.default](misc.configuration.md#ini.syntax-highlighting) | "#0000BB" | PHP_INI_ALL | |
| [highlight.md](misc.configuration.md#ini.syntax-highlighting) | "#000000" | PHP_INI_ALL | |
| [browscap](misc.configuration.md#ini.browscap) | NULL | PHP_INI_SYSTEM | |

**Опції налаштувань різних функцій**

Для детального опису констант PHP_INI\_\*, зверніться до розділу [Де
можуть бути встановлені параметри
конфігурації] (configuration.changes.modes.md).

Коротке пояснення конфігураційних директив.

`ignore_user_abort` bool
**`false`** за замовчуванням. Якщо змінюється на **`true`**, то скрипти не
буде перервано після того, як клієнт розірве з'єднання.

Дивіться також [ignore_user_abort()](function.ignore-user-abort.md).

`highlight.bg` string
`highlight.comment` string
`highlight.default` string
`highlight.md` string
`highlight.keyword` string
`highlight.string` string
Кольори для режиму підсвічування (Syntax Highlighting). Все, що прийнятно
у \<font coloru003d"??????"\>, буде працювати.

'browscap' string
Ім'я (наприклад, `browscap.ini`) та розташування файлу можливостей
браузер. Також дивіться [get_browser()](function.get-browser.md).
