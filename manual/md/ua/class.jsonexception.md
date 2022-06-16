- [«Зумовлені константи](json.constants.md)
- [JsonSerializable »](class.jsonserializable.md)

- [PHP Manual](index.md)
- [JSON](book.json.md)
- Клас JsonException

# Клас JsonException

(PHP 7 \>u003d 7.3.0, PHP 8)

## Вступ

Цей виняток викидається, якщо опція **`JSON_THROW_ON_ERROR`**
встановлена для функції [json_encode()](function.json-encode.md) або
[json_decode()](function.json-decode.md). `code` містить тип помилки,
дивіться можливі значення
[json_last_error()](function.json-last-error.md).

## Огляд класів

class **JsonException** extends [Exception](class.exception.md) {

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
