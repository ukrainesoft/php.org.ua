- [«cubrid_fetch_assoc](function.cubrid-fetch-assoc.md)
- [cubrid_fetch_lengths »](function.cubrid-fetch-lengths.md)

- [PHP Manual](index.md)
- [Функції сумісності CUBRID MySQL](cubridmysql.cubrid.md)
- Отримання інформації про стовпчик результуючого набору у вигляді об'єкта

#cubrid_fetch_field

(PECL CUBRID u003d 8.3.1)

cubrid_fetch_field — Отримання інформації про стовпчик результуючого
набору у вигляді об'єкта

### Опис

**cubrid_fetch_field**(resource `$result`, int `$field_offset` u003d 0):
object

Функція повертає об'єкт, у властивостях якого міститься інформація про
стовпці. Властивості об'єкта:

`name`
ім'я стовпця

`table`
ім'я таблиці

`def`
значення стовпця за замовчуванням

`max_length`
максимальна довжина стовпця

`not_null`
1, якщо не може бути NULL

`primary_key`
1, якщо є первинним ключем

`unique_key`
1, якщо є унікальним ключем

`multiple_key`
1, якщо є неунікальним ключем

`numeric`
1, якщо містить числове значення

`blob`
1, якщо містить BLOB

`type`
тип стовпця

`unsigned`
1, якщо беззнаковий тип

`zerofill`
1, якщо доповнюється нулями

### Список параметрів

`result`
`Result`, отриманий з [cubrid_execute()](function.cubrid-execute.md)

`field_offset`
Числовий індекс стовпця. Якщо не заданий, то буде вилучено наступний,
вилучений цією функцією, стовпець. `field_offset` починається з нуля.

### Значення, що повертаються

Об'єкт із описаними вище властивостями у разі успішного виконання.

**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_fetch_field()****

`<?php$conn u003d cubrid_connect("localhost", 33000, "demodb");$req u003d cubrid_execute($conn, "SELECT event_code,athlete_code,nation_code,game_date| ;var_dump(cubrid_fetch_row($req));cubrid_field_seek($req, 1);$field u003d cubrid_fetch_field($req);printf("
--- Field Properties ---
");printf("%-30s %s
", "ім'я стовпця:", $field->name);printf("%-30s %s
", "ім'я таблиці:", $field->table);printf("%-30s \"%s\"
", "значення стовпця за мовчанням:", $field->def);printf("%-30s %d
", "максимальна довжина стовпця:", $field->max_length);printf("%-30s %d
", "не може бути NULL:", $field->not_null);printf("%-30s %d
", "є первинним ключом:", $field->primary_key);printf("%-30s %d
", "є унікальним ключом:", $field->unique_key);printf("%-30s %d
", "є неунікальним ключом:", $field->multiple_key);printf("%-30s %d
", "містить числове значення:", $field->numeric);printf("%-30s %d
", "містить BLOB:", $field->blob);printf("%-30s %s
", "тип стовпця:", $field->type);printf("%-30s %d
", "беззнаковий тип:", $field->unsigned);printf("%-30s %d
", "доповнюється нулями:", $field->zerofill);cubrid_close_request($req);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

array(4) {
[0]u003d>
string(5) "20001"
[1]u003d>
string(5) "16681"
[2]u003d>
string(3) "KOR"
[3]u003d>
string(9) "1988-9-30"
}

--- Field Properties ---
ім'я шпальти: athlete_code
ім'я таблиці: game
значення стовпця за замовчуванням: ""
максимальна довжина стовпця: 0
не може бути NULL: 1
є первинним ключем: 1
є унікальним ключем: 1
є неунікальним ключем: 0
містить числове значення: 1
містить BLOB: 0
тип стовпця: integer
беззнаковий тип: 0
доповнюється нулями: 0
