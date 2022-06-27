- [«dbase_create](function.dbase-create.md)
- [dbase_get_header_info »](function.dbase-get-header-info.md)

- [PHP Manual](index.md)
- [dBase](ref.dbase.md)
- Видалення записів із бази даних

#dbase_delete_record

(PHP 5 \< 5.3.0, dbase 5, dbase 7)

dbase_delete_record — Видалення записів із бази даних

### Опис

**dbase_delete_record**(resource `$database`, int `$number`): bool

Позначає записи для видалення з бази даних.

> **Примітка**:
>
> Щоб остаточно видалити записи з бази даних, необхідно викликати
> [dbase_pack()](function.dbase-pack.md).

### Список параметрів

`database`
Ресурс бази даних, що повертається функцією
[dbase_open()](function.dbase-open.md) або
[dbase_create()](function.dbase-create.md).

`number`
Ціле число, в проміжку від 1 до кількості записів у базі динних
(кількість записів повертає функція
[dbase_numrecords()](function.dbase-numrecords.md)).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|-------------|--------------------------------------- ----------------------|
| dbase 7.0 | Параметр `database` тепер має тип resource, а не int. |

### Дивіться також

- [dbase_add_record()](function.dbase-add-record.md) - Додає
запис до бази даних
- [dbase_replace_record()](function.dbase-replace-record.md) -
Замінює запис у базі даних
