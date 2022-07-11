- [«
MongoDB\Driver\Exception\WriteException::getWriteResult](mongodb-driver-writeexception.getwriteresult.md)
- [MySQL »](set.mysqlinfo.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Exception](mongodb.exceptions.md)
- MongoDB Exception Class Tree

# MongoDB Exception Class Tree

Class hierarchy for MongoDB exceptions is modeled after that of the
[SPL Exceptions](spl.exceptions.md). Base classes extend their SPL
counterpart and all exception classes в the extension implement the
[MongoDB\Driver\Exception\Exception](class.mongodb-driver-exception-exception.md)
interface.

- [MongoDB\Driver\Exception\LogicException](class.mongodb-driver-exception-logicexception.md)
(extends [LogicException](class.logicexception.md))
- [MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md)
(extends
[InvalidArgumentException](class.invalidargumentexception.md))
- [MongoDB\Driver\Exception\UnexpectedValueException](class.mongodb-driver-exception-unexpectedvalueexception.md)
(extends
[UnexpectedValueException](class.unexpectedvalueexception.md))
- [MongoDB\Driver\Exception\RuntimeException](class.mongodb-driver-exception-runtimeexception.md)
(extends [RuntimeException](class.runtimeexception.md))
- [MongoDB\Driver\Exception\ConnectionException](class.mongodb-driver-exception-connectionexception.md)
- [MongoDB\Driver\Exception\AuthenticationException](class.mongodb-driver-exception-authenticationexception.md)
- [MongoDB\Driver\Exception\ConnectionTimeoutException](class.mongodb-driver-exception-connectiontimeoutexception.md)
- [MongoDB\Driver\Exception\SSLConnectionException](class.mongodb-driver-exception-sslconnectionexception.md)
(deprecated)
- [MongoDB\Driver\Exception\EncryptionException](class.mongodb-driver-exception-encryptionexception.md)
- [MongoDB\Driver\Exception\ServerException](class.mongodb-driver-exception-serverexception.md)
- [MongoDB\Driver\Exception\CommandException](class.mongodb-driver-exception-commandexception.md)
- [MongoDB\Driver\Exception\ExecutionTimeoutException](class.mongodb-driver-exception-executiontimeoutexception.md)
- [MongoDB\Driver\Exception\WriteException](class.mongodb-driver-exception-writeexception.md)
- [MongoDB\Driver\Exception\BulkWriteException](class.mongodb-driver-exception-bulkwriteexception.md)
