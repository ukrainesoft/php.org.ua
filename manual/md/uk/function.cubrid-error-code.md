- [«
cubrid_error_code_facility](function.cubrid-error-code-facility.md)
- [cubrid_error_msg »](function.cubrid-error-msg.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Отримати код помилки

#cubrid_error_code

(PECL CUBRID u003d 8.3.0)

cubrid_error_code — Отримати код помилки

### Опис

**cubrid_error_code**(): int

Функція **cubrid_error_code()** використовується для отримання коду
помилки, що відбулася. Зазвичай ви можете отримати код помилки, якщо
якась функція повернула **`false`**.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Код помилки, що виникла, або `0` (нуль), якщо помилки не було.

### Приклади

**Приклад #1 Приклад використання **cubrid_error_code()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb");$req u003d cubrid_prepare($conn , "SELECT * FROM code WHERE s_nameu003d?");$; if (!$req) {    printf("Error facility: %d
Error code: %d
Error msg: %s
",   cubrid_error_code_facility(), cubrid_error_code(), cubrid_error_msg());   cubrid_disconnect($conn);    exit;}?> `

Результат виконання цього прикладу:

Error facility: 4
Error code: -30015
Error msg: Один parameter not binded

### Дивіться також

- [cubrid_error_code_facility()](function.cubrid-error-code-facility.md) -
Отримати код рівня, на якому сталася помилка
- [cubrid_error_msg()](function.cubrid-error-msg.md) - Повертає
текст останньої помилки, що відбулася
