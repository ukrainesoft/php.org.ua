- [«cubrid_execute](function.cubrid-execute.md)
- [cubrid_free_result »](function.cubrid-free-result.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Вибирає наступний рядок із набору результатів

#cubrid_fetch

(PECL CUBRID u003d 8.3.0)

cubrid_fetch — Вибирає наступний рядок із набору результатів

### Опис

**cubrid_fetch**(resource `$result`, int `$type` u003d CUBRID_BOTH):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Функція **cubrid_fetch()** використовується для отримання одного рядка з
результату запиту. Курсор автоматично переміститься на наступний
рядок після отримання результату.

### Список параметрів

`result`
`result`, отриманий з [cubrid_execute()](function.cubrid-execute.md)

`type`
Тип масиву отриманого результату CUBRID_NUM, CUBRID_ASSOC,
CUBRID_BOTH, CUBRID_OBJECT. Для керування LOB-об'єктом використовуйте
CUBRID_LOB.

### Значення, що повертаються

Масив результатів або об'єкт у разі успішного виконання процесу.

**`false`**, якщо рядків більше немає; NULL у разі виникнення помилки.

Результат може бути отриманий як масив, або як об'єкт, установка
параметра `type` визначає, який тип даних використати. Змінною
`type` можна присвоїти одне з наступних значень:

- CUBRID_NUM : Числовий масив (починаючи з 0)
- CUBRID_ASSOC : Асоціативний масив
- CUBRID_BOTH : Числовий & асоціативний масив (за замовчуванням)
- CUBRID_OBJECT : об'єкт з ім'ям атрибута як ім'я стовпця
результату запиту

Якщо параметр `type` опущений, результат буде отримано з використанням
опції CUBRID_BOTH за замовчуванням. Для отримання результату запиту у вигляді
об'єктних даних, ім'я стовпця результату має підпорядковуватися правилам
іменування ідентифікаторів у PHP. Наприклад, ім'я стовпця, таке як
"count(\*)", не може бути отримано як об'єкт.

### Приклади

**Приклад #1 Приклад використання **cubrid_fetch()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb");$req u003d cubrid_execute($conn, "SELECT *FROM stadium WHERE nation_codeu003d'GRE' | -40s%-10s%-6s%-20s
", "name", "area", "seats", "address");while($row u003d cubrid_fetch($req)) {    printf("%-40s %-10s %-6s %-20s
",        $row["name"], $row["area"], $row["seats"], $row["address"]);}// для управління LOB-об'єктом, можна використовувати cubrid_fe , CUBRID_LOB)cubrid_close_request($req);cubrid_disconnect($conn);?> `

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
- [cubrid_fetch_array()](function.cubrid-fetch-array.md) -
Вилучення рядка з результуючого набору у вигляді асоціативного
масиву, індексованого масиву або обох відразу
- [cubrid_fetch_row()](function.cubrid-fetch-row.md) - Вийняти
рядок із результуючого набору у вигляді індексованого масиву
- [cubrid_fetch_assoc()](function.cubrid-fetch-assoc.md) - Вийняти
рядок із результуючого набору у вигляді асоціативного масиву
- [cubrid_fetch_object()](function.cubrid-fetch-object.md) - Вийняти
наступний рядок як об'єкт
