- [« Приклади](mysql.examples.md)
- [MySQL »](ref.mysql.md)

- [PHP Manual](index.md)
- [Приклади](mysql.examples.md)
- Оглядовий приклад модуля MySQL

## Оглядовий приклад модуля MySQL

Цей простий приклад показує, як з'єднатися з базою даних,
виконати запит, роздрукувати результат та від'єднатися.

**Приклад #1 Приклад роботи з MySQL**

` <?php// З'єднуємось, вибираємо базу даних$link u003d mysql_connect('mysql_host', 'mysql_user', 'mysql_password')    or die('Не удалося|з'єднатися: ' ' ; mysql_select_db('my_database') or die('Не удалося обрати базу даних');// Виконуємо SQL-запит$query u003d 'SELECT * FROM my_table';$result u003d mysql_query( $| ' . mysql_error());// Виводимо результати в htmlecho "<table>
";while ($line u003d mysql_fetch_array($result, MYSQL_ASSOC)) {    echo " <tr>
";    foreach ($line as $col_value) {        echo " <td>$col_value</td>
";    }    echo " </tr>
";}echo "</table>
";// Звільняємо пам'ять від результату mysql_free_result($result);// Закриваємо з'єднання mysql_close($link);?> `
