- [«oci_fetch_object](function.oci-fetch-object.md)
- [oci_fetch »](function.oci-fetch.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Повертає наступний рядок із результату запиту у вигляді
нумерованого масиву

#oci_fetch_row

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_fetch_row — Повертає наступний рядок із результату запиту у вигляді
нумерованого масиву

### Опис

**oci_fetch_row**(resource `$statement`): array\|false

Повертає нумерований масив, що містить наступний рядок
результату запиту. Кожен масив відповідає стовпцю рядка. Ця
функція зазвичай викликається в циклі доки не повертає **`false`**, якщо в
в результаті запиту більше немає рядків.

Виклик **oci_fetch_row()** аналогічний до виклику
[oci_fetch_array()](function.oci-fetch-array.md) з прапором
**`OCI_NUM`** + **`OCI_RETURN_NULLS`**.

### Список параметрів

`statement`
Коректний ідентифікатор виразу OCI8, отриманий з
[oci_parse()](function.oci-parse.md) та виконаний функцією
[oci_execute()](function.oci-execute.md), або ідентифікатор виразу
`REF CURSOR`.

### Значення, що повертаються

Повертає нумерований масив. Якщо в `statement` більше немає терміну
повертає **`false`**.

### Приклади

**Приклад #1 Приклад використання **oci_fetch_row()****

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {    $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$stid u003d oci_parse($conn, 'SELECT department_id, department_name FROM departments');oci_execu ($stid)) !u003d false) {    echo $row[0] . " " . $row[1] . "<br>
";}oci_free_statement($stid);oci_close($conn);?> `

### Примітки

> **Примітка**:
>
> Дивіться [oci_fetch_array()](function.oci-fetch-array.md) для
> Додаткові приклади результатів запитів.

### Дивіться також

- [oci_fetch()](function.oci-fetch.md) - Вибирає наступний рядок
з результату в буфер
- [oci_fetch_all()](function.oci-fetch-all.md) - Вибирає всі рядки
з результату запиту до двомірного масиву
- [oci_fetch_array()](function.oci-fetch-array.md) - Повертає
наступний рядок з результату запиту у вигляді асоціативного або
нумерованого масиву
- [oci_fetch_assoc()](function.oci-fetch-assoc.md) - Повертає
наступний рядок з результату запиту у вигляді асоціативного масиву
- [oci_fetch_object()](function.oci-fetch-object.md) - Повертає
наступний рядок із результату запиту у вигляді об'єкта
