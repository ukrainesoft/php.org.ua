- [«cubrid_fetch_field](function.cubrid-fetch-field.md)
- [cubrid_fetch_object »](function.cubrid-fetch-object.md)

- [PHP Manual](index.md)
- [Функції сумісності CUBRID MySQL](cubridmysql.cubrid.md)
- Повертає масив, що містить довжини всіх стовпців поточного рядка

#cubrid_fetch_lengths

(PECL CUBRID u003d 8.3.0)

cubrid_fetch_lengths - Повертає масив, що містить довжини всіх стовпців
поточного рядка

### Опис

**cubrid_fetch_lengths**(resource `$result`): array

Функція повертає індексований масив, що містить довжини стовпців
поточному рядку з результуючого набору, або **`false`** у разі
виникнення помилки.

> **Примітка**:
>
> Якщо стовпець типу BLOB/CLOB, то для отримання його довжини використовуйте
> [cubrid_lob_size()](function.cubrid-lob-size.md).

### Список параметрів

`result`
`Result` отриманий з [cubrid_execute()](function.cubrid-execute.md)

### Значення, що повертаються

Індексований масив.

**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_fetch_lengths()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb");$result u003d cubrid_execute($conn, "SELECT * FROM game WHERE host_yearu003d2004 AND' );$row u003d cubrid_fetch_row($result);print_r($row);$lens u003d cubrid_fetch_lengths($result);print_r($lens);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

Array
(
[0] u003d> 2004
[1] u003d> 20085
[2] u003d> 15118
[3] u003d> 30134
[4] u003d> AUS
[5] u003d> G
[6] u003d> 2004-8-20
)
Array
(
[0] u003d> 4
[1] u003d> 5
[2] u003d> 5
[3] u003d> 5
[4] u003d> 3
[5] u003d> 1
[6] u003d> 10
)
