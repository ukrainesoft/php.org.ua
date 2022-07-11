- [«oci_fetch_row](function.oci-fetch-row.md)
- [oci_field_is_null »](function.oci-field-is-null.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Вибирає наступний рядок із результату в буфер

#oci_fetch

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_fetch — Вибирає наступний рядок із результату в буфер

### Опис

**oci_fetch**(resource `$statement`): bool

Вибирає наступний рядок із результату запиту у внутрішній буфер,
доступний за допомогою [oci_result()](function.oci-result.md) або через
змінні, заздалегідь визначені за допомогою
[oci_define_by_name()](function.oci-define-by-name.md).

Дивіться [oci_fetch_array()](function.oci-fetch-array.md) для більш
детальну інформацію про вибір даних.

### Список параметрів

`statement`
Коректний ідентифікатор виразу OCI8, отриманий з
[oci_parse()](function.oci-parse.md) та виконаний функцією
[oci_execute()](function.oci-execute.md), або ідентифікатор виразу
`REF CURSOR`.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`**,
якщо в результаті `statement` більше немає лав.

### Приклади

**Приклад #1 Приклад використання **oci_fetch()** з певними
змінними**

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {    $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$sql u003d 'SELECT location_id, city FROM locations WHERE location_id < 1200';$sti змінних МОВИН бути зроблено до запускаoci_define_by_name($stid, 'LOCATION_ID', $locid);oci_define_by_name($stid, 'CITY', $city);oci_execute| $stid)) {    echo "Ідентифікатор місце $city u003d $locid<br>
";}// Виведе://  Ідентифікатор місце Roma u003d 1000//   Ідентифікатор місцеположення Venice u003d 1100oci_free_statement($stid);oci_close($n)

**Приклад #2 Приклад використання **oci_fetch()** з
[oci_result()](function.oci-result.md)**

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {    $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$sql u003d 'SELECT location_id, city FROM locations WHERE location_id < 1200';$sti;$sti stid);while(oci_fetch($stid)) {    echo oci_result($stid, 'LOCATION_ID') . " u003d "; echo oci_result($stid, 'CITY') . "<br>
";}// Виведе://  1000 u003d Roma//   1100 u003d Veniceoci_free_statement($stid);oci_close($conn);?> `

### Примітки

> **Примітка**:
>
> Не повертає рядки для неявних результуючих наборів у Oracle
> Database. Використовуйте замість цієї функції функцію
> [oci_fetch_array()](function.oci-fetch-array.md).

### Дивіться також

- [oci_define_by_name()](function.oci-define-by-name.md) -
Порівняє змінну PHP стовпцю результату запиту
- [oci_fetch_all()](function.oci-fetch-all.md) - Вибирає всі рядки
з результату запиту до двомірного масиву
- [oci_fetch_array()](function.oci-fetch-array.md) - Повертає
наступний рядок з результату запиту у вигляді асоціативного або
нумерованого масиву
- [oci_fetch_assoc()](function.oci-fetch-assoc.md) - Повертає
наступний рядок з результату запиту у вигляді асоціативного масиву
- [oci_fetch_object()](function.oci-fetch-object.md) - Повертає
наступний рядок із результату запиту у вигляді об'єкта
- [oci_fetch_row()](function.oci-fetch-row.md) - Повертає
наступний рядок з результату запиту у вигляді нумерованого масиву
- [oci_result()](function.oci-result.md) - Повертає значення поля
з результату запиту
