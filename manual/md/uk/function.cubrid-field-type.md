- [«cubrid_field_table](function.cubrid-field-table.md)
- [cubrid_list_dbs »](function.cubrid-list-dbs.md)

- [PHP Manual](index.md)
- [Функції сумісності CUBRID MySQL](cubridmysql.cubrid.md)
- Отримати тип зазначеного стовпця

#cubrid_field_type

(PECL CUBRID u003d 8.3.0)

cubrid_field_type — Отримати тип зазначеного стовпця

### Опис

**cubrid_field_type**(resource `$result`, int `$field_offset`): string

Функція повертає тип стовпця. Тип може приймати такі
значення: "int", "real", "string" і т.д.

### Список параметрів

`result`
`Result`, отриманий з [cubrid_execute()](function.cubrid-execute.md)

`field_offset`
Індекс поля у рядку результуючого набору. `field_offset` починається
з 0. Якщо `field_offset` не заданий, буде викликана помилка рівня
**`E_WARNING`**.

### Значення, що повертаються

Тип стовпця у разі успішного виконання.

**`false`**, якщо заданий некоректний field_offset.

-1, якщо SQL-запит був відмінним від SELECT типу.

### Приклади

**Приклад #1 Приклад використання **cubrid_field_type()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb");$result u003d cubrid_execute($conn, "SELECT * FROM code");$col_num u003d cubrid_num 15s%-15s%s
", "Таблиця поля", "Найменування поля", "Тип поля");for($i u003d 0; $i < $col_num; $i++) {    printf("%-15s %-1
",       cubrid_field_table($result, $i), cubrid_field_name($result, $i), cubrid_field_type($result, $i));}cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

Таблиця поля Назва поля Тип поля
code s_name char
code f_name varchar
