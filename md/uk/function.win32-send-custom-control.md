- [«
win32_query_service_status](function.win32-query-service-status.md)
- [win32_set_service_exit_code
»](function.win32-set-service-exit-code.md)

- [PHP Manual](index.md)
- [win32service](ref.win32service.md)
- Відправляє настроюваний елемент керування в службу

#win32_send_custom_control

(PECL win32service \>u003d0.4.0)

win32_send_custom_control — Відправляє налаштований елемент керування
у службу

### Опис

**win32_send_custom_control**(string `$servicename`, int `$control`,
string `$machine` u003d ?): void

Дивіться [функцію Microsoft
ControlService](https://docs.microsoft.com/en-us/windows/desktop/api/winsvc/nf-winsvc-controlservice)
для отримання додаткових відомостей.

### Список параметрів

`servicename`
Коротка назва служби.

`control`
Значення настроюваного елемента керування від 128 до 255.

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

До версії 1.0.0, якщо значення control не знаходиться між 128 та 255,
функція видавала помилку рівня **`E_ERROR`**.

Викидає [ValueError](class.valueerror.md), якщо значення
`servicename` не вказано.

Викидає [ValueError](class.valueerror.md), якщо значення `control`
не знаходиться між 128 та 255.

Викидає [Win32ServiceException](class.win32serviceexception.md) у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|-------------------------|----------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ---|
| PECL win32service 1.0.0 Викидає [ValueError](class.valueerror.md) при невірних даних у параметрах, що раніше поверталося **`false`**. |
| PECL win32service 1.0.0 Викидає [Win32ServiceException](class.win32serviceexception.md) у разі виникнення помилки, раніше повертався [Код помилки Win32](win32service.constants.errors.md). |
| PECL win32service 1.0.0 Тип повертається тепер void, раніше був [mixed](language.types.declarations.md#language.types.declarations.mixed). |

### Дивіться також

- [win32_start_service()](function.win32-start-service.md) -
Запускає службу
- [win32_stop_service()](function.win32-stop-service.md) -
Зупиняє службу
- [win32_pause_service()](function.win32-pause-service.md) -
Припиняє службу
- [win32_continue_service()](function.win32-continue-service.md) -
Відновлює роботу зупиненої служби
- [Коди помилок Win32](win32service.constants.errors.md)
