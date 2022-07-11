- [«cubrid_drop](function.cubrid-drop.md)
- [cubrid_error_code »](function.cubrid-error-code.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Отримати код рівня, на якому сталася помилка

#cubrid_error_code_facility

(PECL CUBRID u003d 8.3.0)

cubrid_error_code_facility — Отримати код рівня, на якому відбулася
помилка

### Опис

**cubrid_error_code_facility**(): int

Функція **cubrid_error_code_facility()** використовується для виявлення, на
на якому рівні сталася помилка. Зазвичай ви можете отримати код помилки,
якщо якась функція повернула **`false`**.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Коди рівнів: **`CUBRID_FACILITY_DBMS`**, **`CUBRID_FACILITY_CAS`**,
**`CUBRID_FACILITY_CCI`**, **`CUBRID_FACILITY_CLIENT`**.

### Приклади

**Приклад #1 Приклад використання **cubrid_error_code_facility()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb");$req u003d @cubrid_execute($conn, "SELECT * FROM unknown");if (!$req)   %d
Error code: %d
Error msg: %s
",   cubrid_error_code_facility(), cubrid_error_code(), cubrid_error_msg());   cubrid_disconnect($conn);    exit;}?> `

Результат виконання цього прикладу:

Error facility: 1
Error code: -493
Error msg: Syntax: In line 1, column 15 before END OF STATEMENT
Syntax error: unexpected 'unknown'

### Дивіться також

- [cubrid_error_code()](function.cubrid-error-code.md) - Отримати
код помилки
- [cubrid_error_msg()](function.cubrid-error-msg.md) - Повертає
текст останньої помилки, що відбулася
