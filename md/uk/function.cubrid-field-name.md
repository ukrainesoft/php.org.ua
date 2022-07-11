- [«cubrid_field_len](function.cubrid-field-len.md)
- [cubrid_field_seek »](function.cubrid-field-seek.md)

- [PHP Manual](index.md)
- [Функції сумісності CUBRID MySQL](cubridmysql.cubrid.md)
- Отримати ім'я вказаного стовпця

# cubrid_field_name

(PECL CUBRID u003d 8.3.0)

cubrid_field_name — Отримати ім'я вказаного стовпця

### Опис

**cubrid_field_name**(resource `$result`, int `$field_offset`): string

Функція повертає ім'я зазначеного стовпця у разі успішного виконання
або **`false`** у разі виникнення помилки.

### Список параметрів

`result`
`Result`, отриманий з [cubrid_execute()](function.cubrid-execute.md)

`field_offset`
Індекс поля у рядку результуючого набору. `field_offset` починається
з 0. Якщо `field_offset` не заданий, буде викликана помилка рівня
**`E_WARNING`**.

### Значення, що повертаються

Ім'я стовпця у разі успішного виконання.

**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_field_name()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb");$result u003d cubrid_execute($conn, "SELECT * FROM game WHERE host_yearu003d2004 AND' );$col_num u003d cubrid_num_cols($result);printf("%-30s %s
", "Найменування поля", "Прапори поля");for($i u003d 0; $i < $col_num; $i++) {    printf("%-30s %s
", cubrid_field_name($result, $i), cubrid_field_flags($result, $i));}cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

Найменування поля Прапори поля
host_year not_null primary_key unique_key
event_code not_null primary_key unique_key foreign_key
athlete_code not_null primary_key unique_key foreign_key
stadium_code not_null
nation_code
medal
game_date
