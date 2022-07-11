- [«oci_password_change](function.oci-password-change.md)
- [oci_register_taf_callback
»](function.oci-register-taf-callback.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Встановлює постійне з'єднання із сервером Oracle

#oci_pconnect

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_pconnect — Встановлює постійне з'єднання із сервером Oracle

### Опис

**oci_pconnect**(
string `$username`,
string `$password`,
?string `$connection_string` u003d **`null`**,
string `$encoding` u003d "",
int `$session_mode` u003d **`OCI_DEFAULT`**
): resource \ | false

Створює постійне з'єднання із сервером Oracle та виконує
автентифікацію.

Постійні з'єднання кешуються і повторно використовуються за наступних
запити, в результаті знижуються накладні витрати при кожному завантаженні
сторінки; типова програма PHP має одне постійне підключення до
серверу PHP, реалізоване дочірнім процесом Apache (або процесом PHP
FPM). Додаткову інформацію дивіться у розділі [Робота з
з'єднаннями OCI8 та Connection Pooling](oci8.connection.md).

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

Повертає ідентифікатор підключення або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Простий приклад для **oci_pconnect()** з використанням
спрощеного синтаксису підключення**

`<?php// Підключення к XE сервісу (тобто базі даних) на локальній машині$conn u003d oci_pconnect('hr', 'welcome', 'localhost/XE');if (!$conn u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$stid u003d oci_parse($conn, 'SELECT * FROM employees');oci_execute($stid); ''' >
";while ($row u003d oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {   echo ""<tr>
";   foreach ($row as $item) {        echo "    <td>" . ($item !u003du003d null ? htmlentities($item, >| >)
";    }    echo "</tr>
";}echo "</table>
";?> `

Додаткові приклади можна знайти у описі функції
[oci_connect()](function.oci-connect.md).

### Примітки

> **Примітка**: Починаючи з версії PHP 5.1.2 та PECL OCI8 1.1,
> тривалість та максимальна кількість постійних з'єднань до
> серверу Oracle на кожен процес PHP може бути змінено в наступних
> директиви:
> [oci8.persistent_timeout](oci8.configuration.md#ini.oci8.persistent-timeout),
> [oci8.ping_interval](oci8.configuration.md#ini.oci8.ping-interval) та
> [oci8.max_persistent](oci8.configuration.md#ini.oci8.max-persistent).

### Дивіться також

- [oci_connect()](function.oci-connect.md) - Встановлює
з'єднання з базою даних Oracle
- [oci_new_connect()](function.oci-new-connect.md) - Встановлює
нове з'єднання з сервером Oracle
