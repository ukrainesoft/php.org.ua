- [« mysqli_stmt::close](mysqli-stmt.close.md)
- [mysqli_stmt::data_seek »](mysqli-stmt.data-seek.md)

- [PHP Manual](index.md)
- [mysqli_stmt](class.mysqli-stmt.md)
- Конструктор для об'єкту mysqli_stmt

# mysqli_stmt::\_\_construct

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::\_\_construct — Конструктор для об'єкту
[mysqli_stmt](class.mysqli-stmt.md)

### Опис

public **mysqli_stmt::\_\_construct**([mysqli](class.mysqli.md)
`$mysql`, ?string `$query` u003d **`null`**)

Цей метод створює новий об'єкт класу
[mysqli_stmt](class.mysqli-stmt.md).

### Список параметрів

`link`
Коректний об'єкт [mysqli](class.mysqli.md).

`query`
Рядок, що містить SQL-запит. Якщо цей параметр **`null`**, то
результат буде аналогічний виклику
[mysqli_stmt_init()](mysqli.stmt-init.md), інакше
результат буде аналогічний виклику
[mysqli_prepare()](mysqli.prepare.md).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -|
| 8.0.0 | `query` тепер припускає значення null. |

### Дивіться також

- [mysqli_prepare()](mysqli.prepare.md) - Підготовляє SQL
вираз до виконання
- [mysqli_stmt_init()](mysqli.stmt-init.md) - Ініціалізує запит
та повертає об'єкт для використання в mysqli_stmt_prepare
