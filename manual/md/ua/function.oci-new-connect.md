- [«oci_new_collection](function.oci-new-collection.md)
- [oci_new_cursor »](function.oci-new-cursor.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Встановлює нове з'єднання із сервером Oracle

#oci_new_connect

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_new_connect — Встановлює нове з'єднання із сервером Oracle

### Опис

**oci_new_connect**(
string `$username`,
string `$password`,
?string `$connection_string` u003d **`null`**,
string `$encoding` u003d "",
int `$session_mode` u003d **`OCI_DEFAULT`**
): resource \ | false

Створює нове з'єднання із сервером Oracle та виконує вхід.

На відміну від [oci_connect()](function.oci-connect.md) та
[oci_pconnect()](function.oci-pconnect.md), функція
**oci_new_connect()** не кешує з'єднання і при кожному виклику
встановлює нове з'єднання. Це корисно, якщо програмі необхідна
транзакційна ізоляція двох наборів запитів.

### Список параметрів

`username`
Ім'я користувача Oracle.

`password`
Пароль користувача `username`.

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

Наведений нижче приклад ілюструє використання відокремлених
з'єднання.

**Приклад #1 Приклад використання **oci_new_connect()****

`<?php// створіть таблицю mytab (mycol number);function query($name, $c){    echo "Виконання $name
";    $s u003d oci_parse($c, "select * from mytab");    oci_execute($s, OCI_NO_AUTO_COMMIT);    $row u003d oci_fetch_array($s, OCI_ASSOC);    if (!$row) {        echo "Нет данных
";    } else {        do {            foreach ($row as $item)                echo $item . " ";            echo "
";        } while (($row u003d oci_fetch_array($s, OCI_ASSOC)) !u003d false);    }}$c1 u003d oci_connect("hr", c$e" hr", "welcome", "localhost/orcl");$s u003d oci_parse($c1, "insert into mytab values(1234)");oci_execute($s, OCI_NO_AUTO_COMMIT);query("основ" );query("нового з'єднання", $c2);oci_commit($c1);query("нового з'єднання після commit", $c2);// Виведе://   Виконання основного з'єднання//                     /   Нет даних//   Виконання нового з'єднання після commit//   1234?> `

Додаткові приклади можна знайти у описі функції
[oci_connect()](function.oci-connect.md).

### Дивіться також

- [oci_connect()](function.oci-connect.md) - Встановлює
з'єднання з базою даних Oracle
- [oci_pconnect()](function.oci-pconnect.md) - Встановлює
постійне з'єднання з сервером Oracle
