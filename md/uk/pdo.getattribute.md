- [« PDO::exec](pdo.exec.md)
- [PDO::getAvailableDrivers »](pdo.getavailabledrivers.md)

- [PHP Manual](index.md)
- [PDO](class.pdo.md)
- Отримати атрибут з'єднання з базою даних

# PDO::getAttribute

(PHP 5 u003d 5.1.0, PHP 7, PHP 8, PECL pdo u003d 0.2.0)

PDO::getAttribute — Отримати атрибут з'єднання з базою даних

### Опис

public **PDO::getAttribute**(int `$attribute`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Ця функція повертає значення атрибута з'єднання з базою даних.
Щоб отримати атрибути PDOStatement, зверніться до
[PDOStatement::getAttribute()](pdostatement.getattribute.md).

Зверніть увагу, що деякі комбінації баз даних/драйверів можуть
не підтримувати всі атрибути з'єднання з базою даних.

### Список параметрів

`attribute`
Одні з `PDO::ATTR_*` констант. Наступні загальні атрибути застосовуються
для з'єднань з базами даних:

- `PDO::ATTR_AUTOCOMMIT`
- `PDO::ATTR_CASE`
- `PDO::ATTR_CLIENT_VERSION`
- `PDO::ATTR_CONNECTION_STATUS`
- `PDO::ATTR_DRIVER_NAME`
- `PDO::ATTR_ERRMODE`
- `PDO::ATTR_ORACLE_NULLS`
- `PDO::ATTR_PERSISTENT`
- `PDO::ATTR_PREFETCH`
- `PDO::ATTR_SERVER_INFO`
- `PDO::ATTR_SERVER_VERSION`
- `PDO::ATTR_TIMEOUT`

Деякі драйвери можуть використовувати власні додаткові
атрибути. Зверніть увагу, що атрибути драйвера *не повинні*
використовуватись з іншими драйверами.

### Значення, що повертаються

Успішний виклик повертає значення запитаного атрибута PDO.
Невдалий виклик повертає `null`.

### Приклади

**Приклад #1 Отримання атрибутів з'єднання з базою даних**

` <?php$conn u003d new PDO('odbc:sample', 'db2inst1', 'ibmdb2');$attributes u003darray(    "AUTOCOMMIT", "ERRMODE", "CASE", C "ORACLE_NULLS", "PERSISTENT", "PREFETCH", "SERVER_INFO", "SERVER_VERSION",   "TIMEOUT");foreach ($attributes as $val) {     echo "; echo $conn->getAttribute(constant("PDO::ATTR_$val")) . "
";}?> `

### Дивіться також

- [PDO::setAttribute()](pdo.setattribute.md) - Встановлення атрибута
- [PDOStatement::getAttribute()](pdostatement.getattribute.md) -
Отримання атрибуту запиту PDOStatement
- [PDOStatement::setAttribute()](pdostatement.setattribute.md) -
Встановлює атрибут об'єкту PDOStatement
