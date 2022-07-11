- [«odbc_tables](function.odbc-tables.md)
- [Вступ »](intro.pdo.md)

- [PHP Manual](index.md)
- [Рівні абстракції](refs.database.abstract.md)
- Об'єкти даних PHP

# Об'єкти даних PHP

- [Вступ](intro.pdo.md)
- [Встановлення та налаштування](pdo.setup.md)
- [Вимоги](pdo.requirements.md)
- [Установка](pdo.installation.md)
- [Налаштування під час виконання](pdo.configuration.md)
- [Типи ресурсів] (pdo.resources.md)
- [Предвизначені константи](pdo.constants.md)
- [Підключення та керування підключеннями](pdo.connections.md)
- [Транзакції та автоматична фіксація
змін](pdo.transactions.md)
- [Підготовлені запити та збережені
процедури](pdo.prepared-statements.md)
- [Помилки та їх обробка](pdo.error-handling.md)
- [Великі об'єкти (LOB)](pdo.lobs.md)
- [PDO](class.pdo.md) - Клас PDO
- [PDO::beginTransaction](pdo.begintransaction.md) -
Ініціалізація транзакції
- [PDO::commit](pdo.commit.md) - Фіксує транзакцію
- [PDO::\_\_construct](pdo.construct.md) - Створює екземпляр
PDO, що надає з'єднання з базою даних
- [PDO::errorCode](pdo.errorcode.md) — Повертає код SQLSTATE
результату останньої операції з базою даних
- [PDO::errorInfo](pdo.errorinfo.md) — Отримує розширену
інформацію про помилку, що сталася під час останнього звернення до
базі даних
- [PDO::exec](pdo.exec.md) — Виконує SQL-запит та повертає
кількість порушених рядків
- [PDO::getAttribute](pdo.getattribute.md) — Отримати атрибут
з'єднання з базою даних
- [PDO::getAvailableDrivers](pdo.getavailabledrivers.md) -
Повертає масив доступних драйверів PDO
- [PDO::inTransaction](pdo.intransaction.md) — Перевіряє, що розпочато
чи транзакція
- [PDO::lastInsertId](pdo.lastinsertid.md) - Повертає ID
останнього вставленого рядка або значення послідовності
- [PDO::prepare](pdo.prepare.md) — Підготовка запиту до
виконання та повертає пов'язаний з цим запитом об'єкт
- [PDO::query](pdo.query.md) — Готує та виконує
вираз SQL без наповнювачів
- [PDO::quote](pdo.quote.md) — Укладає рядок у лапки для
використання у запиті
- [PDO::rollBack](pdo.rollback.md) - Відкат транзакції
- [PDO::setAttribute](pdo.setattribute.md) — Встановлення атрибута
- [PDOStatement](class.pdostatement.md) - Клас PDOStatement
- [PDOStatement::bindColumn](pdostatement.bindcolumn.md) -
Зв'язує стовпець зі змінною PHP
- [PDOStatement::bindParam](pdostatement.bindparam.md) -
Прив'язує параметр запиту до змінної
- [PDOStatement::bindValue](pdostatement.bindvalue.md) -
Зв'язує параметр із заданим значенням
- [PDOStatement::closeCursor](pdostatement.closecursor.md) -
Закриває курсор, переводячи запит у стан готовності до
повторному запуску
- [PDOStatement::columnCount](pdostatement.columncount.md) -
Повертає кількість стовпців у результуючому наборі
- [PDOStatement::debugDumpParams](pdostatement.debugdumpparams.md)
- Виведення інформації про підготовлену SQL-команду з метою налагодження
- [PDOStatement::errorCode](pdostatement.errorcode.md) -
Отримує код SQLSTATE, пов'язаний із останньою операцією в об'єкті
PDOStatement
- [PDOStatement::errorInfo](pdostatement.errorinfo.md) -
Отримання розширеної інформації про помилку, що сталася
В результаті роботи об'єкта PDOStatement
- [PDOStatement::execute](pdostatement.execute.md) — Запускає
підготовлений запит на виконання
- [PDOStatement::fetch](pdostatement.fetch.md) - Вилучення
наступного рядка з результуючого набору
- [PDOStatement::fetchAll](pdostatement.fetchall.md) - Вибирає
рядки, що залишилися з набору результатів
- [PDOStatement::fetchColumn](pdostatement.fetchcolumn.md) -
Повертає дані одного стовпця наступного рядка
результуючого набору
- [PDOStatement::fetchObject](pdostatement.fetchobject.md) -
Витягує наступний рядок і повертає його у вигляді об'єкта
- [PDOStatement::getAttribute](pdostatement.getattribute.md) -
Отримання атрибуту запиту PDOStatement
- [PDOStatement::getColumnMeta](pdostatement.getcolumnmeta.md) -
Повертає метадані стовпця у результуючій таблиці
- [PDOStatement::getIterator](pdostatement.getiterator.md) -
Отримує ітератор набору результатів
- [PDOStatement::nextRowset](pdostatement.nextrowset.md) -
Перехід до наступного набору рядків через запит
- [PDOStatement::rowCount](pdostatement.rowcount.md) -
Повертає кількість рядків, порушених останнім SQL-запитом
- [PDOStatement::setAttribute](pdostatement.setattribute.md) -
Встановлює атрибут об'єкту PDOStatement
- [PDOStatement::setFetchMode](pdostatement.setfetchmode.md) -
Встановлює стандартний режим вибірки для об'єкта запиту
- [PDOException](class.pdoexception.md) - Клас PDOException
- [Драйвери PDO](pdo.drivers.md)
- [CUBRID (PDO)] (ref.pdo-cubrid.md) - Опції CUBRID
(PDO_CUBRID)
- [MS SQL Server (PDO_DBLIB)](ref.pdo-dblib.md) - Опції
Microsoft SQL Server та Sybase (PDO_DBLIB)
- [Firebird (PDO)] (ref.pdo-firebird.md) - Функції Firebird
(PDO_FIREBIRD)
- [IBM (PDO)] (ref.pdo-ibm.md) - Функції IBM (PDO_IBM)
- [Informix (PDO)] (ref.pdo-informix.md) - Функції Informix
(PDO_INFORMIX)
- [MySQL (PDO)] (ref.pdo-mysql.md) - Функції MySQL (PDO_MYSQL)
- [MS SQL Server (PDO)] (ref.pdo-sqlsrv.md) - Функції модуля
PDO_SQLSRV для Microsoft SQL Server
- [Oracle (PDO)] (ref.pdo-oci.md) - Функції Oracle (PDO_OCI)
- [ODBC та DB2 (PDO)] (ref.pdo-odbc.md) - Функції ODBC та DB2
(PDO_ODBC)
- [PostgreSQL (PDO)] (ref.pdo-pgsql.md) - Опції PostgreSQL
(PDO_PGSQL)
- [SQLite (PDO)] (ref.pdo-sqlite.md) - Функції SQLite
(PDO_SQLITE)
