- [« mysqli_stmt::$field_count](mysqli-stmt.field-count.md)
- [mysqli_stmt::get_result »](mysqli-stmt.get-result.md)

- [PHP Manual](index.md)
- [mysqli_stmt](class.mysqli-stmt.md)
- Звільняє пам'ять від результату запиту, вказаного дескриптором

# mysqli_stmt::free_result

# mysqli_stmt_free_result

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::free_result -- mysqli_stmt_free_result -- Звільняє пам'ять
від результату запиту, вказаного дескриптором

### Опис

Об'єктно-орієнтований стиль

public **mysqli_stmt::free_result**(): void

Процедурний стиль

**mysqli_stmt_free_result**([mysqli_stmt](class.mysqli-stmt.md)
`$statement`): void

Звільняє від результату запиту пам'ять, яка була зарезервована з
за допомогою [mysqli_stmt_store_result()](mysqli-stmt.store-result.md).

### Список параметрів

`stmt`
Тільки для процедурного стилю: об'єкт
[mysqli_stmt](class.mysqli-stmt.md), отриманий за допомогою
[mysqli_stmt_init()](mysqli.stmt-init.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [mysqli_stmt_store_result()](mysqli-stmt.store-result.md) -
Зберігає набір результатів у внутрішньому буфері
