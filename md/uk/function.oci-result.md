- [«
oci_register_taf_callback](function.oci-register-taf-callback.md)
- [oci_rollback »](function.oci-rollback.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Повертає значення поля із результату запиту

#oci_result

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_result — Повертає значення поля з результату запиту

### Опис

**oci_result**(resource `$statement`, string\|int `$column`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає дані поля `column` поточного рядка, що повертається функцією
[oci_fetch()](function.oci-fetch.md).

За подробицями операції відображення типів даних, що здійснюється
модулем OCI8, зверніться до [типів даних, що підтримуються
драйвером](oci8.datatypes.md)

### Список параметрів

`statement`

`column`
Може бути задано номером поля (починаючи з 1) або на ім'я. Реєстр
імені поля має бути таким самим, як і у поля, описаного в метаданих
Oracle, яке завжди у верхньому регістрі для полів, створених
реєстронезалежними.

### Значення, що повертаються

Повертає всі значення у вигляді рядка за винятком абстрактних типів
(ROWIDs, LOBs та FILEs). Повертає **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Приклад використання [oci_fetch()](function.oci-fetch.md)
з **oci_result()****

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {    $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$sql u003d 'SELECT location_id, city FROM locations WHERE location_id < 1200';$sti;$sti stid);while(oci_fetch($stid)) {    echo oci_result($stid, 'LOCATION_ID') . " - це "; echo oci_result($stid, 'CITY') . "<br>
";}// Виведе://  1000 - це Roma//   1100 - це Veniceoci_free_statement($stid);oci_close($conn);?> `

### Примітки

> **Примітка**:
>
> У версіях PHP нижче 5.0.0 ця функція називалася
> [ociresult()](function.ociresult.md). У PHP 5.0.0 і вище
> [ociresult()](function.ociresult.md) є аліасом
> **oci_result()** з метою зворотної сумісності. Ви можете продовжувати
> використовувати це ім'я, але це не рекомендується.

### Дивіться також

- [oci_fetch_array()](function.oci-fetch-array.md) - Повертає
наступний рядок з результату запиту у вигляді асоціативного або
нумерованого масиву
- [oci_fetch_assoc()](function.oci-fetch-assoc.md) - Повертає
наступний рядок з результату запиту у вигляді асоціативного масиву
- [oci_fetch_object()](function.oci-fetch-object.md) - Повертає
наступний рядок із результату запиту у вигляді об'єкта
- [oci_fetch_row()](function.oci-fetch-row.md) - Повертає
наступний рядок з результату запиту у вигляді нумерованого масиву
- [oci_fetch_all()](function.oci-fetch-all.md) - Вибирає всі рядки
з результату запиту до двомірного масиву
