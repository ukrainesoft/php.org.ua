- [«SNMP::walk](snmp.walk.md)
- [Сокети »](book.sockets.md)

- [PHP Manual](index.md)
- [SNMP](book.snmp.md)
- Клас SNMPException

# Клас SNMPException

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

## Вступ

Представляє клас виключення, що викидається SNMP. Ви не повинні
викидати винятки **SNMPException** самостійно. Більш детально
про винятки в PHP читайте у розділі
[Винятки](language.exceptions.md).

## Огляд класів

class **SNMPException** extends
[RuntimeException](class.runtimeexception.md) {

/\* Властивості \*/

protected string `$code`;

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

`code`
Код помилки бібліотеки `SNMP`. Для його вилучення використовуйте
[Exception::getCode()](exception.getcode.md).
