- [«dbase_pack](function.dbase-pack.md)
- [Firebird/InterBase »](book.ibase.md)

- [PHP Manual](index.md)
- [dBase](ref.dbase.md)
- Замінює запис у базі даних

#dbase_replace_record

(PHP 5 \< 5.3.0, dbase 5, dbase 7)

dbase_replace_record — Замінює запис у базі даних

### Опис

**dbase_replace_record**(resource `$database`, array `$data`, int
`$number`): bool

Замінює цей запис у базі даних на задані значення.

### Список параметрів

`database`
Ресурс бази даних, що повертається функцією
[dbase_open()](function.dbase-open.md) або
[dbase_create()](function.dbase-create.md).

`data`
Індексований масив даних. Кількість елементів має бути рівна
кількості полів у базі даних, інакше виклик
**dbase_replace_record()** не вдасться.

> **Примітка**:
>
> Якщо ви використовуєте як параметр запис, який повернув
> [dbase_get_record()](function.dbase-get-record.md), не забудьте
> скинути ключ із ім'ям `deleted`.

`number`
Ціле число, яке може бути в діапазоні від 1 до числа записів у базі
даних (яке повернула функція
[dbase_numrecords()](function.dbase-numrecords.md)).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|-------------|--------------------------------------- ----------------------|
| dbase 7.0 | Параметр `database` тепер має тип resource, а не int. |

### Приклади

**Приклад #1 Оновлення запису в базі даних**

` <?php// відкриємо в режимі читання і записи$db u003d dbase_open('/tmp/test.dbf', 2);if ($db) {  // отримаємо старий запис  $row ; // скинемо помітку 'deleted' unset($row['deleted']); // Встановимо в поле дати поточну дату $row['date'] u003d date('Ymd'); // Перетворимо $row в масив  $row u003d array_values($row); // Замінимо запис  dbase_replace_record($db, $row, 1); dbase_close($db);}?> `

### Примітки

> **Примітка**:
>
> При використанні [dbase_get_record()](function.dbase-get-record.md)
> і
> [dbase_get_record_with_names()](function.dbase-get-record-with-names.md),
> поля логічного типу повертаються як ціле (int) значення
> (`0` або `1`). Якщо ви збираєтеся записувати ці значення назад,
> необхідно пам'ятати, що результат дорівнюватиме `0`.

### Дивіться також

- [dbase_add_record()](function.dbase-add-record.md) - Додає
запис до бази даних
- [dbase_delete_record()](function.dbase-delete-record.md) -
Видалення записів із бази даних
