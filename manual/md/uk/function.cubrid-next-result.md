- [«cubrid_move_cursor](function.cubrid-move-cursor.md)
- [cubrid_num_cols »](function.cubrid-num-cols.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Отримує результат наступного запиту під час виконання кількох
SQL-операторів

#cubrid_next_result

(PECL CUBRID u003d 8.4.0)

cubrid_next_result — Отримує результат наступного запиту при
виконанні кількох SQL-операторів

### Опис

**cubrid_next_result**(resource `$result`): bool

Функція **cubrid_next_result()** використовується для отримання результатів
наступного запиту, якщо виконується кілька SQL-операторів та для
[cubrid_execute()](function.cubrid-execute.md) встановлено прапорець
**`CUBRID_EXEC_QUERY_ALL`**.

### Список параметрів

`result`
`result` з виклику функції
[cubrid_execute()](function.cubrid-execute.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_next_result()****

` <?php$conn u003d cubrid_connect("127.0.0.1", 33000, "demodb", "dba");$sql_stmt u003d "SELECT * FROM code; SELECT * FROM res u003d cubrid_execute($conn, $sql_stmt, CUBRID_EXEC_QUERY_ALL);get_result_info($res);cubrid_next_result($res);get_result_info($res);function get_result_info($req){     
------------ get_result_info --------------------
");    $row_num u003d cubrid_num_rows($req);    $col_num u003d cubrid_num_cols($req);    $column_name_list u003d cubrid_column_names($req);    $column_type_list u003d cubrid_column_types($req);    $column_last_name u003d cubrid_field_name($req, $col_num - 1);    $column_last_table u003d cubrid_field_table($req, $col_num - 1);    $column_last_type u003d cubrid_field_type($req, $col_num - 1);    $column_last_len u003d cubrid_field_len($req, $col_num - 1);    $column_1_flags u003d cubrid_field_flags( $req, 1);    printf("%-30s %d
", "Кількість рядків:", $row_num);    printf("%-30s %d
", "Кількість стовпців:", $col_num);    printf("
");   printf("%-30s %-30s %-15s
", "Назви стовпців", "Типи стовпців", "Довжина стовпців");    printf("----------------------------- -------------------------------------------------
");    $size u003d count($column_name_list);   for($i u003d 0; $i < $size; $i++) {         $column_len u003d   | %-15s
", $column_name_list[$i], $column_type_list[$i], $column_len);    }    printf("

");   printf("%-30s %s
", "Назва останнього стовпця:", $column_last_name);    printf("%-30s %s
", "Таблиця останнього стовпця:", $column_last_table);    printf("%-30s %s
", "Тип останнього стовпця:", $column_last_type);    printf("%-30s %d
", "Довжина останнього стовпця:", $column_last_len);    printf("%-30s %s
", Прапори другого стовпця:", $ column_1_flags);

");}?> `

Результат виконання цього прикладу:

------------ get_result_info --------------------
Row count: 6
Column count: 2

Назви стовпців Типи стовпців Довжина стовпців
-------------------------------------------------- ----------------------------
s_name char 1
f_name varchar 6


Назва останнього стовпця: f_name
Таблиця останнього стовпця: code
Тип останнього стовпця: varchar
Довжина останнього стовпця: 6
Прапори другого стовпця:



------------ get_result_info --------------------
Кількість рядків: 4
Кількість стовпців: 5

Назви стовпців Типи стовпців Довжина стовпців
-------------------------------------------------- ----------------------------
event_code integer 11
athlete varchar 40
host_year integer 11
score varchar 10
unit varchar 5


Назва останнього стовпця: unit
Таблиця останнього стовпця: history
Тип останнього стовпця: varchar
Довжина останнього стовпця: 5
Прапори другого стовпця: not_null primary_key unique_key

### Дивіться також

- [cubrid_execute()](function.cubrid-execute.md) - Виконує
підготовлений SQL-оператор
