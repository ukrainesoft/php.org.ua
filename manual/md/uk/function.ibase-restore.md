- [« ibase_query](function.ibase-query.md)
- [ibase_rollback_ret »](function.ibase-rollback-ret.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Запускає завдання відновлення у диспетчері служб та негайно
повертається

# ibase_restore

(PHP 5, PHP 7 \< 7.4.0)

ibase_restore — Запускає завдання відновлення в диспетчері служб та
негайно повертається

### Опис

**ibase_restore**(
resource `$service_handle`,
string `$source_file`,
string `$dest_db`,
int `$options` u003d 0,
bool `$verbose` u003d **`false`**
):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Ця функція передає аргументи (віддаленому) сервер бази даних. Там вона
розпочинає новий процес відновлення. Тому ви не отримаєте жодного
відповіді.

### Список параметрів

`service_handle`
Раніше відкрите з'єднання із сервером бази даних.

`source_file`
Абсолютний шлях на сервері, де є файл резервної копії.

`dest_db`
Шлях створення нової бази даних на сервері. ви також можете
використовувати псевдонім бази даних.

`options`
Додаткові параметри для передачі на сервер бази даних
відновлення. Параметр `options` може бути комбінацією наступних
констант: **`IBASE_RES_DEACTIVATE_IDX`**, **`IBASE_RES_NO_SHADOW`**,
**`IBASE_RES_NO_VALIDITY`**, **`IBASE_RES_ONE_AT_A_TIME`**,
**`IBASE_RES_REPLACE`**, **`IBASE_RES_CREATE`**,
**`IBASE_RES_USE_ALL_SPACE`**, **`IBASE_PRP_PAGE_BUFFERS`**,
**`IBASE_PRP_SWEEP_INTERVAL`**, **`IBASE_RES_CREATE`**. Читайте розділ про
[Предвизначені константи](ibase.constants.md) для отримання
додаткову інформацію.

`verbose`
Оскільки процес відновлення виконується на сервері бази даних,
у вас немає можливості отримати висновок. Цей аргумент марний.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

Оскільки процес відновлення виконується на (віддаленому) сервері, ця
функція легко передає йому аргументи. Якщо аргументи є недійсними,
то повернеться **`false`**.

### Приклади

**Приклад #1 Приклад використання **ibase_restore()****

`<?php// Підключення до серверу бази даних за ip-адресою і порту$service u003d ibase_service_attach ('10.1.11.200/3050', 'свернення'     Відновлення резервної копії employee в нову базу даних emps.fdb// Не використовуйте ніяких спеціальних аргументівibase_restore($service, '/srv/backup/employees.fb''| $ service);?> `

**Приклад #2 Приклад використання **ibase_restore()** з аргументами**

`<?php// Приєднання к серверу бази даних за імені і порту за замовчуванням$service u003d ibase_service_attach ('fb-server.contoso.local', запуску| // Відновлення бази даних employee з використанням псевдоніма.// Відновлення без індексів. Заміна існуючої бази даних.ibase_restore($service, '/srv/backup/employees.fbk', 'employees.fdb', IBASE_RES_DEACTIVATE_IDX | IBASE_RES_REPLACE);| 

### Дивіться також

- [ibase_backup()](function.ibase-backup.md) - Ініціює завдання
резервного копіювання в диспетчері служб та негайно повертає
