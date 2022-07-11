- [«cubrid_pconnect](function.cubrid-pconnect.md)
- [cubrid_put »] (function.cubrid-put.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Підготовляє SQL-вираз до виконання

#cubrid_prepare

(PECL CUBRID u003d 8.3.0)

cubrid_prepare — Підготовляє SQL-вираз до виконання

### Опис

**cubrid_prepare**(resource `$conn_identifier`, string `$prepare_stmt`,
int `$option` u003d 0): resource

Функція **cubrid_prepare()** - це свого роду API, який представляє
вирази SQL, скомпіловані раніше для цього дескриптора
з'єднання. Цей попередньо скомпільований SQL-вираз буде
включено до функції **cubrid_prepare()**.

Відповідно, ви можете ефективно використовувати цей оператор для
багаторазового виконання або обробки великих даних. Можна, можливо
використовувати лише один оператор, а в параметрі можна вказати
знак запитання (?) у відповідну область SQL-вираження.
Додайте параметр при прив'язці значення в VALUES вирази INSERT або в
Вираз WHERE. Зверніть увагу, що можна прив'язати значення до
знаку питання (?) тільки за допомогою функції
[cubrid_bind()](function.cubrid-bind.md).

### Список параметрів

`conn_identifier`
Ідентифікатор з'єднання.

`prepare_stmt`
Підготовлений запит.

`option`
Опція повернення OID **`CUBRID_INCLUDE_OID`**.

### Значення, що повертаються

Ідентифікатор запиту у разі успішного виконання або **`false`**
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_prepare()****

`<?php$conn u003d cubrid_connect("localhost", 33000, "demodb");$sql u003d <<<EODSELECT g.event_code, e.nameFROM game gJOIN event e ON g.event AND event_code NOT IN (SELECT event_code FROM game WHERE host_yearu003d?) GROUP BY event_code;EOD;$req u003d cubrid_prepare($conn, $sql); ); cubrid_execute ($ req);

", $row_num);printf("%-15s %s
", "Код змагання", "Назва");printf("----------------------------
");$row u003d cubrid_fetch_assoc($req);printf("%-15d %s
", $row["event_code"], $row["name"]);$row u003d cubrid_fetch_assoc($req);printf("%-15d %s
", $row["event_code"], $row["name"]);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

27 змагань пройдуть на олімпіаді 2004, але не у 2000. Наприклад:

Код змагання Назва
----------------------------
20063 +91kg
20070 64kg

### Дивіться також

- [cubrid_execute()](function.cubrid-execute.md) - Виконує
підготовлений SQL-оператор
- [cubrid_bind()](function.cubrid-bind.md) - Зв'язує змінні з
підготовленим запитом
