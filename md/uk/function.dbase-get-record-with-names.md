- [« dbase_get_header_info](function.dbase-get-header-info.md)
- [dbase_get_record »](function.dbase-get-record.md)

- [PHP Manual](index.md)
- [dBase](ref.dbase.md)
- Отримує запис із бази даних у вигляді асоціативного масиву

# dbase_get_record_with_names

(PHP 5 \< 5.3.0, dbase 5, dbase 7)

dbase_get_record_with_names — Отримує запис із бази даних у вигляді
асоціативного масиву

### Опис

**dbase_get_record_with_names**(resource `$database`, int `$number`):
array

Отримує запис із бази даних dBase у вигляді асоціативного масиву
(разом із іменами відповідних полів).

### Список параметрів

`database`
Ресурс бази даних, що повертається функцією
[dbase_open()](function.dbase-open.md) або
[dbase_create()](function.dbase-create.md).

`number`
Індекс запису (Тут відповідає фізичному номеру запису. - Прим.
пер.) в діапазоні від `1` до `dbase_numrecords($dbase_identifier)`

### Значення, що повертаються

Асоціативний масив із даними рядка. Масив буде включати ключ
`deleted` який дорівнює 1, якщо запис позначений на видалення (дивіться
[dbase_delete_record()](function.dbase-delete-record.md)). Повертає
та порожні записи. Отже, цією функцією неможливо отримати
значення чи ім'я поля `delete`.

Кожне поле перетворюється на відповідний тип PHP, за винятком:

- Date перетворюється на рядок.
- DateTime перетворюється на рядок.
- Цілі, що виходять з діапазону **`PHP_INT_MIN`**..**`PHP_INT_MAX`**
перетворюються на рядки.
- До dbase 7.0.0, логічні значення (`L`) перетворюються на `1` або
`0`.

У разі виникнення помилки, **dbase_get_record_with_names()**
повертає **`false`**.

### Список змін

| Версія | Опис |
|-------------|--------------------------------------- ----------------------|
| dbase 7.0 | Параметр `database` тепер має тип resource, а не int. |

### Приклади

**Приклад #1 Список усіх зареєстрованих користувачів у базі даних**

` <?php// відкриваємо базу в режимі читання$db u003d dbase_open('/tmp/test.dbf', 0);if ($db) { $record_numbers u003d dbase_numrecords(db for ($i u003d 1; $i <u003d$$record_numbers;$i++) {     $row u003d dbase_get_record_with_names($db, $i); if ($row['ismember'] u003du003d 1) {          echo "Member #$i: " . trim($row['name']) . "
";      }  }}// Прим. пер. -// к полученным с помощью dbase_get_record_with_names значениям записи// обращаемся по имени - $row['ismember'],// а в случае с dbase_get_record к значениям записи// обращаемся по номеру - $row[4]?> `

### Дивіться також

- [dbase_get_record()](function.dbase-get-record.md) - Отримує
записи з бази даних, як із індексованого масиву
