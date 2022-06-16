- [«
win32_get_last_control_message](function.win32-get-last-control-message.md)
- [win32_query_service_status
»](function.win32-query-service-status.md)

- [PHP Manual](index.md)
- [win32service](ref.win32service.md)
- зупиняє службу

#win32_pause_service

(PECL win32service \>u003d0.1.0)

win32_pause_service — Зупиняє службу

### Опис

**win32_pause_service**(string `$servicename`, string `$machine` u003d ?):
void

Зупиняє вказану службу. Потрібні адміністративні привілеї
або обліковий запис з відповідними правами, встановленими в ACL
служби.

### Список параметрів

`servicename`
Коротка назва служби.

`machine`
Необов'язкове ім'я машини. Якщо не вказано, використовується локальний
комп'ютер.

### Значення, що повертаються

Функція не повертає значення після виконання.

До версії 1.0.0, Повертає **`WIN32_NO_ERROR`** у разі успішного
завершення , **`false`** якщо була виявлена проблема з параметрами або
[код помилки Win32](win32service.constants.errors.md) при невдалому
завершення роботи.

### Помилки

Викидає [ValueError](class.valueerror.md), якщо значення
`servicename` не вказано.

Викидає [Win32ServiceException](class.win32serviceexception.md) у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|-------------------------|----------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ---|
| PECL win32service 1.0.0 Викидає [ValueError](class.valueerror.md) при невірних даних у параметрах, що раніше поверталося **`false`**. |
| PECL win32service 1.0.0 Викидає [Win32ServiceException](class.win32serviceexception.md) у разі виникнення помилки, раніше повертався [Код помилки Win32](win32service.constants.errors.md). |
| PECL win32service 1.0.0 Тип повертається тепер void, раніше був [mixed](language.types.declarations.md#language.types.declarations.mixed). |
| PECL win32service 0.3.0 | Функція більше не вимагає облікового запису адміністратора, якщо ACL встановлено для іншого облікового запису. |

### Дивіться також

- [win32_start_service()](function.win32-start-service.md) -
Запускає службу
- [win32_stop_service()](function.win32-stop-service.md) -
Зупиняє службу
- [win32_continue_service()](function.win32-continue-service.md) -
Відновлює роботу зупиненої служби
- [win32_send_custom_control()](function.win32-send-custom-control.md) -
Відправляє настроюваний елемент керування в службу
- [Коди помилок Win32](win32service.constants.errors.md)
