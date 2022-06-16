- [« mysqli_warning::\_\_construct](mysqli-warning.construct.md)
- [mysqli_sql_exception »](class.mysqli-sql-exception.md)

- [PHP Manual](index.md)
- [mysqli_warning](class.mysqli-warning.md)
- Отримує таке попередження

# mysqli_warning::next

(PHP 5, PHP 7, PHP 8)

mysqli_warning::next — Отримує таке попередження

### Опис

public **mysqli_warning::next**(): bool

Змінює інформацію про попередження на наступне попередження, якщо
це можливо.

Після того, як попередження було встановлено на наступне
попередження, будуть доступні нові значення властивостей `message`,
`sqlstate` та `errno` з [mysqli_warning](class.mysqli-warning.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо наступне попередження було отримано
успішно. Якщо більше немає попереджень, поверне **`false`**
