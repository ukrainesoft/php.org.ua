- [«cubrid_field_name](function.cubrid-field-name.md)
- [cubrid_field_table »](function.cubrid-field-table.md)

- [PHP Manual](index.md)
- [Функції сумісності CUBRID MySQL](cubridmysql.cubrid.md)
- Перемістити внутрішній покажчик результуючого набору на вказаний
стовпець

#cubrid_field_seek

(PECL CUBRID u003d 8.3.0)

cubrid_field_seek — Перемістити внутрішній покажчик результуючого
набору на вказаний стовпець

### Опис

**cubrid_field_seek**(resource `$result`, int `$field_offset` u003d 0): bool

Функція переміщує внутрішній покажчик результуючого набору
вказаний стовпець. Це зміщення використовується функцією
[cubrid_fetch_field()](function.cubrid-fetch-field.md), якщо не вказано
параметр offset. Повертає **`true`** або **`false`** залежно від
успішність виконання.

### Список параметрів

`result`
`Result`, отриманий з [cubrid_execute()](function.cubrid-execute.md)

`field_offset`
Індекс поля у рядку результуючого набору. `field_offset` починається
з 0. Якщо `field_offset` не заданий, буде викликана помилка рівня
**`E_WARNING`**.

### Значення, що повертаються

**`true`** у разі успішного виконання.

**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_field_seek()****

`<?php$conn u003d cubrid_connect("localhost", 33000, "demodb");$req u003d cubrid_execute($conn, "SELECT event_code,athlete_code,nation_code,game_date| ;var_dump(cubrid_fetch_row($req));cubrid_field_seek($req, 1);$field u003d cubrid_fetch_field($req);printf("
--- Властивості поля ---
");printf("%-30s %s
", "ім'я стовпця:", $field->name);printf("%-30s %s
", "ім'я таблиці:", $field->table);printf("%-30s \"%s\"
", "значення стовпця за мовчанням:", $field->def);printf("%-30s %d
", "максимальна довжина стовпця:", $field->max_length);printf("%-30s %d
", "не може бути NULL:", $field->not_null);printf("%-30s %d
", "є унікальним ключом:", $field->unique_key);printf("%-30s %d
", "є неунікальним ключом:", $field->multiple_key);printf("%-30s %d
", "містить числове значення:", $field->numeric);printf("%-30s %s
", "тип стовпця:", $field->type);cubrid_close_request($req);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

array(4) {
[0]u003d>
string(5) "20001"
[1]u003d>
string(5) "16132"
[2]u003d>
string(3) "KOR"
[3]u003d>
string(9) "1988-09-30"
}

--- Властивості поля ---
ім'я шпальти: athlete_code
ім'я таблиці: game
значення стовпця за замовчуванням: ""
максимальна довжина стовпця: 0
не може бути NULL: 1
є унікальним ключем: 1
є неунікальним ключем: 0
містить числове значення: 1
тип стовпця: integer
