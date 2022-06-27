- [«cubrid_error_code](function.cubrid-error-code.md)
- [cubrid_execute »](function.cubrid-execute.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Повертає текст останньої помилки, що відбулася.

#cubrid_error_msg

(PECL CUBRID u003d 8.3.0)

cubrid_error_msg — Повертає текст останньої помилки, що сталася

### Опис

**cubrid_error_msg**(): string

Функція **cubrid_error_msg()** використовується для отримання тексту
помилки, що відбулася. Зазвичай ви можете отримати текст помилки, якщо
якась функція повернула **`false`**.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Текст помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_error_msg()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb");if (!@cubrid_schema($conn, 100000)) {    printf("Error facility: %d
Error code: %d
Error msg: %s
",   cubrid_error_code_facility(), cubrid_error_code(), cubrid_error_msg());   cubrid_disconnect($conn);    exit;}?> `

Результат виконання цього прикладу:

Error facility: 2
Error code: -10015
Error msg: Invalid T_CCI_SCH_TYPE value

### Дивіться також

- [cubrid_error_code()](function.cubrid-error-code.md) - Отримати
код помилки
- [cubrid_error_code_facility()](function.cubrid-error-code-facility.md) -
Отримати код рівня, на якому сталася помилка
