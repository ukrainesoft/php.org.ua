- [« PDO::cubrid_schema](pdo.cubrid-schema.md)
- [PDO_DBLIB DSN »](ref.pdo-dblib.connection.md)

- [PHP Manual](index.md)
- [Драйвери PDO](pdo.drivers.md)
- Функції Microsoft SQL Server та Sybase (PDO_DBLIB)

# Функції Microsoft SQL Server та Sybase (PDO_DBLIB)

## Вступ

PDO_DBLIB – драйвер, що реалізує [інтерфейс PHP Data Objects
(PDO)](intro.pdo.md) для доступу до баз даних Microsoft SQL Server та
Sybase за допомогою бібліотеки FreeTDS.

Модуль недоступний для Windows.

У Windows ви повинні використовувати SqlSrv – альтернативний драйвер для MS
SQL, доступний на сайті Microsoft:
[»http://msdn.microsoft.com/en-us/sqlserver/ff657782.aspx](http://msdn.microsoft.com/en-us/sqlserver/ff657782.aspx)
.

Якщо використовувати SqlSrv неможливо, то для з'єднання
з Microsoft SQL Server та Sybase, використовуйте драйвер
[PDO_ODBC](ref.pdo-odbc.md), так як нативний Windows DB-LIB є
стародавнім, потоконебезпечним і не підтримується Microsoft.

## Зміст

- [PDO_DBLIB DSN](ref.pdo-dblib.connection.md) — З'єднання з базами
даних Microsoft SQL Server та Sybase
