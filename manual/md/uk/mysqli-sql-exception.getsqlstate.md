- [« mysqli_sql_exception](class.mysqli-sql-exception.md)
- [Синоніми та застарілі функції Mysqli »](ref.mysqli.md)

- [PHP Manual](index.md)
- [mysqli_sql_exception](class.mysqli-sql-exception.md)
- Повертає код помилки SQLSTATE

# mysqli_sql_exception::getSqlState

(PHP 8 \>u003d 8.1.2)

mysqli_sql_exception::getSqlState — Повертає код помилки SQLSTATE

### Опис

public **mysqli_sql_exception::getSqlState**(): string

Повертає рядок, який містить код останньої помилки SQLSTATE. Код помилки
складається із п'яти символів. Значення задаються ANSI SQL та ODBC. перелік
можливих значень можна переглянути на сторінці
[»http://dev.mysql.com/doc/mysql/en/error-handling.md](http://dev.mysql.com/doc/mysql/en/error-handling.md).

> **Примітка**:
>
> Зверніть увагу, що не всі помилки MySQL ще зіставлені з
> SQLSTATE. Якщо помилка не зіставлена, використовується значення `HY000`
> (загальна помилка).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рядок, який містить код останньої помилки SQLSTATE. Код помилки
складається із п'яти символів.
