- [«cubrid_affected_rows](function.cubrid-affected-rows.md)
- [cubrid_close »] (function.cubrid-close.md)

- [PHP Manual](index.md)
- [Функції сумісності CUBRID MySQL](cubridmysql.cubrid.md)
- Повертає кодування поточного з'єднання CUBRID

#cubrid_client_encoding

(PECL CUBRID u003d 8.3.1)

cubrid_client_encoding — Повертає кодування поточного з'єднання CUBRID

### Опис

**cubrid_client_encoding**(resource `$conn_identifier` u003d ?): string

Функція повертає кодування поточного з'єднання CUBRID та аналогічна
функції **cubrid_get_encoding()**.

### Список параметрів

`conn_identifier`
Ідентифікатор з'єднання. Якщо не задано, то буде використано
останнє відкрите за допомогою
[cubrid_connect()](function.cubrid-connect.md) з'єднання.

### Значення, що повертаються

Рядок, що містить кодування поточного з'єднання CUBRID у випадку
успішного виконання.

**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_client_encoding()****

` <?php$con u003d cubrid_connect("localhost", 33000, "demodb");if (!$con){    die('Не вийшло підключитися.');}printf("Поточне кодування CUBRID: 
", cubrid_client_encoding($con));?> `

Результат виконання цього прикладу:

Поточне кодування CUBRID: iso8859-1

### Дивіться також

- [cubrid_get_charset()](function.cubrid-get-charset.md) -
Повертає кодування поточного з'єднання CUBRID
