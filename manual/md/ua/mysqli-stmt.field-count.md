- [« mysqli_stmt::fetch](mysqli-stmt.fetch.md)
- [mysqli_stmt::free_result »](mysqli-stmt.free-result.md)

- [PHP Manual](index.md)
- [mysqli_stmt](class.mysqli-stmt.md)
- Повертає кількість стовпців у заданому вираженні

# mysqli_stmt::$field_count

# mysqli_stmt_field_count

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::$field_count -- mysqli_stmt_field_count — Повертає число
стовпців у заданому вираженні

### Опис

Об'єктно-орієнтований стиль

int `$mysqli_stmt->field_count`;

Процедурний стиль

**mysqli_stmt_field_count**([mysqli_stmt](class.mysqli-stmt.md)
`$statement`): int

Повертає кількість стовпців у підготовленому вираженні.

### Список параметрів

`stmt`
Тільки для процедурного стилю: об'єкт
[mysqli_stmt](class.mysqli-stmt.md), отриманий за допомогою
[mysqli_stmt_init()](mysqli.stmt-init.md).

### Значення, що повертаються

Повертає ціле число, що становить кількість стовпців.

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");$code u003d 'FR'; SELECT Name FROM Country WHERE Codeu003d?");$stmt->bind_param('s', $code);$stmt->execute();$row u003d $stmt->get_result()->fetch_row();for ($i u003d 0; $i < $stmt->field_count; $i++) {    printf("Значення номери стовпця %d - %s", $i, $row[$i]);} `

**Приклад #2 Процедурний стиль**

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d mysqli_connect("localhost", "my_user", "my_password", "world");$code u003d 'FR'$$ FROM Country WHERE Codeu003d?"); mysqli_stmt_bind_param($stmt, 's', $code); mysqli_stmt_execute($stmt); u003d 0; $i < mysqli_stmt_field_count($stmt); $i++) {    printf("Значення номеру стовпця %d - %s", $i, $row[$i]);} `

Результатом виконання даних прикладів буде щось подібне:

Значення номера стовпця 0 - France

### Дивіться також

- [mysqli_stmt_num_rows()](mysqli-stmt.num-rows.md) - Повертає
кількість рядків, отриманих із сервера
