- [« PDOStatement::setFetchMode](pdostatement.setfetchmode.md)
- [Драйвери PDO »](pdo.drivers.md)

- [PHP Manual](index.md)
- [PDO](book.pdo.md)
- Клас PDOException

# Клас PDOException

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

## Вступ

Помилка, викликана PDO. Вам не слід викидати
виняток **PDOException** зі свого коду. Для додаткової
інформації про винятки в PHP дивіться розділ
[Винятки](language.exceptions.md).

## Огляд класів

class **PDOException** extends
[RuntimeException](class.runtimeexception.md) {

/\* Властивості \*/

protected int\|string `$code`;

public ?array `$errorInfo` u003d null;

/\* Наслідувані властивості \*/

protected string `$message` u003d "";

private string `$string` u003d "";

protected int `$code`;

protected string `$file` u003d "";

protected int `$line`;

private array `$trace` u003d \[\];

private ?[Throwable](class.throwable.md) `$previous` u003d null;

/\* Наслідувані методи \*/

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

`errorInfo`
Відповідає [PDO::errorInfo()](pdo.errorinfo.md) або
[PDOStatement::errorInfo()](pdostatement.errorinfo.md)

`code`
Код помилки `SQLSTATE`. Щоб його отримати, використовуйте
[Exception::getCode()](exception.getcode.md).
