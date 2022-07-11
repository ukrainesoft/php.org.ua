- [« mysqli::stat](mysqli.stat.md)
- [mysqli::store_result »](mysqli.store-result.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Ініціалізує запит та повертає об'єкт для використання у
mysqli_stmt_prepare

# mysqli::stmt_init

# mysqli_stmt_init

(PHP 5, PHP 7, PHP 8)

mysqli::stmt_init -- mysqli_stmt_init — Ініціалізує запит і
повертає об'єкт для використання в mysqli_stmt_prepare

### Опис

Об'єктно-орієнтований стиль

public **mysqli::stmt_init**():
[mysqli_stmt](class.mysqli-stmt.md)\|false

Процедурний стиль

**mysqli_stmt_init**([mysqli](class.mysqli.md) `$mysql`):
[mysqli_stmt](class.mysqli-stmt.md)\|false

Виділяє пам'ять та ініціалізує об'єкт запиту, який можна
використовувати у функції
[mysqli_stmt_prepare()](mysqli-stmt.prepare.md).

> **Примітка**:
>
> Всі наступні дзвінки mysqli_stmt функцій викликають помилку, доки
> буде викликано функцію
> [mysqli_stmt_prepare()](mysqli-stmt.prepare.md).

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

### Значення, що повертаються

Повертає об'єкт.

### Дивіться також

- [mysqli_stmt_prepare()](mysqli-stmt.prepare.md) - Підготовка
затвердження SQL до виконання
