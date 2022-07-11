- [«win32_set_service_status](function.win32-set-service-status.md)
- [win32_start_service »](function.win32-start-service.md)

- [PHP Manual](index.md)
- [win32service](ref.win32service.md)
- Додає до Диспетчера Служб скрипт, який може бути використаний,
як служба із заданим ім'ям

#win32_start_service_ctrl_dispatcher

(PECL win32service \>u003d0.1.0)

win32_start_service_ctrl_dispatcher — Додає до Менеджера Служб
скрипт, який може бути використаний як служба із заданим ім'ям

### Опис

**win32_start_service_ctrl_dispatcher**(string `$name`, bool
`$gracefulMode` u003d true): void

При запуску за допомогою диспетчера служб процесу служби необхідно
звірятися з ним для моніторингу служби та зв'язку з нею. Ця функція
виконує звірку за допомогою створення потоку для обробки
низькорівневий зв'язок з диспетчером служб.

Після запуску процес служби має здійснити дві дії. Перше -
повідомити диспетчеру служб, що службу запущено. Це здійснюється шляхом
виклику
[win32_set_service_status()](function.win32-set-service-status.md) з
константою **`WIN32_SERVICE_RUNNING`**. Якщо вам необхідно виконати
якийсь тривалий процес перед запуском служби, то ви можете
використовувати константу **`WIN32_SERVICE_START_PENDING`**. Друге -
продовжити звірку з диспетчером служб, щоб визначити потребу
відключення. Це здійснюється за допомогою періодичного виклику
[win32_get_last_control_message()](function.win32-get-last-control-message.md)
та обробки коду повернення відповідним чином.

**Застереження**

Починаючи з версії 0.2.0, ця функція працює лише у "cli" SAPI. В
інших SAPI функцію вимкнено.

### Список параметрів

`name`
Коротке ім'я служби, як при додаванні за допомогою
[win32_create_service()](function.win32-create-service.md).

`gracefulMode`
**`true`** для "елегантного" виходу. **`false`** для виходу з помилкою.
Дивіться
[win32_set_service_exit_mode()](function.win32-set-service-exit-mode.md)
для отримання детальної інформації.

### Значення, що повертаються

Функція не повертає значення після виконання.

До версії 1.0.0, Повертає **`WIN32_NO_ERROR`** у разі успішного
завершення , **`false`** якщо була виявлена проблема з параметрами або
[код помилки Win32](win32service.constants.errors.md) при невдалому
завершення роботи.

### Помилки

До версії 1.0.0, якщо SAPI не є "cli", дана функція викликає
помилку рівня **`E_ERROR`**.

Починаючи з версії 1.0.0, викидає виняток
[Win32ServiceException](class.win32serviceexception.md), якщо SAPI не
є ``cli'``

### Список змін

| Версія | Опис |
|-------------------------|----------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ---|
| PECL win32service 1.0.0 Викидає [ValueError](class.valueerror.md) при некоректних даних у параметрах, що раніше поверталося **`false`**. |
| PECL win32service 1.0.0 Викидає [Win32ServiceException](class.win32serviceexception.md) у разі виникнення помилки, раніше повертався [Код помилки Win32](win32service.constants.errors.md). |
| PECL win32service 1.0.0 Тип повертається значення void, раніше був [mixed] (language.types.declarations.md#language.types.declarations.mixed). |
| PECL win32service 0.4.0 | Доданий параметр `gracefulMode`. |
| PECL win32service 0.2.0 | Ця функція працює тільки з ``cli''` SAPI. |

### Приклади

**Приклад #1 Приклад **win32_start_service_ctrl_dispatcher()****

Перевірте, чи запущено сервіс у диспетчері служб.

` <?phpif (!win32_start_service_ctrl_dispatcher('dummyphp')) {  die("Я, вероятно, не запущен в диспетчере служб");}win32_set_service_status(WIN32_SERVICE_START_PENDING);// Некий длительный процесс для обработки и запуска службы.win32_set_service_status(WIN32_SERVICE_RUNNING) ;while (WIN32_SERVICE_CONTROL_STOP !u003d win32_get_last_control_message()) {  # тут виробляються якісь дії, не займають більше чому 30 сек        

### Дивіться також

- [win32_set_service_status()](function.win32-set-service-status.md) -
Оновлює статус служби
- [win32_get_last_control_message()](function.win32-get-last-control-message.md) -
Повертає останнє керуюче повідомлення, яке було надіслано
цій службі
- [win32_set_service_exit_mode()](function.win32-set-service-exit-mode.md) -
Визначає або повертає режим виходу для поточної запущеної служби
- [win32_set_service_exit_code()](function.win32-set-service-exit-code.md) -
Визначає чи повертає код виходу для поточної запущеної служби
- [Коди Помилка Win32](win32service.constants.errors.md)
