- [«
MongoDB\Driver\Exception\ConnectionException](class.mongodb-driver-exception-connectionexception.md)
- [MongoDB\Driver\Exception\EncryptionException
»](class.mongodb-driver-exception-encryptionexception.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Exception](mongodb.exceptions.md)
- Клас MongoDB\Driver\Exception\ConnectionTimeoutException

# Клас MongoDB\Driver\Exception\ConnectionTimeoutException

(mongodb \>u003d 1.0.0)

## Вступ

Викидається, коли драйвер не вдається встановити з'єднання з базою
даних протягом певного періоду часу
([connectTimeoutMS](mongodb-driver-manager.construct.md#mongodb-driver-manager.construct-urioptions)).
або вибір сервера не вдався
([serverSelectionTimeoutMS](mongodb-driver-manager.construct.md#mongodb-driver-manager.construct-urioptions)).

## Огляд класів

final class **MongoDB\Driver\Exception\ConnectionTimeoutException**
extends
[MongoDB\Driver\Exception\ConnectionException](class.mongodb-driver-exception-connectionexception.md)
implements
[MongoDB\Driver\Exception\Exception](class.mongodb-driver-exception-exception.md)
{

/\* Наслідувані властивості \*/

protected ?array `$errorLabels`;

protected string `$message` u003d "";

private string `$string` u003d "";

protected int `$code`;

protected string `$file` u003d "";

protected int `$line`;

private array `$trace` u003d \[\];

private ?[Throwable](class.throwable.md) `$previous` u003d null;

/\* Наслідувані методи \*/

final public
[MongoDB\Driver\Exception\RuntimeException::hasErrorLabel](mongodb-driver-runtimeexception.haserrorlabel.md)(string
`$errorLabel`): bool

final public [Exception::getMessage](exception.getmessage.md)():
string

final public [Exception::getPrevious](exception.getprevious.md)():
?[Throwable](class.throwable.md)

final public [Exception::getCode](exception.getcode.md)(): int

final public [Exception::getFile](exception.getfile.md)(): string

final public [Exception::getLine](exception.getline.md)(): int

final public [Exception::getTrace](exception.gettrace.md)(): array

final public
[Exception::getTraceAsString](exception.gettraceasstring.md)(): string

public [Exception::\_\_toString](exception.tostring.md)(): string

private [Exception::\_\_clone](exception.clone.md)(): void

}
