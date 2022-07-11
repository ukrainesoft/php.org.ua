- [« mysqli_result::field_seek](mysqli-result.field-seek.md)
- [mysqli_result::getIterator »](mysqli-result.getiterator.md)

- [PHP Manual](index.md)
- [mysqli_result](class.mysqli-result.md)
- звільняє пам'ять, зайняту результатами запиту

# mysqli_result::free

# mysqli_result::close

# mysqli_result::free_result

# mysqli_free_result

(PHP 5, PHP 7, PHP 8)

mysqli_result::free -- mysqli_result::close --
mysqli_result::free_result -- mysqli_free_result — Звільняє пам'ять,
зайняту результатами запиту

### Опис

Об'єктно-орієнтований стиль

public **mysqli_result::free**(): void

public **mysqli_result::close**(): void

public **mysqli_result::free_result**(): void

Процедурний стиль

**mysqli_free_result**([mysqli_result](class.mysqli-result.md)
`$result`): void

Визволяє пам'ять, зайняту результатами запиту.

### Список параметрів

`result`
Тільки для процедурного стилю: об'єкт
[mysqli_result](class.mysqli-result.md), отриманий за допомогою
[mysqli_query()](mysqli.query.md),
[mysqli_store_result()](mysqli.store-result.md),
[mysqli_use_result()](mysqli.use-result.md) або
[mysqli_stmt_get_result()](mysqli-stmt.get-result.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [mysqli_query()](mysqli.query.md) - Виконує запит до бази даних
- [mysqli_stmt_get_result()](mysqli-stmt.get-result.md) - Отримує
результат із підготовленого запиту як об'єкт mysqli_result
- [mysqli_store_result()](mysqli.store-result.md) - Передає на
клієнта результуючий набір останнього запиту
- [mysqli_use_result()](mysqli.use-result.md) - Готує
результуючий набір на сервері для використання
