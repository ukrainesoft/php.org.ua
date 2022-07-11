- [«oci_connect](function.oci-connect.md)
- [oci_error »](function.oci-error.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- зіставляє змінну PHP стовпцю результату запиту

#oci_define_by_name

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_define_by_name — Порівняє змінну PHP стовпцю результату
запиту

### Опис

**oci_define_by_name**(
resource `$statement`,
string `$column`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$var`,
int `$type` u003d 0
): bool

Порівняє змінну PHP стовпцю результату запиту, отриманого з
за допомогою [oci_fetch()](function.oci-fetch.md).

Виклик **oci_define_by_name()** повинен здійснюватися до запуску
[oci_execute()](function.oci-execute.md).

### Список параметрів

`statement`
Коректний ідентифікатор виразу OCI8, отриманий з
[oci_parse()](function.oci-parse.md) та виконаний функцією
[oci_execute()](function.oci-execute.md), або ідентифікатор виразу
`REF CURSOR`.

`column`
Ім'я стовпця використаного у запиті.

Використовуйте верхній регістр для стандартних незалежних імен
стовпців Oracle. Використовуйте точне написання імені стовпця для
реєстрозалежних імен.

`var`
Змінна PHP, призначена для зберігання поверненого значення.

`type`
Тип даних, що повертаються. Зазвичай не потрібно. Майте на увазі, що
перетворення Oracle-даних не виробляються. Наприклад, `SQLT_INT`
буде проігноровано і повернені дані будуть, як і раніше, у вигляді
`SQLT_CHR`.

Якщо потрібно призначити змінну абстрактного типу даних
(LOB/ROWID/BFILE), то її необхідно спочатку створити за допомогою
[oci_new_descriptor()](function.oci-new-descriptor.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **oci_define_by_name()****

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {    $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$sql u003d 'SELECT location_id, city FROM locations WHERE location_id < 1200';$sti; ДОЛЖНЫ быть определены перед запускомoci_define_by_name($stid, 'LOCATION_ID', $locid);oci_define_by_name($stid, 'CITY', $city);oci_execute($stid);//  Каждый результат запроса помещает в заранее определённую переменную следующую строку данныхwhile ( oci_fetch($stid)) {    echo "ID місце $locid - $city<br>
";}// Виведе://  ID місце 1000 - Roma//   ID місцеположення 1100 - Veniceoci_free_statement($stid);oci_close($conn);?> `

**Приклад #2 Приклад використання **oci_define_by_name()** з
реєстрозалежними іменами стовпців**

`<?php/* До|запуску, створюється таблиця зі стовпцем, має реєстрозалежне ім'я    CREATE TABLE mytab (id NUMBER, "MyDescription" VAR; INSERT INTO mytab (id, "MyDescription") values (1, 'Iced Coffee'); COMMIT;*/$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {   $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$stid u003d oci_parse($conn, 'SELECT * FROM mytab');// Використовується¸ ', $id);// Використовується точне напис для реєстрозалежних імен столбцовoci_define_by_name($stid, 'MyDescription', $mydesc);oci_execute($stid);while$             <br>
";}// Виведе://  Ідентифікатор 1 - Iced Coffeeoci_free_statement($stid);oci_close($conn);?> `

**Приклад #3 Приклад використання **oci_define_by_name()** зі стовпцями
типу LOB**

`<?php/*  Перед запуском створюються таблиці:   CREATE TABLE mytab (id NUMBER, fruit CLOB); INSERT INTO mytab (id, fruit) values (1, 'apple'); INSERT INTO mytab (id, fruit) values (2, 'orange'); COMMIT;*/$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {   $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$stid u003d oci_parse($conn, 'SELECT * FROM mytab');// Змінні Повинні , $id);oci_define_by_name($stid, 'FRUIT', $fruit); // $fruit стане дескриптором LOBoci_execute($stid);while (oci_fetch($stid)) {    echo $id . " - " . $fruit->load(100) . "<br>
";}// Виведе: //  1 - apple//  2 - orange$fruit->free();oci_free_statement($stid);oci_close($conn);?> `

**Приклад #4 Приклад використання **oci_define_by_name()** з наведеними
типами**

`<?php/*  Перед запуском створюється таблиця:    CREATE TABLE mytab (id NUMBER, fruit CLOB); INSERT INTO mytab (id, fruit) values (1, 'apple'); INSERT INTO mytab (id, fruit) values (2, 'orange'); COMMIT;*/$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {   $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$stid u003d oci_parse($conn, 'SELECT * FROM mytab');// Змінні Повинні , $id);$fruit u003d oci_new_descriptor($conn, OCI_D_LOB);oci_define_by_name($stid, 'FRUIT', $fruit, OCI_D_CLOB);oci_execute($stid);   " - " . $fruit->load(100) . "<br>
";}// Виведе: //  1 - apple//  2 - orange$fruit->free();oci_free_statement($stid);oci_close($conn);?> `

### Дивіться також

- [oci_fetch()](function.oci-fetch.md) - Вибирає наступний рядок
з результату в буфер
- [oci_new_descriptor()](function.oci-new-descriptor.md) -
Ініціалізує новий дескриптор об'єкта LOB чи FILE
