- [« oci_bind_array_by_name](function.oci-bind-array-by-name.md)
- [oci_cancel »](function.oci-cancel.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Прикріплює змінну PHP до відповідної мітки у SQL-вираженні

#oci_bind_by_name

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_bind_ru_name — Прикріплює змінну PHP до відповідної мітки в
SQL-вираженні

### Опис

**oci_bind_by_name**(
resource `$statement`,
string `$param`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$var`,
int `$max_length` u003d -1,
int `$type` u003d 0
): bool

Прикріплює змінну `var` до мітки `param`. Таке прикріплення
дозволяє підвищити продуктивність та уникнути SQL-ін'єкцій.

Прикріплення змінної дозволяє базі даних повторно використовувати
кешовані контекстні вирази від попередніх запитів, навіть якщо вони
спочатку були запущені іншим користувачем чи процесом. Це
також знижує ризик SQL-ін'єкцій, оскільки дані в такому разі ніколи
не розглядаються як інструкції SQL. Дані не потрібно екранувати
або укладати в лапки.

Прикріплені PHP-змінні можуть бути змінені та знову виконані без
необхідності повторного оброблення запиту або повторного прикріплення.

У Oracle, прикріплення змінних зазвичай поділяють на `IN` (прикріплює
значення, що передаються в базу даних) і `OUT` (прикріплює значення,
повертаються PHP). Змінна може бути одночасно `IN` та `OUT`.
Незалежно від цього, характер прикріплення змінних буде визначено
час виконання.

Необхідно вказати `max_length` при використанні `OUT`-прив'язки, що
дозволяє PHP зарезервувати більше пам'яті для зберігання повертається
значення

Для `IN`-прив'язки рекомендується також вказати параметр `max_length`,
якщо вираз виконується кілька разів із різними значеннями
PHP-змінної. Інакше Oracle може урізати розмір даних
до розміру початкового значення змінної PHP. Якщо максимальна
довжина невідома, рекомендується викликати **oci_bind_by_name()**
перед кожним викликом [oci_execute()](function.oci-execute.md).
Прикріплення невиправдано великої змінної вплине на процес
збереження бази даних.

Вигляд прикріплення вказує Oracle як працювати з пам'яттю під час читання
даних. Для `IN`-прикріплення адреса в пам'яті повинна містити допустимі
дані під час виклику [oci_execute()](function.oci-execute.md). Це
означає, що значення змінної має бути у пам'яті під час
виконання. Якщо це не так, можливі некоректні результати чи помилки
на кшталт "ORA-01460: unimplemented або unreasonable conversion
requested" (запитані нездійсненні або некоректні перетворення)
`OUT`-прикріплення основною ознакою є встановлення значення в
змінну PHP.

Для виразу, що багаторазово виконується, прив'язка одних і тих же значень
може зменшити можливості оптимізатора Oracle з вироблення найкращого
варіанти виконання інструкції. Тривале прикріплення виразів,
які рідко виконуються, може також не принести користі. Проте,
в обох випадках прикріплення є більш безпечним, ніж
конкатенація рядка запиту та неперевірених даних користувача.

### Список параметрів

`statement`
Допустимий ідентифікатор виразу OCI8.

`param`
Мітка з префіксом у вигляді двокрапки, що використовується у виразі. Двокрапка
опціонально в `param`. Oracle не використовує питання для позначок.

`var`
Змінна PHP, асоційована з `param`

`max_length`
Встановлює максимальний розмір даних. Якщо вказати -1, то функція буде
використовувати поточний розмір змінної `var` як максимальний.
При цьому змінна `var` повинна існувати та містити дані у
час дзвінка **oci_bind_by_name()**.

`type`
Тип даних, до якого Oracle наводить значення. За замовчуванням
`type` має значення **`SQLT_CHR`**. Oracle наводить дані від цього
типу типу поля (або типу змінної PL/SQL), якщо це можливо.

Якщо необхідно прикріпити змінну абстрактного типу
(LOB/ROWID/BFILE), слід попередньо використовувати
[oci_new_descriptor()](function.oci-new-descriptor.md). Параметр
`length` не використовується для абстрактних типів і має бути встановлений
в 1.

Допустимі значення параметра `type`:

- **`SQLT_BFILEE`** або **`OCI_B_BFILE`** - для BFILE-об'єктів;

- **`SQLT_CFILEE`** або **`OCI_B_CFILEE`** - для CFILE-об'єктів;

- **`SQLT_CLOB`** або **`OCI_B_CLOB`** - для CLOB-об'єктів;

- **`SQLT_BLOB`** або **`OCI_B_BLOB`** - для BLOB-об'єктів;

- **`SQLT_RDD`** або **`OCI_B_ROWID`** - для ROWID-об'єктів;

- **`SQLT_NTY`** або **`OCI_B_NTY`** - для іменованих типів дати;

- **`SQLT_INT`** або **`OCI_B_INT`** - для цілих чисел;

- **`SQLT_CHR`** - для символів VARCHAR;

- **`SQLT_BIN`** або **`OCI_B_BIN`** - для RAW-полів;

- **`SQLT_LNG`** - для LONG-полів;

- **`SQLT_LBI`** - для LONG RAW полів;

- **`SQLT_RSET`** - для курсорів, створених функцією
[oci_new_cursor()](function.oci-new-cursor.md);

- **`SQLT_BOL`** або **`OCI_B_BOL`** - для PL/SQL BOOLEAN (Потрібно
OCI8 2.0.7 та Oracle Database 12c)

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Додавання даних за допомогою **oci_bind_by_name()****

`<?php// Створення таблиці://  CREATE TABLE mytab (id NUMBER, text VARCHAR2(40));$conn u003d oci_connect('hr', 'welcome', 'localhost/XE';; ) {   $m u003d oci_error(); trigger_error(htmlentities($m['message']), E_USER_ERROR);}$stid u003d oci_parse($conn,"INSERT INTO mytab (id, text) VALUES(:id_bv, :text_bv)");$id; $text u003d "Data to insert     ";oci_bind_by_name($stid, ":id_bv", $id);oci_bind_by_name($stid, ":text_bv", $text);oci_execute($stid); , 'Data to insert     '?> `

**Приклад #2 Одна прив'язка для багаторазового використання**

` <?php// Створення таблиці://  CREATE TABLE mytab (id NUMBER);$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) { (); trigger_error(htmlentities($m['message']), E_USER_ERROR);}$a u003d array(1,3,5,7,11); // дані для вставки$stid u003d oci_parse($conn, 'INSERT INTO mytab (id) VALUES (:bv)');oci_bind_by_name($stid, ':bv', $v, 20);$| v) {   $r u003d oci_execute($stid, OCI_DEFAULT); // не використовувати автоматичне завершення транзакції}oci_commit($conn); // завершення транзакції// Таблиця містить п'ять записів: 1, 3, 5, 7, 11oci_free_statement($stid);oci_close($conn);?> `

**Приклад #3 Прикріплення в циклі **foreach()****

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {   $m u003d oci_error(); trigger_error(htmlentities($m['message']), E_USER_ERROR);}$sql u003d 'SELECT * FROM departments WHERE department_name u003d :dname AND⠀location_id u003d :loc'$$$$; ba u003d array(':dname' u003d> 'IT Support', ':loc' u003d> 1700);foreach ($ba as $key u003d> $val) {    // oci_bind_by_name$ не працює,    // тому що прикріплює кожне значення в одно місце: $val     // Замість цього следует вказувати конкретне місце: $$ $| $stid);$row u003d oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS);foreach ($row as $item) {   print $item."<br>
";}oci_free_statement($stid);oci_close($conn);?> `

**Приклад #4 Прикріплення до виразу WHERE**

` <?php$conn u003d oci_connect("hr", "hrpwd", "localhost/XE");if (!$conn) {    $m u003d oci_error(); trigger_error(htmlentities($m['message']), E_USER_ERROR);}$sql u003d 'SELECT last_name FROM employees WHERE department_id u003d :didbv ORDER BYlast_name'$$; 60;oci_bind_by_name($stid, ':didbv', $didbv);oci_execute($stid);while (($row u003d oci_fetch_array($stid, OCI_ASSOC)) !u003d false) {    "<br>
";}//Висновком буде//  Austin//   Ernst//   Hunold//   Lorentz//    Pataballaoci_free_statement($stid);n>se;

**Приклад #5 Прикріплення до виразу LIKE**

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {   $m u003d oci_error(); trigger_error(htmlentities($m['message']), E_USER_ERROR); city u003d 'South%'; // '%' - це знак шаблона SQLoci_bind_by_name($stid, ":bv", $city);oci_execute($stid);oci_fetch_all($stid, $res);foreach ($res['CITY'] ) {    print $c . "<br>
";}//Висновком буде|

**Приклад #6 Прикріплення до виразу REGEXP_LIKE**

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {   $m u003d oci_error(); trigger_error(htmlentities($m['message']), E/USER_ERROR); ;$city u003d '.*ing.*';oci_bind_by_name($stid, ":bv", $city);oci_execute($stid);oci_fetch_all($stid, $res);foreach ($res['CITY'] as $c) {    print $c . "<br>
";}// Висновком буде://   Beijing//   Singaporeoci_free_statement($stid);oci_close($conn);?> `

Для невеликої, фіксованої кількості умов у виразі IN,
використовуються індивідуальні імена змінних. Невідомі значення при
виконання можуть бути встановлені в NULL. Це дозволяє використовувати
один вираз декільком користувачам, що підвищує ефективність
кешування Oracle DB.

**Приклад #7 Прикріплення кількох значень у вираз IN**

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {   $m u003d oci_error(); trigger_error(htmlentities($m['message']), E_USER_ERROR);}$sql u003d 'SELECT last_name FROM employees WHERE employee_id in (:e1, :e2, :e$) );$mye1 u003d 103;$mye2 u003d 104;$mye3 u003d NULL; // прикинемось, не отримали це значенняoci_bind_by_name($stid, ':e1', $mye1);oci_bind_by_name($stid, ':e2', $mye2);oci_bind_by_name($sti,$3,'3; oci_execute($stid);oci_fetch_all($stid, $res);foreach ($res['LAST_NAME'] as $name) {    print $name ."<br>
";}// Висновок буде://  Ernst//  Hunoldoci_free_statement($stid);oci_close($conn);?> `

**Приклад #8 Прикріплення ROWID, що повертається запитом**

`<?php// Створимо і наповним таблицю://  CREATE TABLE mytab (id NUMBER, salary NUMBER, name VARCHAR2(40));//   INSERT INTO          ');//   COMMIT;$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {   $m u003d oci_error(); trigger_error(htmlentities($m['message']), E_USER_ERROR);}$stid u003d oci_parse($conn, 'SELECT ROWID, name FROM mytab WHERE id u003d :id_bv FOR|$| stid, ':id_bv', $id);oci_execute($stid);$row u003d oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS);$rid u003d $row['ROWID'];$name u003d $row[ ];// Переведемо ім'я в верхній реєстр і зафіксуємо зміни$name u003d strtoupper($name);$stid u003d oci_parse($conn, 'UPDATE mytab SET name u003d :n_b |:| ':n_bv', $name);oci_bind_by_name($stid, ':r_bv', $rid, -1, OCI_B_ROWID);oci_execute($stid);// Тепер таблиця містить: 1, 10 oci_close($conn);?> `

**Приклад #9 OUT-прикріплення ROWID, що повертається при INSERT**

`<?php// У даному прикладі додається запис з ідентифікатором і іменем,//після чого збільшується заробітна плата// Створення таблиці:// CR          / На основі власних ROWID на прикладі thies[at]thieso.net (980221)$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) { | ; trigger_error(htmlentities($m['message']), E_USER_ERROR); conn, $sql);$rowidu003du003doci_new_descriptor($conn, OCI_D_ROWID);oci_bind_by_name($ins_stid, ":id_bv",  $id,    10);oci_bind_by_name($ins ($ins_stid, ":rid",     $rowid, -1, OCI_B_ROWID);$sql u003d "UPDATE mytab SET salary u003d :salary WHERE ROWID u003d :rid"$$$; $upd_stid, ":rid", $rowid, -1, OCI_B_ROWID);oci_bind_by_name($upd_stid, ":salary", $salary,   32);// ідентифікатори і імена y ",              2222 u003d> "Bill",              3333 u003d> "Jim");// Заработная плата для каждого сотрудника$salary u003d 10000;// Вставка и немедленное обновление каждой строкиforeach ($data as $id u003d> $name) {    oci_execute ($ins_stid); oci_execute($upd_stid);}$rowid->free();oci_free_statement($upd_stid);oci_free_statement($ins_stid);// Показати нові записи$stid u003d oci_parse($conn, "SELECT| $stid);while ($row u003d oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {    var_dump($row);}oci_free_statement($stid);oci_close($conn);?>

**Приклад #10 Прикріплення для збереженої функції PL/SQL**

` <?php//  Перед запуском PHP-сценария, создайте хранимую функцию в//  SQL*Plus или SQL Developer:////  CREATE OR REPLACE FUNCTION myfunc(p IN NUMBER) RETURN NUMBER AS//  BEGIN//      RETURN p * 3;// END;$connu003du003doci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {    $e u003d oci_error(); trigger_error(htmlentities($e['message']), E_USER_ERROR);}$p u003d 8;$stid u003d oci_parse($conn, 'begin :r :u003d myfunc(:p); end;');oci_bind_by stid, ':p', $p);// Повертається значення OUT-прикріплено. За замовчуванням типом даних буде рядок.// Прикріплення зі значенням 40 означає, що буде повернено 40 символів.
";   // виведе 24oci_free_statement($stid);oci_close($conn);?> `

**Приклад #11 Прикріплення параметрів для PL/SQL процедури, що зберігається**

` <?php//  Перед запуском PHP-сценария, создайте хранимую процедуру в//  SQL*Plus или SQL Developer:////  CREATE OR REPLACE PROCEDURE myproc(p1 IN NUMBER, p2 OUT NUMBER) AS//  BEGIN//      p2 :u003d p1 * 2;// END;$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {    $e u003d oci_error(); trigger_error(htmlentities($e['message']), E_USER_ERROR);}$p1 u003d 8;$stid u003d oci_parse($conn, 'begin myproc(:p1, :p2); end;');oci_bind_by , ':p1', $p1);//Другий параметр процедури OUT-прикріплений. За замовчуванням типом даних буде рядок.// Прикріплення зі значенням 40 означає, що буде повернено 40 символів.
";   // виведе 16oci_free_statement($stid);oci_close($conn);?> `

**Приклад #12 Прикріплення CLOB-об'єкта**

` <?php// Перед запуском створюємо таблицю://    CREATE TABLE mytab (mykey NUMBER, myclob CLOB);$conn u003d oci_connect('hr', 'welcome', '!'! {    $e u003d oci_error(); trigger_error(htmlentities($e['message']), E_USER_ERROR);}$mykey u003d 12343; // произвольный ключ для примера$sql u003d "INSERT INTO mytab (mykey, myclob)        VALUES (:mykey, EMPTY_CLOB())        RETURNING myclob INTO :myclob";$stid u003d oci_parse($conn, $sql);$clob u003d oci_new_descriptor ($conn, OCI_D_LOB);oci_bind_by_name($stid, ":mykey", $mykey, 5);oci_bind_by_name($stid, ":myclob", $clob, -1, OCI_B_CLOB);oci_execute $clob->save("A very long string");oci_commit($conn);// Отримання CLOB-даних$query u003d 'SELECT myclob FROM mytab WHERE mykey u003d :mykey';$stid u003d $| query);oci_bind_by_name($stid, ":mykey", $mykey, 5);oci_execute($stid);print '<table borderu003d"1">';while ($row u003d oci_fetch_array($stid, OCI_ASSOC+ )) {    print '<tr><td>'.$row['MYCLOB'].'</td></tr>'; // У циклі, очищення великих змінних перед повторним отриманням даних, зменшує пікове споживання пам'яті PHP    unset($row);}print '</table>';?> `

**Приклад #13 Прикріплення PL/SQL BOOLEAN**

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {    $e u003d oci_error(); trigger_error(htmlentities($e['message']),E_USER_ERROR);}$plsql u003d  "begin    :output1 :u003d true;    :output2 :u003d false;    ; oci_bind_by_name($s, ':output1', $output1, -1, OCI_B_BOL);oci_bind_by_name($s, ':output2', $output2, -1, OCI_B_BOL);oci_execute($s) // Truevar_dump ($ output2); // false?> `

### Примітки

**Увага**

Не використовуйте [addslashes()](function.addslashes.md) одночасно з
**oci_bind_by_name()**, тому що лапок бути не повинно. Усі вказані
лапки будуть записані до бази даних, тому що **oci_bind_by_name()**
вставляє дані дослівно і не видаляє лапки або символи
екранування.

> **Примітка**:
>
> Якщо прикріплюється рядок до `CHAR`-поля у виразі `WHERE`, пам'ятайте,
> що Oracle використовує при порівнянні значення `CHAR`, доповнені
> пробілами. Змінна PHP має бути доповнена пробілами до того ж
> розміру, як і полі, щоб вираз `WHERE` виконувалося правильно.

> **Примітка**:
>
> Змінна PHP `var` є посиланням. Деякі види циклів можуть
> працювати негаразд, як очікується:
>
> ` <?phpforeach ($myarray as $key u003d> $value) { {   oci_bind_by_name($stid, $key, $value);}?> `
>
> І тут кожен ключ прикріплюється до $value, тому все
> прикріплені змінні вказують на значення в останній ітерації
> циклу. Натомість слід використовувати:
>
> ` <?phpforeach ($myarray as $key u003d> $value) {    oci_bind_by_name($stid, $key, $myarray[$key]);}?> `

### Дивіться також

- [oci_bind_array_by_name()](function.oci-bind-array-by-name.md) -
Пов'язує PHP масив з масивом Oracle PL/SQL
- [oci_parse()](function.oci-parse.md) - Підготовка запиту до
виконанню
