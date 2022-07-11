- [«cubrid_field_type](function.cubrid-field-type.md)
- [cubrid_num_fields »](function.cubrid-num-fields.md)

- [PHP Manual](index.md)
- [Функції сумісності CUBRID MySQL](cubridmysql.cubrid.md)
- Отримати масив зі списком усіх баз даних CUBRID

#cubrid_list_dbs

(PECL CUBRID u003d 8.3.0)

cubrid_list_dbs — Отримати масив зі списком усіх баз даних CUBRID

### Опис

**cubrid_list_dbs**(resource `$conn_identifier` u003d ?): array

Функція повертає масив зі списком усіх баз даних CUBRID

### Список параметрів

`conn_identifier`
The CUBRID connection.

### Значення, що повертаються

Індексований масив із списком баз даних.

**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_list_dbs()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb");$db_list u003d cubrid_list_dbs($conn);var_dump($db_list);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

array(1) {
[0]u003d>
string(6) "demodb"
}
