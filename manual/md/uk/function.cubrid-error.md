- [«cubrid_errno](function.cubrid-errno.md)
- [cubrid_fetch_array »](function.cubrid-fetch-array.md)

- [PHP Manual](index.md)
- [Функції сумісності CUBRID MySQL](cubridmysql.cubrid.md)
- Повертає текст останньої помилки, що відбулася.

#cubrid_error

(PECL CUBRID u003d 8.3.1)

cubrid_error — Повертає текст останньої помилки, що відбулася.

### Опис

**cubrid_error**(resource `$connection` u003d ?): string

Функція **cubrid_error()** використовується для отримання тексту
помилки, що відбулася. Зазвичай ви можете отримати текст помилки, якщо
якась функція повернула **`false`**.

### Список параметрів

`connection`
Ідентифікатор з'єднання.

### Значення, що повертаються

Текст помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_error()****

` <?php$con u003d cubrid_connect('localhost', 33000, 'demodb', 'dba', '');$req u003d cubrid_execute($con, "select id, name from person");if {   while (list ($id, $name) u003d cubrid_fetch($req))   echo $id, $name;} else {    echo "Код помилки: ","; echo "Текст помилки: ", cubrid_error($con);}?> `

Результат виконання цього прикладу:

Код помилки: -493 Текст помилки: Syntax: Unknown class "person". select id, [name] from person

### Дивіться також

- [cubrid_errno()](function.cubrid-errno.md) - Повертає код помилки
попередньої операції CUBRID
- [cubrid_error_code()](function.cubrid-error-code.md) - Отримати
код помилки
- [cubrid_error_msg()](function.cubrid-error-msg.md) - Повертає
текст останньої помилки, що відбулася
