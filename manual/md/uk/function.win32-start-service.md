- [«
win32_start_service_ctrl_dispatcher](function.win32-start-service-ctrl-dispatcher.md)
- [win32_stop_service »](function.win32-stop-service.md)

- [PHP Manual](index.md)
- [win32service](ref.win32service.md)
- Запускає службу

#win32_start_service

(PECL win32service \>u003d0.1.0)

win32_start_service — Запускає службу

### Опис

**win32_start_service**(string `$servicename`, string `$machine` u003d ?):
void

Здійснює спробу запуску зазначеної служби. Зазвичай вимагає
адміністративних привілеїв, або облікового запису з відповідним чином
настроєним ACL для сервісу.

### Список параметрів

`servicename`
Коротка назва служби.

`machine`
Необов'язкове ім'я машини. Якщо не вказано, використовується на локальній
машині.

### Значення, що повертаються

Функція не повертає значення після виконання.

До версії 1.0.0, Повертає **`WIN32_NO_ERROR`** у разі успішного
завершення , **`false`** якщо була виявлена проблема з параметрами або
[код помилки Win32](win32service.constants.errors.md) при невдалому
завершення роботи.

### Помилки

Викидає [ValueError](class.valueerror.md), якщо значення параметра
`servicename` не встановлено.

Викидає [Win32ServiceException](class.win32serviceexception.md) у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|-------------------------|----------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ---|
| PECL win32service 1.0.0 Викидає [ValueError](class.valueerror.md) при некоректних даних у параметрах, що раніше поверталося **`false`**. |
| PECL win32service 1.0.0 Викидає [Win32ServiceException](class.win32serviceexception.md) у разі виникнення помилки, раніше повертався [Код помилки Win32](win32service.constants.errors.md). |
| PECL win32service 1.0.0 Тип повертається значення void, раніше був [mixed] (language.types.declarations.md#language.types.declarations.mixed). |
| PECL win32service 0.3.0 | Ця функція більше не потребує привілею адміністратора, якщо для користувача, що використовується, коректно настроєно ACL. |

### Дивіться також

- [win32_stop_service()](function.win32-stop-service.md) -
Зупиняє службу
- [win32_pause_service()](function.win32-pause-service.md) -
Припиняє службу
- [win32_continue_service()](function.win32-continue-service.md) -
Відновлює роботу зупиненої служби
- [win32_send_custom_control()](function.win32-send-custom-control.md) -
Відправляє настроюваний елемент керування в службу
- [Коди Помилка Win32](win32service.constants.errors.md)
