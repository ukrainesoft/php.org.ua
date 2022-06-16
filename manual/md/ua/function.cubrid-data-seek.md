- [«cubrid_close](function.cubrid-close.md)
- [cubrid_db_name »](function.cubrid-db-name.md)

- [PHP Manual](index.md)
- [Функції сумісності CUBRID MySQL](cubridmysql.cubrid.md)
- Перемістити внутрішній покажчик у результативному наборі CUBRID

#cubrid_data_seek

(PECL CUBRID u003d 8.3.0)

cubrid_data_seek — Перемістити внутрішній покажчик у результуючому
наборі CUBRID

### Опис

**cubrid_data_seek**(resource `$result`, int `$row_number`): bool

Функція переміщує внутрішній покажчик у результативному наборі CUBRID
(заданим ідентифікатором запиту) на рядок із заданим номером. Може
використовуватись спільно з функціями типу
[cubrid_fetch_assoc()](function.cubrid-fetch-assoc.md), які
використовують значення `row_number`.

### Список параметрів

`result`
Результат.

`row_number`
Бажаний номер рядка нового покажчика результату.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_data_seek()****

` <?php$conn u003d cubrid_connect("127.0.0.1", 33000, "demodb");$req u003d cubrid_execute($conn, "SELECT * FROM code");cubrid_data_seek ($req);var_dump($result);cubrid_data_seek($req, 2);$result u003d cubrid_fetch_row($req);var_dump($result);cubrid_data_seek($req, 4);$result u003d cubrid_fech ;var_dump($result);cubrid_close_request($req);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

array(2) {
[0]u003d>
string(1) "X"
[1]u003d>
string(5) "Mixed"
}
array(2) {
[0]u003d>
string(1) "M"
[1]u003d>
string(3) "Man"
}
array(2) {
[0]u003d>
string(1) "S"
[1]u003d>
string(6) "Silver"
}
