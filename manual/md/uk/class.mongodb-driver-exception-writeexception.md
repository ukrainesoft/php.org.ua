- [«
MongoDB\Driver\Exception\UnexpectedValueException](class.mongodb-driver-exception-unexpectedvalueexception.md)
- [MongoDB\Driver\Exception\WriteException::getWriteResult
»](mongodb-driver-writeexception.getwriteresult.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Exception](mongodb.exceptions.md)
- Клас MongoDB\Driver\Exception\WriteException

# Клас MongoDB\Driver\Exception\WriteException

(mongodb \>u003d 1.0.0)

## Вступ

Базовий клас для винятків, спричинених невдалою операцією запису. Це
виняток містить об'єкт
[MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md).

## Огляд класів

abstract class **MongoDB\Driver\Exception\WriteException** extends
[MongoDB\Driver\Exception\ServerException](class.mongodb-driver-exception-serverexception.md)
implements
[MongoDB\Driver\Exception\Exception](class.mongodb-driver-exception-exception.md)
{

/\* Властивості \*/

protected
[MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md)
`$writeResult`;

/\* Наслідувані властивості \*/

protected ?array `$errorLabels`;

protected string `$message` u003d "";

private string `$string` u003d "";

protected int `$code`;

protected string `$file` u003d "";

protected int `$line`;

private array `$trace` u003d \[\];

private ?[Throwable](class.throwable.md) `$previous` u003d null;

/\* Методи \*/

final public
[getWriteResult](mongodb-driver-writeexception.getwriteresult.md)():
[MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md)

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

## Властивості

`writeResult`
Об'єкт
[MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md),
пов'язаний із невдалою операцією запису.

## Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ---|
| PECL mongodb 1.5.0 Тепер клас успадковується від [MongoDB\Driver\Exception\ServerException](class.mongodb-driver-exception-serverexception.md) замість [MongoDB\Driver\Exception\RuntimeException](class.mongodb-driver-exception-runtimeexception.md). |

## Зміст

- [MongoDB\Driver\Exception\WriteException::getWriteResult](mongodb-driver-writeexception.getwriteresult.md)
— Повертає WriteResult для операції запису помилкою, що закінчилася.
