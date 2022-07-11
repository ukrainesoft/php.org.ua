- [« ibase_add_user](function.ibase-add-user.md)
- [ibase_backup »](function.ibase-backup.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Повертає кількість рядків, на які вплинув попередній запит

# ibase_affected_rows

(PHP 5, PHP 7 \< 7.4.0)

ibase_affected_rows — Повертає кількість рядків, на які вплинув
попередній запит

### Опис

**ibase_affected_rows**(resource `$link_identifier` u003d ?): int

Ця функція повертає кількість рядків, на які вплинув попередній
запит (INSERT, UPDATE або DELETE), який був виконаний із зазначеного
контексту транзакції

### Список параметрів

`link_identifier`
Контекст транзакції. Якщо `link_identifier` є ресурсом
з'єднання, використовується його транзакція за замовчуванням.

### Значення, що повертаються

Повертає кількість рядків як цілого числа.

### Дивіться також

- [ibase_query()](function.ibase-query.md) - Виконує запит до бази
даних InterBase
- [ibase_execute()](function.ibase-execute.md) - Виконує
попередньо підготовлений запит
