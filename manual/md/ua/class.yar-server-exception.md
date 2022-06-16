- [«Yar_Concurrent_Client::reset](yar-concurrent-client.reset.md)
- [Yar_Server_Exception::getType »](yar-server-exception.gettype.md)

- [PHP Manual](index.md)
- [Yar](book.yar.md)
- Клас Yar_Server_Exception

# Клас Yar_Server_Exception

(No version information available, might only be in Git)

## Вступ

Якщо сервіс викидає винятки, на стороні клієнта буде викинуто
виняток Yar_Server_Exception.

## Огляд класів

class **Yar_Server_Exception** extends [Exception](class.exception.md)
{

/\* Властивості \*/

protected `$_type`;

/\* Методи \*/

public [getType](yar-server-exception.gettype.md)(): string

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

`message`

`code`

`file`

`line`

`_type`

## Зміст

- [Yar_Server_Exception::getType](yar-server-exception.gettype.md) -
Отримати тип виключення
