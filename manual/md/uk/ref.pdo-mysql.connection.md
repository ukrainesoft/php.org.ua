- [«MySQL (PDO)] (ref.pdo-mysql.md)
- [MS SQL Server (PDO) »](ref.pdo-sqlsrv.md)

- [PHP Manual](index.md)
- [MySQL (PDO)] (ref.pdo-mysql.md)
- З'єднання з базою даних MySQL

#PDO_MYSQL DSN

(PECL PDO_MYSQL \>u003d 0.1.0)

PDO_MYSQL DSN — З'єднання з базою даних MySQL

### Опис

Ім'я джерела даних (Data Source Name або DSN) PDO_MYSQL складається з
наступних елементів:

DSN префікс
DSN-префікс – це **`mysql:`**.

`host`
Ім'я хоста, де знаходиться сервер баз даних.

`port`
Номер порту, який слухає сервер бази даних.

`dbname`
Назва бази даних.

`unix_socket`
Сокет MySQL Unix (не повинен використовуватися спільно з `host` або
`port`).

`charset`
Кодування. Дивіться розділ [Кодування](mysqlinfo.concepts.charset.md)
для додаткової інформації.

### Приклади

**Приклад #1 Приклади DNS для PDO_MYSQL**

Наведені нижче приклади показують використання PDO_MYSQL DSN для з'єднання
з базою даних MySQL:

mysql:hostu003dlocalhost;dbnameu003dtestdb

Більш складний приклад:

mysql:hostu003dlocalhost;portu003d3307;dbnameu003dtestdb
mysql:unix_socketu003d/tmp/mysql.sock;dbnameu003dtestdb

### Примітки

> **Примітка**: **Тільки Unix:**
>
> Якщо ім'я хоста встановлено як "localhost", то з'єднання відбувається
> через сокет домену. Якщо PDO_MYSQL скомпільовано з використанням
> libmysqlclient, то шлях до файлу-сокету збігатиметься з шляхом, по
> якому скомпільовано libmysqlclient. Якщо PDO_MYSQL скомпільовано з
> використанням mysqlnd, значення стандартного сокету, може бути
> виставлено з використанням налаштування
> [pdo_mysql.default_socket](ref.pdo-mysql.md#ini.pdo-mysql.default-socket).
