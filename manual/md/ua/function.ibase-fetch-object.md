- [« ibase_fetch_assoc](function.ibase-fetch-assoc.md)
- [ibase_fetch_row »](function.ibase-fetch-row.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Отримує об'єкт із бази даних InterBase

# ibase_fetch_object

(PHP 5, PHP 7 \< 7.4.0)

ibase_fetch_object — Отримує об'єкт із бази даних InterBase

### Опис

**ibase_fetch_object**(resource `$result_id`, int `$fetch_flag` u003d 0):
object

Витягує рядок як псевдооб'єкт із заданого ідентифікатора
результату.

Наступні дзвінки **ibase_fetch_object()** повернуть наступний рядок у
набір результатів.

### Список параметрів

`result_id`
Ідентифікатор результату InterBase, отриманий за допомогою
[ibase_query()](function.ibase-query.md) або
[ibase_execute()](function.ibase-execute.md).

`fetch_flag`
`fetch_flag` являє собою комбінацію констант **`IBASE_TEXT`** та
**`IBASE_UNIXTIME`** ORed. Передача **`IBASE_TEXT`** змусить функцію
повертати вміст BLOB-об'єктів замість ідентифікаторів
BLOB-об'єктів. Передача **`IBASE_UNIXTIME`** змусить функцію повертати
значення дати/часу як позначки часу Unix, а не як відформатовані
рядки.

### Значення, що повертаються

Повертає об'єкт з інформацією про рядок або **`false`**, якщо рядок
більше немає.

### Приклади

**Приклад #1 Приклад використання **ibase_fetch_object()****

` <?php$dbh u003d ibase_connect($host, $username, $password);$stmt u003d 'SELECT * FROM tblname';$sth u003d ibase_query($dbh, $stmt);while ($row )) {    echo $row->email . "
";} ibase_close($dbh);?> `

### Дивіться також

- [ibase_fetch_row()](function.ibase-fetch-row.md) - Витягує
рядок із бази даних InterBase
- [ibase_fetch_assoc()](function.ibase-fetch-assoc.md) - Витягує
рядок результату із запиту у вигляді асоціативного масиву
