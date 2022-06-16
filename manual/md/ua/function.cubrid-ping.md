- [«cubrid_num_fields](function.cubrid-num-fields.md)
- [cubrid_query »](function.cubrid-query.md)

- [PHP Manual](index.md)
- [Функції сумісності CUBRID MySQL](cubridmysql.cubrid.md)
- Перевіряє, чи живе з'єднання до сервера і перепідключає його, якщо
ні

# cubrid_ping

(PECL CUBRID u003d 8.3.1)

cubrid_ping — Перевіряє, чи живе з'єднання до сервера та перепідключає
його, якщо ні

### Опис

**cubrid_ping**(resource `$conn_identifier` u003d ?): bool

Перевіряє, чи живе з'єднання з сервером.

### Список параметрів

`conn_identifier`
Ідентифікатор з'єднання. Якщо не задано, то буде використано
останнє відкрите за допомогою
[cubrid_connect()](function.cubrid-connect.md) з'єднання.

### Значення, що повертаються

Повертає **`true`**, якщо з'єднання працює, інакше **`false`**.

### Приклади

**Приклад #1 Приклад використання **cubrid_ping()****

` <?phpset_time_limit (0); ($sql);if (!$result) {    echo 'Запит #1 завершився з помилкою, виходимо.'; exit;}/* Перевіряємо, живо або ще з'єднання і перетворюємо його, якщо ні */if (!cubrid_ping($conn)) {    echo 'Втрачене з'єднання, exit;} cubrid_free_result($result);/* Так так, з'єднання працює. Тоді ще один запит! */$sql2 u003d "select * from code";$result2 u003d cubrid_query($sql2);?> `
