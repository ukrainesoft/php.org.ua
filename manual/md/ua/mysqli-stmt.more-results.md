- [« mysqli_stmt::$insert_id](mysqli-stmt.insert-id.md)
- [mysqli_stmt::next_result »](mysqli-stmt.next-result.md)

- [PHP Manual](index.md)
- [mysqli_stmt](class.mysqli-stmt.md)
- Перевіряє, чи є ще набори рядків через мультизапит

# mysqli_stmt::more_results

# mysqli_stmt_more_results

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

mysqli_stmt::more_results -- mysqli_stmt_more_results — Перевіряє, чи є
ще набори рядків в результаті мультизапиту

### Опис

Об'єктно-орієнтований стиль:

public **mysqli_stmt::more_results**(): bool

Процедурний стиль:

**mysqli_stmt_more_results**([mysqli_stmt](class.mysqli-stmt.md)
`$statement`): bool

Перевіряє, чи є ще набори рядків через мультизапит.

> **Примітка**:
>
> Доступно лише з модулем [mysqlnd](book.mysqlnd.md).

### Список параметрів

`stmt`
Тільки для процедурного стилю: об'єкт
[mysqli_stmt](class.mysqli-stmt.md), отриманий за допомогою
[mysqli_stmt_init()](mysqli.stmt-init.md).

### Значення, що повертаються

Повертає **`true`**, якщо ще є доступні результуючі набори,
**`false`** інакше.

### Дивіться також

- [mysqli_stmt::next_result()](mysqli-stmt.next-result.md) - Читає
наступний набір рядків із мультизапиту
- [mysqli::multi_query()](mysqli.multi-query.md) - Виконує один
або кілька запитів до бази даних
