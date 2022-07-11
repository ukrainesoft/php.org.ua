- [«oci_num_rows](function.oci-num-rows.md)
- [oci_password_change »](function.oci-password-change.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- готує запит до виконання

#oci_parse

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_parse — Підготовка запиту до виконання

### Опис

**oci_parse**(resource `$connection`, string `$sql`): resource\|false

Підготовляє `sql` до виконання, використовуючи з'єднання `connection` і
повертає ідентифікатор виразу, який може бути використаний далі
функціями[oci_bind_by_name()](function.oci-bind-by-name.md),[oci_execute()](function.oci-execute.md)
та іншими.

Ідентифікатори виразів можуть бути звільнені функцією
[oci_free_statement()](function.oci-free-statement.md) або установкою
змінною в **`null`**.

### Список параметрів

`connection`
Ідентифікатор з'єднання Oracle, отриманий із функцій
[oci_connect()](function.oci-connect.md),
[oci_pconnect()](function.oci-pconnect.md) або
[oci_new_connect()](function.oci-new-connect.md).

`sql`
Запит SQL або PL/SQL.

SQL-запити *не повинні* закінчуватися крапкою з комою (";").
PL/SQL-запити *мають* закінчуватися точкою з комою (";").

### Значення, що повертаються

Повертає дескриптор виразу у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **oci_parse()** із SQL-запитами**

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');// Парсинг запиту. Зверніть увагу на відсутність точки комою в SQL-запиті $stid u003d oci_parse($conn, 'SELECT * FROM employees');oci_execute($stid);echo ''<table>
";while ($row u003d oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {   echo ""<tr>
";   foreach ($row as $item) {        echo "    <td>" . ($item !u003du003d null ? htmlentities($item, >| >)
";    }    echo "</tr>
";}echo "</table>
";?> `

**Приклад #2 Приклад використання **oci_parse()** з PL/SQL-запитами**

` <?php/*  Перед запуском PHP-скрипта, создайте хранимую процедуру в  SQL*Plus или SQL Developer:  CREATE OR REPLACE PROCEDURE myproc(p1 IN NUMBER, p2 OUT NUMBER) AS  BEGIN      p2 :u003d p1 * 2; END;*/$connu003du003doci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {   $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$p1 u003d 8; myproc(:p1, :p2); end;');oci_bind_by_name($stid, ':p1', $p1);oci_bind_by_name($stid, ':p2', $p2, 40);oci_execute($stid); print "$p2
";   // prints 16oci_free_statement($stid);oci_close($conn);?> `

### Примітки

> **Примітка**:
>
> Ця функція *не перевіряє* синтаксис запиту `sql`. Єдиний
> спосіб перевірити правильність SQL або PL/SQL-запиту `sql` - це
> Виконати його.

### Дивіться також

- [oci_execute()](function.oci-execute.md) - Виконує
підготовлений вираз
- [oci_free_statement()](function.oci-free-statement.md) -
Звільняє ресурси, які займає курсор або SQL-вираз.
