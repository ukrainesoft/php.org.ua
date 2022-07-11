- [«
win32_send_custom_control](function.win32-send-custom-control.md)
- [win32_set_service_exit_mode
»](function.win32-set-service-exit-mode.md)

- [PHP Manual](index.md)
- [win32service](ref.win32service.md)
- Визначає чи повертає код виходу для поточної запущеної служби

#win32_set_service_exit_code

(PECL win32service \>u003d0.4.0)

win32_set_service_exit_code — Визначає або повертає код виходу для
поточної запущеної служби

### Опис

**win32_set_service_exit_code**(int `$exitCode` u003d 1): int

Змінює чи повертає код виходу. Код виходу використовується лише в тому
якщо режим виходу не витончений. Якщо значення не дорівнює нулю,
Ви можете використовувати конфігурацію відновлення після збою обслуговування.
Дивіться [» коди системних помилок
Microsoft](https://docs.microsoft.com/en-us/windows/desktop/debug/system-error-codes)
для отримання додаткових відомостей.

**Застереження**

Функція працює лише у "cli" SAPI. На інших SAPI ця функція
відключено.

### Список параметрів

`exitCode`
Код повернення, який використовується при виході.

### Значення, що повертаються

Повертає поточний або старий вихідний код.

### Помилки

До версії 1.0.0, якщо SAPI не "cli", функція видавала помилку рівня
**`E_ERROR`**.

Починаючи з версії 1.0.0 викидає
[Win32ServiceException](class.win32serviceexception.md), якщо SAPI не
``cli'`

### Список змін

| Версія | Опис |
|-------------------------|----------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ---|
| PECL win32service 1.0.0 Викидає [ValueError](class.valueerror.md) при невірних даних у параметрах, що раніше поверталося **`false`**. |
| PECL win32service 1.0.0 Викидає [Win32ServiceException](class.win32serviceexception.md) у разі виникнення помилки, раніше повертався [Код помилки Win32](win32service.constants.errors.md). |

### Дивіться також

- [win32_start_service_ctrl_dispatcher()](function.win32-start-service-ctrl-dispatcher.md) -
Додає до Диспетчера служб скрипт, який може бути використаний,
як служба із заданим ім'ям
- [win32_set_service_status()](function.win32-set-service-status.md) -
Оновлює статус служби
- [win32_set_service_exit_mode()](function.win32-set-service-exit-mode.md) -
Визначає або повертає режим виходу для поточної запущеної служби
