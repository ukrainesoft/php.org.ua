- [«cubrid_next_result](function.cubrid-next-result.md)
- [cubrid_num_rows »](function.cubrid-num-rows.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Повертає кількість стовпців у наборі результатів

#cubrid_num_cols

(PECL CUBRID u003d 8.3.0)

cubrid_num_cols — Повертає кількість стовпців у наборі результатів

### Опис

**cubrid_num_cols**(resource `$result`): int

Функція **cubrid_num_cols()** використовується для отримання кількості
стовпців із результату запиту. Її можна використовувати лише в тому
у випадку, якщо запит, що виконується, є оператором `SELECT`.

### Список параметрів

`result`
Результат.

### Значення, що повертаються

Кількість стовпців у разі успішного виконання.

**`false`**, якщо SQL-вираз не є SELECT.

### Приклади

**Приклад #1 Приклад використання **cubrid_num_cols()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb", "dba");$req u003d cubrid_execute($conn, "SELECT * FROM code");$row_num $u003d col_num u003d cubrid_num_cols($req);printf("Кількість рядків: %d
Кількість стовпців: % d
", $row_num, $col_num);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

Кількість рядків: 6
Кількість стовпців: 2

### Дивіться також

- [cubrid_execute()](function.cubrid-execute.md) - Виконує
підготовлений SQL-оператор
- [cubrid_num_rows()](function.cubrid-num-rows.md) - Отримати
кількість рядків у наборі результатів
