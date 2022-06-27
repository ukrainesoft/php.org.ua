- [«win32_create_service](function.win32-create-service.md)
- [win32_get_last_control_message
»](function.win32-get-last-control-message.md)

- [PHP Manual](index.md)
- [win32service](ref.win32service.md)
- Видалення запису служби з бази даних SCM

#win32_delete_service

(PECL win32service \>u003d0.1.0)

win32_delete_service — Видалення запису служби з бази даних SCM

### Опис

**win32_delete_service**(string `$servicename`, string `$machine` u003d ?):
void

Намагається видалити службу бази даних SCM. Для цього потрібні права
адміністратора.

Функція насправді просто позначає сервіс видалення. Якщо інші
процеси (наприклад, сервісний аплет) відкриті, то видалення буде
відкладено до закриття цих програм. Якщо служба видалена для видалення,
подальші спроби її видалення не завершаться помилкою, а спроби створити
нову службу із цим ім'ям також будуть невдалими.

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

### Приклади

**Приклад #1 Приклад використання **win32_delete_service()****

Видаляє службу dummyphp.

` <?phpwin32_delete_service('dummyphp');?> `

### Дивіться також

- [win32_create_service()](function.win32-create-service.md) -
Створює новий запис служби у базі даних SCM
- [Коди помилок Win32](win32service.constants.errors.md)
