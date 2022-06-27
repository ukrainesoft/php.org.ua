- [« PDOStatement::fetchObject](pdostatement.fetchobject.md)
- [PDOStatement::getColumnMeta »](pdostatement.getcolumnmeta.md)

- [PHP Manual](index.md)
- [PDOStatement](class.pdostatement.md)
- Отримання атрибуту запиту PDOStatement

# PDOStatement::getAttribute

(PHP 5 u003d 5.1.0, PHP 7, PHP 8, PECL pdo u003d 0.2.0)

PDOStatement::getAttribute — Отримання атрибуту запиту
PDOStatement

### Опис

public **PDOStatement::getAttribute**(int `$name`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Отримує значення атрибута запиту. На даний момент не існує спільних
атрибути, є тільки характерними для конкретного драйвера:

- `PDO::ATTR_CURSOR_NAME` (для Firebird та ODBC): Отримання імені
курсора для запиту `UPDATE ... WHERE CURRENT OF`.

Зверніть увагу, що атрибути драйвера *не повинні* використовуватися
інші драйвери.

### Список параметрів

`name`
Атрибут для запиту.

### Значення, що повертаються

Повертає значення атрибуту.

### Дивіться також

- [PDO::getAttribute()](pdo.getattribute.md) - Отримати атрибут
з'єднання з базою даних
- [PDO::setAttribute()](pdo.setattribute.md) - Встановлення атрибута
- [PDOStatement::setAttribute()](pdostatement.setattribute.md) -
Встановлює атрибут об'єкту PDOStatement
