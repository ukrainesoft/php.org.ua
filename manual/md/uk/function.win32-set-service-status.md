- [«
win32_set_service_exit_mode](function.win32-set-service-exit-mode.md)
- [win32_start_service_ctrl_dispatcher
»](function.win32-start-service-ctrl-dispatcher.md)

- [PHP Manual](index.md)
- [win32service](ref.win32service.md)
- Оновлює статус служби

#win32_set_service_status

(PECL win32service \>u003d0.1.0)

win32_set_service_status — Оновлює статус служби

### Опис

**win32_set_service_status**(int `$status`, int `$checkpoint` u003d 0): void

Повідомляє SCM про поточний стан працюючої служби. Цей виклик
дійсний лише для запущеного сервісного процесу.

**Застереження**

Починаючи з версії 0.2.0, функція працює лише у "cli" SAPI. На інших
SAPI цю функцію вимкнено.

### Список параметрів

`status`
Код статусу служби, один із: **`WIN32_SERVICE_RUNNING`**,
**`WIN32_SERVICE_STOPPED`**, **`WIN32_SERVICE_STOP_PENDING`**,
**`WIN32_SERVICE_START_PENDING`**, **`WIN32_SERVICE_CONTINUE_PENDING`**,
**`WIN32_SERVICE_PAUSE_PENDING`**, **`WIN32_SERVICE_PAUSED`**.

`checkpoint`
Значення контрольної точки, яку служба періодично збільшує,
щоб повідомити про свій прогрес під час тривалого запуску,
зупинки, паузи чи продовження роботи. Наприклад, служба повинна
збільшувати це значення на одиницю у міру завершення кожного кроку
своєї ініціалізації під час запуску.

`checkpoint` дійсна лише тоді, коли `status` є одним
з **`WIN32_SERVICE_STOP_PENDING`**, **`WIN32_SERVICE_START_PENDING`**,
**`WIN32_SERVICE_CONTINUE_PENDING`** або
**`WIN32_SERVICE_PAUSE_PENDING`**.

### Значення, що повертаються

Функція не повертає значення після виконання.

До версії 1.0.0, Повертає **`WIN32_NO_ERROR`** у разі успішного
завершення , **`false`** якщо була виявлена проблема з параметрами або
[код помилки Win32](win32service.constants.errors.md) при невдалому
завершення роботи.

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
| PECL win32service 1.0.0 Тип повертається тепер void, раніше був [mixed](language.types.declarations.md#language.types.declarations.mixed). |
| PECL win32service 0.2.0 | Функція працює тільки з ``cli'` SAPI. |

### Дивіться також

- [win32_start_service_ctrl_dispatcher()](function.win32-start-service-ctrl-dispatcher.md) -
Додає до Диспетчера служб скрипт, який може бути використаний,
як служба із заданим ім'ям
- [win32_get_last_control_message()](function.win32-get-last-control-message.md) -
Повертає останнє керуюче повідомлення, яке було надіслано
цій службі
- [win32_set_service_exit_mode()](function.win32-set-service-exit-mode.md) -
Визначає або повертає режим виходу для поточної запущеної служби
- [win32_set_service_exit_code()](function.win32-set-service-exit-code.md) -
Визначає чи повертає код виходу для поточної запущеної служби
- [Константи стану служби
Win32Service](win32service.constants.servicestatus.md)
