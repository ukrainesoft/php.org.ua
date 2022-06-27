- [«oci_free_statement](function.oci-free-statement.md)
- [oci_lob_copy »](function.oci-lob-copy.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Повертає наступний ресурс дочірнього запиту із ресурсу
батьківського запиту, що має неявні результуючі набори Oracle
Database

#oci_get_implicit_resultset

(PHP 5 \>u003d 5.6.0, PHP 7, PHP 8, PECL OCI8 \>u003d 2.0.0)

oci_get_implicit_resultset — Повертає наступний ресурс дочірнього
запиту з ресурсу батьківського запиту, що має неявні
результуючі набори Oracle Database

### Опис

**oci_get_implicit_resultset**(resource `$statement`): resource\|false

Використовується для вибору послідовних наборів результатів запиту.
після виконання збереженого або анонімного блоку Oracle PL/SQL, коли
цей блок повертає результати запиту Oracle Database 12 (або новіше) з
за допомогою PL/SQL функції *DBMS_SQL.RETURN_RESULT*. Це дозволять блокам
PL/SQL повертає результати запиту.

Дочірній запит може бути використаний з будь-якою видобувною функцією
OCI8: [oci_fetch()](function.oci-fetch.md),
[oci_fetch_all()](function.oci-fetch-all.md),
[oci_fetch_array()](function.oci-fetch-array.md),
[oci_fetch_object()](function.oci-fetch-object.md),
[oci_fetch_assoc()](function.oci-fetch-assoc.md) або
[oci_fetch_row()](function.oci-fetch-row.md)

Дочірній запит успадковує батьківське значення передвиборки, чи можна
вказати його явно за допомогою
[oci_set_prefetch()](function.oci-set-prefetch.md).

### Список параметрів

`statement`
Коректний ідентифікатор запиту OCI8, створений за допомогою
[oci_parse()](function.oci-parse.md) та запущений за допомогою
[oci_execute()](function.oci-execute.md). Ідентифікатор запиту може
бути, а може і не бути пов'язаний із SQL-запитом, який повертає
неявні результуючі набори (Implicit Result Set).

### Значення, що повертаються

Повертає обробник запиту для наступного доступного для `statement`
дочірнього запиту. Повертає **`false`** якщо такого немає чи все
дочірні запити вже повернуто попередніми викликами
**oci_get_implicit_resultset()**.

### Приклади

**Приклад #1 Вилучення неявних результуючих наборів у циклі**

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/pdborcl');if (!$conn) {   $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$sql u003d 'DECLARE             c1 SYS_REFCURSOR; BEGIN            OPEN c1 FOR SELECT city, postal_code FROM locations WHERE ROWNUM < 4 ORDER BY city; DBMS_SQL.RETURN_RESULT(c1); OPENc1 FOR SELECT country_id FROM locations WHERE ROWNUM < 4 ORDER BYcity; DBMS_SQL.RETURN_RESULT(c1); END;';$stid u003d oci_parse($conn, $sql);oci_execute($stid);while (($stid_c u003d oci_get_implicit_resultset($stid))) {    echo "<h2>Новий
";    echo "<table>
";   while (($row u003d oci_fetch_array($stid_c, OCI_ASSOC+OCI_RETURN_NULLS)) !u003d false) {         echo "<tr>
";        foreach ($row as $item) {            echo "  <td>".($item!u003du003dnull?htmlentities($ITem,|
";        }}        echo "</tr>
";    }    echo "</table>
";}// Вывод://    Новый неявный результирующий набор://     Beijing 190518//     Bern    3095//     Bombay  490231//    New Implicit Result Set://     CN//     CH//     INoci_free_statement($stid);oci_close($ conn);?> `

**Приклад #2 Вилучення обробників дочірніх запитів в індивідуальному
порядку**

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/pdborcl');if (!$conn) {   $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$sql u003d 'DECLARE             c1 SYS_REFCURSOR; BEGIN            OPEN c1 FOR SELECT city, postal_code FROM locations WHERE ROWNUM < 4 ORDER BY city; DBMS_SQL.RETURN_RESULT(c1); OPENc1 FOR SELECT country_id FROM locations WHERE ROWNUM < 4 ORDER BYcity; DBMS_SQL.RETURN_RESULT(c1); END;';$stid u003d oci_parse($conn, $sql);oci_execute($stid);$stid_1 u003d oci_get_implicit_resultset($stid);$stid_2 u003d oci_get_implicit_resultset($stid); OCI_RETURN_NULLS);var_dump($row);$row u003d oci_fetch_array($stid_2, OCI_ASSOC+OCI_RETURN_NULLS);var_dump($row); oci_fetch_array($stid_2, OCI_ASSOC+OCI_RETURN_NULLS); var_dump($row); ]u003d>//                              {//     ["CITY"]u003d>//                                                                             "COUNTRY_ID"]u003d>//    string(2) "CH"//    }oci_free_statement($stid);oci_close($conn);?> `

**Приклад #3 Явна вказівка величини передвиборки**

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/pdborcl');if (!$conn) {   $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$sql u003d 'DECLARE             c1 SYS_REFCURSOR; BEGIN            OPEN c1 FOR SELECT city, postal_code FROM locations ORDER BY city; DBMS_SQL.RETURN_RESULT(c1); END;';$stid u003d oci_parse($conn, $sql);oci_execute($stid);$stid_c u003d oci_get_implicit_resultset($stid);oci_set_prefetch($stid_c, 200); // Встановлюємо величину передвиборки до того як починаємо витягувати пезультати з дочірнього запитуecho "<table>
";while (($row u003d oci_fetch_array($stid_c, OCI_ASSOC+OCI_RETURN_NULLS)) !u003d false) {    echo ""<tr>
";    foreach ($row as $item) {        echo "  <td>".($item!u003du003dnull?htmlentities($item, ENT_QUOTES|ENT_SUBSTITUTE):"t"
";    }    echo "</tr>
";}echo "</table>
";oci_free_statement($stid);oci_close($conn);?> `

**Приклад #4 Приклад неявного результуючого набору без використання
**oci_get_implicit_resultset()****

Усі результати всіх запитів повертаються послідовно.

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/pdborcl');if (!$conn) {   $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$sql u003d 'DECLARE             c1 SYS_REFCURSOR; BEGIN            OPEN c1 FOR SELECT city, postal_code FROM locations WHERE ROWNUM < 4 ORDER BY city; DBMS_SQL.RETURN_RESULT(c1); OPENc1 FOR SELECT country_id FROM locations WHERE ROWNUM < 4 ORDER BYcity; DBMS_SQL.RETURN_RESULT(c1); END; ';
";while (($row u003d oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) !u003d false) {    echo ""<tr>
";    foreach ($row as $item) {        echo "  <td>".($item!u003du003dnull?htmlentities($item, ENT_QUOTES|ENT_SUBSTITUTE):"t"
";    }    echo "</tr>
";}echo "</table>
";// Висновок://   Beijing 190518//    Bern 3095//    Bombay 490231//    CN//  |

### Примітки

> **Примітка**:
>
> Для запитів, що повертають велику кількість рядів,
> продуктивність може бути значно збільшена за допомогою
> збільшення значення опції
> [oci8.default_prefetch](oci8.configuration.md#ini.oci8.default-prefetch)
> або використання
> [oci_set_prefetch()](function.oci-set-prefetch.md).
