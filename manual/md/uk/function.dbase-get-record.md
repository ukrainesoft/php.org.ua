- [«
dbase_get_record_with_names](function.dbase-get-record-with-names.md)
- [dbase_numfields »](function.dbase-numfields.md)

- [PHP Manual](index.md)
- [dBase](ref.dbase.md)
- Отримує записи з бази даних, як із індексованого масиву

#dbase_get_record

(PHP 5 \< 5.3.0, dbase 5, dbase 7)

dbase_get_record — Отримує записи з бази даних, як із
індексованого масиву

### Опис

**dbase_get_record**(resource `$database`, int `$number`): array

Отримує записи з бази даних як з індексованого масиву.

### Список параметрів

`database`
Ресурс бази даних, що повертається функцією
[dbase_open()](function.dbase-open.md) або
[dbase_create()](function.dbase-create.md).

`number`
Індекс запису (Тут відповідає фізичному номеру запису. - Прим.
пер.) в діапазоні від `1` до `dbase_numrecords($dbase_identifier)`

### Значення, що повертаються

Повертає запис як масиву. Масив буде включати ключ
`deleted` який дорівнює 1, якщо запис позначений на видалення (дивіться
[dbase_delete_record()](function.dbase-delete-record.md)).

Кожне поле перетворюється на відповідний тип PHP, за винятком:

- Date перетворюється на рядок.
- DateTime перетворюється на рядок.
- Цілі, що виходять з діапазону **`PHP_INT_MIN`**..**`PHP_INT_MAX`**
перетворюються на рядки.
- До dbase 7.0.0, логічні значення (`L`) перетворюються на `1` або
`0`.

У разі виникнення помилки, **dbase_get_record()** повертає
**`false`**.

### Список змін

| Версія | Опис |
|-------------|--------------------------------------- ----------------------|
| dbase 7.0 | Параметр `database` тепер має тип resource, а не int. |

### Дивіться також

- [dbase_get_record_with_names()](function.dbase-get-record-with-names.md) -
Отримує запис із бази даних у вигляді асоціативного масиву
