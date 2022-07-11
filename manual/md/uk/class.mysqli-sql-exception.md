- [« mysqli_warning::next](mysqli-warning.next.md)
- [mysqli_sql_exception::getSqlState
»](mysqli-sql-exception.getsqlstate.md)

- [PHP Manual](index.md)
- [MySQLi](book.mysqli.md)
- Клас mysqli_sql_exception

# Клас mysqli_sql_exception

(PHP 5, PHP 7, PHP 8)

## Вступ

Клас для обробки винятків mysqli.

## Огляд класів

final class **mysqli_sql_exception** extends
[RuntimeException](class.runtimeexception.md) {

/\* Властивості \*/

protected string `$sqlstate` u003d "00000";

/\* Методи \*/

public [getSqlState](mysqli-sql-exception.getsqlstate.md)(): string

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

`sqlstate`
Код sqlstate.

## Зміст

- [mysqli_sql_exception::getSqlState](mysqli-sql-exception.getsqlstate.md)
— Повертає код помилки SQLSTATE
