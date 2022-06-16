- [«cubrid_field_seek](function.cubrid-field-seek.md)
- [cubrid_field_type »](function.cubrid-field-type.md)

- [PHP Manual](index.md)
- [Функції сумісності CUBRID MySQL](cubridmysql.cubrid.md)
- Отримати ім'я таблиці, якою належить вказаний стовпець

#cubrid_field_table

(PECL CUBRID u003d 8.3.0)

cubrid_field_table — Отримати ім'я таблиці, до якої належить зазначений
стовпець

### Опис

**cubrid_field_table**(resource `$result`, int `$field_offset`): string

Функція повертає ім'я таблиці, яка містить вказаний стовпець.
Буває корисно під час роботи з великими запитами з JOIN.

### Список параметрів

`result`
`Result` отриманий з [cubrid_execute()](function.cubrid-execute.md)

`field_offset`
Індекс поля у рядку результуючого набору. `field_offset` починається
з 0. Якщо `field_offset` не заданий, буде викликана помилка рівня
**`E_WARNING`**.

### Значення, що повертаються

Ім'я таблиці у разі успішного виконання.

**`false`** якщо задано некоректний field_offset.

-1, якщо SQL-запит був відмінним від SELECT типу.

### Приклади

**Приклад #1 Приклад використання **cubrid_field_table()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb");$result u003d cubrid_execute($conn, "SELECT * FROM code");$col_num u003d cubrid_num 15s%-15s%s
", "Таблиця поля", "Найменування поля", "Тип поля");for($i u003d 0; $i < $col_num; $i++) {    printf("%-15s %-%s
",       cubrid_field_table($result, $i), cubrid_field_name($result, $i), cubrid_field_type($result, $i));}cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

Таблиця поля Назва поля Тип поля
code s_name char
code f_name varchar
