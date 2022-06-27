- [« Yar_Client::setOpt](yar-client.setopt.md)
- [Yar_Concurrent_Client::call »](yar-concurrent-client.call.md)

- [PHP Manual](index.md)
- [Yar](book.yar.md)
- Клас Yar_Concurrent_Client

# Клас Yar_Concurrent_Client

(No version information available, might only be in Git)

## Вступ

## Огляд класів

class **Yar_Concurrent_Client** {

/\* Властивості \*/

static `$_callstack`;

static `$_callback`;

static `$_error_callback`;

/\* Методи \*/

public static [call](yar-concurrent-client.call.md)(
string `$uri`,
string `$method`,
array `$parameters` u003d ?,
[callable](language.types.callable.md) `$callback` u003d ?,
[callable](language.types.callable.md) `$error_callback` u003d ?,
array `$options` u003d ?
): int

public static
[loop](yar-concurrent-client.loop.md)([callable](language.types.callable.md)
`$callback` u003d ?, [callable](language.types.callable.md)
`$error_callback` u003d ?): bool

public static [reset](yar-concurrent-client.reset.md)(): bool

}

## Властивості

`_callstack`

`_callback`

`_error_callback`

## Зміст

- [Yar_Concurrent_Client::call](yar-concurrent-client.call.md)
Зареєструвати конкурентний виклик
- [Yar_Concurrent_Client::loop](yar-concurrent-client.loop.md)
Запуск усіх зареєстрованих викликів
- [Yar_Concurrent_Client::reset](yar-concurrent-client.reset.md)
Очистити всі зареєстровані дзвінки
