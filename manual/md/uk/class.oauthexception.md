- [« OAuthProvider::tokenHandler](oauthprovider.tokenhandler.md)
- [SOAP »](book.soap.md)

- [PHP Manual](index.md)
- [OAuth](book.oauth.md)
- Клас OAuthException

# Клас OAuthException

(PECL OAuth u003d 0.99.1)

## Вступ

Це виняток викидається у разі виникнення помилок при
використання модуля OAuth і містить корисну налагоджувальну інформацію.

## Огляд класів

class **OAuthException** extends [Exception](class.exception.md) {

/\* Властивості \*/

public `$lastResponse`;

public `$debugInfo`;

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

`lastResponse`
Останній виняток, якщо такий є

`debugInfo`
