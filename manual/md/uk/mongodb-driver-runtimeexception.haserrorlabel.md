- [«
MongoDB\Driver\Exception\RuntimeException](class.mongodb-driver-exception-runtimeexception.md)
- [MongoDB\Driver\Exception\ServerException
»](class.mongodb-driver-exception-serverexception.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Exception\RuntimeException](class.mongodb-driver-exception-runtimeexception.md)
- Повертає, чи пов'язана мітка помилки за винятком

# MongoDB\Driver\Exception\RuntimeException::hasErrorLabel

(mongodb \>u003d 1.6.0)

MongoDB\Driver\Exception\RuntimeException::hasErrorLabel — Повертає,
чи пов'язана мітка помилки з винятком

### Опис

final public
**MongoDB\Driver\Exception\RuntimeException::hasErrorLabel**(string
`$errorLabel`): bool

Повертає, чи було встановлено "errorLabel" для цього виключення. Мітки
помилок встановлюються або сервером, або драйвером, щоб вказати
конкретні ситуації, в яких може знадобитися прийняти рішення про
спосіб обробки конкретного виключення. Такою ситуацією може бути в
перевірці, чи можна безпечно повторити транзакцію, яка не вдалася
через тимчасову помилку (наприклад, проблеми з мережею або конфлікт
транзакцій). Прикладами позначок помилок є `TransientTransactionError`
і `UnknownTransactionCommitResult`.

### Список параметрів

`errorLabel`
Назва `errorLabel` для перевірки.

### Значення, що повертаються

Чи пов'язане передане значення параметра `errorLabel` з відповідним
винятком.

### Дивіться також

- [MongoDB\Driver\Session::commitTransaction()](mongodb-driver-session.committransaction.md) -
Фіксує транзакцію
- [» Документація MongoDB по
транзакцій](https://www.mongodb.com/docs/manual/core/transactions/)
