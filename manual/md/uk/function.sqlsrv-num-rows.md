- [«sqlsrv_num_fields](function.sqlsrv-num-fields.md)
- [sqlsrv_prepare »](function.sqlsrv-prepare.md)

- [PHP Manual](index.md)
- [Функції SQLSRV](ref.sqlsrv.md)
- Отримує кількість рядків у наборі результатів

#sqlsrv_num_rows

(No version information available, might only be in Git)

sqlsrv_num_rows — Отримує кількість рядків у наборі результатів

### Опис

**sqlsrv_num_rows**(resource `$stmt`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Витягує кількість рядків у наборі результатів. Функція вимагає, щоб
ресурс оператора було створено за допомогою статичного курсору або курсору
набір ключів. Для отримання додаткової інформації дивіться опис
функцій [sqlsrv_query()](function.sqlsrv-query.md),
[sqlsrv_prepare()](function.sqlsrv-prepare.md) або [» Вказівка типу
курсору та вибір
рядків](http://msdn.microsoft.com/en-us/library/ee376927.aspx) в
Microsoft SQLSRV документації.

### Список параметрів

`stmt`
Оператор, для якого повертається кількість рядків. Ресурс оператора
повинен бути створений за допомогою статичного курсору або курсору набору
ключів. Для отримання додаткової інформації дивіться опис
функцій [sqlsrv_query()](function.sqlsrv-query.md),
[sqlsrv_prepare()](function.sqlsrv-prepare.md) або [» Вказівка типу
курсору та вибір
рядків](http://msdn.microsoft.com/en-us/library/ee376927.aspx) в
Microsoft SQLSRV документації.

### Значення, що повертаються

Повертає кількість рядків, отриманих у разі успішного виконання
або **`false`** у разі виникнення помилки. Якщо використовується прямий
курсор (за замовчуванням) або динамічний курсор, повертається **`false`**.

### Приклади

**Приклад #1 Приклад використання **sqlsrv_num_rows()****

` <?php$server u003d "serverName\sqlexpress";$connectionInfo u003d array( "Database"u003d>"dbName", "UID"u003d>"username", "PWD"u003d>"password" );$conn u003d sqlsrv_connect ( $server, $connectionInfo );$sql u003d "SELECT * FROM Table_1";$params u003d array();$options u003d  array( "Scrollable" u003d> SQLSRV_CURSOR_KEYSET );$stmt u003d sqlsrv_query( $conn, $sql , $ params, $options );

### Дивіться також

- [sqlsrv_has_rows()](function.sqlsrv-has-rows.md) - Вказує, є
у зазначеного оператора рядка
- [sqlsrv_rows_affected()](function.sqlsrv-rows-affected.md) -
Повертає кількість рядків, змінених останнім виконаним
запитом INSERT, UPDATE або DELETE
