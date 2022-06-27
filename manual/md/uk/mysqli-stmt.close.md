- [« mysqli_stmt::bind_result](mysqli-stmt.bind-result.md)
- [mysqli_stmt::\_\_construct »](mysqli-stmt.construct.md)

- [PHP Manual](index.md)
- [mysqli_stmt](class.mysqli-stmt.md)
- Закриває підготовлений запит

# mysqli_stmt::close

# mysqli_stmt_close

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::close -- mysqli_stmt_close — Закриває підготовлений
запит

### Опис

Об'єктно-орієнтований стиль

public **mysqli_stmt::close**(): bool

Процедурний стиль

**mysqli_stmt_close**([mysqli_stmt](class.mysqli-stmt.md)
`$statement`): bool

Закриває запит. **mysqli_stmt_close()** також
звільняє дескриптор запиту. Якщо за поточним запитом отримано
результат, то ця функція очищає його для того, щоб міг бути виконаний
наступний запит.

### Список параметрів

`stmt`
Тільки для процедурного стилю: об'єкт
[mysqli_stmt](class.mysqli-stmt.md), отриманий за допомогою
[mysqli_stmt_init()](mysqli.stmt-init.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [mysqli_prepare()](mysqli.prepare.md) - Підготовляє SQL
вираз до виконання
