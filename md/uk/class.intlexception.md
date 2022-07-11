- [« IntlChar::toupper](intlchar.toupper.md)
- [IntlIterator »](class.intliterator.md)

- [PHP Manual](index.md)
- [intl](book.intl.md)
- Клас винятків для помилок intl

# Клас винятків для помилок intl

(PHP 5\>5.5.0, PHP 7, PHP 8, PECL intl\>3.0.0a1)

## Вступ

Цей клас служить для виклику винятків у разі виникнення помилки
функціях intl. Ці винятки можуть бути викинуті лише якщо
включена опція
[intl.use_exceptions](intl.configuration.md#ini.intl.use-exceptions).

## Огляд класів

class **IntlException** extends [Exception](class.exception.md) {

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
