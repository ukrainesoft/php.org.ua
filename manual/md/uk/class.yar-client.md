- [« Yar_Server::handle](yar-server.handle.md)
- [Yar_Client::\_\_call »](yar-client.call.md)

- [PHP Manual](index.md)
- [Yar](book.yar.md)
- Клас Yar_Client

# Клас Yar_Client

(No version information available, might only be in Git)

## Вступ

## Огляд класів

class **Yar_Client** {

/\* Властивості \*/

protected `$_protocol`;

protected `$_uri`;

protected `$_options`;

protected `$_running`;

/\* Методи \*/

public [\_\_call](yar-client.call.md)(string `$method`, array
`$parameters`): void

final public [\_\_construct](yar-client.construct.md)(string `$url`,
array `$options` u003d ?)

public [setOpt](yar-client.setopt.md)(int `$name`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): [Yar_Client](class.yar-client.md)\|false

}

## Властивості

`_protocol`

`_uri`

`_options`

`_running`

## Зміст

- [Yar_Client::\_\_call](yar-client.call.md) - Виклик сервісу
- [Yar_Client::\_\_construct](yar-client.construct.md) - Конструктор
Yar_Client
- [Yar_Client::setOpt](yar-client.setopt.md) — Задати контекст
виклику
