- [«Великі об'єкти (LOB)](pdo.lobs.md)
- [PDO::beginTransaction »](pdo.begintransaction.md)

- [PHP Manual](index.md)
- [PDO](book.pdo.md)
- Клас PDO

# Клас PDO

(PHP 5 u003d 5.1.0, PHP 7, PHP 8, PECL pdo u003d 0.1.0)

## Вступ

З'єднання між PHP і сервером бази даних.

## Огляд класів

class **PDO** {

/\* Методи \*/

public [\_\_construct](pdo.construct.md)(
string `$dsn`,
?string `$username` u003d **`null`**,
?string `$password` u003d **`null`**,
?array `$options` u003d **`null`**
)

public [beginTransaction](pdo.begintransaction.md)(): bool

public [commit](pdo.commit.md)(): bool

public [errorCode](pdo.errorcode.md)(): ?string

public [errorInfo](pdo.errorinfo.md)(): array

public [exec](pdo.exec.md)(string `$statement`): int\|false

public [getAttribute](pdo.getattribute.md)(int `$attribute`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public static [getAvailableDrivers](pdo.getavailabledrivers.md)():
array

public [inTransaction](pdo.intransaction.md)(): bool

public [lastInsertId](pdo.lastinsertid.md)(?string `$name` u003d
**`null`**): string\|false

public [prepare](pdo.prepare.md)(string `$query`, array `$options` u003d
\[\]): [PDOStatement](class.pdostatement.md)\|false

public [query](pdo.query.md)(string `$query`, ?int `$fetchMode` u003d
**`null`**): [PDOStatement](class.pdostatement.md)\|false

public [query](pdo.query.md)(string `$query`, ?int `$fetchMode` u003d
PDO::FETCH_COLUMN, int `$colno`):
[PDOStatement](class.pdostatement.md)\|false

public [query](pdo.query.md)(
string `$query`,
?int `$fetchMode` u003d PDO::FETCH_CLASS,
string `$classname`,
array `$constructorArgs`
): [PDOStatement](class.pdostatement.md)\|false

public [query](pdo.query.md)(string `$query`, ?int `$fetchMode` u003d
PDO::FETCH_INTO, object `$object`):
[PDOStatement](class.pdostatement.md)\|false

public [quote](pdo.quote.md)(string `$string`, int `$type` u003d
PDO::PARAM_STR): string\|false

public [rollBack](pdo.rollback.md)(): bool

public [setAttribute](pdo.setattribute.md)(int `$attribute`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

}

## Зміст

- [PDO::beginTransaction](pdo.begintransaction.md) - Ініціалізація
транзакції
- [PDO::commit](pdo.commit.md) - Фіксує транзакцію
- [PDO::\_\_construct](pdo.construct.md) - Створює екземпляр PDO,
що надає з'єднання з базою даних
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
- [PDO::inTransaction](pdo.intransaction.md) — Перевіряє, чи розпочато
транзакція
- [PDO::lastInsertId](pdo.lastinsertid.md) - Повертає ID останньої
вставленого рядка або значення послідовності
- [PDO::prepare](pdo.prepare.md) — Підготовка запиту до
виконання та повертає пов'язаний з цим запитом об'єкт
- [PDO::query](pdo.query.md) — Підготовка та виконання виразу
SQL без наповнювачів
- [PDO::quote](pdo.quote.md) — Укладає рядок у лапки для
використання у запиті
- [PDO::rollBack](pdo.rollback.md) - Відкат транзакції
- [PDO::setAttribute](pdo.setattribute.md) — Встановлення атрибута
