- [« PDO::getAvailableDrivers](pdo.getavailabledrivers.md)
- [PDO::lastInsertId »](pdo.lastinsertid.md)

- [PHP Manual](index.md)
- [PDO](class.pdo.md)
- Перевіряє, чи розпочато транзакцію

# PDO::inTransaction

(PHP 5 \>u003d 5.3.3, Bundled pdo_pgsql, PHP 7, PHP 8)

PDO::inTransaction — Перевіряє, чи розпочато транзакцію

### Опис

public **PDO::inTransaction**(): bool

Перевіряє, чи активна транзакція в драйвері. Цей метод
працює тільки для драйверів баз даних, які підтримують
транзакції.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо транзакція на даний момент активна та
**`false`**, якщо ні.
