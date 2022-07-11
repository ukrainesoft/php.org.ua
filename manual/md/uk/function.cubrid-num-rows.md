- [«cubrid_num_cols](function.cubrid-num-cols.md)
- [cubrid_pconnect_with_url »](function.cubrid-pconnect-with-url.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Отримати кількість рядків у наборі результатів

#cubrid_num_rows

(PECL CUBRID u003d 8.3.0)

cubrid_num_rows — Отримати кількість рядків у наборі результатів

### Опис

**cubrid_num_rows**(resource `$result`): int

Функція **cubrid_num_rows()** використовується для отримання кількості
строк результату запиту. Може використовуватись для операторів `SELECT`.
Для запитів `INSERT`, `UPDATE` або `DELETE`, використовуйте функцію
[cubrid_affected_rows()](function.cubrid-affected-rows.md).

Примітка: Функцію **cubrid_num_rows()** можна використовувати лише для
синхронного запиту; функція повертає 0, якщо використовується для
асинхронного запиту.

### Список параметрів

`result`
`result` з виклику функцій
[cubrid_execute()](function.cubrid-execute.md),
[cubrid_query()](function.cubrid-query.md) та
[cubrid_prepare()](function.cubrid-prepare.md)

### Значення, що повертаються

Кількість рядків у разі успішного виконання процесу.

0, якщо запит виконано в асинхронному режимі.

-1, якщо SQL-оператор не є SELECT.

**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_num_rows()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb", "dba");$req u003d cubrid_execute($conn, "SELECT * FROM code");$row_num $u003d col_num u003d cubrid_num_cols($req);printf("Кількість рядків: %d
Кількість стовпців: % d
", $row_num, $col_num);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

Кількість рядків: 6
Кількість стовпців: 2

### Дивіться також

- [cubrid_execute()](function.cubrid-execute.md) - Виконує
підготовлений SQL-оператор
- [cubrid_num_cols()](function.cubrid-num-cols.md) - Повертає
кількість стовпців у наборі результатів
- [cubrid_affected_rows()](function.cubrid-affected-rows.md) -
Кількість рядків, порушених останнім SQL-запитом
