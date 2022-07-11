- [« Informix (PDO)] (ref.pdo-informix.md)
- [MySQL (PDO) »](ref.pdo-mysql.md)

- [PHP Manual](index.md)
- [Informix (PDO)] (ref.pdo-informix.md)
- З'єднання з базою даних Informix

#PDO_INFORMIX DSN

(PECL PDO_INFORMIX \>u003d 0.1.0)

PDO_INFORMIX DSN — З'єднання з базою даних Informix

### Опис

Рядок з'єднання (Data Source Name, DSN) PDO_INFORMIX базується на
рядку Informix ODBC DSN. Подробиці конфігурації Informix ODBC DSN
читайте на сайті [» Informix Dynamic Server Information
Center](http://publib.boulder.ibm.com/infocenter/idshelp/v10/index.jsp).
Основні елементи PDO_INFORMIX DSN:

Префікс DSN
**`informix:`**.

DSN
DSN повинен бути або вказаний в `odbc.ini` або заданий повним [»рядком
з'єднання](http://publib.boulder.ibm.com/infocenter/idshelp/v10/topic/com.ibm.odbc.doc/odbc66.htm#sii02998361).

### Приклади

**Приклад #1 Використання PDO_INFORMIX DSN в `odbc.ini`**

Наступний приклад демонструє з'єднання із базою даних Informix
визначеної як Infdrv33 в `odbc.ini`:

$db u003d новий PDO("informix:DSNu003dInfdrv33", "", "");

[ODBC Data Sources]
Infdrv33u003dINFORMIX 3.3 32-BIT

[Infdrv33]
Driveru003d/opt/informix/csdk_2.81.UC1G2/lib/cli/iclis09b.so
Descriptionu003dINFORMIX 3.3 32-BIT
Databaseu003dcommon_db
LogonIDu003dtestuser
pwdu003dtestpass
Servernameu003dids_server
DB_LOCALEu003den_US.819
OPTIMIZEAUTOCOMMITu003d1
ENABLESCROLLABLECURSORSu003d1

**Приклад #2 З'єднання з використанням повноцінного рядка з'єднання**

У наступному прикладі здійснюється з'єднання з базою даних
**`common_db`** з використанням рядка з'єднання.

$db u003d новий PDO("informix:hostu003dhost.domain.com; serviceu003d9800;
databaseu003dcommon_db; serveru003dids_server; protocolu003donsoctcp;
EnableScrollableCursorsu003d1", "testuser", "tespass");
