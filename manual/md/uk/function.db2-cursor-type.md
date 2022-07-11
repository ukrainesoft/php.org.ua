- [«db2_connect](function.db2-connect.md)
- [db2_escape_string »](function.db2-escape-string.md)

- [PHP Manual](index.md)
- [Функції IBM DB2](ref.ibm-db2.md)
- Повертає тип курсору, який використовується у ресурсі оператора

#db2_cursor_type

(PECL ibm_db2 \>u003d 1.0.0)

db2_cursor_type — Повертає тип курсору, який використовується у ресурсі
оператора

### Опис

**db2_cursor_type**(resource `$stmt`): int

Повертає тип курсору, який використовується у ресурсі оператора.

### Список параметрів

`stmt`
Коректний ресурс оператора.

### Значення, що повертаються

Повертає або `DB2_FORWARD_ONLY`, або `DB2_SCROLLABLE`, залежно
від типу курсора, що використовується.

### Дивіться також

- [db2_prepare()](function.db2-prepare.md) - Підготовка
SQL-запит до виконання
