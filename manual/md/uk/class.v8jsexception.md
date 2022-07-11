- [« V8Js::registerExtension](v8js.registerextension.md)
- [V8JsException::getJsFileName »](v8jsexception.getjsfilename.md)

- [PHP Manual](index.md)
- [V8js](book.v8js.md)
- Клас V8JsException

# Клас [V8JsException](class.v8jsexception.md)

(PECL v8js \>u003d 0.1.0)

## Вступ

## Огляд класів

class **V8JsException** extends [Exception](class.exception.md) {

/\* Властивості \*/

protected `$JsFileName`;

protected `$JsLineNumber`;

protected `$JsSourceLine`;

protected `$JsTrace`;

/\* Наслідувані властивості \*/

protected string `$message` u003d "";

private string `$string` u003d "";

protected int `$code`;

protected string `$file` u003d "";

protected int `$line`;

private array `$trace` u003d \[\];

private ?[Throwable](class.throwable.md) `$previous` u003d null;

/\* Методи \*/

final public [getJsFileName](v8jsexception.getjsfilename.md)(): string

final public [getJsLineNumber](v8jsexception.getjslinenumber.md)():
int

final public [getJsSourceLine](v8jsexception.getjssourceline.md)():
string

final public [getJsTrace](v8jsexception.getjstrace.md)(): string

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

`JsFileName`

`JsLineNumber`

`JsSourceLine`

`JsTrace`

## Зміст

- [V8JsException::getJsFileName](v8jsexception.getjsfilename.md) -
Отримати ім'я JavaScript
- [V8JsException::getJsLineNumber](v8jsexception.getjslinenumber.md)
— Отримати номер рядка
- [V8JsException::getJsSourceLine](v8jsexception.getjssourceline.md)
— Отримати вихідний рядок JavaScript
- [V8JsException::getJsTrace](v8jsexception.getjstrace.md) -
Отримати стек викликів
