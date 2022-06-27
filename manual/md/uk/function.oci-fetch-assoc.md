- [«oci_fetch_array](function.oci-fetch-array.md)
- [oci_fetch_object »](function.oci-fetch-object.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Повертає наступний рядок із результату запиту у вигляді
асоціативного масиву

#oci_fetch_assoc

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_fetch_assoc — Повертає наступний рядок з результату запиту
вигляді асоціативного масиву

### Опис

**oci_fetch_assoc**(resource `$statement`): array\|false

Повертає асоціативний масив, що містить наступний рядок з
результату виконання запиту. Кожен елемент масиву відповідає
стовпцю поточного рядка. Ця функція зазвичай викликається в циклі, доки
повертає **`false`**, якщо більше немає рядків.

Результат виконання **oci_fetch_assoc()** ідентичний до виконання
[oci_fetch_array()](function.oci-fetch-array.md) з прапором
**`OCI_ASSOC`** + **`OCI_RETURN_NULLS`**.

### Список параметрів

`statement`
Коректний ідентифікатор виразу OCI8, отриманий з
[oci_parse()](function.oci-parse.md) та виконаний функцією
[oci_execute()](function.oci-execute.md), або ідентифікатор виразу
`REF CURSOR`.

### Значення, що повертаються

Повертає асоціативний масив. Якщо в результаті запиту рядків більше
ні, повертає **`false`**.

### Приклади

**Приклад #1 Приклад використання **oci_fetch_assoc()****

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {    $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$stid u003d oci_parse($conn, 'SELECT department_id, department_name FROM departments');oci_execu ($stid)) !u003d false) {    echo $row['DEPARTMENT_ID'] . " " . $row['DEPARTMENT_NAME'] . "<br>
";}oci_free_statement($stid);oci_close($conn);?> `

### Примітки

> **Примітка**:
>
> Дивіться додаткові приклади отримання рядків
> [oci_fetch_array()](function.oci-fetch-array.md).

### Дивіться також

- [oci_fetch()](function.oci-fetch.md) - Вибирає наступний рядок
з результату в буфер
- [oci_fetch_all()](function.oci-fetch-all.md) - Вибирає всі рядки
з результату запиту до двомірного масиву
- [oci_fetch_array()](function.oci-fetch-array.md) - Повертає
наступний рядок з результату запиту у вигляді асоціативного або
нумерованого масиву
- [oci_fetch_object()](function.oci-fetch-object.md) - Повертає
наступний рядок із результату запиту у вигляді об'єкта
- [oci_fetch_row()](function.oci-fetch-row.md) - Повертає
наступний рядок з результату запиту у вигляді нумерованого масиву
