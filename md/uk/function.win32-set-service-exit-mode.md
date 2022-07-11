- [«
win32_set_service_exit_code](function.win32-set-service-exit-code.md)
- [win32_set_service_status »](function.win32-set-service-status.md)

- [PHP Manual](index.md)
- [win32service](ref.win32service.md)
- Визначає чи повертає режим виходу для поточної запущеної служби

#win32_set_service_exit_mode

(PECL win32service \>u003d0.4.0)

win32_set_service_exit_mode — Визначає або повертає режим виходу для
поточної запущеної служби

### Опис

**win32_set_service_exit_mode**(bool `$gracefulMode` u003d true): bool

Якщо вказано параметр gracefulMode, режим виходу змінюється. Коли
режим виходу не є коректним, використовуваний код виходу може бути
встановлений за допомогою функції
[win32_set_service_exit_code()](function.win32-set-service-exit-code.md).

**Застереження**

Функція працює лише у "cli" SAPI. На інших SAPI ця функція
відключено.

### Список параметрів

`gracefulMode`
**`true`** для витонченого виходу. **`false`** для виходу з помилкою.

### Значення, що повертаються

Повертає поточний або старий режим виходу.

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
- [win32_set_service_exit_code()](function.win32-set-service-exit-code.md) -
Визначає чи повертає код виходу для поточної запущеної служби
