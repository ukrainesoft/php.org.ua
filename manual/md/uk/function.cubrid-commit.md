- [«cubrid_column_types](function.cubrid-column-types.md)
- [cubrid_connect_with_url »](function.cubrid-connect-with-url.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Підтвердження транзакції

#cubrid_commit

(PECL CUBRID u003d 8.3.0)

cubrid_commit — Підтвердження транзакції

### Опис

**cubrid_commit**(resource `$conn_identifier`): bool

Функція **cubrid_commit()** використовується для підтвердження змін,
проведених у транзакції у сполученні `conn_identifier`, Після виклику
функції **cubrid_commit()**, з'єднання з сервером буде закрито, але
обробник з'єднання все ще буде коректним.

У CUBRID PHP, режим автокоміту для транзакцій за замовчуванням вимкнено.
Ви можете дозволити або заборонити його за допомогою функції
[cubrid_set_autocommit()](function.cubrid-set-autocommit.md). Дізнатись
поточний статус можна функцією
[cubrid_get_autocommit()](function.cubrid-get-autocommit.md). Перед
тим як розпочати транзакцію, переконайтеся, що автокоміт заборонено.

### Список параметрів

`conn_identifier`
Ідентифікатор з'єднання.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_commit()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb", "dba");@cubrid_execute($conn, "DROP TABLE publishers");$sql u003d <<<EODCREATE TA 3), pub_name VARCHAR (20), city VARCHAR (15), state CHAR (2), country VARCHAR (15)) EOD; cubrid_set_autocommit ($ conn, false); printf("Error facility: %d
Error code: %d
Error msg: %s
", Cubrid_error_code_facility(), Cubrid_error_code(), Cubrid_error_msg()); Cubrid_disconnect($conn);   exit;}$req u003d cubrid_prepare($,,? ;$id_list u003d array("P01", "P02", "P03", "P04");$name_list u003d array("Abatis Publishers", Core Dump Books", "Schadenfreude Pres| $city_list u003d array("New York", "San Francisco", "Hamburg", "Berkeley");$state_list u003d array("NY", "CA", NULL, "CA");$country_list u003d USA", "USA", "Germany", "USA");for ($i u003d 0,$size u003d count($id_list); $i < $size; $i++) {    cubrid_bind($req, $ id_list[$i]);   cubrid_bind($req, 2, $name_list[$i]);   cubrid_bind($req, 3, $city_list[$i]);    cubrid_bind($| );   cubrid_bind($req, 5, $country_list[$i]);   if (!($ret u003d cubrid_execute($req))) {      ??? else {    cubrid_commit($conn);    $req u003d cubrid_execute($conn, "SELECT * FROM publishers");    while ($result u003d chbrid ssoc($req)) {         printf("%-3s %-20s %-15s %-3s %-15s
",             $result["pub_id"], $result["pub_name"], $result["city"], $result["state"], $result["country"]);    }}$ ;?> `

Результат виконання цього прикладу:

P01 Abatis Publishers New York NY USA
P02 Core Dump Books San Francisco CA USA
P03 Schadenfreude Press Hamburg Німеччина
P04 Tenterhooks Press Berkeley CA USA

### Дивіться також

- [cubrid_rollback()](function.cubrid-rollback.md) - Відкат
транзакції
- [cubrid_get_autocommit()](function.cubrid-get-autocommit.md) -
Повертає налаштування авто-комміту для з'єднання
- [cubrid_set_autocommit()](function.cubrid-set-autocommit.md) -
Встановлює режим авто-комміту для з'єднання
