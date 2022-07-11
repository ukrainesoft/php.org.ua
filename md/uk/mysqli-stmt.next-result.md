- [« mysqli_stmt::more_results](mysqli-stmt.more-results.md)
- [mysqli_stmt::$num_rows »](mysqli-stmt.num-rows.md)

- [PHP Manual](index.md)
- [mysqli_stmt](class.mysqli-stmt.md)
- Читає наступний набір рядків із мультизапиту

# mysqli_stmt::next_result

# mysqli_stmt_next_result

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

mysqli_stmt::next_result -- mysqli_stmt_next_result — Читає наступний
набір рядків із мультизапиту

### Опис

Об'єктно-орієнтований стиль

public **mysqli_stmt::next_result**(): bool

Процедурний стиль:

**mysqli_stmt_next_result**([mysqli_stmt](class.mysqli-stmt.md)
`$statement`): bool

Читає наступний набір рядків із мультизапиту.

> **Примітка**:
>
> До PHP 8.1.0, функція доступна лише з [mysqlnd](book.mysqlnd.md).

### Список параметрів

`stmt`
Тільки для процедурного стилю: об'єкт
[mysqli_stmt](class.mysqli-stmt.md), отриманий за допомогою
[mysqli_stmt_init()](mysqli.stmt-init.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ------------|
| 8.1.0 | Тепер також доступно при збиранні з libmysqlclient. |

### Дивіться також

- [mysqli_stmt::more_results()](mysqli-stmt.more-results.md) -
Перевіряє, чи є ще набори рядків через мультизапит.
- [mysqli::multi_query()](mysqli.multi-query.md) - Виконує один
або кілька запитів до бази даних
