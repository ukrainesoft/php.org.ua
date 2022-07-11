- [«cubrid_fetch_row](function.cubrid-fetch-row.md)
- [cubrid_field_len »](function.cubrid-field-len.md)

- [PHP Manual](index.md)
- [Функції сумісності CUBRID MySQL](cubridmysql.cubrid.md)
- Отримати рядок, який містить прапори стовпця за вказаним індексом

#cubrid_field_flags

(PECL CUBRID u003d 8.3.0)

cubrid_field_flags — Отримати рядок, який містить прапори стовпця за
зазначеному індексу

### Опис

**cubrid_field_flags**(resource `$result`, int `$field_offset`): string

Функція повертає рядок, який містить прапори стовпця за вказаним
індексу, розділені пропуском. Ви можете розбити рядок на окремі
частини за допомогою explode. Можливі значення прапорів: **`not_null`**,
**`primary_key`**, **`unique_key`**, **`foreign_key`**,
**`auto_increment`**, **`shared`**, **`reverse_index`**,
**`reverse_unique`** та **`timestamp`**.

### Список параметрів

`result`
`Result` отриманий з [cubrid_execute()](function.cubrid-execute.md)

`field_offset`
Індекс поля у рядку результуючого набору. `field_offset` починається
з 0. Якщо `field_offset` не заданий, буде викликана помилка рівня
**`E_WARNING`**.

### Значення, що повертаються

Рядок із прапорами у разі успішного виконання.

**`false`** у разі некоректного значення field_offset.

-1, якщо SQL-запит був відмінним від SELECT типу.

### Приклади

**Приклад #1 Приклад використання **cubrid_field_flags()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb");$result u003d cubrid_execute($conn, "SELECT * FROM game WHERE host_yearu003d2004 AND' );$col_num u003d cubrid_num_cols($result);printf("%-30s %s
", "Ім'я поля", "Прапори поля");for($i u003d 0; $i < $col_num; $i++) {    printf("%-30s %s
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
