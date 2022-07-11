- [«cubrid_field_flags](function.cubrid-field-flags.md)
- [cubrid_field_name »](function.cubrid-field-name.md)

- [PHP Manual](index.md)
- [Функції сумісності CUBRID MySQL](cubridmysql.cubrid.md)
- Отримати максимальну довжину вказаного стовпця

#cubrid_field_len

(PECL CUBRID u003d 8.3.0)

cubrid_field_len — Отримати максимальну довжину вказаного стовпця

### Опис

**cubrid_field_len**(resource `$result`, int `$field_offset`): int

Функція повертає максимальну довжину вказаного стовпця у разі
успішного виконання або **`false`** у разі виникнення помилки.

### Список параметрів

`result`
`Result` отриманий з [cubrid_execute()](function.cubrid-execute.md)

`field_offset`
Індекс поля у рядку результуючого набору. `field_offset` починається
з 0. Якщо `field_offset` не заданий, буде викликана помилка рівня
**`E_WARNING`**.

### Значення, що повертаються

Максимальна довжина у разі успішного виконання.

**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_field_len()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb");$result u003d cubrid_execute($conn, "SELECT * FROM game WHERE host_yearu003d2004 AND' );$column_names u003d cubrid_column_names($result);$column_types u003d cubrid_column_types($result);printf("%-30s %-30s %-15s
", "Найменування стовпця", "Тип стовпця", "Максимальна довжина стовпця");for($i u003d 0, $size u003d count($column_names); $i < $size;   $result, $i);    printf("%-30s %-30s %-15s
", $column_names[$i], $column_types[$i], $column_len);}cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

Назва стовпця Тип стовпця Максимальна довжина стовпця
host_year integer 11
event_code integer 11
athlete_code integer 11
stadium_code integer 11
nation_code char 3
medal char 1
game_date date 10
