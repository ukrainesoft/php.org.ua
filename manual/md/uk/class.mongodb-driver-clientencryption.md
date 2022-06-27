- [«
MongoDB\Driver\Session::startTransaction](mongodb-driver-session.starttransaction.md)
- [MongoDB\Driver\ClientEncryption::\_\_construct
»](mongodb-driver-clientencryption.construct.md)

- [PHP Manual](index.md)
- [MongoDB\Driver](book.mongodb.md)
- Клас MongoDB\Driver\ClientEncryption

# Клас MongoDB\Driver\ClientEncryption

(mongodb \>u003d1.7.0)

## Вступ

Клас **MongoDB\Driver\ClientEncryption** обробляє як створення
ключів шифрування на стороні клієнта, так і ручне
шифрування/дешифрування.

## Огляд класів

final class **MongoDB\Driver\ClientEncryption** {

/\* Constants \*/

const string `AEAD_AES_256_CBC_HMAC_SHA_512_DETERMINISTIC` u003d
AEAD_AES_256_CBC_HMAC_SHA_512-Deterministic;

const string `AEAD_AES_256_CBC_HMAC_SHA_512_RANDOM` u003d
AEAD_AES_256_CBC_HMAC_SHA_512-Random;

const string `ALGORITHM_INDEXED` u003d Indexed;

const string `ALGORITHM_UNINDEXED` u003d Unindexed;

const int `QUERY_TYPE_EQUALITY` u003d 0;

/\* Методи \*/

final public
[\_\_construct](mongodb-driver-clientencryption.construct.md)(array
`$options`)

final public
[createDataKey](mongodb-driver-clientencryption.createdatakey.md)(string
`$kmsProvider`, array `$options` u003d ?):
[MongoDB\BSON\Binary](class.mongodb-bson-binary.md)

final public
[decrypt](mongodb-driver-clientencryption.decrypt.md)([MongoDB\BSON\Binary](class.mongodb-bson-binary.md)
`$value`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

final public
[encrypt](mongodb-driver-clientencryption.encrypt.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`, array `$options` u003d ?):
[MongoDB\BSON\Binary](class.mongodb-bson-binary.md)

}

## Зумовлені константи

**`MongoDB\Driver\ClientEncryption::AEAD_AES_256_CBC_HMAC_SHA_512_DETERMINISTIC`**
Визначає алгоритм для [» детермінованого
шифрування](https://www.mongodb.com/docs/manual/core/security-client-side-encryption/#deterministic-encryption),
який підходить для запитів.

**`MongoDB\Driver\ClientEncryption::AEAD_AES_256_CBC_HMAC_SHA_512_RANDOM`**
Визначає алгоритм для [» рандомізованого
шифрування](https://www.mongodb.com/docs/manual/core/security-client-side-encryption/#randomized-encryption).

**`MongoDB\Driver\ClientEncryption::ALGORITHM_INDEXED`**
Визначає алгоритм для індексованої, зашифрованої корисної
навантаження, яке може бути використане з шифруванням з можливістю
запиту.

Для додавання або запиту з індексованою, зашифрованою корисною
навантаженням [MongoDB\Driver\Manager](class.mongodb-driver-manager.md)
повинен бути налаштований з опцією драйвера `autoEncryption`. Опція
``bypassQueryAnalysis'' автоматичного шифрування може бути
встановлена як **`true`**. Параметр ``bypassAutoEncryption'`
автоматичного шифрування має бути **`false`**.

**`MongoDB\Driver\ClientEncryption::ALGORITHM_UNINDEXED`**
Вказує алгоритм для неіндексованої, зашифрованої корисної
навантаження.

**`MongoDB\Driver\ClientEncryption::QUERY_TYPE_EQUALITY`**
Визначає тип запиту рівності, що використовується у поєднанні з
**`MongoDB\Driver\ClientEncryption::ALGORITHM_INDEXED`**.

## Дивіться також

- [MongoDB\Driver\Manager::createClientEncryption()](mongodb-driver-manager.createclientencryption.md)

## Зміст

- [MongoDB\Driver\ClientEncryption::\_\_construct](mongodb-driver-clientencryption.construct.md)
— Створює новий об'єкт ClientEncryption
- [MongoDB\Driver\ClientEncryption::createDataKey](mongodb-driver-clientencryption.createdatakey.md)
— Створює ключ шифрування
- [MongoDB\Driver\ClientEncryption::decrypt](mongodb-driver-clientencryption.decrypt.md)
— Розшифрувати дані
- [MongoDB\Driver\ClientEncryption::encrypt](mongodb-driver-clientencryption.encrypt.md)
- Шифрує дані
