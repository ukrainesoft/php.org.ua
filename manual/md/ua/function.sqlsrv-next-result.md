- [«sqlsrv_has_rows](function.sqlsrv-has-rows.md)
- [sqlsrv_num_fields »](function.sqlsrv-num-fields.md)

- [PHP Manual](index.md)
- [Функції SQLSRV](ref.sqlsrv.md)
- робить активним наступний результат вказаного оператора

#sqlsrv_next_result

(No version information available, might only be in Git)

sqlsrv_next_result — Робить активним наступний результат вказаного
оператора

### Опис

**sqlsrv_next_result**(resource `$stmt`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Робить активним наступний результат вказаного оператора. Результати
включають набори результатів, кількість рядків та вихідні параметри.

### Список параметрів

`stmt`
Оператор, яким викликається наступний результат.

### Значення, що повертаються

Повертає **`true`**, якщо наступний результат був успішно отриманий,
**`false`**, якщо сталася помилка і **`null`**, якщо результатів для
одержання більше немає.

### Приклади

**Приклад #1 Приклад використання **sqlsrv_next_result()****

У наступному прикладі виконується пакетний запит, який додає
записи в таблицю, а потім вибирає дані з таблиці. Це дає два
результату оператора: один для рядків, на які впливає INSERT, та один
для рядків, що повертаються SELECT. Щоб перейти до рядків, що повертаються
SELECT, необхідно викликати **sqlsrv_next_result()**, щоб пройти повз
першого результату.

` <?php$serverName u003d "serverName\sqlexpress";$connectionInfo u003d array("Database"u003d>"dbName", "UID"u003d>"userName", "PWD"u003d>"password");$conn u003d sqlsrv_connect ( $serverName, $connectionInfo);$query u003d "INSERT INTO Table_1 (id, data) VALUES (?,?); SELECT * FROM TABLE_1;";$params u003d array(1, t" sqlsrv_query($conn, $query, $params);// Використовувати перший результат (рядки, торкані INSERT) без виклику sqlsrv_next_result.echo "Зачеплено рядок: к следующему результату и отображение результатов.$next_result u003d sqlsrv_next_result($stmt);if( $next_result ) {   while( $row u003d sqlsrv_fetch_array( $stmt, SQLSRV_FETCH_ASSOC)){      echo $row['id'].": ".$ row['data']."<br />"; }} elseif( is_null($next_result)) {    echo "Більше рядків ні.<br />";} else {     die(print_r(sqlsrv_errors(),}true

### Дивіться також

- [sqlsrv_query()](function.sqlsrv-query.md) - Підготовляє та
виконує запит
- [sqlsrv_fetch_array()](function.sqlsrv-fetch-array.md) -
Повертає рядок як масив
- [sqlsrv_rows_affected()](function.sqlsrv-rows-affected.md) -
Повертає кількість рядків, змінених останнім виконаним
запитом INSERT, UPDATE або DELETE
