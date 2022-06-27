- [«
MongoDB\Driver\Exception\ServerException](class.mongodb-driver-exception-serverexception.md)
- [MongoDB\Driver\Exception\UnexpectedValueException
»](class.mongodb-driver-exception-unexpectedvalueexception.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Exception](mongodb.exceptions.md)
- Клас MongoDB\Driver\Exception\SSLConnectionException (застарілий)

# Клас MongoDB\Driver\Exception\SSLConnectionException (застарілий)

(mongodb \>u003d 1.0.0)

**Увага**

Цей клас винятків застарів і може бути вилучений у майбутній основний
версії. Драйвер ніколи не викине цей виняток.

## Вступ

Викидається, коли драйверу не вдається встановити з'єднання SSL з
сервером.

## Огляд класів

final class **MongoDB\Driver\Exception\SSLConnectionException** extends
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
