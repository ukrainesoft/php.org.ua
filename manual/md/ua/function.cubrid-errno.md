- [«cubrid_db_name](function.cubrid-db-name.md)
- [cubrid_error »] (function.cubrid-error.md)

- [PHP Manual](index.md)
- [Функції сумісності CUBRID MySQL](cubridmysql.cubrid.md)
- Повертає код помилки попередньої операції CUBRID

#cubrid_errno

(PECL CUBRID u003d 8.3.1)

cubrid_errno - Повертає код помилки попередньої операції CUBRID

### Опис

**cubrid_errno**(resource `$conn_identifier` u003d ?): int

Повертає код помилки попередньої операції CUBRID.

Функція **cubrid_errno()** використовується для отримання коду події
помилки. Зазвичай ви можете отримати код помилки, якщо будь-яка функція
повернула "false".

### Список параметрів

`conn_identifier`
Ідентифікатор з'єднання. Якщо не задано, то буде використано
останнє відкрите за допомогою
[cubrid_connect()](function.cubrid-connect.md) з'єднання.

### Значення, що повертаються

Код помилки, що виникла, або `0` (нуль), якщо помилки не було.

### Приклади

**Приклад #1 Приклад використання **cubrid_errno()****

` <?php$con u003d cubrid_connect('localhost', 33000, 'demodb', 'dba', '');$req u003d cubrid_execute($con, "select id, name from person");if {   while (list ($id, $name) u003d cubrid_fetch($req))   echo $id, $name;} else {    echo "Код помилки: ","; echo "Текст помилки: ", cubrid_error($con);}?> `

Результат виконання цього прикладу:

Код помилки: -493 Текст помилки: Syntax: Unknown class "person". select id, [name] from person

### Дивіться також

- [cubrid_error()](function.cubrid-error.md) - Повертає текст
останньої помилки, що відбулася
- [cubrid_error_code()](function.cubrid-error-code.md) - Отримати
код помилки
- [cubrid_error_msg()](function.cubrid-error-msg.md) - Повертає
текст останньої помилки, що відбулася
