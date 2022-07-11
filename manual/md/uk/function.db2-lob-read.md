- [«db2_last_insert_id](function.db2-last-insert-id.md)
- [db2_next_result »](function.db2-next-result.md)

- [PHP Manual](index.md)
- [Функції IBM DB2](ref.ibm-db2.md)
- Отримує певний користувач розмір LOB-файлів при кожному
виклик

#db2_lob_read

(PECL ibm_db2 \>u003d 1.6.0)

db2_lob_read — Отримує певний користувачем розмір LOB-файлів при
кожному виклику

### Опис

**db2_lob_read**(resource `$stmt`, int `$colnum`, int `$length`): string

Використовуйте **db2_lob_read()** для ітерації за вказаним стовпцем набору
результатів та отримання заданого користувачем розміру LOB-даних.

### Список параметрів

`stmt`
Допустимий ресурс `stmt`, що містить LOB-дані.

`colnum`
Допустимий номер стовпця у наборі результатів ресурсу `stmt`.

`length`
Розмір LOB-даних, що витягуються з ресурсу `stmt`.

### Значення, що повертаються

Повертає кількість даних, вказаних користувачем. Повертає
**`false`**, якщо дані не можуть бути отримані.

### Приклади

**Приклад #1 Ітерації з різних типів даних**

` <?php/* Параметри підключення до базі даних */$db u003d 'SAMPLE';$username u003d 'db2inst1';$password u003d 'ibmdb2';/* Отримання ресурсу підключення */$$$ username,$password);if($conn) {    $drop u003d 'DROP TABLE clob_stream'; $result u003d @db2_exec( $conn, $drop ); $create u003d 'CREATE TABLE clob_stream (id INTEGER, my_clob CLOB)'; $result u003d db2_exec( $conn, $create ); $variable u003d ""; $stmtu003du003ddb2_prepare($conn, "INSERT INTO clob_stream (id,my_clob) VALUES (1, ?)"); $variable u003d "THIS IS A CLOB TEST. THIS IS A CLOB TEST."; db2_bind_param($stmt, 1, "variable", DB2_PARAM_IN); db2_execute($stmt); $sql u003d "SELECT id,my_clob FROM clob_stream"; $result u003d db2_prepare($conn, $sql); db2_execute($result); db2_fetch_row($result); $i u003d 0; /* Читання LOB-даних */    while ($data u003d db2_lob_read($result, 2, 6)) {       echo "Loop $i: $data
";        $i u003d $i + 1;    }    $drop u003d 'DROP TABLE blob_stream';    $result u003d @db2_exec( $conn, $drop );    $create u003d 'CREATE TABLE blob_stream (id INTEGER, my_blob CLOB)';    $ resultu003du003ddb2_exec($conn, $create );   $variable u003d "";    $stmt u003d db2_prepare($conn, "INSERT INTO blob_stream (   BLOB TEST. THIS IS A BLOB TEST.";    db2_bind_param($stmt, 1, "variable", DB2_PARAM_IN);    db2_execute($stmt);    $sql u003d "SELECT id,my_blob FROM blob_stream";    $result u003d db2_prepare($conn, $sql );    db2_execute($result);    db2_fetch_row($result);    $i u003d 0;    /* Чтенеи LOB-данных */    while ($data u003d db2_lob_read($result, 2, 6)) {        echo "Loop $i: $ data
";        $i u003d $i + 1;    }} else {    echo 'Нет сполуки: ' . db2_conn_errormsg();}?> `

Результат виконання цього прикладу:

Loop 0: THIS I
Loop 1: S A CL
Loop 2: OB TES
Loop 3: T. THI
Loop 4: S IS A
Loop 5: CLOB
Loop 6: Test.
Loop 0: THIS I
Loop 1: S A BL
Loop 2: OB TES
Loop 3: T. THI
Loop 4: S IS A
Loop 5: BLOB
Loop 6: Test.

### Дивіться також

- [db2_bind_param()](function.db2-bind-param.md) - Зв'язує
змінну PHP з параметром SQL-виразу
- [db2_exec()](function.db2-exec.md) - Виконує SQL-запит безпосередньо
- [db2_execute()](function.db2-execute.md) - Виконує
підготовлений SQL-запит
- [db2_fetch_row()](function.db2-fetch-row.md) - Встановлює
покажчик набору результатів на наступний рядок або запитаний
рядок
- [db2_prepare()](function.db2-prepare.md) - Підготовка
SQL-запит до виконання
- [db2_result()](function.db2-result.md) - Повертає один стовпець
з рядка у наборі результатів
