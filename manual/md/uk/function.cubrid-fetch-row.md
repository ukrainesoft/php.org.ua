- [«cubrid_fetch_object](function.cubrid-fetch-object.md)
- [cubrid_field_flags »](function.cubrid-field-flags.md)

- [PHP Manual](index.md)
- [Функції сумісності CUBRID MySQL](cubridmysql.cubrid.md)
- Вийняти рядок із результуючого набору у вигляді індексованого
масиву

#cubrid_fetch_row

(PECL CUBRID u003d 8.3.0)

cubrid_fetch_row — Вийняти рядок із результуючого набору у вигляді
індексованого масиву

### Опис

**cubrid_fetch_row**(resource `$result`, int `$type` u003d ?): array

Функція повертає асоціативний масив, що відповідає рядку в
результуючому наборі, на яку вказує внутрішній покажчик. Після
вилучення внутрішній покажчик переміщується на наступний рядок. Перший
Елемент має індекс 0.

### Список параметрів

`result`
`Result`, отриманий з [cubrid_execute()](function.cubrid-execute.md)

`type`
Можливо тільки CUBRID_LOB. Цей параметр використовується лише якщо вам
необхідно оперувати об'єктами LOB.

### Значення, що повертаються

Індексований масив у разі успішного виконання.

**`false`**, якщо рядків більше немає; **`null`**, коли процес
завершується з помилкою.

### Приклади

**Приклад #1 Приклад використання **cubrid_fetch_row()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb");$req u003d cubrid_execute($conn, "SELECT name,area,seats,address FROM stadium WHERE    );printf("%-40s %-10s %-6s %-20s
", "найменування", "площа", "місць", "адреса");while ($row u003d cubrid_fetch_row($req)) {    printf("%-40s %-10s %-6s %-2
", $row[0], $row[1], $row[2], $row[3]);}//У випадки роботи з LOB використовуйте cubrid_fetch_row($req, CUBRID_LOB)cubrid_close_request$ ($conn);?> `

Результат виконання цього прикладу:

найменування площа місць адреса
Panathinaiko Stadium 86300.00 50000 Athens, Greece
Olympic Stadium 54700.00 13000 Athens, Greece
Olympic Indoor Hall 34100.00 18800 Athens, Greece
Olympic Hall 52400.00 21000 Athens, Greece
Olympic Aquatic Centre 42500.00 11500 Athens, Greece
Markopoulo Olympic Equestrian Centre 64000.00 15000 Markopoulo, Athens, Greece
Faliro Coastal Zone Olympic Complex 34650.00 12171 Faliro, Athens, Greece
Athens Olympic Stadium 120400.00 71030 Maroussi, Athens, Greece
Ano Liossia 34000.00 12000 Ano Liosia, Athens, Greece

### Дивіться також

- [cubrid_execute()](function.cubrid-execute.md) - Виконує
підготовлений SQL-оператор
- [cubrid_fetch()](function.cubrid-fetch.md) - Вибирає наступну
рядок із набору результатів
- [cubrid_fetch_array()](function.cubrid-fetch-array.md) -
Вилучення рядка з результуючого набору у вигляді асоціативного
масиву, індексованого масиву або обох відразу
- [cubrid_fetch_assoc()](function.cubrid-fetch-assoc.md) - Вийняти
рядок із результуючого набору у вигляді асоціативного масиву
- [cubrid_fetch_object()](function.cubrid-fetch-object.md) - Вийняти
наступний рядок як об'єкт
