- [«cubrid_error_msg](function.cubrid-error-msg.md)
- [cubrid_fetch »](function.cubrid-fetch.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Виконує підготовлений SQL-оператор

#cubrid_execute

(PECL CUBRID u003d 8.3.0)

cubrid_execute - Виконує підготовлений SQL-оператор

### Опис

**cubrid_execute**(resource `$conn_identifier`, string `$sql`, int
$option u003d 0): resource

**cubrid_execute**(resource `$request_identifier`, int `$option` u003d 0):
bool

Функція **cubrid_execute()** використовується для виконання цього
SQL-оператора. Вона виконує запит, використовуючи `conn_identifier` та SQL,
а потім повертає створений ідентифікатор запиту. Функція використовується
для простого виконання запиту, коли не потрібно.
Крім того, функція **cubrid_execute()** використовується для виконання
підготовленого оператора за допомогою
[cubrid_prepare()](function.cubrid-prepare.md) та
[cubrid_bind()](function.cubrid-bind.md). У цей час вам потрібно
вказати аргументи `request_identifier` та `option`.

Параметр `option` використовується для визначення, чи потрібно отримувати OID
після виконання запиту і чи слід виконувати запит у синхронному
асинхронному режимі. Константа **`CUBRID_INCLUDE_OID`** та
**`CUBRID_ASYNC`** (або **`CUBRID_EXEC_QUERY_ALL`**, якщо необхідно
виконати кілька SQL-операторів) можна вказати за допомогою побітового
оператора АБО. Якщо не вказано, жодного з них не вибрано. Якщо
встановлено прапор **`CUBRID_EXEC_QUERY_ALL`**, для отримання результатів
запиту використовується синхронний режим (sync_mode) та у таких випадках
застосовуються такі правила:

- значення, що повертається - результат першого запиту.
- Якщо у будь-якому запиті виникає помилка, виконання
обробляється як збій.
- У запиті, що складається з q1 q2 q3, якщо помилка виникає у q2 після
успішного виконання q1, результат q1 залишається дійсним. То
є попереднє успішне виконання запиту не відкочується у разі
виникнення помилки.
- У разі успішного виконання запиту, результат другого запиту
можна отримати за допомогою
[cubrid_next_result()](function.cubrid-next-result.md).

Якщо першим аргументом є `request_identifier` для виконання
функції [cubrid_prepare()](function.cubrid-prepare.md) можна вказати
тільки **`CUBRID_ASYNC`**.

### Список параметрів

`conn_identifier`
Ідентифікатор з'єднання.

`sql`
SQL для виконання.

`option`
Варіант виконання запиту: **`CUBRID_INCLUDE_OID`**,
**`CUBRID_ASYNC`**, **`CUBRID_EXEC_QUERY_ALL`**.

`request_identifier`
Ідентифікатор [cubrid_prepare()](function.cubrid-prepare.md).

### Значення, що повертаються

Ідентифікатор запиту у разі успішного виконання запиту та якщо
першим параметром є conn_identifier; **`true`**, у разі
успішного виконання запиту та першим аргументом request_identifier або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- --------------|
| 8.4.0 | Додано новий параметр **`CUBRID_EXEC_QUERY_ALL`**. |

### Приклади

**Приклад #1 Приклад використання **cubrid_execute()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb");$result u003d cubrid_execute($conn, "SELECT code FROM event WHERE nameu003d'100m B> ;$row u003d cubrid_fetch_array($result, CUBRID_ASSOC);$event_code u003d $row["code"];cubrid_close_request($result);$history_req u003d cubrid_prepare($conn, "SELECT| " ($history_req, 1, $event_code, "number");cubrid_execute($history_req);printf("%-20s %-9s %-10s %-5s
", "athlete", "host_year", "score", "unit");while ($row u003d cubrid_fetch_array($history_req, CUBRID_ASSOC)) {    printf("%-20s %-0%|
",         $row["athlete"], $row["host_year"], $row["score"], $row["unit"]);}cubrid_close_request($history_req);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

athlete host_year score unit
Phelps Michael 2004 51.25 time

### Дивіться також

- [cubrid_prepare()](function.cubrid-prepare.md) - Підготовка
SQL-вираз до виконання
- [cubrid_bind()](function.cubrid-bind.md) - Зв'язує змінні з
підготовленим запитом
- [cubrid_next_result()](function.cubrid-next-result.md) - Отримує
результат наступного запиту під час виконання кількох
SQL-операторів
- [cubrid_close_request()](function.cubrid-close-request.md) -
Закриває обробник запиту
- [cubrid_commit()](function.cubrid-commit.md) - Підтвердження
транзакції
- [cubrid_rollback()](function.cubrid-rollback.md) - Відкат
транзакції
