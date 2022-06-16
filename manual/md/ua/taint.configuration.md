- [« Установка](taint.installation.md)
- [Типи ресурсів»] (taint.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](taint.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- --------------------|--------------|-------------- ---|---------------------|
| [taint.enable](taint.configuration.md#ini.taint.enable) | 0 | PHP_INI_SYSTEM | |
| [taint.error_level](taint.configuration.md#ini.taint.error-level) | E_WARNING | PHP_INI_ALL | |

**Опції налаштування Taint**

Коротке пояснення конфігураційних директив.

`taint.enable` int
Чи увімкнено модуль.

`taint.error_level` int
Тип помилки, який повертатиме модуль при виявленні
підозрілого рядка.
