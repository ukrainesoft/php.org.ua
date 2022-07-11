- [« Exception::\_\_clone](exception.clone.md)
- [ErrorException::\_\_construct »](errorexception.construct.md)

- [PHP Manual](index.md)
- [Предвизначені винятки](reserved.exceptions.md)
- ErrorException

#ErrorException

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

## Вступ

Виняток у разі виникнення помилки.

## Огляд класів

class **ErrorException** extends [Exception](class.exception.md) {

/\* Властивості \*/

protected int `$severity` u003d E_ERROR;

/\* Наслідувані властивості \*/

protected string `$message` u003d "";

private string `$string` u003d "";

protected int `$code`;

protected string `$file` u003d "";

protected int `$line`;

private array `$trace` u003d \[\];

private ?[Throwable](class.throwable.md) `$previous` u003d null;

/\* Методи \*/

public [\_\_construct](errorexception.construct.md)(
string `$message` u003d "",
int `$code` u003d 0,
int `$severity` u003d **`E_ERROR`**,
?string `$filename` u003d **`null`**,
?int `$line` u003d **`null`**,
?[Throwable](class.throwable.md) `$previous` u003d **`null`**
)

final public [getSeverity](errorexception.getseverity.md)(): int

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

`severity`
Серйозність виключення

## Приклади

**Приклад #1 Використання
[set_error_handler()](function.set-error-handler.md) для зміни
повідомлень про помилки в ErrorException.**

`<?phpfunction exception_error_handler($severity, $message, $file, $line) {   if (!(error_reporting() & $severity))    |       }   throw new ErrorException($message, 0,$severity, $file, $line);}set_error_handler("exception_error_handler");/* викликаємо виключення */strpos();?> `

Результатом виконання цього прикладу буде щось подібне:

Випадковий error: Відповідь про exception 'ErrorException' with message 'strpos() expects at least 2 parameters, 0 given' in /home/bjori/tmp/ex.php:12
Stack trace:
#0 [internal function]: exception_error_handler(2, 'strpos() expect...', '/home/bjori/php...', 12, Array)
#1 /home/bjori/php/cleandocs/test.php(12): strpos()
#2 {main}
thrown in /home/bjori/tmp/ex.php on line 12

## Зміст

- [ErrorException::\_\_construct](errorexception.construct.md) -
Створює виняток
- [ErrorException::getSeverity](errorexception.getseverity.md) -
Отримує серйозність виключення
