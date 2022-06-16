- [«cubrid_list_dbs](function.cubrid-list-dbs.md)
- [cubrid_ping»] (function.cubrid-ping.md)

- [PHP Manual](index.md)
- [Функції сумісності CUBRID MySQL](cubridmysql.cubrid.md)
- Отримати кількість стовпців у результуючому наборі

#cubrid_num_fields

(PECL CUBRID u003d 8.3.0)

cubrid_num_fields — Отримати кількість стовпців у результуючому наборі

### Опис

**cubrid_num_fields**(resource `$result`): int

Повертає кількість стовпців у результуючому наборі або **`false`**
у разі виникнення помилки.

### Список параметрів

`result`
`result`, отриманий з
[cubrid_execute()](function.cubrid-execute.md),
[cubrid_query()](function.cubrid-query.md) або
[cubrid_prepare()](function.cubrid-prepare.md)

### Значення, що повертаються

Кількість стовпців у разі успішного виконання.

-1, якщо SQL-запит був відмінним від SELECT типу.

**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_num_fields()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb");$req u003d cubrid_execute($conn, "SELECT *FROM code");$row_num u003d cubrid_nu $req);printf("Кількість рядків: %d
Кількість стовпців: % d
", $row_num, $col_num);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

Кількість рядків: 6
Кількість стовпців: 2
