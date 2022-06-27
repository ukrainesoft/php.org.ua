- [« PDOStatement::rowCount](pdostatement.rowcount.md)
- [PDOStatement::setFetchMode »](pdostatement.setfetchmode.md)

- [PHP Manual](index.md)
- [PDOStatement](class.pdostatement.md)
- Встановлює атрибут об'єкту PDOStatement

# PDOStatement::setAttribute

(PHP 5 u003d 5.1.0, PHP 7, PHP 8, PECL pdo u003d 0.2.0)

PDOStatement::setAttribute — Встановлює атрибут об'єкту PDOStatement

### Опис

public **PDOStatement::setAttribute**(int `$attribute`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

Задає атрибут об'єкта PDOStatement. На даний момент жодних спільних
атрибутів встановлювати не можна, лише характерні для конкретного
драйвера:

- `PDO::ATTR_CURSOR_NAME` (для Firebird та ODBC): Вказує ім'я курсора
для запитів виду `UPDATE ... WHERE CURRENT OF`.

Зверніть увагу, що атрибути драйвера *не повинні* використовуватися
інші драйвери.

### Список параметрів

`attribute`
Атрибут зміни.

`value`
Значення для установки параметра `attribute` може вимагати
певного типу, залежно від атрибута.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [PDO::getAttribute()](pdo.getattribute.md) - Отримати атрибут
з'єднання з базою даних
- [PDO::setAttribute()](pdo.setattribute.md) - Встановлення атрибута
- [PDOStatement::getAttribute()](pdostatement.getattribute.md) -
Отримання атрибуту запиту PDOStatement
