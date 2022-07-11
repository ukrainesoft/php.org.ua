- [« Функції CUBRID](ref.cubrid.md)
- [cubrid_close_prepare »](function.cubrid-close-prepare.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- пов'язує змінні із підготовленим запитом

#cubrid_bind

(PECL CUBRID u003d 8.3.0)

cubrid_bind — Зв'язує змінні із підготовленим запитом

### Опис

**cubrid_bind**(
resource `$req_identifier`,
int `$bind_index`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$bind_value`,
string `$bind_value_type` u003d ?
): bool

Функція **cubrid_bind()** використовується для прив'язки до зазначених значень
міткам, або знакам питання, в SQL-запиті, заданому
[cubrid_prepare()](function.cubrid-prepare.md). Якщо не заданий параметр
`bind_value_type`, то буде використовуватись рядковий тип.

> **Примітка**:
>
> Якщо дані, що прив'язуються, мають тип BLOB/CLOB, CUBRID спробує
> використовувати їх як потоки PHP. Якщо фактичне прив'язується
> значення не є потоком, то CUBRID конвертує його в рядок і
> вважатиме повним шляхом до файлу, де ці дані лежать.
>
> Якщо тип даних, які будуть пов'язані явно є ENUM, параметр
> `bind_value` має бути елементом ENUM заданим у вигляді рядка.
>
> В оточенні сегмента CUBRID, `bind_value_type` повинен бути включений до
> функцію **cubrid_bind()**.

У наступній таблиці наведено типи замінних значень.

| Рівень підтримки Тип прив'язки Відповідний SQL тип |
|-------------------|-------------------|--------- ----------------|
| |підтримується | STRING | CHAR, VARCHAR |
| | NCHAR | NCHAR, NVARCHAR |
| | BIT | BIT, VARBIT |
| | NUMERIC або NUMBER | SHORT, INT, NUMERIC |
| | FLOAT | FLOAT |
| | DOUBLE | DOUBLE |
| | TIME | TIME |
| | DATE | DATE |
| | TIMESTAMP | TIMESTAMP |
| | OBJECT | OBJECT |
| | ENUM | ENUM |
| | BLOB | BLOB |
| | CLOB | CLOB |
| | NULL | NULL |
| Чи не підтримується | SET | SET |
| | MULTISET | MULTISET |
| | SEQUENCE | SEQUENCE |

**Прив'язка типів у CUBRID**

### Список параметрів

`req_identifier`
Ідентифікатор запиту, отриманий з
[cubrid_prepare()](function.cubrid-prepare.md).

`bind_index`
Розташування параметрів, що зв'язуються. Починаються з першої.

`bind_value`
Фактичне значення для прив'язування.

`bind_value_type`
Тип зв'язуваного значення. (За замовчуванням не встановлено. Таким чином, за
використовується тип STRING. Однак, ви повинні явно вказати тип
для значень NCHAR, BIT або BLOB/CLOB).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -----|
| 8.3.1 | Додано підтримку типів даних BLOB/CLOB. |

### Приклади

**Приклад #1 Приклад використання **cubrid_bind()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb", "dba");$result u003d cubrid_execute($conn, "SELECT code FROM event WHERE sportsu003d'| );$row u003d cubrid_fetch_array($result, CUBRID_ASSOC);$event_code u003d $row["code"];cubrid_close_request($result);$game_req u003d cubrid_prepare($conn, F9_ ?and nation_codeu003d'USA'");cubrid_bind($game_req, 1, $event_code, "number");cubrid_execute($game_req);printf("--- Dream Team s s s -
");while ($athlete_code u003d cubrid_fetch_array($game_req, CUBRID_NUM)) {    $athlete_req u003d cubrid_prepare($conn, "SELECT name FROM   | M'");   cubrid_bind($athlete_req, 1, $athlete_code[0], "number");    cubrid_execute($athlete_req);    $row u003d cubrid|
", $row["name"]);}cubrid_close_request($game_req);cubrid_close_request($athlete_req);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

--- Dream Team (1992 United States men's Olympic basketball team) ---
Stockton John
Robinson David
Pippen Scottie
Mullin C.
Malone Karl
Laettner C.
Jordan Michael
Johnson Earvin
Ewing Patrick
Drexler Clyde
Bird Larry
Barkley Charles

**Приклад #2 Приклад використання **cubrid_bind()** з BLOB/CLOB**

` <?php$con u003d cubrid_connect("localhost", 33000, "demodb", "dba", "");if ($con) {    cubrid_execute($con,"DROP TABLE if exists| cubrid_execute($con,"CREATE TABLE php_cubrid_lob_test (doc_content CLOB)"); $sql u003d "INSERT INTO php_cubrid_lob_test(doc_content) VALUES(?)"; $req u003d cubrid_prepare($con, $sql); $fpu003du003dfopen("book.txt","rb"); cubrid_bind($req, 1, $fp, "clob"); cubrid_execute($req);}?> `

**Приклад #3 Приклад використання **cubrid_bind()** з BLOB/CLOB**

` <?php$con u003d cubrid_connect("localhost", 33000, "demodb", "dba", "");if ($con) {    cubrid_execute($con,"DROP TABLE if exists| cubrid_execute($con,"CREATE TABLE php_cubrid_lob_test (image BLOB)"); $sql u003d "INSERT INTO php_cubrid_lob_test(image) VALUES(?)"; $req u003d cubrid_prepare($con, $sql); cubrid_bind($req, 1, "cubrid_logo.png", "blob"); cubrid_execute($req);}?> `

### Дивіться також

- [cubrid_execute()](function.cubrid-execute.md) - Виконує
підготовлений SQL-оператор
- [cubrid_prepare()](function.cubrid-prepare.md) - Підготовка
SQL-вираз до виконання
