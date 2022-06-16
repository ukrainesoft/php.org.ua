- [« Установка](expect.installation.md)
- [Типи ресурсів»] (expect.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](expect.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

Для налаштування модуля використовуйте наведені нижче опції
[Файл конфігурації](configuration.file.md) `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- -------------------|--------------|--------------- --|------------------|
| [expect.timeout](expect.configuration.md#ini.expect.timeout) | "10" | PHP_INI_ALL | |
| [expect.loguser](expect.configuration.md#ini.expect.loguser) | "1" | PHP_INI_ALL | |
| [expect.logfile](expect.configuration.md#ini.expect.logfile) | "" | PHP_INI_ALL | |
| [expect.match_max](expect.configuration.md#ini.expect.match-max) | "" | PHP_INI_ALL | |

**Опції налаштування Expect**

Для детального опису констант PHP_INI\_\*, зверніться до розділу [Де
можуть бути встановлені параметри
конфігурації] (configuration.changes.modes.md).

Коротке пояснення конфігураційних директив.

`expect.timeout` int
Максимальний час очікування даних під час використання функції
[expect_expectl()](function.expect-expectl.md).

Значення "-1" задає вічне очікування.

> **Примітка**:
>
> Значення "0" означає, що функція
> [expect_expectl()](function.expect-expectl.md) завершиться одразу.

`expect.loguser` bool
Визначає, чи породжений процес робитиме висновок у потік
stdout. Оскільки інтерактивні програми зазвичай дублюють
введення користувача, зазвичай потрібно вирішувати цю опцію, щоб
взаємодія була усвідомленою.

`expect.logfile` string
Ім'я файлу, куди писатиметься виведення породженого процесу. Якщо файл не
існує, він буде створено.

> **Примітка**:
>
> Якщо цій опції надано якесь не порожнє значення, то висновок
> писатиметься у файл незалежно від налаштування
> [expect.loguser](expect.configuration.md#ini.expect.loguser).

`expect.match_max` int
Змінює розмір буфера (за замовчуванням 2000 байт), який використовується для пошуку
зірочки символ у шаблонах.
