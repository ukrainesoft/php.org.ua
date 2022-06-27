- [«dbase_open](function.dbase-open.md)
- [dbase_replace_record »](function.dbase-replace-record.md)

- [PHP Manual](index.md)
- [dBase](ref.dbase.md)
- Фіксує видалення з бази даних

#dbase_pack

(PHP 5 \< 5.3.0, dbase 5, dbase 7)

dbase_pack — Фіксує видалення з бази даних

### Опис

**dbase_pack**(resource `$database`): bool

Фіксує видалення з бази даних, остаточно видаляє записи, які
були помічені на видалення за допомогою
[dbase_delete_record()](function.dbase-delete-record.md). Зверніть
увагу, що після виконання цієї операції файл буде усічений (у
на відміну від команди dBASE III's PACK)

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

**Приклад #1 Очищення бази даних dBase**

` <?php// відкриваємо в режимі читання і записи$db u003d dbase_open('/tmp/test.dbf', 2);if ($db) {  $record_numbers u003d dbase_numrecord; for ($i u003d 1; $i <u003d$$record_numbers;$i++) {     dbase_delete_record($db, $i); }  // стираємо базу  dbase_pack($db);}?> `

### Дивіться також

- [dbase_delete_record()](function.dbase-delete-record.md) -
Видалення записів із бази даних
