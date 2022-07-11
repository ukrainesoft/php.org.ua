- [«cubrid_get_autocommit](function.cubrid-get-autocommit.md)
- [cubrid_get_class_name »](function.cubrid-get-class-name.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Повертає кодування поточного з'єднання CUBRID

#cubrid_get_charset

(PECL CUBRID u003d 8.3.0)

cubrid_get_charset — Повертає кодування поточного з'єднання CUBRID

### Опис

**cubrid_get_charset**(resource `$conn_identifier`): string

Ця функція повертає кодування поточного з'єднання CUBRID та аналогічна
функції сумісності CUBRID MySQL
[cubrid_client_encoding()](function.cubrid-client-encoding.md).

### Список параметрів

`conn_identifier`
Ідентифікатор з'єднання.

### Значення, що повертаються

Рядок, що містить кодування поточного з'єднання CUBRID у випадку
успішного виконання або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_get_charset()****

` <?php$con u003d cubrid_connect("localhost", 33000, "demodb");if (!$con){    die('Could not connect.');}printf("CUBRID current charset: %s
", cubrid_get_charset($con));?> `

Результат виконання цього прикладу:

CUBRID current charset: iso8859-1

### Дивіться також

- [cubrid_client_encoding()](function.cubrid-client-encoding.md) -
Повертає кодування поточного з'єднання CUBRID
