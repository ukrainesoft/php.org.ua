- [«oci_new_connect](function.oci-new-connect.md)
- [oci_new_descriptor »](function.oci-new-descriptor.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Повертає ідентифікатор створеного курсору

#oci_new_cursor

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_new_cursor - Повертає ідентифікатор створеного курсору

### Опис

**oci_new_cursor**(resource `$connection`): resource\|false

Створює новий курсор для зазначеного з'єднання та повертає його
ідентифікатор.

### Список параметрів

`connection`
Ідентифікатор з'єднання з сервером Oracle, що повертається функцією
[oci_connect()](function.oci-connect.md) або
[oci_pconnect()](function.oci-pconnect.md).

### Значення, що повертаються

Повертає покажчик на новий вираз або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Прив'язка REF CURSOR у виклику процедур Oracle, що зберігаються**

` <?php// Предварительная подготовка://   создайте или замените процедуру myproc(myrc out sys_refcursor) как//   begin//     open myrc for select first_name from employees;//   end;$conn u003d oci_connect("hr", "hrpwd ", "localhost/XE");if (!$conn) {    $m u003d oci_error(); trigger_error(htmlentities($m['message']), E_USER_ERROR);}$curs u003d oci_new_cursor($conn); stid, ":cursbv", $curs, -1, OCI_B_CURSOR);oci_execute($stid);oci_execute($curs); // Виконує REF CURSOR як звичайний ідентифікатор вираженняwhile (($row u003d oci_fetch_array($curs, OCI_ASSOC+OCI_RETURN_NULLS)) !u003d false) {    "<br />
";}oci_free_statement($stid);oci_free_statement($curs);oci_close($conn);?> `

### Примітки

> **Примітка**:
>
> У версіях PHP нижче 5.0.0 ця функція називалася
> [ocinewcursor()](function.ocinewcursor.md). У PHP 5.0.0 і вище
> [ocinewcursor()](function.ocinewcursor.md) є аліасом
> **oci_new_cursor()**, тому ви можете продовжувати використовувати це
> ім'я, але це не рекомендується.
