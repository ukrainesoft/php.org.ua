- [« Установка](uopz.installation.md)
- [Типи ресурсів»] (uopz.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](uopz.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- -------------|--------------|-----------------|--- -------------------------------------------------- ---------|
| [uopz.disable](uopz.configuration.md#ini.uopz.disable) | "0" | PHP_INI_SYSTEM | Доступно з uopz 5.0.2 |
| [uopz.exit](uopz.configuration.md#ini.uopz.exit) | "0" | PHP_INI_SYSTEM | Доступно з uopz 6.0.1 |
| [uopz.overloads](uopz.configuration.md#ini.uopz.overloads) | "1" | PHP_INI_SYSTEM | Доступно з uopz 2.0.2. Видалено з uopz 5.0.0. |

**uopz Опції налаштування**

Для детального опису констант PHP_INI\_\*, зверніться до розділу [Де
можуть бути встановлені параметри
конфігурації] (configuration.changes.modes.md).

Коротке пояснення конфігураційних директив.

`uopz.disable` bool
Якщо увімкнено, uopz перестане впливати на роботу PHP.

`uopz.exit` bool
Чи дозволяти модулю виконувати опкод exit (вихід). Це налаштування може
бути перевизначено під час виконання за допомогою функції
[uopz_allow_exit()](function.uopz-allow-exit.md).

`uopz.overloads` bool
Дає можливість використовувати
[uopz_overload()](function.uopz-overload.md).

> **Примітка**: Під час роботи з увімкненим OPcache може знадобитися
> вимкнути все [оптимізація
> OPcache](opcache.configuration.md#ini.opcache.optimization-level)
> (`opcache.optimization_levelu003d0`).
