- [«
MongoDB\Driver\ClientEncryption::\_\_construct](mongodb-driver-clientencryption.construct.md)
- [MongoDB\Driver\ClientEncryption::decrypt
»](mongodb-driver-clientencryption.decrypt.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\ClientEncryption](class.mongodb-driver-clientencryption.md)
- Створює ключ шифрування

# MongoDB\Driver\ClientEncryption::createDataKey

(mongodb \>u003d1.7.0)

MongoDB\Driver\ClientEncryption::createDataKey — Створює ключ шифрування

### Опис

final public **MongoDB\Driver\ClientEncryption::createDataKey**(string
`$kmsProvider`, array `$options` u003d ?):
[MongoDB\BSON\Binary](class.mongodb-bson-binary.md)

Створює новий документ із ключем шифрування та кладе його в колекцію
сховища ключів.

### Список параметрів

`kmsProvider`
Провайдер KMS (``local'`, ``aws``, ``azure'`, ``gcp''), який буде
використовуватись для шифрування нового ключа.

`options`
[TABLE]

**Опції**

### Значення, що повертаються

Повертає ідентифікатор нового ключа як об'єкт
[MongoDB\BSON\Binary](class.mongodb-bson-binary.md) з підтипом 4
(UUID).

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- кидає виняток
[MongoDB\Driver\Exception\EncryptionException](class.mongodb-driver-exception-encryptionexception.md)
якщо в процесі створення ключа сталася помилка

### Список змін

| Версія | Опис |
|---------------------|---------------------------- -------------------------------------------------- --------------------|
| PECL mongodb 1.10.0 | Як постачальники KMS для шифрування на стороні клієнта тепер підтримуються Azure та GCP. |
