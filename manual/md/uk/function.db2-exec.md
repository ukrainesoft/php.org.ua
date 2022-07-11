- [«db2_escape_string](function.db2-escape-string.md)
- [db2_execute »](function.db2-execute.md)

- [PHP Manual](index.md)
- [Функції IBM DB2](ref.ibm-db2.md)
- Виконує SQL-запит безпосередньо

#db2_exec

(PECL ibm_db2 \>u003d 1.0.0)

db2_exec — Виконує SQL запит безпосередньо

### Опис

**db2_exec**(resource `$connection`, string `$statement`, array
`$options` u003d ?): resource

Виконує SQL-запит безпосередньо.

Якщо ви плануєте інтерполувати змінні PHP у SQL-запит, майте на
виду, що це одна з найпоширеніших вразливостей
безпеки. Розгляньте можливість виклику
[db2_prepare()](function.db2-prepare.md) для підготовки SQL-запиту з
маркерами параметрів для вхідних значень. Потім ви можете викликати
[db2_execute()](function.db2-execute.md), щоб передати вхідні
значення та уникнути атак SQL-ін'єкцій.

Якщо ви плануєте багаторазово виконувати один і той же SQL-запит з
різними параметрами, розгляньте можливість виклику
[db2_prepare()](function.db2-prepare.md) та
[db2_execute()](function.db2-execute.md), щоб сервер бази даних міг
повторно використовувати свій план доступу та підвищити ефективність вашої
бази даних.

### Список параметрів

`connection`
Допустима змінна ресурсу з'єднання з базою даних, що повертається
функцією [db2_connect()](function.db2-connect.md) або
[db2_pconnect()](function.db2-pconnect.md).

`statement`
SQL запит. Запит не може містити маркер параметрів.

`options`
Асоціативний масив, який містить параметри оператора. Параметр можна
використовувати для запиту курсора, що прокручується, на серверах баз даних,
що підтримують цю функцію.

Опис допустимих опцій оператора дивіться у розділі
[db2_set_option()](function.db2-set-option.md).

### Значення, що повертаються

Повертає ресурс оператора у разі успішного виконання SQL-запиту
або **`false`**, якщо базі даних не вдалося виконати SQL-запит.

### Приклади

**Приклад #1 Створення таблиці за допомогою **db2_exec()****

У цьому прикладі **db2_exec()** використовується для виконання набору
DDL-запитів у процесі створення таблиці.

` <?php$conn u003d db2_connect($database, $user, $password);// Створення таблиці test$create u003d 'CREATE TABLE animals (id INTEGER, breed VARCHAR(32),  7,2))';$result u003d db2_exec($conn, $create);if ($result) {    print "Таблиця створена.
";}// Наповнення таблиці test$animals u003d array(   array(0, 'cat', 'Pook', 3.2),   array(1, 'dog', 'Peaches', 12. ) , 'Smarty', 350.0),   array(3, 'gold fish', 'Bubbles', 0.1),   array(4,'budgerigar', 'Gizmo', 0.2), ', 9.7),   array(6, 'llama', 'Sweater', 150));foreach ($animals as $animal) {    $rc u003d db2_exec($conn, )    VALUES ({$animal[0]}, '{$animal[1]}', '{$animal[2]}', {$animal[3]})");   if ($rc) {         Додано запис... ";    }}?> `

Результат виконання цього прикладу:

Таблиця створена.
Додано запис... Додано запис... Додано запис... Додано запис... Додано запис... Додано запис... Додано запис...

**Приклад #2 Виконання запиту SELECT з курсором**

У наступному прикладі показано, як запросити курсор, що прокручується
SQL-запиту, отриманого за допомогою **db2_exec()**.

`<?php$conn u003d db2_connect($database, $user, $password);$sql u003d "SELECT name FROM animals    WHERE weight < 10.0    orDER BY   ; $stmt u003d db2_exec($conn, $sql, array('cursor' u003d> DB2_SCROLLABLE)); while($row u003d db2_fetch_array($stmt)) {         print "$row[0]
";    }}?> `

Результат виконання цього прикладу:

Bubbles
Gizmo
Pook
Rickety Ride

**Приклад #3 Отримання XML-даних як SQL ResultSet**

У наступному прикладі показано, як працювати з документами, що зберігаються в
стовпці XML за допомогою бази даних SAMPLE. Використовуючи досить простий
SQL/XML, цей приклад повертає деякі вузли у XML-документі у форматі
SQL ResultSet, з яким знайома більшість користувачів.

` <?php$conn u003d db2_connect("SAMPLE", "db2inst1", "ibmdb2");$queryu003du003d''SELECT * FROM XMLTABLE(    XMLNAMESPACES (DEFAULT \'http://posample) -fn:xmlcolumn("CUSTOMER.INFO")/customerinfo\'                                                                                                                 ¦¦¦¦¦ 50) PATH \'phone [ @type u003d "work"]\'    ) AS T   WHERE NAME u003d \'Kathy Smith\'    ';$stmt u003d $$ stmt)){   printf("$row->CID     $row->NAME     $row->PHONE
");} db2_close($conn);?> `

Результат виконання цього прикладу:

1000 Kathy Smith 416-555-1358
1001 Kathy Smith 905-555-7258

**Приклад #4 Виконання "JOIN" з даними XML**

Наступний приклад працює з документами, що зберігаються у 2 різних стовпцях
XML у базі даних SAMPLE. Він створює 2 тимчасові таблиці з
XML-документів з 2 різних стовпця і повертає SQL ResultSet з
інформацією про статус доставки клієнта.

`<?php$conn u003d db2_connect("SAMPLE", "db2inst1", "ibmdb2");$queryu003du003d''     SELECT A.CID, A.NAME, A.PHONE, C.PONUM, C.  (DEFAULT \'http://posample.org\'),    \'db2-fn:xmlcolumn("CUSTOMER.INFO")/customerinfo\'    COLUMNS   "CID" BIGINT PATH \'@Cid\' CH (50) PATH \'name\',    "PHONE" VARCHAR (50) PATH \'phone [ @type u003d "work"]\'    ) as A,    PURCHASEOR    posample.org\'),   \'db2-fn:xmlcolumn("PURCHASEORDER.PORDER")/PurchaseOrder\'    COLUMNS   "PONUM"  BIGINT PATH \'@PoNum\'  \'    ) as C    WHERE A.CID u003d B.CUSTID AND    B.POID u003d C.PONUM AND     A.NAME u003d \'Kathy S$$$| u003d db2_fetch_object($stmt)){   printf("$row->CID  |$row->PHONE    $row->PONUM     $row->
");} db2_close($conn);?> `

Результат виконання цього прикладу:

1001 Kathy Smith 905-555-7258 5002 Shipped

**Приклад #5 Повернення SQL-даних як частини великого XML-документа**

Наступний приклад працює з частиною документів PRODUCT.DESCRIPTION у базі
даних SAMPLE. Він створює XML-документ, що містить опис продукту
(дані XML) та інформацію про ціни (дані SQL).

` <?php$connu003du003ddb2_connect("SAMPLE", "db2inst1", "ibmdb2");$queryu003du003d'SELECTXMLSERIALIZE(XMLQUERY(\'   declare boundary-space strip;       ";    <promoList> {    for $prod in $doc/product    where $prod/description/price < 10.00    order by $prod/description/price ascending    return(        <promoitem> {        $prod,        <startdate> {$start} </ startdate>,        <enddate> {$end} </enddate>,        <promoprice> {$promo} </promoprice>        } </promoitem>    )    } </promoList>\' passing by ref DESCRIPTION AS "doc",PROMOSTART as "start",PROMOEND as "end",PROMOPRICE as "promo"RETURNING SEQUENCE)AS CLOB (32000))AS NEW_PRODUCT_INFOFROM PRODUCTWHERE PID u003d \'100-100- 1 );while($row u003d db2_fetch_array($stmt)){    printf("$row[0]
");} db2_close($conn);?> `

Результат виконання цього прикладу:

<promoList xmlnsu003d"http://posample.org">
<promoitem>
<product pidu003d"100-100-01">
<description>
<name>Snow Shovel, Basic 22 inch</name>
<details>Basic Snow Shovel, 22 inches wide, straight handle with D-Grip</details>
<price>9.99</price>
<weight>1 kg</weight>
</description>
</product>
<startdate>2004-11-19</startdate>
<enddate>2004-12-19</enddate>
<promoprice>7.25</promoprice>
</promoitem>
</promoList>

### Дивіться також

- [db2_execute()](function.db2-execute.md) - Виконує
підготовлений SQL-запит
- [db2_prepare()](function.db2-prepare.md) - Підготовка
SQL-запит до виконання
