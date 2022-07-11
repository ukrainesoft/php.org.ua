- [«oci_fetch_all](function.oci-fetch-all.md)
- [oci_fetch_assoc »](function.oci-fetch-assoc.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Повертає наступний рядок із результату запиту у вигляді
асоціативного або нумерованого масиву

#oci_fetch_array

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_fetch_array — Повертає наступний рядок з результату запиту
вигляді асоціативного або нумерованого масиву

### Опис

**oci_fetch_array**(resource `$statement`, int `$mode` u003d OCI_BOTH \|
OCI_RETURN_NULLS): array\|false

Повертає масив, який містить наступний рядок результату запиту.
Кожен елемент масиву відповідає одному полю рядка. Ця функція
зазвичай викликається в циклі, поки вона не поверне **`false`**, який
вказує на відсутність наступних рядків.

Якщо `statement` відповідає PL/SQL блоку, що повертається Oracle
Database Implicit Result Sets, тоді будуть послідовно вилучені
лави з усіх наборів. Якщо `statement` повертається з
[oci_get_implicit_resultset()](function.oci-get-implicit-resultset.md),
тоді повернеться лише частина рядів одного дочірнього запиту.

За подробицями операції відображення типів даних, що здійснюється
модулем OCI8, зверніться до [типів даних, що підтримуються
драйвером](oci8.datatypes.md)

### Список параметрів

`statement`
Коректний ідентифікатор виразу OCI8, отриманий з
[oci_parse()](function.oci-parse.md) та виконаний функцією
[oci_execute()](function.oci-execute.md), або ідентифікатор виразу
`REF CURSOR`.

Також може бути ідентифікатором, що повертається функцією
[oci_get_implicit_resultset()](function.oci-get-implicit-resultset.md).

`mode`
Необов'язковий другий параметр може складатися з будь-якої комбінації
наступних констант:

| Константа Опис |
|------------------------|------------------------ -------------------------------------------------- -------------------------------------------------- -------------------------------------|
| **`OCI_BOTH`** | Повертає масив як з асоціативними та числовими індексами. Ця константа те ж саме, що і **`OCI_ASSOC`** + **`OCI_NUM`**, і вона використовується за замовчуванням. |
| **`OCI_ASSOC`** | Повертає асоціативний масив. |
| **`OCI_NUM`** | Повертає нумерований масив. |
| **`OCI_RETURN_NULLS`** | Створює елементи для рівних полів **`null`**. Значення елемента дорівнює PHP **`null`**. |
| **`OCI_RETURN_LOBS`** | Повертає вміст полів типу LOB замість LOB покажчика. |

****oci_fetch_array()** Modes**

За умовчанням `mode` дорівнює **`OCI_BOTH`**.

Використовуйте оператор додавання "+", щоб вказати більше одного режиму.

### Значення, що повертаються

Повертає масив з асоціативними та/або числовими ключами. Якщо більше
немає рядків в `statement`, то повертається **`false`**.

За замовчуванням поля LOB повертаються як покажчики LOB.

Поля типу `DATE` повертаються у форматі рядків, що відповідає поточному
формату дати. Формат за замовчуванням може бути змінено за допомогою
змінних оточення Oracle, таких як `NLS_LANG`, або попереднім
виконанням команди `ALTER SESSION SET NLS_DATE_FORMAT`.

Реєстронезалежні (за замовчуванням у Oracle) імена полів матимуть
асоціативні індекси у верхньому регістрі в результуючому масиві
Реєстрозалежні імена полів матимуть індекси з тими самими регістрами
символів, що й саме поле. Використовуйте
[var_dump()](function.var-dump.md) для результуючого масиву
перевірити відповідність регістрів символів кожному за запиту.

Ім'я таблиці не входить до асоціативного індексу. Якщо ваш запит містить
два різні поля з однаковим ім'ям, використовуйте **`OCI_NUM`** або
додайте аліас для поля в запит, щоб імена стали унікальними
(Дивіться приклад #7). Інакше буде повернено лише одне поле.

### Приклади

**Приклад #1 **oci_fetch_array()** з **`OCI_BOTH`****

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {    $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$stid u003d oci_parse($conn, 'SELECT department_id, department_name FROM departments');oci_execu ($stid, OCI_BOTH))) {     // Використовуйте назву полів в верхньому реєстрі для асоціативних індексів   echo $row[0] . " і " . $row['DEPARTMENT_ID']   . "Ідентичні<br>
";    echo $row[1] . " і " . $row['DEPARTMENT_NAME'] . "ідентичні<br>
";}oci_free_statement($stid);oci_close($conn);?> `

**Приклад #2 **oci_fetch_array()** з **`OCI_NUM`****

`<?php/*  Перед виконанням створіть таблицю:      CREATE TABLE mytab (id NUMBER, description CLOB); INSERT INTO mytab (id, description) values (1, 'A very long string'); COMMIT;*/$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {   $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$stid u003d oci_parse($conn, 'SELECT id, description FROM mytab');oci_execute($stid);wh ($stid, OCI_NUM)) !u003d false) {   echo $row[0] . "<br>
";   echo $row[1]->read(11) . "<br>
"; // це виведе перші 11 байт DESCRIPTION}// Виведе://    1//    A very longoci_free_statement($stid);oci_close($conn);?> ``

**Приклад #3 **oci_fetch_array()** з **`OCI_ASSOC`****

`<?php/*  Перед виконанням створіть таблицю:      CREATE TABLE mytab (id NUMBER, description CLOB); INSERT INTO mytab (id, description) values (1, 'A very long string'); COMMIT;*/$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {   $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$stid u003d oci_parse($conn, 'SELECT id, description FROM mytab');oci_execute($stid);wh ($stid, OCI_ASSOC)) !u003d false) {   echo $row['ID'] . "<br>
";    echo $row['DESCRIPTION']->read(11) . "<br>
"; // це виведе перші 11 байт DESCRIPTION}// Виведе://    1//    A very longoci_free_statement($stid);oci_close($conn);?> ``

**Приклад #4 **oci_fetch_array()** з **`OCI_RETURN_NULLS`****

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {    $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$stid u003d oci_parse($conn, 'SELECT 1, null FROM dual');oci_execute($stid) ($stid, OCI_ASSOC)) !u003d false) { // Ігнорує NULL значення    var_dump($row);}/*Вищевказаний код виведе:  array(1) {      $stid u003d oci_parse($conn, 'SELECT 1, null FROM dual');oci_execute($stid);while (($row u003d oci_fetch_array ($stid, OCI_ASSOC+OCI_RETURN_    !) var_dump($row);}/*Вищевказаний код виведе:  array(2) {    [1]u003d>    string(1) "1"   ["NULL"]u003d>    NULL

**Приклад #5 **oci_fetch_array()** з **`OCI_RETURN_LOBS`****

`<?php/*  Перед виконанням створіть таблицю:      CREATE TABLE mytab (id NUMBER, description CLOB); INSERT INTO mytab (id, description) values (1, 'A very long string'); COMMIT;*/$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {   $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$stid u003d oci_parse($conn, 'SELECT id, description FROM mytab');oci_execute($stid);wh ($stid, OCI_ASSOC+OCI_RETURN_LOBS))) {   echo $row['ID'] . "<br>
";    echo $row['DESCRIPTION'] . "<br>
"; // содержит весь DESCRIPTION    // В цикле, очищение больших переменных перед повторным получением данных, уменьшает пиковое потребление памяти PHP    unset($row);}// Выведет://    1//    A very long stringoci_free_statement($stid); oci_close($conn);?> `

**Приклад #6 **oci_fetch_array()** з реєстрозалежними назвами
полів**

`<?php/*   Перед виконанням створіть таблицю:      CREATE TABLE mytab ("Name" VARCHAR2(20), city VARCHAR2(20)); INSERT INTO mytab ("Name", city) values ('Chris', 'Melbourne'); COMMIT;*/$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {   $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$stid u003d oci_parse($conn, 'select * from mytab');oci_execute($stid);$row u003d y +OCI_RETURN_NULLS);// Так как 'Name' было создан как регистрозависимое поле, то// те же регисты символов используются для индексов массива.// Тем не менее для 'CITY' должен использоваться индекс в верхнем регистре.print $row[' Name'] . "<br>
";   //  виведе Chrisprint $row['CITY'] . "<br>
";   //  виведе Melbourneoci_free_statement($stid);oci_close($conn);?> `

**Приклад #7 **oci_fetch_array()** з полями з однаковими назвами**

`<?php/*  Перед виконанням створіть таблицю:      CREATE TABLE mycity (id NUMBER, name VARCHAR2(20)); INSERT INTO mycity (id, name) values (1, 'Melbourne'); CREATE TABLE mycountry (id NUMBER, name VARCHAR2(20)); INSERT INTO mycountry (id, name) values (1, 'Australia'); COMMIT;*/$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {   $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$sql u003d 'SELECT mycity.name, mycountry.name        FROM mycity, mycountry        WHERE mycity.id u003d mycountry.id';$stid u003d oci_parse( $conn, $sql);oci_execute($stid);$row u003d oci_fetch_array($stid, OCI_ASSOC);var_dump($row);// Виведе тільки одну запису "NAME"://          "NAME"]u003d>//    string(9) "Australia"//    }}// Для отримання полів з повторюваною назвою використовуйте SQL псевдоніми (alias) для полів. Наприклад "AS ctnm": $ sql u003d SELECT mycity.name AS ctnm, mycountry.name FROM mycity, mycuntry (c) );$row u003d oci_fetch_array($stid, OCI_ASSOC);var_dump($row);// Виведе записи з двох полів://   array(2) {//                   Melbourne"//     ["NAME"]u003d>//     string(9) "Australia"//    }oci_free_statement($stid);oci_close($conn);?> `

**Приклад #8 **oci_fetch_array()** з полями `DATE`**

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {    $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}// Встановлюємо формат дати для даного з'єднання. ($conn, "ALTER SESSION SET NLS_DATE_FORMAT u003d 'YYYY-MM-DD'");oci_execute($stid);$stid u003d oci_parse($conn, 'SELECT hire_date FROM employees  em );$row u003d oci_fetch_array($stid, OCI_ASSOC);echo $row['HIRE_DATE'] . "<br>
";  // виведе 1997-06-14oci_free_statement($stid);oci_close($conn);?> `

**Приклад #9 **oci_fetch_array()** з `REF CURSOR`**

¦<?php/* Створіть PL/SQL зберігаючу процедуру: CREATE OR REPLACE PROCEDURE myproc(p1 OUT SYS_REFCURSOR) AS  BEGIN    OPEN        ¦¦ END;*/$connu003du003doci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {   $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$stid u003d oci_parse($conn, 'BEGIN myproc(:rc); END;');$refcur u003d oci_ne_cur_ ($stid, ':rc', $refcur, -1, OCI_B_CURSOR);oci_execute($stid);// Виконує повернений REF CURSOR і отримує його в виді ідентифікатора '>
";while (($row u003d oci_fetch_array($refcur, OCI_ASSOC+OCI_RETURN_NULLS)) !u003d false) {    echo ""<tr>
";    foreach ($row as $item) {        echo "    <td>".($item !u003du003d null ? htmlentities($item, ENT_QU)
";    }    echo "</tr>
";}echo "</table>
";oci_free_statement($refcur);oci_free_statement($stid);oci_close($conn);?> `

**Приклад #10 Посторінковий висновок за допомогою **oci_fetch_array()**
використовуючи `LIMIT`-подібний запит**

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {    $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}//Визначаємо версію бази данихpreg_match('/Release ([0-9]+)\./', oci_server );$oracleversion u003d $matches[1];// Запит, необхідно зробити "посторінковим"$sql u003d 'SELECT city, postal_code FROM locations orcle BY city';if           OFFSET / FETCH NEXT синтаксис    $sql u003d $sql . '¸OFFSET :offset ROWS FETCH NEXT :numrows ROWS ONLY';} else {     // Старі версії Oracle потребують в виборці за допомогою $| // Або, якщо SQL вираз відомо на стадії розробки, то з допомогою    // функції row_number(). Будьте обережні і уникайте можливостей SQL-ін'єкції при об'єднанні рядків у бойовому оточенні. $sql u003d "SELECT * FROM (SELECT a.*, ROWNUM AS my_rnum                           FROM ($sql) a                           WHERE ROWNUM <u003d :offset + :numrows)            WHERE my_rnum > :offset";}$offset  u003d 0; // skip this many rows$numrows u003d 5; // return 5 rows$stid u003d oci_parse($conn, $sql);oci_bind_by_name($stid, ':numrows', $numrows);oci_bind_by_name($stid, ':offset', $offset)$oci ;while (($row u003d oci_fetch_array($stid, OCI_ASSOC + OCI_RETURN_NULLS)) !u003d false) {   echo $row['CITY'] . " " . $row['POSTAL_CODE'] . "<br>
";}// Виведе://Beijing 190518//   Bern 3095//    Bombay 490231//     Geneva 1730// $|

**Приклад #11 **oci_fetch_array()** з Oracle Database Implicit Result
Sets**

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/pdborcl');if (!$conn) {   $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}// Требует OCI8 2.0 (или новее) и Oracle Database 12c (или новее)// также смотрите oci_get_implicit_resultset()$sql u003d 'DECLARE           c1 SYS_REFCURSOR ; BEGIN            OPEN c1 FOR SELECT city, postal_code FROM locations WHERE ROWNUM < 4 ORDER BY city; DBMS_SQL.RETURN_RESULT(c1); OPENc1 FOR SELECT country_id FROM locations WHERE ROWNUM < 4 ORDER BYcity; DBMS_SQL.RETURN_RESULT(c1); END; ';
";while (($row u003d oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) !u003d false) {    echo ""<tr>
";    foreach ($row as $item) {        echo "  <td>".($item!u003du003dnull?htmlentities($item, ENT_QUOTES|ENT_SUBSTITUTE):"t"
";    }    echo "</tr>
";}echo "</table>
";// Виведе //Bejijing 190518//   Bern    3095//    Bombay  490231//    |

### Примітки

> **Примітка**:
>
> Індекси асоціативного масиву необхідно наводити у верхній регістр
> для стандартних полів Oracle, створених з реєстронезалежними
> назвами.

> **Примітка**:
>
> Для запитів, що повертають велику кількість рядів,
> продуктивність може бути значно збільшена за допомогою
> збільшення значення опції
> [oci8.default_prefetch](oci8.configuration.md#ini.oci8.default-prefetch)
> або використання
> [oci_set_prefetch()](function.oci-set-prefetch.md).

> **Примітка**:
>
> Функція **oci_fetch_array()** *трохи* повільніше
> [oci_fetch_assoc()](function.oci-fetch-assoc.md) або
> [oci_fetch_row()](function.oci-fetch-row.md), але гнучкіша.

### Дивіться також

- [oci_fetch()](function.oci-fetch.md) - Вибирає наступний рядок
з результату в буфер
- [oci_fetch_all()](function.oci-fetch-all.md) - Вибирає всі рядки
з результату запиту до двомірного масиву
- [oci_fetch_assoc()](function.oci-fetch-assoc.md) - Повертає
наступний рядок з результату запиту у вигляді асоціативного масиву
- [oci_fetch_object()](function.oci-fetch-object.md) - Повертає
наступний рядок із результату запиту у вигляді об'єкта
- [oci_fetch_row()](function.oci-fetch-row.md) - Повертає
наступний рядок з результату запиту у вигляді нумерованого масиву
- [oci_set_prefetch()](function.oci-set-prefetch.md) - Встановлює
кількість рядків, які будуть автоматично вибрані в буфер
