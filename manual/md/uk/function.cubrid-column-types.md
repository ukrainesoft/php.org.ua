- [«cubrid_column_names](function.cubrid-column-names.md)
- [cubrid_commit »] (function.cubrid-commit.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Отримати типи стовпців у результуючому наборі

#cubrid_column_types

(PECL CUBRID u003d 8.3.0)

cubrid_column_types — Отримати типи стовпців у результуючому наборі

### Опис

**cubrid_column_types**(resource `$req_identifier`): array

Функція **cubrid_column_types()** використовується для отримання типів
стовпців у результуючому наборі, заданому в `req_identifier`.

### Список параметрів

`req_identifier`
Request identifier.

### Значення, що повертаються

Масив рядків, що містять типи стовпців, у разі успішного виконання
або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 **cubrid_column_types()** example**

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb", "dba");$result u003d cubrid_execute($conn, "SELECT * FROM game WHERE host_yearu003d '2u003d 'G'");$column_names u003d cubrid_column_names($result);$column_types u003d cubrid_column_types($result);printf("%-30s %-30s %-15s
", "Column Names", "Column Types", "Column Maxlen");for($i u003d 0, $size u003d count($column_names); $i < $size; $i++) {   result, $i);    printf("%-30s %-30s %-15s
", $column_names[$i], $column_types[$i], $column_len);}cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

Column Names Column Types Column Maxlen
host_year integer 11
event_code integer 11
athlete_code integer 11
stadium_code integer 11
nation_code char 3
medal char 1
game_date date 10

### Дивіться також

- [cubrid_column_names()](function.cubrid-column-names.md) -
Отримати імена стовпців у результуючому наборі
- [cubrid_prepare()](function.cubrid-prepare.md) - Підготовка
SQL-вираз до виконання
- [cubrid_execute()](function.cubrid-execute.md) - Виконує
підготовлений SQL-оператор
