- [«JsonException](class.jsonexception.md)
- [JsonSerializable::jsonSerialize
»](jsonserializable.jsonserialize.md)

- [PHP Manual](index.md)
- [JSON](book.json.md)
- Інтерфейс JsonSerializable

# Інтерфейс JsonSerializable

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

## Вступ

Об'єкти, що реалізують інтерфейс **JsonSerializable**, можуть
модифікувати своє JSON-подання при кодуванні за допомогою
[json_encode()](function.json-encode.md).

## Огляд інтерфейсів

interface **JsonSerializable** {

/\* Методи \*/

public [jsonSerialize](jsonserializable.jsonserialize.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

}

## Зміст

- [JsonSerializable::jsonSerialize](jsonserializable.jsonserialize.md)
— Задає дані, які мають бути серіалізовані у JSON
