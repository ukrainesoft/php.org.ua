- [« ibase_affected_rows](function.ibase-affected-rows.md)
- [ibase_blob_add »](function.ibase-blob-add.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Ініціює завдання резервного копіювання у диспетчері служб та
негайно повертає

# ibase_backup

(PHP 5, PHP 7 \< 7.4.0)

ibase_backup - Ініціює завдання резервного копіювання в диспетчері
служб та негайно повертає

### Опис

**ibase_backup**(
resource `$service_handle`,
string `$source_db`,
string `$dest_file`,
int `$options` u003d 0,
bool `$verbose` u003d **`false`**
):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Ця функція передає аргументи на (віддалений) сервер бази даних. там
розпочинається новий процес резервного копіювання. Тому ви не отримаєте
жодних відповідей.

### Список параметрів

`service_handle`
Раніше відкрите з'єднання із сервером бази даних.

`source_db`
Абсолютний шлях файлу бази даних на сервері бази даних. Ви також
Ви можете використовувати псевдонім бази даних.

`dest_file`
Шлях до файлу резервної копії на сервері бази даних.

`options`
Додаткові опції передачі на сервер бази даних для резервного
копіювання. Параметр `options` може бути комбінацією       
наступних констант: **`IBASE_BKP_IGNORE_CHECKSUMS`**,
**`IBASE_BKP_IGNORE_LIMBO`**, **`IBASE_BKP_METADATA_ONLY`**,
**`IBASE_BKP_NO_GARBAGE_COLLECT`**, **`IBASE_BKP_OLD_DESCRIPTIONS`**,
**`IBASE_BKP_NON_TRANSPORTABLE`** або **`IBASE_BKP_CONVERT`**. Прочитайте
Докладніше про [Перевизначені константи](ibase.constants.md) для
отримання додаткової інформації.

`verbose`
Оскільки процес резервного копіювання виконується на сервері бази
даних, ви не маєте шансів отримати його висновок. Цей аргумент марний.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

Оскільки процес резервного копіювання виконується на (віддаленому)
сервер, ця функція просто передає йому аргументи. Поки що аргументи
коректні, ви не отримаєте **`false`**.

### Приклади

**Приклад #1 Приклад використання **ibase_backup()****

 <?php// З'єднання до серверу бази даних за IP-адресою і порту$service u003d ibase_service_attach ('10.1.11.200/3050', запуску| / Резервне копіювання бази даних співробітників, використовуючи повний шлях к /srv/backup/employees.fbk// Не використовуйте ніяких спеціальних аргументівibase_backup($service,'es ');// Звільнення підключеного з'єднанняibase_service_detach ($service);?> `

**Приклад #2 Приклад використання **ibase_backup()** з аргументами**

`<?php// Підключитися до серверу бази даних за імені і порту за замовчуванням$service u003d ibase_service_attach ('fb-server.contoso.local', звернення'; 'sysdba'; даних//Резервне копіювання бази даних співробітників з використанням псевдоніма в /srv/backup/employees.fbk.// Резервне копіювання тільки метаданих. Не створюйте переносну резервну копію.ibase_backup($service, 'employees.fdb', '/srv/backup/employees.fbk', IBASE_BKP_METADATA_ONLY | IBASE_BKP_N  IBASE_BKP_N|

### Дивіться також

- [ibase_restore()](function.ibase-restore.md) - Запускає завдання
відновлення в диспетчері служб та негайно повертається
