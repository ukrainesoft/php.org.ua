- [«dBase](ref.dbase.md)
- [dbase_close »](function.dbase-close.md)

- [PHP Manual](index.md)
- [dBase](ref.dbase.md)
- Додає запис до бази даних

#dbase_add_record

(PHP 5 \< 5.3.0, dbase 5, dbase 7)

dbase_add_record — Додає запис до бази даних

### Опис

**dbase_add_record**(resource `$database`, array `$data`): bool

Додає дані до бази даних

### Список параметрів

`database`
Ресурс бази даних, що повертається функцією
[dbase_open()](function.dbase-open.md) або
[dbase_create()](function.dbase-create.md).

`data`
Індексований масив із даними. Кількість елементів має бути рівна
числу полів у базі даних, інакше **dbase_add_record()** не
вдасться виконати.

> **Примітка**:
>
> Якщо ви використовуєте як параметр запис, який повернув
> функція [dbase_get_record()](function.dbase-get-record.md), не
> забудьте скинути ключ `deleted`. (прим пров. -
> unset(record\['deleted'\]);

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|-------------|--------------------------------------- ----------------------|
| dbase 7.0 | Параметр `database` тепер має тип resource, а не int. |

### Приклади

**Приклад #1 Вставлення запису в базу даних dBase**

` <?php// відкрити БД в режимі читання і записи$db u003d dbase_open('/tmp/test.dbf', 2);if ($db) {  dbase_add_record($db, y  y 'Maxim Topolov',      '23',      'max@example.com',     'T')); dbase_close($db);}?> `

### Дивіться також

- [dbase_delete_record()](function.dbase-delete-record.md) -
Видалення записів із бази даних
- [dbase_replace_record()](function.dbase-replace-record.md) -
Замінює запис у базі даних
