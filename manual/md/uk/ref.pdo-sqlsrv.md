- [«PDO_MYSQL DSN](ref.pdo-mysql.connection.md)
- [PDO_SQLSRV DSN »](ref.pdo-sqlsrv.connection.md)

- [PHP Manual](index.md)
- [Драйвери PDO](pdo.drivers.md)
- Функції модуля PDO_SQLSRV для Microsoft SQL Server

# Функції модуля PDO_SQLSRV для Microsoft SQL Server

## Вступ

PDO_SQLSRV - це драйвер, що реалізує інтерфейс [PHP Data Objects
(PDO)](intro.pdo.md) для отримання доступу з PHP до баз даних MS
SQL Server (починаючи з версії SQL Server 2005) та SQL Azure.

## Установка

Модуль PDO_SQLSRV включається додаванням відповідного файлу DLL
директорію модулів вашої встановленої копії PHP та відповідної
записи у файл `php.ini`. Завантажувана копія модуля PDO_SQLSRV включає
себе вісім файлів драйверів, чотири з них для підтримки PDO.

Версія драйвера, що найчастіше використовується, доступна тут: [» Завантаження
SQLSRV](http://msdn.microsoft.com/en-us/sqlserver/ff657782.aspx).
Вихідний код драйвера розміщено в [» публічному
репозиторії](https://github.com/microsoft/msphpsql).

За детальною інформацією про системні вимоги зверніться до розділу
[" Системні вимоги
SQLSRV](http://msdn.microsoft.com/en-us/library/cc296170.aspx).

Модуль PDO_SQLSRV може використовуватися з PHP лише у Windows. Для
Linux використовуйте [ODBC](ref.pdo-odbc.md) та [» Microsoft's SQL Server
ODBC Driver для
Linux](http://www.microsoft.com/download/en/details.aspx?idu003d28160).

## Зумовлені константи

Наведені нижче константи визначені даним драйвером і будуть
доступні лише у випадку, якщо PHP був зібраний за допомогою цього модуля,
або цей модуль був динамічно завантажений під час виконання.
До того ж, ці залежні від драйвера константи мають бути використані
тільки разом із цим драйвером. Використання атрибутів, специфічних
для деякого драйвера з іншим драйвером може спричинити несподіване
поведінка. Якщо ваш код виконується з кількома драйверами, можна
використовувати функцію [PDO::getAttribute()](pdo.getattribute.md) для
отримання атрибута **`PDO::ATTR_DRIVER_NAME`** для перевірки драйвера.

**`PDO::SQLSRV_TXN_READ_UNCOMMITTED`** (int)
Ця константа - допустиме значення для ключа TransactionIsolation
SQLSRV DSN. Встановлює рівень ізоляції транзакцій для з'єднання
значення Read Uncommitted.

**`PDO::SQLSRV_TXN_READ_COMMITTED`** (int)
Ця константа - допустиме значення для ключа TransactionIsolation
SQLSRV DSN. Встановлює рівень ізоляції транзакцій для з'єднання
значення Read Committed.

**`PDO::SQLSRV_TXN_REPEATABLE_READ`** (int)
Ця константа - допустиме значення для ключа TransactionIsolation
SQLSRV DSN. Встановлює рівень ізоляції транзакцій для з'єднання
значення Repeateable Read.

**`PDO::SQLSRV_TXN_SNAPSHOT`** (int)
Ця константа - допустиме значення для ключа TransactionIsolation
SQLSRV DSN. Встановлює рівень ізоляції транзакцій для з'єднання
значення Snapshot.

**`PDO::SQLSRV_TXN_SERIALIZABLE`** (int)
Ця константа - допустиме значення для ключа TransactionIsolation
SQLSRV DSN. Встановлює рівень ізоляції транзакцій для з'єднання
значення Serializable.

**`PDO::SQLSRV_ENCODING_BINARY`** (int)
Визначає, що дані відправляються/виходять у вигляді потоку байтів до/від
сервера без виконання перетворення кодування або іншого
перетворення. Константа може бути передана у функції
PDOStatement::setAttribute, PDO::prepare, PDOStatement::bindColumn та
PDOStatement::bindParam.

**`PDO::SQLSRV_ENCODING_SYSTEM`** (int)
Визначає, що дані відправляються/виходять до/від сервера в 8-бітній
кодування локалі Windows, встановленої у системі. Усі мультибайтові
символи та символи, що не перетворюються на це кодування, замінюються
символом питання (?). Константа може бути передана у функції
PDOStatement::setAttribute, PDO::setAttribute, PDO::prepare,
PDOStatement::bindColumn та PDOStatement::bindParam.

**`PDO::SQLSRV_ENCODING_UTF8`** (int)
Визначає, що дані відправляються/виходять до/від сервера в кодуванні
UTF-8. Константа може бути передана у функції
PDOStatement::setAttribute, PDO::setAttribute, PDO::prepare,
PDOStatement::bindColumn та PDOStatement::bindParam.

**`PDO::SQLSRV_ENCODING_DEFAULT`** (int)
Визначає, що дані відправляються/виходять до/від сервера згідно
значенню PDO::SQLSRV_ENCODING_SYSTEM, вказаному під час підключення. Для
підключення може використовуватися кодування, вказане під час підготовки
вирази. Константа може бути передана у функції
PDOStatement::setAttribute, PDO::setAttribute, PDO::prepare,
PDOStatement::bindColumn та PDOStatement::bindParam.

**`PDO::SQLSRV_ATTR_QUERY_TIMEOUT`** (int)
Негативне ціле число, що відображає час очікування в секундах.
Нуль (0) - це значення за промовчанням, що означає, що час очікування не
враховується. Константа може бути передана у функції
PDOStatement::setAttribute, PDO::setAttribute та PDO::prepare.

**`PDO::SQLSRV_ATTR_DIRECT_QUERY`** (int)
Показує, що запит має бути негайно виконаний, без підготовки
вирази. Константа може бути передана функції PDO::setAttribute і
PDO::prepare. За подробицями зверніться до розділу документації
[» Негайне виконання виразів та виконання підготовлених
виразів](http://msdn.microsoft.com/en-us/library/ff754356.aspx).

## Зміст

- [PDO_SQLSRV DSN](ref.pdo-sqlsrv.connection.md) — Підключення до
баз даних MS SQL Server та SQL Azure
