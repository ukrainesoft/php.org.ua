- [« dbase_add_record](function.dbase-add-record.md)
- [dbase_create »] (function.dbase-create.md)

- [PHP Manual](index.md)
- [dBase](ref.dbase.md)
- Закриває базу даних

#dbase_close

(PHP 5 \< 5.3.0, dbase 5, dbase 7)

dbase_close — Закриває базу даних

### Опис

**dbase_close**(resource `$database`): bool

Закриває вказаний ресурс бази даних.

### Список параметрів

`database`
Ресурс бази даних, що повертається функцією
[dbase_open()](function.dbase-open.md) або
[dbase_create()](function.dbase-create.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|-------------|--------------------------------------- ----------------------|
| dbase 7.0 | Параметр `database` тепер має тип resource, а не int. |

### Приклади

**Приклад #1 Закриття файлу бази даних dBase**

` <?php// відкрити БД в режимі читання$db u003d dbase_open('/tmp/test.dbf', 0);if ($db) {  // отримати деякі(se)$?

### Дивіться також

- [dbase_open()](function.dbase-open.md) - Відкриває базу даних
- [dbase_create()](function.dbase-create.md) - Створює базу даних
