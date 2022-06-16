- [«Win32 Service
informations](win32service.constants.serviceinfos.md)
- [Приклади »](win32service.examples.md)

- [PHP Manual](index.md)
- [win32service](book.win32service.md)
- Клас Win32ServiceException

# Клас Win32ServiceException

(PECL win32service \>u003d1.0.0)

## Вступ

Виняток замінює старий механізм, у якому значення помилки потрібне
було порівнювати із константами, щоб визначити помилку. Код виключення
дорівнює значенню помилки, а повідомлення про виключення ґрунтується на
відповідного імені константи.

## Огляд класів

class **Win32ServiceException** extends
[Exception](class.exception.md) {

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
