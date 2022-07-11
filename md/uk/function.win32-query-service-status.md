- [«win32_pause_service](function.win32-pause-service.md)
- [win32_send_custom_control
»](function.win32-send-custom-control.md)

- [PHP Manual](index.md)
- [win32service](ref.win32service.md)
- Запитує статус сервісу

#win32_query_service_status

(PECL win32service \>u003d0.1.0)

win32_query_service_status — Запитує статус сервісу

### Опис

**win32_query_service_status**(string `$servicename`, string `$machine`
u003d ?): array

Вимагає поточний статус служби, повертаючи масив інформації.

### Список параметрів

`servicename`
Коротка назва служби.

`machine`
Необов'язкове ім'я машини. Якщо не вказано, використовуватиметься
комп'ютер.

### Значення, що повертаються

Повертає масив, що складається з наступної інформації у разі успішного
виконання:

До версії 1.0.0 , **`false`** якщо була виявлена проблема з
параметрами або [код помилки Win32](win32service.constants.errors.md)
при невдалому завершенні роботи.

`ServiceType`
dwServiceType. Дивіться [Побутові маски типів служби
Win32Service](win32service.constants.servicetype.md).

`CurrentState`
dwCurrentState. Дивіться [Константи стану служби
Win32Service](win32service.constants.servicestatus.md).

`ControlsAccepted`
Які елементи управління службами приймаються службою. Дивіться
[Бітові маски Win32Service Service Control Message
Accepted](win32service.constants.controlsaccepted.md).

`Win32ExitCode`
Якщо служба завершила роботу, тут відображається код повернення з
процесу. Це значення дорівнює **`WIN32_ERROR_SERVICE_SPECIFIC_ERROR`**,
якщо режим виходу не є плавним. Дивіться [коди помилок
Win32Service](win32service.constants.errors.md) та
[win32_set_service_exit_mode()](function.win32-set-service-exit-mode.md)

`ServiceSpecificExitCode`
Якщо служба завершила роботу, тут відображається код конкретної служби.
зареєстрований у журналі подій. Це значення дорівнює значенню,
певному
[win32_set_service_exit_code()](function.win32-set-service-exit-code.md)

`CheckPoint`
Якщо служба завершила роботу, тут відображається поточний номер
контрольної точки. Це використовується SCM як свого роду серцебиття для
виявлення процесу обслуговування, що заклинив. Значення контрольної
Точки найкраще інтерпретувати разом зі значенням WaitHint.

`WaitHint`
Якщо служба завершила роботу, вона встановить для WaitHint значення
контрольної точки, яка вказуватиме на 100% завершення. Це можна
використовуватиме реалізації індикатора прогресу.

`ProcessId`
Ідентифікатор процесу Windows. Якщо 0, процес не запущено.

`ServiceFlags`
dwServiceFlags. Дивіться [Константи прапорів служби
Win32Service](win32service.constants.serviceflag.md).

### Помилки

Якщо значення [ValueError](class.valueerror.md) викидається
параметра `servicename` не вказано.

### Список змін

| Версія | Опис |
|-------------------------|----------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ---|
| PECL win32service 1.0.0 Викидає [ValueError](class.valueerror.md) у разі невірних даних у параметрах, що раніше поверталося **`false`**. |
| PECL win32service 1.0.0 Викидає [Win32ServiceException](class.win32serviceexception.md) у разі виникнення помилки, раніше повертався [Код помилки Win32](win32service.constants.errors.md). |
| PECL win32service 1.0.0 Тип повернення тепер array, раніше був [mixed](language.types.declarations.md#language.types.declarations.mixed). |

### Дивіться також

- [Предвизначені константи
Win32Service](win32service.constants.md)
