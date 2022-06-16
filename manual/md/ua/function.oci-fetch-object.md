- [«oci_fetch_assoc](function.oci-fetch-assoc.md)
- [oci_fetch_row »](function.oci-fetch-row.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Повертає наступний рядок із результату запиту у вигляді об'єкта

#oci_fetch_object

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_fetch_object — Повертає наступний рядок з результату запиту
вигляді об'єкта

### Опис

**oci_fetch_object**(resource `$statement`, int `$mode` u003d OCI_ASSOC \|
OCI_RETURN_NULLS): stdClass\|false

Повертає об'єкт, що містить наступний рядок із результату запиту.
Імена властивостей об'єкта відповідають іменам стовпців у рядку. Ця
функція зазвичай викликається в циклі доки не повертає **`false`** коли
більше немає лав.

За подробицями операції відображення типів даних, що здійснюється
модулем OCI8, зверніться до [типів даних, що підтримуються
драйвером](oci8.datatypes.md)

### Список параметрів

`statement`
Коректний ідентифікатор виразу OCI8, отриманий з
[oci_parse()](function.oci-parse.md) та виконаний функцією
[oci_execute()](function.oci-execute.md), або ідентифікатор виразу
`REF CURSOR`.

### Значення, що повертаються

Повертає об'єкт. Кожна властивість об'єкта відповідає іменам стовпців
у рядку. Якщо в результаті `запиту` більше немає лав, то повертає
**`false`**.

Будь-який стовпець `LOB` повертається як дескриптор LOB.

Стовпці `DATE` повертаються у вигляді рядків, форматованих відповідно
з поточних форматів дати. Стандартний формат може бути змінено за допомогою
змінних оточення Oracle, таких як `NLS_LANG` або за допомогою
попередньо запущеною `ALTER SESSION SET NLS_DATE_FORMAT`
команди.

Вам не слід забувати про те, що Oracle повертає імена полів у
ВЕРХНЕМ регістрі, тому імена атрибутів об'єкта будуть також у ВЕРХНОМУ
регістрі. Використовуйте функцію [var_dump()](function.var-dump.md)
по відношенню до отриманого об'єкта для доступу до атрибутів.

Значення атрибутів відповідають **`null`** для будь-яких `NULL` полів.

### Приклади

**Приклад #1 Приклад використання **oci_fetch_object()****

`<?php/*  Перед запуском створіть таблицю:   CREATE TABLE mytab (id NUMBER, description VARCHAR2(30)); INSERT INTO mytab (id, description) values (1, 'Fish and Chips'); COMMIT;*/$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {   $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$stid u003d oci_parse($conn, 'SELECT id, description FROM mytab');oci_execute($stid);wh ($stid)) !u003d false) {     // Використовуйте імена атрибутів у верхньому реєстрі для кожного стовпця Oracle    echo $row->ID . "<br>
";   echo $row->DESCRIPTION . "<br>
";}// Виведе: //    1//   Fish and Chipsoci_free_statement($stid);oci_close($conn);?> `

**Приклад #2 Приклад використання **oci_fetch_object()** з назвами
стовпців у різних регістрах**

`<?php/*Перед запуском створіть таблицю з ім'ям стовпця в різних реєстрах:    CREATE TABLE mytab (id NUMBER, "MyDescription" VARCHAR2(3) INSERT INTO mytab (id, "MyDescription") values (1, 'Iced Coffee'); COMMIT;*/$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {   $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$stid u003d oci_parse($conn, 'SELECT id, "MyDescription" FROM mytab');oci_execute($ u003d oci_fetch_object($stid)) !u003d false) {    // Використання імен атрибутів в верхньому реєстрі для кожного стовпця Oracle    echo $row-> "<br>
";    // Використання точного напису для імені стовпця з різними реєстрами    echo $row->MyDescription . "<br>
";}// Виведе: //    1//   Iced Coffeeoci_free_statement($stid);oci_close($conn);?> `

**Приклад #3 Приклад використання **oci_fetch_object()** з LOB**

`<?php/*  Перед запуском створіть таблицю    CREATE TABLE mytab (id NUMBER, description CLOB); INSERT INTO mytab (id, description) values (1, 'A very long string'); COMMIT;*/$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {   $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$stid u003d oci_parse($conn, 'SELECT id, description FROM mytab');oci_execute($stid);wh ($stid)) !u003d false) {    echo $row->ID . "<br>
";    // Таким образом буде виведено перші 11 байт із DESCRIPTION    echo $row->DESCRIPTION->read(11) . "<br>
";}// Виведе://    1//    A very longoci_free_statement($stid);oci_close($conn);?> `

### Дивіться також

- [oci_fetch()](function.oci-fetch.md) - Вибирає наступний рядок
з результату в буфер
- [oci_fetch_all()](function.oci-fetch-all.md) - Вибирає всі рядки
з результату запиту до двомірного масиву
- [oci_fetch_assoc()](function.oci-fetch-assoc.md) - Повертає
наступний рядок з результату запиту у вигляді асоціативного масиву
- [oci_fetch_array()](function.oci-fetch-array.md) - Повертає
наступний рядок з результату запиту у вигляді асоціативного або
нумерованого масиву
- [oci_fetch_row()](function.oci-fetch-row.md) - Повертає
наступний рядок з результату запиту у вигляді нумерованого масиву
