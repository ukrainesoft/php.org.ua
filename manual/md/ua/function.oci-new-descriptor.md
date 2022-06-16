- [«oci_new_cursor](function.oci-new-cursor.md)
- [oci_num_fields »](function.oci-num-fields.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Ініціалізує новий дескриптор об'єкта LOB чи FILE

#oci_new_descriptor

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_new_descriptor - Ініціалізує новий дескриптор об'єкта LOB або
FILE

### Опис

**oci_new_descriptor**(resource `$connection`, int `$type` u003d
**`OCI_DTYPE_LOB`**): ?[OCILob](class.ocilob.md)

Резервує ресурси, необхідні для зберігання дескриптора об'єкта або
LOB-локатор.

### Список параметрів

`connection`
Ідентифікатор з'єднання з сервером Oracle, що повертається функцією
[oci_connect()](function.oci-connect.md) або
[oci_pconnect()](function.oci-pconnect.md).

`type`
Допустимі значення параметра `type`: **`OCI_DTYPE_FILE`**,
**`OCI_DTYPE_LOB`** та **`OCI_DTYPE_ROWID`**.

### Значення, що повертаються

Повертає новий LOB або дескриптор FILE у разі успішного виконання
або **`null`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **oci_new_descriptor()****

`<?php/* Наведений скрипт розроблений для використання з HTML формами. * Це має на увазі, що $user, $password, $table, $where, і $commitsize * отримані з форми. Скрипт удаляє записи з використанням * ROWID і закриває транзакцію після кожного * $commitsize записів. (Використовуйте обережно, відкат змін неможливий) */$conn u003d oci_connect($user, $password);$stmt u003d oci_parse($conn, "select rowid from $table $where")$row );oci_define_by_name($stmt, "ROWID", $rowid);oci_execute($stmt);while (oci_fetch($stmt)) {   $nrows u003d oci_num_rows($stmt); $delete u003d oci_parse($conn, "delete from $table where ROWID u003d :rid"); oci_bind_by_name($delete, ":rid", $rowid, -1, OCI_B_ROWID); oci_execute($delete); echo "$nrows
";    if (($nrows % $commitsize) u003du003d 0) {       oci_commit($conn);    }}$nrows u003d oci_num_rows($sm|
";oci_free_statement($stmt);oci_close($conn);?> `

`<?php    /* Даний скрипт реалізує завантаження файлів в LOB-стовпці      * HTML-форма для скрипта виглядає прикладно так:    * <input typeu003d"file" nameu003d"lob_upload" />     * ...    */  if (!isset($lob_upload) |||$$lob_uploadu003du003d 'none'') " methodu003d"post" enctypeu003d"multipart/form-data">Завантажити файл: <input typeu003d"file" nameu003d"lob_upload" /><br /><input typeu003d"submit" valueu003d"Завантажити" / > - <input typeu003d"reset" valueu003d"Сбросить" /></form><?php  } else {     // $lob_upload содержит временное имя загруженного файла     // смотрите также раздел особенностей загрузки файлов,     // если необходимо реализовать безопасную завантаження     $conn u003d oci_connect($user, $password); $lob u003d oci_new_descriptor ($ conn, OCI_D_LOB); $stmtu003du003doci_parse($conn, "insert into $table (id, the_blob)               values(my_seq.NEXTVAL, EMBTY_BLOB(  )| | oci_bind_by_name($stmt, ':the_blob', $lob, -1, OCI_B_BLOB); oci_execute($stmt, OCI_DEFAULT); if ($lob->savefile($lob_upload)){       oci_commit($conn); echo "Blob успішно завантажений
";     }else{        echo "Не удалося завантажити Blob
";     }     $lob->free();     oci_free_statement($stmt);     oci_close($conn);  }?> `

**Приклад #2 Приклад використання **oci_new_descriptor()****

` <?php/* Вызов хранимой процедуры PL/SQL, параметрами которой являются объекты CLOB * Пример PL/SQL процедуры: * * PROCEDURE save_data *   Имя аргумента                    Тип                     In/Out По умолчанию? *   ------------------------------ ------------------- ---- ------ ------------ *   KEY                            NUMBER(38)              IN *   DATA                           CLOB                    IN * */$conn u003d oci_connect($user, $password);$stmt u003d oci_parse($conn, "begin save_data(:key, :data); end;");$clob u003d oci_new_descriptor($conn, OCI_D_LOB);oci_bind_by_name($stmt, ':key', $ stmt, ':data', $clob, -1, OCI_B_CLOB);$clob->write($data);oci_execute($stmt, OCI_DEFAULT);oci_commit($conn);$clob->free();oci_free_state $stmt);?> `

### Примітки

> **Примітка**:
>
> У версіях PHP нижче 5.0.0 ця функція називалася
> [ocinewdescriptor()](function.ocinewdescriptor.md). У PHP 5.0.0 та
> вище [ocinewdescriptor()](function.ocinewdescriptor.md) є
> аліасом **oci_new_descriptor()**, тому ви можете продовжувати
> використовувати це ім'я, але це не рекомендується.

### Дивіться також

- [oci_bind_by_name()](function.oci-bind-by-name.md) - Прикріплює
змінну PHP до відповідної мітки у SQL-вираженні
