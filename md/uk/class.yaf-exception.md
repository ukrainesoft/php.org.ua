- [« Yaf_Session::valid](yaf-session.valid.md)
- [Yaf_Exception::\_\_construct »](yaf-exception.construct.md)

- [PHP Manual](index.md)
- [Yaf](book.yaf.md)
- Клас Yaf_Exception

# Клас Yaf_Exception

(Yaf \>u003d1.0.0)

## Вступ

## Огляд класів

class **Yaf_Exception** extends [Exception](class.exception.md) {

/\* Наслідувані властивості \*/

protected string `$message` u003d "";

private string `$string` u003d "";

protected int `$code`;

protected string `$file` u003d "";

protected int `$line`;

private array `$trace` u003d \[\];

private ?[Throwable](class.throwable.md) `$previous` u003d null;

/\* Методи \*/

public [\_\_construct](yaf-exception.construct.md)()

public [getPrevious](yaf-exception.getprevious.md)(): void

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

## Зміст

- [Yaf_Exception::\_\_construct](yaf-exception.construct.md) -
Конструктор класу Yaf_Exception
- [Yaf_Exception::getPrevious](yaf-exception.getprevious.md) -
Отримати попередній виняток
