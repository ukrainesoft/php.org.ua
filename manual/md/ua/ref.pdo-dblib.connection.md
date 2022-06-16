- [«MS SQL Server (PDO_DBLIB)](ref.pdo-dblib.md)
- [Firebird (PDO) »](ref.pdo-firebird.md)

- [PHP Manual](index.md)
- [MS SQL Server (PDO_DBLIB)](ref.pdo-dblib.md)
- З'єднання з базами даних Microsoft SQL Server та Sybase

# PDO_DBLIB DSN

(PECL PDO_DBLIB \>u003d 0.9.0)

PDO_DBLIB DSN — З'єднання з базами даних Microsoft SQL Server та Sybase

### Опис

Ім'я джерела даних (Data Source Name, DSN) PDO_DBLIB складається з
наступних елементів:

Префікс DSN
Використовуйте префікс DSN **`sybase:`** у випадку, якщо PDO_DBLIB зібраний з
бібліотеками Sybase ct-lib, **`mssql:`**, якщо PDO_DBLIB зібраний з
бібліотеками Microsoft SQL Server, або **`dblib:`**, якщо PDO_DBLIB
зібраний із бібліотеками FreeTDS.

`host`
Ім'я сервера, на якому знаходиться база даних. За замовчуванням
127.0.0.1.

`dbname`
Назва бази даних.

`charset`
Клієнтське кодування.

`appname`
Назва програми (використовується в sysprocesses). Типово "PHP Generic
DB-lib" або "PHP freetds".

`secure`
На даний момент не використовується.

### Приклади

**Приклад #1 Приклади використання PDO_DBLIB DSN**

Наведені нижче приклади демонструють PDO_DBLIB DSN для з'єднання з базами
даних Microsoft SQL Server та Sybase:

mssql:hostu003dlocalhost;dbnameu003dtestdb
sybase:hostu003dlocalhost;dbnameu003dtestdb
dblib:hostu003dlocalhost;dbnameu003dtestdb
