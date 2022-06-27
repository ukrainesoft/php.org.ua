- [«oci_commit](function.oci-commit.md)
- [oci_define_by_name »](function.oci-define-by-name.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Встановлює з'єднання з базою даних Oracle

# oci_connect

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_connect — Встановлює з'єднання з базою даних Oracle

### Опис

**oci_connect**(
string `$username`,
string `$password`,
?string `$connection_string` u003d **`null`**,
string `$encoding` u003d "",
int `$session_mode` u003d **`OCI_DEFAULT`**
): resource \ | false

Повертає ідентифікатор з'єднання, який використовується більшістю
функцій цього модуля.

Для підвищення продуктивності більшість додатків повинні
використовувати постійні з'єднання за допомогою
[oci_pconnect()](function.oci-pconnect.md) замість **oci_connect()**.
Дивіться [Управління підключенням](oci8.connection.md) для більш
детальної інформації з управління з'єднаннями та створення пулів
підключень.

Починаючи з PHP 5.1.2 (PECL OCI8 1.1) функція
[oci_close()](function.oci-close.md) може використовуватися для
завершення з'єднання.

Другий та подальші виклики функції **oci_connect()** з тими ж
параметрами повернуть ідентифікатор відкритого з'єднання. Це означає,
що транзакції використовують *одне й те ж* базове з'єднання з базою
даних. За необхідності поділу транзакцій рекомендується
використовувати функцію [oci_new_connect()](function.oci-new-connect.md).

### Список параметрів

`username`
Ім'я користувача Oracle.

`password`
Пароль `username`.

`connection_string`
Містить `примірник Oracle` для підключення. Це може бути [» Easy
Connect
string](https://www.oracle.com/pls/topic/lookup?ctxu003ddblatest&idu003dGUID-E5358DEA-D619-4B7B-A799-3D2F802500F1),
або Connect Name з файлу `tnsnames.ora`, або ім'я локального екземпляра
Oracle.

Якщо не вказано окремо або **`null`**, PHP використовує змінні
оточення, такі як **`TWO_TASK`** (на Linux) або **`LOCAL`** (на
Windows) і **`ORACLE_SID`** для визначення `примірника Oracle` для
з'єднання.

Для використання методу Easy Connect, PHP повинен бути злінкований з
клієнтські бібліотеки версії Oracle 10*g* або старші. Easy Connect
string для Oracle 10*g* набуває такої форми:
*\[//\]host_name\[:port\]\[/service_name\]*. Починаючи з Oracle 11*g*
синтаксис такий:
*\[//\]host_name\[:port\]\[/service_name\]\[:server_type\]\[/instance_name\]*.
У Oracle 19c було введено додаткові параметри, включаючи налаштування
часу очікування та перевірки активності. Зверніться до документації
Oracle. Назви служб можуть бути визначені за допомогою запуску Oracle
утиліти `lsnrctl status` на сервері бази даних.

Файл `tnsnames.ora` може знаходитись у пошуковому шляху Oracle Net,
який включає `/your/path/to/instantclient/network/admin`,
`$ORACLE_HOME/network/admin` та `/etc`. Як альтернативний
варіанта можна встановити `TNS_ADMIN` таким чином, щоб шлях
`$TNS_ADMIN/tnsnames.ora` читалося. Переконайтеся, що веб-сервер має
доступ до файлу.

`encoding`
Визначає кодування, яке використовується клієнтськими бібліотеками Oracle.
Дане кодування не обов'язково має співпадати з кодуванням,
використовується у самій базі даних. Якщо вона не співпадає, Oracle зробить
все можливе для конвертування даних з-і це кодування. В
залежно від використовуваних кодувань це може не завжди давати
прийнятні результати. Перетворення також створює деякі
додаткові часові витрати.

Якщо кодування не вказано, клієнтські бібліотеки Oracle будуть визначати
її із змінної оточення **`NLS_LANG`**.

Передача цього параметра може зменшити час, що витрачається на
з'єднання.

`session_mode`
Цей параметр доступний починаючи з версії PHP 5 (PECL OCI8 1.1) та
приймає наступні значення: **`OCI_DEFAULT`**, **`OCI_SYSOPER`** та
**`OCI_SYSDBA`**. Якщо були вказані **`OCI_SYSOPER`** або
**`OCI_SYSDBA`**, дана функція спробує встановити привілейоване
з'єднання, використовуючи зовнішні дані авторизації. За замовчуванням
привілейовані з'єднання вимкнено. Щоб їх увімкнути, необхідно
встановити
[oci8.privileged_connect](oci8.configuration.md#ini.oci8.privileged-connect)
в `On`.

У версії PHP 5.3 (PECL OCI8 1.3.4) з'явилося значення
**`OCI_CRED_EXT`**. Воно вказує Oracle використовувати зовнішню
аутентифікацію або аутентифікацію за допомогою операційної системи, що
має бути налаштовано у базі даних. Прапор **`OCI_CRED_EXT`** може бути
використаний лише з ім'ям користувача "/" та порожнім паролем.
[oci8.privileged_connect](oci8.configuration.md#ini.oci8.privileged-connect)
може приймати значення `On` або `Off`.

**`OCI_CRED_EXT`** може використовуватися спільно з режимами
**`OCI_SYSOPER`** та **`OCI_SYSDBA`**.

**`OCI_CRED_EXT`** не підтримується в Windows через безпеку.

### Значення, що повертаються

Повертає ідентифікатор з'єднання або **`false`** у разі
виникнення помилки.

### Список змін

| Версія | Опис |
|------------------------|------------------------ -----------------------------|
| 8.0.0, PECL OCI8 3.0.0 | `connection_string` тепер припускає значення null. |

### Приклади

**Приклад #1 Приклад використання **oci_connect()** із синтаксисом Easy
Connect**

`<?php// Підключається к XE сервісу (тобто к базі даних) на "localhost"$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$n $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$stid u003d oci_parse($conn, 'SELECT * FROM employees');oci_execute($stid); ''' >
";while ($row u003d oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {   echo ""<tr>
";   foreach ($row as $item) {        echo "    <td>" . ($item !u003du003d null ? htmlentities($item, >| >)
";    }    echo "</tr>
";}echo "</table>
";?> `

**Приклад #2 Приклад використання **oci_connect()** використовуючи ім'я Network
Connect**

` <?php// Соединяется с базой данных MYDB описанной в файле tnsnames.ora,// Пример записи в tnsnames.ora для MYDB://   MYDB u003d//     (DESCRIPTION u003d//       (ADDRESS u003d (PROTOCOL u003d TCP)(HOST u003d mymachine.oracle.com)(PORT u003d 1521))//       (CONNECT_DATA u003d//         (SERVER u003d DEDICATED)//         (SERVICE_NAME u003d XE)//       )//     )$conn u003d oci_connect('hr', 'welcome' , 'MYDB');if (!$conn) {   $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$stid u003d oci_parse($conn, 'SELECT * FROM employees');oci_execute($stid); ''' >
";while ($row u003d oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {   echo ""<tr>
";   foreach ($row as $item) {        echo "    <td>" . ($item !u003du003d null ? htmlentities($item, >| >)
";    }    echo "</tr>
";}echo "</table>
";?> `

**Приклад #3 Приклад використання **oci_connect()** з використанням
певного набору символів**

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE', 'AL32UTF8');if (!$conn) {   $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$stid u003d oci_parse($conn, 'SELECT * FROM employees');oci_execute($stid); ''' >
";while ($row u003d oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {   echo ""<tr>
";   foreach ($row as $item) {        echo "    <td>" . ($item !u003du003d null ? htmlentities($item, >| >)
";    }    echo "</tr>
";}echo "</table>
";?> `

**Приклад #4 Приклад використання багаторазових дзвінків
**oci_connect()****

` <?php$c1 u003d oci_connect("hr", "welcome", 'localhost/XE');$c2 u003d oci_connect("hr", "welcome", 'localhost/XE');// $c1 і $ c2 містять однаковий PHP id ресурсу, означає, що// вони використовують однакове базове з'єднанняecho "c1 is $c1<br>
";echo "c2 is $c2<br>
";function create_table($conn){    $stmt u003d oci_parse($conn, "create table hallo (test varchar2(64))");    oci_execute($stmt);    
";}function drop_table($conn){    $stmt u003d oci_parse($conn, "drop table hallo");    oci_execute($stmt);    echo "Dropped table
";}function insert_data($connname, $conn){    $stmt u003d oci_parse($conn, "insert into hallo                                                                                                          ■ $stmt, OCI_DEFAULT);   echo "$connname inserted row without committing<br>
";}function rollback($connname, $conn){    oci_rollback($conn);   echo "$connname rollback<br>
";}function select_data($connname, $conn){    $stmt u003d oci_parse($conn, "select * from hallo");   oci_execute($stmt, oCI_DEFAULT)
";    while (oci_fetch($stmt)) {        echo "    " . oci_result($stmt, "TEST") . "<br>
";    }    echo "$connname ----done<br>
";}create_table($c1);insert_data('c1', $c1);   // Вставить строку используя c1sleep(2);                 // остановиться для записи другой временной метки для следующей строкиinsert_data('c2', $c2);   / / Вставить строку используя c2select_data('c1', $c1);   // Возврат результата обоих вставокselect_data('c2', $c2);   // Возврат результата обоих вставокrollback('c1', $c1);      // Откат используя c1select_data( 'c1', $c1); $c1);echo "c1 is $c1<br>
";echo "c2 is $c2<br>
";// Вывод is://    c1 is Resource id #5//    c2 is Resource id #5//    Created table//    c1 inserted row without committing//    c2 inserted row without committing//    c1 ----selecting/ /                                                  43//                            х             | /   c2 ----done//    Dropped table//    c1 is//    c2 is Resource id #5?> `

### Примітки

> **Примітка**:
>
> Некоректно встановлений або налаштований модуль OCI8 буде часто
> повідомляти про проблеми з'єднання або помилки. Дивіться
> [Установка/Настройка](oci8.setup.md) для вирішення проблем.

### Дивіться також

- [oci_pconnect()](function.oci-pconnect.md) - Встановлює
постійне з'єднання з сервером Oracle
- [oci_new_connect()](function.oci-new-connect.md) - Встановлює
нове з'єднання з сервером Oracle
- [oci_close()](function.oci-close.md) - Закриває з'єднання з
сервером Oracle
