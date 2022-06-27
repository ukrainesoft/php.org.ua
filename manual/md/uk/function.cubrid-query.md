- [«cubrid_ping](function.cubrid-ping.md)
- [cubrid_real_escape_string
»](function.cubrid-real-escape-string.md)

- [PHP Manual](index.md)
- [Функції сумісності CUBRID MySQL](cubridmysql.cubrid.md)
- Надсилання запиту CUBRID

#cubrid_query

(PECL CUBRID u003d 8.3.1)

cubrid_query — Надсилання запиту CUBRID

### Опис

**cubrid_query**(string `$query`, resource `$conn_identifier` u003d ?):
resource

Функція **cubrid_query()** надсилає унікальний запит (множинні
запити не підтримуються) поточною активною базою даних, заданою
ідентифікатором з'єднання `conn_identifier`.

### Список параметрів

`query`
SQL-запит

Дані у запиті мають бути [коректно
экранированы](function.cubrid-real-escape-string.md).

`conn_identifier`
Ідентифікатор з'єднання. Якщо не задано, то буде використано
останнє, відкрите за допомогою
[cubrid_connect()](function.cubrid-connect.md) з'єднання.

### Значення, що повертаються

Для SELECT, SHOW, DESCRIBE, EXPLAIN та інших запитів, що повертають
результуючий набір, **cubrid_query()** повертає resource у разі
успішного виконання та **`false`** у разі виникнення помилки.

Для інших типів SQL-запитів, INSERT, UPDATE, DELETE, DROP і т.д.
**cubrid_query()** повертає **`true`** або **`false`** залежно
від успішності виконання.

Повернутий результат можна передавати у функцію
[cubrid_fetch_array()](function.cubrid-fetch-array.md) та їй подібні
до роботи з отриманими даними.

Використовуйте [cubrid_num_rows()](function.cubrid-num-rows.md) для
визначення кількості повернутих оператором SELECT рядків або
[cubrid_affected_rows()](function.cubrid-affected-rows.md) для
визначення кількості порушених рядків, для запитів, що змінюють дані,
таких як DELETE, INSERT, REPLACE та UPDATE.

**cubrid_query()** також може завершитися з помилкою та повернути
**`false`**, якщо користувач не має прав на доступ до таблиці,
використовується у запиті.

### Приклади

**Приклад #1 Некоректний запит**

Наступний запит містить синтаксичну помилку, тому
**cubrid_query()** поверне **`false`**.

` <?php$conn u003d cubrid_connect('localhost', 33000, 'demodb');$result u003d cubrid_query('SELECT * WHERE 1u003d1');if (!$result) {про:не'    | cubrid_error());}?> `

**Приклад #2 Коректний запит**

Наступний запит коректний, тому **cubrid_query()** поверне resource.

` <?php//Які небудь значення$firstname u003d 'fred';$lastname  u003d 'fox';$conn u003d cubrid_connect('localhost', 33000, 'demodb');cubrid_execute( conn "); 'home-1','20')");cubrid_execute($conn,"insert into friends values('blue','cat','home-2','21')");// Сформулюємо запит/ / Це кращий шлях для виконання запиту// Інші приклади дивіться cubrid_real_escape_string()$query u003d sprintf("SELECT firstname, lastname, address, age FROM ' firstname), cubrid_real_escape_string($lastname)); // Виконуємо запит $ result u003d cubrid_query ($ query); корисно при налагодження.if (!$result) {   $message  u003d 'Некоректний запит: ' . cubrid_error() . "
";    $message .u003d 'Всего запросов: ' . $query;    die($message);}// Используем результат// Попытка распечатать $result не позволит получить доступ к информации в ресурсе// Должна быть использована одна из функций cubrid/ / Дивіться cubrid_result(), cubrid_fetch_array(), cubrid_fetch_row() і т.д.while ($row u003d cubrid_fetch_assoc($result)) {              row['address'];    echo $row['age'];}// Звільняємо ресурси. У принципі можна і не робити, так як// вони будуть автоматично освоє$ |

### Дивіться також

- [cubrid_connect()](function.cubrid-connect.md) - Відкриває
з'єднання з сервером CUBRID
- [cubrid_error()](function.cubrid-error.md) - Повертає текст
останньої помилки, що відбулася
- [cubrid_real_escape_string()](function.cubrid-real-escape-string.md) -
Екранування спеціальних символів у SQL-запиті
- [cubrid_result()](function.cubrid-result.md) - Отримати значення
із заданого стовпця заданого рядка
- [cubrid_fetch_assoc()](function.cubrid-fetch-assoc.md) - Вийняти
рядок із результуючого набору у вигляді асоціативного масиву
- [cubrid_unbuffered_query()](function.cubrid-unbuffered-query.md) -
Виконання запиту без завантаження результату на згадку
