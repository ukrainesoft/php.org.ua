- [«cubrid_put](function.cubrid-put.md)
- [cubrid_schema »](function.cubrid-schema.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Відкат транзакції

#cubrid_rollback

(PECL CUBRID u003d 8.3.0)

cubrid_rollback - Відкат транзакції

### Опис

**cubrid_rollback**(resource `$conn_identifier`): bool

Функція **cubrid_rollback()** виконує відкат транзакції, яку
вказує `conn_identifier`, яка зараз виконується.

З'єднання із сервером закривається після виклику **cubrid_rollback()**.
Однак дескриптор з'єднання все ще дійсний.

### Список параметрів

`conn_identifier`
Connection identifier.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_rollback()****

` <?php$conn u003d cubrid_connect("127.0.0.1", 33000, "demodb", "dba");cubrid_set_autocommit($conn,false);@cubrid_execute($conn, "DROP TABLE <<<EODCREATE TABLE publishers(pub_id CHAR(3),pub_name VARCHAR(20),city VARCHAR(15),state CHAR(2),country VARCHAR(15))EOD;if (!cubrid_execute$ ) {    printf("Помилка об'єкта: %d
Код помилки: %d
Повідомлення про помилки: %s
", Cubrid_error_code_facility(), Cubrid_error_code(), Cubrid_error_msg()); Cubrid_disconnect($conn);   exit;}$req u003d cubrid_prepare($,,? ;$id_list u003d array("P01", "P02", "P03", "P04");$name_list u003d array("Abatis Publishers", Core Dump Books", "Schadenfreude Pres| $city_list u003d array("New York", "San Francisco", "Hamburg", "Berkeley");$state_list u003d array("NY", "CA", NULL, "CA");$country_list u003d USA", "USA", "Germany", "USA");for ($i u003d 0,$size u003d count($id_list); $i < $size; $i++) {    cubrid_bind($req, $ id_list[$i]);   cubrid_bind($req, 2, $name_list[$i]);   cubrid_bind($req, 3, $city_list[$i]);    cubrid_bind($| );   cubrid_bind($req, 5, $country_list[$i]);   if (!($ret u003d cubrid_execute($req))) {      ??? else {    cubrid_commit($conn);    $req u003d cubrid_execute($conn, "SELECT * FROM publishers");    while ($result u003d chbrid ssoc($req)) {         printf("%-3s %-20s %-15s %-3s %-15s
",             $result["pub_id"], $result["pub_name"], $result["city"], $result["state"], $result["country"]);    }}$ ;?> `

Результат виконання цього прикладу:

P01 Abatis Publishers New York NY USA
P02 Core Dump Books San Francisco CA USA
P03 Schadenfreude Press Hamburg Німеччина
P04 Tenterhooks Press Berkeley CA USA

### Дивіться також

- [cubrid_commit()](function.cubrid-commit.md) - Підтвердження
транзакції
- [cubrid_disconnect()](function.cubrid-disconnect.md) - Закриває
з'єднання з базою даних
