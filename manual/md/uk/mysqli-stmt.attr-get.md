- [« mysqli_stmt::$affected_rows](mysqli-stmt.affected-rows.md)
- [mysqli_stmt::attr_set »](mysqli-stmt.attr-set.md)

- [PHP Manual](index.md)
- [mysqli_stmt](class.mysqli-stmt.md)
- Отримує поточне значення атрибуту запиту

# mysqli_stmt::attr_get

# mysqli_stmt_attr_get

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::attr_get -- mysqli_stmt_attr_get -- Отримує поточне
значення атрибута запиту

### Опис

Об'єктно-орієнтований стиль

public **mysqli_stmt::attr_get**(int `$attribute`): int

Процедурний стиль

**mysqli_stmt_attr_get**([mysqli_stmt](class.mysqli-stmt.md)
`$statement`, int `$attribute`): int

Використовується для отримання поточного атрибуту запиту.

### Список параметрів

`stmt`
Тільки для процедурного стилю: об'єкт
[mysqli_stmt](class.mysqli-stmt.md), отриманий за допомогою
[mysqli_stmt_init()](mysqli.stmt-init.md).

`attribute`
Атрибут, який потрібно отримати.

### Значення, що повертаються

Повертає значення атрибута.
