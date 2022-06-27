- [«Зумовлені константи](oci8.constants.md)
- [Робота зі з'єднаннями OCI8 та Connection Pooling
»](oci8.connection.md)

- [PHP Manual](index.md)
- [OCI8](book.oci8.md)
- Приклади

# Приклади

Ці приклади виконуються під користувачем `HR`, який є
зразком з "Human Resources" схеми, що постачається разом із базою даних
Oracle. Можливо потрібно буде розблокувати цей обліковий запис і
перевстановити пароль, щоб використовувати його.

Приклади підключаються до бази даних `XE` на комп'ютері. Ви можете
замінити рядки із підключенням для використання своїх баз даних.

**Приклад #1 Простий запит**

Цей приклад показує запит та результат. Вирази в OCI8 використовують
послідовність кроків підготовка-виконання-вибірка.

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {    $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}// Підготовка вираження$stid u003d oci_parse($conn, 'SELECT ** FROM departments');if ($ Conn); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}// Виконаємо логіку запиту$r u003d oci_execute($stid);if (!$r) {    $ trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}// Отримаємо результат запитуprint "<table borderu003d'1'>
";while ($row u003d oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {    print ""<tr>
";   foreach ($row as $item) {         print "    <td>" . ($item !u003du003d null ? htmlentities($item, |)
";    }    print "</tr>
";}print "</table>
";oci_free_statement($stid);oci_close($conn);?> `

**Приклад #2 Вставка з використанням прив'язаних змінних**

Прив'язування змінних підвищують продуктивність рахунок повторного
використання контексту запиту та кешування. Також вони підвищують
Безпека блокує деякі типи SQL-ін'єкцій.

`<?php// Створіть таблицю перед виконанням://   CREATE TABLE MYTABLE (mid NUMBER, myd VARCHAR2(20));$conn u003d oci_connect('hr', 'welcome'; '; $conn) {   $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$stid u003d oci_parse($conn, 'INSERT INTO MYTABLE (mid, myd) VALUES(:myid, :); 60;$datau003du003d'Some data';oci_bind_by_name($stid, ':myid', $id);oci_bind_by_name($stid, ':mydata', $data);$r u003d oci_execute($stid); // виконання і фіксаціяif ($r) {    print "Було вставлено одне рядок";}oci_free_statement($stid);oci_close($conn);?> `

**Приклад #3 Прив'язка у WHERE висловленні запиту**

Приклад одиничного прив'язування скаляра.

` <?php$conn u003d oci_connect("hr", "hrpwd", "localhost/XE");if (!$conn) {    $m u003d oci_error(); trigger_error(htmlentities($m['message']), E_USER_ERROR);}$sql u003d 'SELECT last_name FROM employees WHERE department_id u003d :didbv ORDER BYlast_name'$$; 60;oci_bind_by_name($stid, ':didbv', $didbv);oci_execute($stid);while (($row u003d oci_fetch_array($stid, OCI_ASSOC)) !u003d false) {    "<br>
";}// Виведе//   Austin//   Ernst//   Hunold//   Lorentz//   Pataballaoci_free_statement($stid);oci_close($n

**Приклад #4 Вставка даних у поле типу CLOB**

Для великих даних використовуйте довгі двійкові об'єкти (BLOB) або
довгі символьні об'єкти (CLOB). Цей приклад використовує тип даних
CLOB.

`<?php// Створіть таблицю перед виконанням://    CREATE TABLE MYTABLE (mykey NUMBER, myclob CLOB);$conn u003d oci_connect('hr', 'welcome', '! {    $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$mykey u003d 12343; // произвольный ключ для данного примера;$sql u003d "INSERT INTO mytable (mykey, myclob)        VALUES (:mykey, EMPTY_CLOB())        RETURNING myclob INTO :myclob";$stid u003d oci_parse($conn, $sql);$clob u003doci_new_descriptor($conn,OCI_D_LOB);oci_bind_by_name($stid, ":mykey", $mykey, 5);oci_bind_by_name($stid, ":myclob", $clob, -1, OCI_B_CI ); // використовуйте OCI_DEFAULT для PHP <u003d 5.3.1$clob->save("A very long string");oci_commit($conn);// Отримання CLOB даних$query u003d 'SELECT myclo my  my| ;$stid u003d oci_parse ($conn, $query);oci_bind_by_name($stid, ":mykey", $mykey, 5);oci_execute($stid);print '<table borderu003d"1">';while ($ row u003d oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_LOBS)) {    print '<tr><td>'.$row['MYCLOB'].'</td></tr>'; // У циклі, очищення великих змінних перед повторним отриманням даних, зменшує пікове споживання пам'яті PHP    unset($row);}print '</table>';?> `

**Приклад #5 Використання процедур PL/SQL**

Ви повинні прив'язувати змінну для кожного значення, що повертається і
опціонально для кожного аргументу функції.

` <?php/*  До выполнения PHP-скрипта сойздайте хранимую процедуру в  SQL*Plus или SQL Developer:  CREATE OR REPLACE FUNCTION myfunc(p IN NUMBER) RETURN NUMBER AS  BEGIN      RETURN p * 3; END;*/$connu003du003doci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {   $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$p u003d 8;$stid u003d oci_parse($conn, begin :r :u003d myfunc(:p); end;'; ($stid, ':p', $p);oci_bind_by_name($stid, ':r', $r, 40);oci_execute($stid);print "$r
";   // виведе 24oci_free_statement($stid);oci_close($conn);?> `

**Приклад #6 Використання процедур PL/SQL**

При використанні процедур, що зберігаються, бажано прив'язувати змінні до
кожному аргументу.

` <?php/*  До выполнения PHP-скрипта сойздайте хранимую процедуру в  SQL*Plus или SQL Developer:  CREATE OR REPLACE PROCEDURE myproc(p1 IN NUMBER, p2 OUT NUMBER) AS  BEGIN      p2 :u003d p1 * 2; END;*/$connu003du003doci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {   $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$p1 u003d 8;$stid u003d oci_parse($conn, 'begin myproc(:p1, :p2); end;'end;'end;'end;'end; $stid, ':p1', $p1);oci_bind_by_name($stid, ':p2', $p2, 40);oci_execute($stid);print "$p2
";   // виведе 16oci_free_statement($stid);oci_close($conn);?> `

**Приклад #7 Виклик PL/SQL процедур, що повертають `REF CURSOR`**

Кожне значення, що повертається із запиту є `REF CURSOR`.

`<?php/*  Створіть PL/SQL збережену процедуру: CREATE OR REPLACE FUNCTION myfunc(p1 IN NUMBER) RETURN SYS_REFCURSOR AS        BEGIN      OPEN rc FOR SELECT city FROM locations WHERE ROWNUM < p1; RETURN rc; END;*/$connu003du003doci_connect('hr', 'welcome', 'localhost/XE');$stid u003d oci_parse($conn, 'SELECT myfunc(5) AS mfrc FROM dual');oci_execute ;echo "<table borderu003d'1'>
";while (($row u003d oci_fetch_array($stid, OCI_ASSOC))) {    echo "<tr>
";    $rc u003d $row['MFRC'];    oci_execute($rc);  // возвращает значение поля из запроса в виде указателя    while (($rc_row u003d oci_fetch_array($rc, OCI_ASSOC))) {        echo "    <td> " . $rc_row['CITY'] . "</td>
";    }    oci_free_statement($rc);    echo "</tr>
";}echo "</table>
";// Виведе://Beijing//  Bern//  Bombay//   Genevaoci_free_statement($stid);oci_close($conn);?> `
