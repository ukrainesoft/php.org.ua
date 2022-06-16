- [«ODBC та DB2 (PDO)](ref.pdo-odbc.md)
- [PostgreSQL (PDO) »](ref.pdo-pgsql.md)

- [PHP Manual](index.md)
- [ODBC та DB2 (PDO)](ref.pdo-odbc.md)
- З'єднання з базами даних ODBC або DB2

# PDO_ODBC DSN

(PECL PDO_ODBC \>u003d 0.1.0)

PDO_ODBC DSN — З'єднання з базами даних ODBC або DB2

### Опис

Ім'я джерела даних (Data Source Name, DSN) PDO_ODBC складається з
наступних елементів:

Префікс DSN
**`odbc:`**. Якщо ви з'єднуєтеся з базою, вказаною в каталозі
менеджера драйверів ODBC або каталог DB2, ви можете додати ім'я в цьому
каталозі в DSN.

DSN
Ім'я бази даних як зазначено в каталозі менеджера драйверів ODBC або
каталог DB2. Також ви можете вказати повний рядок з'єднання ODBC, як
описано тут
[»http://www.connectionstrings.com/](http://www.connectionstrings.com/).

`UID`
Ім'я користувача для підключення. Якщо ви вказуєте ім'я користувача в
рядку DSN, PDO ігноруватиме ім'я, задане аргументом в
конструктори PDO.

`PWD`
Пароль користувача для підключення. Якщо ви вказуєте пароль
користувача в рядку DSN, PDO ігноруватиме пароль, заданий
аргументом у конструкторі PDO.

### Приклади

**Приклад #1 Приклад PDO_ODBC DSN (менеджер драйверів ODBC)**

У наступному прикладі показано використання PDO_ODBC DSN для з'єднання
базою даних, визначеною в каталозі ODBC як testdb:

odbc:testdb

**Приклад #2 Приклад використання PDO_ODBC DSN (некаталогізоване)
з'єднання IBM DB2)**

У наступному прикладі показано використання PDO_ODBC DSN для з'єднання
базою даних IBM DB2 на ім'я **`SAMPLE`**, використовуючи повний рядок ODBC
DSN:

odbc:DRIVERu003d{IBM DB2 ODBC DRIVER};HOSTNAMEu003dlocalhost;PORTu003d50000;DATABASEu003dSAMPLE;PROTOCOLu003dTCPIP;UIDu003ddb2inst1;PWDu003dibmdb2;

**Приклад #3 Приклад використання PDO_ODBC DSN (некаталогізоване)
з'єднання Microsoft Access)**

У наступному прикладі показано використання PDO_ODBC DSN для з'єднання
базою Microsoft Access, що зберігається в **`C:\db.mdb`**, використовуючи повну
рядок ODBC DSN:

odbc:Driveru003d{Microsoft Access Driver (*.mdb)};Dbqu003dC:\db.mdb;Uidu003dAdmin
