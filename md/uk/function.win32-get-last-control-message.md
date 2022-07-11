- [«win32_delete_service](function.win32-delete-service.md)
- [win32_pause_service »](function.win32-pause-service.md)

- [PHP Manual](index.md)
- [win32service](ref.win32service.md)
- Повертає останнє керуюче повідомлення, яке було надіслано
цій службі

#win32_get_last_control_message

(PECL win32service \>u003d0.1.0)

win32_get_last_control_message — Повертає останнє керуюче
повідомлення, яке було надіслано цій службі

### Опис

**win32_get_last_control_message**(): int

Повертає код, що керує, останній раз відправлений цьому процесу
служби. При роботі як служба ви повинні періодично перевіряти
це, щоб визначати, чи потрібно вашій службі припинити роботу.

**Застереження**

Починаючи з версії 0.2.0, функція працює лише у "cli" SAPI. На інших
SAPI цю функцію вимкнено.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає керуючу константу, яка буде однією з [Констант
повідомлень управління службою
Win32Service](win32service.constants.servicecontrol.md):
**`WIN32_SERVICE_CONTROL_CONTINUE`**,
**`WIN32_SERVICE_CONTROL_DEVICEEVENT`**,
**`WIN32_SERVICE_CONTROL_HARDWAREPROFILECHANGE`**,
**`WIN32_SERVICE_CONTROL_INTERROGATE`**,
**`WIN32_SERVICE_CONTROL_NETBINDADD`**,
**`WIN32_SERVICE_CONTROL_NETBINDDISABLE`**,
**`WIN32_SERVICE_CONTROL_NETBINDENABLE`**,
**`WIN32_SERVICE_CONTROL_NETBINDREMOVE`**,
**`WIN32_SERVICE_CONTROL_PARAMCHANGE`**,
**`WIN32_SERVICE_CONTROL_PAUSE`**,
**`WIN32_SERVICE_CONTROL_POWEREVENT`**,
**`WIN32_SERVICE_CONTROL_PRESHUTDOWN`**,
**`WIN32_SERVICE_CONTROL_SESSIONCHANGE`**,
**`WIN32_SERVICE_CONTROL_SHUTDOWN`**, **`WIN32_SERVICE_CONTROL_STOP`**.

Якщо значення знаходиться в діапазоні від 128 до 255, код керування
налаштовується.

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
| PECL win32service 0.2.0 | Функція працює тільки з ``cli'` SAPI. |

### Дивіться також

- [win32_start_service_ctrl_dispatcher()](function.win32-start-service-ctrl-dispatcher.md) -
Додає до Диспетчера служб скрипт, який може бути використаний,
як служба із заданим ім'ям
- [win32_set_service_status()](function.win32-set-service-status.md) -
Оновлює статус служби
- [win32_set_service_exit_mode()](function.win32-set-service-exit-mode.md) -
Визначає або повертає режим виходу для поточної запущеної служби
- [win32_set_service_exit_code()](function.win32-set-service-exit-code.md) -
Визначає чи повертає код виходу для поточної запущеної служби
- [Константи повідомлень керування службою
Win32Service](win32service.constants.servicecontrol.md)
