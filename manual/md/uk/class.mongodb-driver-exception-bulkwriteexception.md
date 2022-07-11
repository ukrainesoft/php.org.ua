- [«
MongoDB\Driver\Exception\AuthenticationException](class.mongodb-driver-exception-authenticationexception.md)
- [MongoDB\Driver\Exception\CommandException
»](class.mongodb-driver-exception-commandexception.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Exception](mongodb.exceptions.md)
- Клас MongoDB\Driver\Exception\BulkWriteException

# Клас MongoDB\Driver\Exception\BulkWriteException

(mongodb \>u003d 1.0.0)

## Вступ

Викидається у разі невдалої масової операції запису.

## Огляд класів

class **MongoDB\Driver\Exception\BulkWriteException** extends
[MongoDB\Driver\Exception\WriteException](class.mongodb-driver-exception-writeexception.md)
implements
[MongoDB\Driver\Exception\Exception](class.mongodb-driver-exception-exception.md)
{

/\* Наслідувані властивості \*/

protected
[MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md)
`$writeResult`;

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
[MongoDB\Driver\Exception\WriteException::getWriteResult](mongodb-driver-writeexception.getwriteresult.md)():
[MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md)

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
