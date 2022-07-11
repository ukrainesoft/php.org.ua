- [« Про callback-функції подієвого
буфера](eventbufferevent.about.callbacks.md)
- [EventConfig::avoidMethod »](eventconfig.avoidmethod.md)

- [PHP Manual](index.md)
- [Event] (book.event.md)
- Клас EventConfig

# Клас EventConfig

(PECL event \>u003d 1.2.6-beta)

## Вступ

Представляє структуру, яку можна використовувати під час створення
[EventBase](class.eventbase.md) .

## Огляд класів

final class **EventConfig** {

/\* Константи \*/

const int `FEATURE_ET` u003d 1;

const int `FEATURE_O1` u003d 2;

const int `FEATURE_FDS` u003d 4;

/\* Методи \*/

public [avoidMethod](eventconfig.avoidmethod.md)( string `$method` ):
bool

public [\_\_construct](eventconfig.construct.md)()

public [requireFeatures](eventconfig.requirefeatures.md)( int
`$feature` ): bool

public [setFlags](eventconfig.setflags.md)( int `$flags` ): bool

public
[setMaxDispatchInterval](eventconfig.setmaxdispatchinterval.md)( int
`$max_interval` , int `$max_callbacks` , int `$min_priority` ): void

}

## Зумовлені константи

**`EventConfig::FEATURE_ET`**
Потрібен метод бекенда, що підтримує одноразове спрацювання при
тривалої події (edge-triggered I/O).

**`EventConfig::FEATURE_O1`**
Потрібен метод бекенда, для якого видалення, додавання або
перемикання події на активний статус має складність O(1).

**`EventConfig::FEATURE_FDS`**
Потрібний метод бекенда, що підтримує звичайні файлові дескриптори, а
не лише сокети.

## Зміст

- [EventConfig::avoidMethod](eventconfig.avoidmethod.md) — Попросити
libevent не використовувати певний метод події
- [EventConfig::\_\_construct](eventconfig.construct.md) - Створити
об'єкт EventConfig
- [EventConfig::requireFeatures](eventconfig.requirefeatures.md) -
Ввести необхідні додатком властивості методу події
- [EventConfig::setFlags](eventconfig.setflags.md) — Встановлює
один або кілька прапорів для налаштування можливої ініціалізації
EventBase
- [EventConfig::setMaxDispatchInterval](eventconfig.setmaxdispatchinterval.md)
— Запобігти інверсії пріоритетів
