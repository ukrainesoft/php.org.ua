- [«db2_exec](function.db2-exec.md)
- [db2_fetch_array »](function.db2-fetch-array.md)

- [PHP Manual](index.md)
- [Функції IBM DB2](ref.ibm-db2.md)
- Виконує підготовлений SQL-запит

#db2_execute

(PECL ibm_db2 \>u003d 1.0.0)

db2_execute — Виконує підготовлений SQL-запит

### Опис

**db2_execute**(resource `$stmt`, array `$parameters` u003d ?): bool

**db2_execute()** виконує SQL-запит, підготовлений за допомогою
[db2_prepare()](function.db2-prepare.md).

Якщо SQL-запит повертає набір результатів, наприклад, інструкція
SELECT або CALL для збереженої процедури, яка повертає один або
кілька наборів результатів, ви можете отримати рядок як масив з
ресурсу `stmt`, використовуючи
[db2_fetch_assoc()](function.db2-fetch-assoc.md),
[db2_fetch_both()](function.db2-fetch-both.md)або
[db2_fetch_array()](function.db2-fetch-array.md). В якості
альтернативи ви можете використати
[db2_fetch_row()](function.db2-fetch-row.md) для переміщення вказівника
набору результатів на наступний рядок та вибірки стовпця з цього рядка
за допомогою [db2_result()](function.db2-result.md).

Зверніться до [db2_prepare()](function.db2-prepare.md) для короткого
обговорення переваг використання
[db2_prepare()](function.db2-prepare.md) та **db2_execute()** замість
[db2_exec()](function.db2-exec.md).

### Список параметрів

`stmt`
Підготовлений запит, який повертається функцією
[db2_prepare()](function.db2-prepare.md).

`parameters`
Масив вхідних параметрів, що відповідають будь-яким маркерам параметрів,
що містяться у підготовленому запиті.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Підготовка та виконання SQL-запиту з маркерами параметрів**

У наступному прикладі готується запит INSERT, який приймає
чотири маркери параметрів, а потім виконує ітерацію за масивом
масивів, що містять вхідні значення, які необхідно передати в
**db2_execute()**.

` <?php$pet u003d array(0, 'cat', 'Pook', 3.2);$insert u003d 'INSERT INTO animals (id, breed, name, weight)    VALUES (?, ?, ') $stmtu003du003ddb2_prepare($conn,$insert);if($stmt) {    $result u003d db2_execute($stmt, $pet); if ($result) {         print "Успішно доданий новий вихованець."; }}?> `

Результат виконання цього прикладу:

Успішно додано новий вихованець.

**Приклад #2 Виклик збереженої процедури з параметром OUT**

У наступному прикладі готується запит CALL, який приймає один
маркер параметра, що представляє параметр OUT, пов'язує змінну PHP
`$my_pets` з параметром за допомогою
[db2_bind_param()](function.db2-bind-param.md), а потім викликає
**db2_execute()** для виконання запиту CALL. Після виконання запиту
CALL процедури, що зберігається, значення `$num_pets` змінюється, щоб відобразити
значення, яке повертається збереженою процедурою для цього параметра OUT.

` <?php$num_pets u003d 0;$res u003d db2_prepare($conn, "CALL count_my_pets(?)");$rc u003d db2_bind_param($res, 1, "num_pets", DB2_PARAM_CU| );print "У мені $num_pets домашніх тварин!";?> `

Результат виконання цього прикладу:

У мене 7 свійських тварин!

**Приклад #3 Повернення XML-даних як SQL ResultSet**

У наступному прикладі показано, як працювати з документами, що зберігаються в
стовпці XML за допомогою бази даних SAMPLE. Використовуючи досить простий
SQL/XML, цей приклад повертає деякі вузли у XML-документі у форматі
SQL ResultSet, з яким знайома більшість користувачів.

` <?php$conn u003d db2_connect("SAMPLE", "db2inst1", "ibmdb2");$queryu003du003d''SELECT * FROM XMLTABLE(    XMLNAMESPACES (DEFAULT \'http://posample) -fn:xmlcolumn("CUSTOMER.INFO")/customerinfo\'                                                                                                                 ¦¦¦¦¦ 50) PATH \'phone [ @type u003d "work"]\'    ) AS T    WHERE NAME u003d ? ';$stmtu003du003ddb2_prepare($conn, $query);$name u003d 'Kathy Smith';if ($stmt) {    db2_bind_param($stmt, 1, name), DB2_ db2_execute($stmt); while($row u003d db2_fetch_object($stmt)){   printf("$row->CID    $row->NAME     $row->PHONE
");   }}db2_close($conn);?> `

Результат виконання цього прикладу:

1000 Kathy Smith 416-555-1358
1001 Kathy Smith 905-555-7258

**Приклад #4 Виконання "JOIN" з даними XML**

Наступний приклад працює з документами, що зберігаються у 2 різних стовпцях
XML у базі даних SAMPLE. Він створює 2 тимчасові таблиці з
XML-документів з 2 різних стовпця і повертає SQL ResultSet з
інформацією про статус доставки клієнта.

` <?php$connu003du003ddb2_connect("SAMPLE", "db2inst1", "ibmdb2");$queryu003du003d''SELECT A.CID, A.NAME, A.PHONE, C.PONUM, C.STATUSFROMXMLTABLE(XML \'http://posample.org\'),\'db2-fn:xmlcolumn("CUSTOMER.INFO")/customerinfo\'COLUMNS"CID" BIGINT PATH \'@Cid\',"NAME" VARCHAR (50 ) PATH \'name\',"PHONE" VARCHAR (50) PATH \'phone [ @type u003d "work"]\') as A,PURCHASEORDER AS B,XMLTABLE (XMLNAMESPACES (DEFAULT ). org\'),\'db2-fn:xmlcolumn("PURCHASEORDER.PORDER")/PurchaseOrder\'COLUMNS"PONUM" BIGINT PATH \'@PoNum\',"STATUS" VARCHAR (50) PATH \'@ ) as CWHERE A.CID u003d B.CUSTID AND    B.POID u003d C.PONUM AND     A.NAME u003d ?';$stmt u003d db2_prepare($conn, $$; ) {    db2_bind_param($stmt, 1, "name", DB2_PARAM_IN); db2_execute($stmt); while($row u003d db2_fetch_object($stmt)){    printf("$row->CID    $row->NAME    $row->PHONE     $row->PONUM>$|
");   }}db2_close($conn);?> `

Результат виконання цього прикладу:

1001 Kathy Smith 905-555-7258 5002 Shipped

**Приклад #5 Повернення SQL-даних як частини великого XML-документа**

Наступний приклад працює з частиною документів PRODUCT.DESCRIPTION у базі
даних SAMPLE. Він створює XML-документ, що містить опис продукту
(дані XML) та інформацію про ціни (дані SQL).

` <?php$connu003du003ddb2_connect("SAMPLE", "db2inst1", "ibmdb2");$queryu003du003d'SELECTXMLSERIALIZE(XMLQUERY(\'   declare boundary-space strip;       ";    <promoList> {    for $prod in $doc/product    where $prod/description/price < 10.00    order by $prod/description/price ascending    return(        <promoitem> {        $prod,        <startdate> {$start} </ startdate>,        <enddate> {$end} </enddate>,        <promoprice> {$promo} </promoprice>            } </promoitem>    )    } </promoList>\' passing by ref DESCRIPTION AS "doc",PROMOSTART as "start",PROMOEND as "end",PROMOPRICE as "promo"RETURNING SEQUENCE)AS CLOB (32000))AS NEW_PRODUCT_INFOFROM PRODUCTWHERE PID u003d ?';$stmt u003d $ 100-01"; if ($stmt) {    db2_bind_param($stmt, 1, "pid", DB2_PARAM_IN); db2_execute($stmt); while($row u003d db2_fetch_array($stmt)){    printf("$row[0]
");   }}db2_close($conn);?> `

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

- [db2_exec()](function.db2-exec.md) - Виконує SQL-запит безпосередньо
- [db2_fetch_array()](function.db2-fetch-array.md) - Повертає
масив, індексований за положенням стовпця, що представляє рядок
у наборі результатів
- [db2_fetch_assoc()](function.db2-fetch-assoc.md) - Повертає
масив, індексований на ім'я стовпця, що представляє рядок в
наборі результатів
- [db2_fetch_both()](function.db2-fetch-both.md) - Повертає
масив, індексований як на ім'я стовпця, і за позицією,
представляє рядок у наборі результатів
- [db2_fetch_row()](function.db2-fetch-row.md) - Встановлює
покажчик набору результатів на наступний рядок або запитаний
рядок
- [db2_prepare()](function.db2-prepare.md) - Підготовка
SQL-запит до виконання
- [db2_result()](function.db2-result.md) - Повертає один стовпець
з рядка у наборі результатів
