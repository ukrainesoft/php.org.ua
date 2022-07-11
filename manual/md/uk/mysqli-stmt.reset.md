- [« mysqli_stmt::prepare](mysqli-stmt.prepare.md)
- [mysqli_stmt::result_metadata »](mysqli-stmt.result-metadata.md)

- [PHP Manual](index.md)
- [mysqli_stmt](class.mysqli-stmt.md)
- скидає результати виконання підготовленого запиту

# mysqli_stmt::reset

# mysqli_stmt_reset

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::reset -- mysqli_stmt_reset -- Скидає результати
виконання підготовленого запиту

### Опис

Об'єктно-орієнтований стиль

public **mysqli_stmt::reset**(): bool

Процедурний стиль

**mysqli_stmt_reset**([mysqli_stmt](class.mysqli-stmt.md)
`$statement`): bool

Скидає результати виконання підготовленого запиту на клієнта та на
сервер і переводить запит у стан, як після підготовки.

Скидає запит на сервер, а також дані, передані на сервер
функцією
[mysqli_stmt_send_long_data()](mysqli-stmt.send-long-data.md), очищає
буфер результатів запиту та поточні помилки. Функція не видаляє прив'язки
параметрів запиту, а також надані на клієнта результуючі набори.
Результуючі набори, що містяться на клієнті, будуть очищені при
наступному виконанні запиту (або його закритті).

Для підготовки запиту з іншим текстом SQL, використовуйте функцію
[mysqli_stmt_prepare()](mysqli-stmt.prepare.md).

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
