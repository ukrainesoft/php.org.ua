- [« dbase_numfields](function.dbase-numfields.md)
- [dbase_open »](function.dbase-open.md)

- [PHP Manual](index.md)
- [dBase](ref.dbase.md)
- Отримує кількість записів у базі даних

#dbase_numrecords

(PHP 5 \< 5.3.0, dbase 5, dbase 7)

dbase_numrecords — Отримує кількість записів у базі даних

### Опис

**dbase_numrecords**(resource `$database`): int

Отримує кількість записів (рядків) у зазначеній базі даних.

> **Примітка**:
>
> Записи, позначені як віддалені, також враховуються.

> **Примітка**:
>
> Записи бази даних нумеруються від 1 `dbase_numrecords($db)`, тоді як
> поля від 0 до `dbase_numfields($db)-1`.

### Список параметрів

`database`
Ресурс бази даних, що повертається функцією
[dbase_open()](function.dbase-open.md) або
[dbase_create()](function.dbase-create.md).

### Значення, що повертаються

Кількість записів у базі даних, або **`false`** у разі виникнення
помилки.

### Список змін

| Версія | Опис |
|-------------|--------------------------------------- ----------------------|
| dbase 7.0 | Параметр `database` тепер має тип resource, а не int. |

### Приклади

**Приклад #1 Цикл з усіх записів бази даних**

` <?php// відкриваємо в режимі для читання$db u003d dbase_open('/tmp/test.dbf', 0);if ($db) { $record_numbers u003d dbase_numrecords($db) for ($i u003d 1; $i <u003d $record_numbers; $i++) {      //виконання будь-яких дій з записом  }}?> `

### Дивіться також

- [dbase_numfields()](function.dbase-numfields.md) - Отримує
кількість полів бази даних
