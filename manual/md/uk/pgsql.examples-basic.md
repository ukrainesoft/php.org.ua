- [« Приклади](pgsql.examples.md)
- [Базове використання»](pgsql.examples-queries.md)

- [PHP Manual](index.md)
- [Приклади](pgsql.examples.md)
- Базове використання

## Базове використання

Цей простий приклад показує, як виконати з'єднання з БД, відправити
запит, вивести його результат та закрити з'єднання з PostgreSQL.

**Приклад #1 Приклад роботи з модулем PostgreSQL**

` <?php// З'єднання, вибір бази даних$dbconn u003d pg_connect("hostu003dlocalhost dbnameu003dpublishing useru003dwww passwordu003dfoo")    or die('Не удалося з'єднатися: | | -запиту$query u003d 'SELECT * FROM authors';$result u003d pg_query($query) or die('Помилка запиту: ' . pg_last_error());// Виведення результатів
";while ($line u003d pg_fetch_array($result, null, PGSQL_ASSOC)) {    echo " <tr>
";    foreach ($line as $col_value) {        echo " <td>$col_value</td>
";    }    echo " </tr>
";}echo "</table>
";// Очистка результатаpg_free_result($result);// Закриття з'єднанняpg_close($dbconn);?> `
