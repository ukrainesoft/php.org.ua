- [« cubrid_get_db_parameter](function.cubrid-get-db-parameter.md)
- [cubrid_get_server_info »](function.cubrid-get-server-info.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Отримує значення часу очікування запиту

#cubrid_get_query_timeout

(PECL CUBRID u003d 8.4.1)

cubrid_get_query_timeout — Отримує значення часу очікування запиту

### Опис

**cubrid_get_query_timeout**(resource `$req_identifier`): int

Функція **cubrid_get_query_timeout()** використовується для отримання
часу очікування запиту.

### Список параметрів

`req_identifier`
Ідентифікатор запиту.

### Значення, що повертаються

Повертає значення часу очікування поточного запиту в мілісекундах
у разі успішного виконання або **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_get_query_timeout()****

` <?php$host u003d "localhost";$port u003d 33000;$db u003d "demodb";$conn u003dcubrid_connect_with_url("CUBRID:$host:$port:$db:::?login_timeoutu003d50000&query_timeoutu003d5 ");$req u003d cubrid_prepare($conn, "SELECT * FROM code");$timeout u003d cubrid_get_query_timeout($req);var_dump($timeout);cubrid_set_query_timeout($req, $0 ;var_dump($timeout);cubrid_close($conn);?> `

Результат виконання цього прикладу:

int(5000)
int(1000)

### Дивіться також

- [cubrid_set_query_timeout()](function.cubrid-set-query-timeout.md) -
Встановлює час очікування на виконання запиту
