- [«cubrid_error](function.cubrid-error.md)
- [cubrid_fetch_assoc »](function.cubrid-fetch-assoc.md)

- [PHP Manual](index.md)
- [Функції сумісності CUBRID MySQL](cubridmysql.cubrid.md)
- Вилучення рядка з результуючого набору у вигляді асоціативного
масиву, індексованого масиву або обох відразу

#cubrid_fetch_array

(PECL CUBRID u003d8.3.0)

cubrid_fetch_array - Вилучення рядка з результуючого набору у вигляді
асоціативного масиву, індексованого масиву або обох відразу

### Опис

**cubrid_fetch_array**(resource `$result`, int `$type` u003d CUBRID_BOTH):
array

Функція **cubrid_fetch_array()** служить для вилучення одного рядка з
результуючого набору. Після вилучення курсор автоматично
пересунеться на наступний рядок.

### Список параметрів

`result`
`Result` отриманий з [cubrid_execute()](function.cubrid-execute.md)

`type`
Тип масиву для вилучення: CUBRID_NUM, CUBRID_ASSOC, CUBRID_BOTH. Якщо
вам потрібно оперувати об'єктами типу LOB – використовуйте CUBRID_LOB.

### Значення, що повертаються

Повертає масив рядків, що відповідає витягнутому рядку, у разі
успішного виконання.

**`false`**, якщо рядків більше немає; NULL, коли процес завершується з
помилкою.

Тип масива, що повертається, залежить від заданого типу. За замовчуванням
використовується CUBRID_BOTH, що веде до вилучення як асоціативного, так і
та індексованого масивів, але цю поведінку можна перевизначити
параметром `type`. Значення, допустимі для параметра `type`:

- CUBRID_NUM : Індексований масив (перший елемент має індекс 0)
- CUBRID_ASSOC : Асоціативний масив
- CUBRID_BOTH : І той і інший одночасно (за замовчуванням)

### Приклади

**Приклад #1 Приклад використання **cubrid_fetch_array()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb");$req u003d cubrid_execute($conn, "SELECT name,area,seats,address FROM stadium WHERE    );printf("%-40s %-10s %-6s %-20s
", "name", "area", "seats", "address");while ($row u003d cubrid_fetch_array($req, CUBRID_NUM)) {    printf("%-40s %-10s %
", $row[0], $row[1], $row[2], $row[3]);}//Якщо вам потрібнооперувати об'єктами LOB - використовуйте// cubrid_fetch_array($req, CUBR|CUBR| ($req);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

name area seats address
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
- [cubrid_fetch_row()](function.cubrid-fetch-row.md) - Вийняти
рядок із результуючого набору у вигляді індексованого масиву
- [cubrid_fetch_assoc()](function.cubrid-fetch-assoc.md) - Вийняти
рядок із результуючого набору у вигляді асоціативного масиву
- [cubrid_fetch_object()](function.cubrid-fetch-object.md) - Вийняти
наступний рядок як об'єкт
