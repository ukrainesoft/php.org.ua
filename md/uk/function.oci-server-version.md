- [«oci_rollback](function.oci-rollback.md)
- [oci_set_action »](function.oci-set-action.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Повертає версію сервера Oracle

#oci_server_version

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_server_version — Повертає версію сервера Oracle

### Опис

**oci_server_version**(resource `$connection`): string\|false

Повертає рядок з інформацією про версію сервера Oracle та доступні
опціях

### Список параметрів

`connection`

### Значення, що повертаються

Повертає у вигляді рядка інформацію про версію або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **oci_server_version()****

` <?php$conn u003d oci_connect("hr", "hrpwd", "localhost/XE");echo "Версія сервера: " . oci_server_version($conn);//Виведе //Версія сервера:OracleDatabase11gEnterpriseEditionRelease11.2.0.1.0-64bitProduction/In > `

### Примітки

> **Примітка**:
>
> У версіях PHP нижче 5.0.0 ця функція називалася
> [ociserverversion()](function.ociserverversion.md). У PHP 5.0.0 та
> вище [ociserverversion()](function.ociserverversion.md) є
> аліасом **oci_server_version()**, тому ви можете продовжувати
> використовувати це ім'я, але це не рекомендується.

### Дивіться також

- [oci_client_version()](function.oci-client-version.md) -
Повертає версію клієнтської бібліотеки
