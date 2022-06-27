- [«EventDnsBase::setSearchNdots](eventdnsbase.setsearchndots.md)
- [EventHttp::accept »](eventhttp.accept.md)

- [PHP Manual](index.md)
- [Event] (book.event.md)
- Клас EventHttp

# Клас EventHttp

(PECL event \>u003d 1.4.0-beta)

## Вступ

Надає сервер HTTP.

## Огляд класів

final class **EventHttp** {

/\* Методи \*/

public [accept](eventhttp.accept.md)(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$socket` ): bool

public [addServerAlias](eventhttp.addserveralias.md)( string `$alias`
): bool

public [bind](eventhttp.bind.md)( string `$address` , int `$port` ):
void

public [\_\_construct](eventhttp.construct.md)(
[EventBase](class.eventbase.md) `$base` ,
[EventSslContext](class.eventsslcontext.md) `$ctx` u003d **`null`** )

public [removeServerAlias](eventhttp.removeserveralias.md)( string
`$alias` ): bool

public [setAllowedMethods](eventhttp.setallowedmethods.md)( int
`$methods` ): void

public [setCallback](eventhttp.setcallback.md)( string `$path` ,
string `$cb` , string `$arg` u003d ?): void

public [setDefaultCallback](eventhttp.setdefaultcallback.md)( string
`$cb` , string `$arg` u003d ?): void

public [setMaxBodySize](eventhttp.setmaxbodysize.md)( int `$value` ):
void

public [setMaxHeadersSize](eventhttp.setmaxheaderssize.md)( int
$value ): void

public [setTimeout](eventhttp.settimeout.md)( int `$value` ): void

}

## Зміст

- [EventHttp::accept](eventhttp.accept.md) — Примушує HTTP-сервер
приймати з'єднання із зазначеним потоком сокету або ресурсом
- [EventHttp::addServerAlias](eventhttp.addserveralias.md) -
Додає псевдонім сервера до об'єкта HTTP-сервера
- [EventHttp::bind](eventhttp.bind.md) — Прив'язує HTTP-сервер до
вказаною адресою та портом
- [EventHttp::\_\_construct](eventhttp.construct.md) - Створює
об'єкт EventHttp (HTTP-сервер)
- [EventHttp::removeServerAlias](eventhttp.removeserveralias.md) -
Видаляє псевдонім сервера
- [EventHttp::setAllowedMethods](eventhttp.setallowedmethods.md) -
Встановлює, які методи HTTP підтримуються у запитах, прийнятих
цим сервером і переданих callback-функції користувача
- [EventHttp::setCallback](eventhttp.setcallback.md) — Встановлює
callback-функцію для зазначеного URI
- [EventHttp::setDefaultCallback](eventhttp.setdefaultcallback.md) -
Встановлює callback-функцію за замовчуванням для обробки запитів,
які не перехоплюються конкретними callback-функціями
- [EventHttp::setMaxBodySize](eventhttp.setmaxbodysize.md) -
Встановлює максимальний розмір запиту
- [EventHttp::setMaxHeadersSize](eventhttp.setmaxheaderssize.md) -
Встановлює максимальний розмір заголовка HTTP
- [EventHttp::setTimeout](eventhttp.settimeout.md) — Встановлює
час очікування для HTTP-запиту
