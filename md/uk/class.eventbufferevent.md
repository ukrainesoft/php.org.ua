- [«EventBuffer::write](eventbuffer.write.md)
- [EventBufferEvent::close »](eventbufferevent.close.md)

- [PHP Manual](index.md)
- [Event] (book.event.md)
- Клас EventBufferEvent

# Клас EventBufferEvent

(PECL event \>u003d 1.2.6-beta)

## Вступ

Представляє буферизовану подію Libevent.

Зазвичай додатком необхідно зробити буферизацію деякого
кількості даних крім того, щоб легко реагувати на
події. Коли ми, наприклад, хочемо записувати дані, простий алгоритм
виглядає так:

1. Вирішуємо, що нам треба записати дані у з'єднання; складаємо дані
у буфер

2. Очікуємо, коли з'єднання стане доступним для запису

3. Записуємо стільки даних, скільки можемо

4. Запам'ятовуємо, скільки даних записали і якщо залишилися недозаписані
дані, чекаємо, коли з'єднання знову стане доступним для запису.

Це шаблон буферизованого вводу/виводу настільки поширений, що
Libevent надає вбудований механізм для нього. "Буферизоване
подія" складається з транспорту (наприклад сокету), буфера читання та буфера
запису. На відміну від стандартних подій, які використовують функцію
зворотного виклику коли транспорт стає доступним для читання або
запису, буферизована подія викликає функцію зворотного виклику тоді,
коли прочитає чи запише достатньо даних.

## Огляд класів

final class **EventBufferEvent** {

/\* Константи \*/

const int `READING` u003d 1;

const int `WRITING` u003d 2;

const int `EOF` u003d 16;

const int `ERROR` u003d 32;

const int `TIMEOUT` u003d 64;

const int `CONNECTED` u003d 128;

const int `OPT_CLOSE_ON_FREE` u003d 1;

const int `OPT_THREADSAFE` u003d 2;

const int `OPT_DEFER_CALLBACKS` u003d 4;

const int `OPT_UNLOCK_CALLBACKS` u003d 8;

const int `SSL_OPEN` u003d 0;

const int `SSL_CONNECTING` u003d 1;

const int `SSL_ACCEPTING` u003d 2;

/\* Властивості \*/

public int `$fd`;

public int `$priority`;

public readonly [EventBuffer](class.eventbuffer.md) `$input`;

public readonly [EventBuffer](class.eventbuffer.md) `$output`;

/\* Методи \*/

public [close](eventbufferevent.close.md)(): void

public [connect](eventbufferevent.connect.md)( string `$addr` ): bool

public [connectHost](eventbufferevent.connecthost.md)(
[EventDnsBase](class.eventdnsbase.md) `$dns_base` ,
string `$hostname`,
int `$port` ,
int `$family` u003d EventUtil::AF_UNSPEC
): bool

public [\_\_construct](eventbufferevent.construct.md)(
[EventBase](class.eventbase.md) `$base` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$socket` u003d **`null`** ,
int `$options` u003d 0 ,
[callable](language.types.callable.md) `$readcb` u003d **`null`** ,
[callable](language.types.callable.md) `$writecb` u003d **`null`**
,
[callable](language.types.callable.md) `$eventcb` u003d **`null`**
,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$arg` u003d **`null`**
)

public static [createPair](eventbufferevent.createpair.md)(
[EventBase](class.eventbase.md) `$base` , int `$options` u003d 0 : array

public [disable](eventbufferevent.disable.md)( int `$events` ): bool

public [enable](eventbufferevent.enable.md)( int `$events` ): bool

public [free](eventbufferevent.free.md)(): void

public [getDnsErrorString](eventbufferevent.getdnserrorstring.md)():
string

public [getEnabled](eventbufferevent.getenabled.md)(): int

public [getInput](eventbufferevent.getinput.md)():
[EventBuffer](class.eventbuffer.md)

public [getOutput](eventbufferevent.getoutput.md)():
[EventBuffer](class.eventbuffer.md)

public [read](eventbufferevent.read.md)( int `$size` ): string

public [readBuffer](eventbufferevent.readbuffer.md)(
[EventBuffer](class.eventbuffer.md) `$buf`): bool

public [setCallbacks](eventbufferevent.setcallbacks.md)(
[callable](language.types.callable.md) `$readcb` ,
[callable](language.types.callable.md) `$writecb` ,
[callable](language.types.callable.md) `$eventcb` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$arg` u003d ?
): void

public [setPriority](eventbufferevent.setpriority.md)( int `$priority`
): bool

public [setTimeouts](eventbufferevent.settimeouts.md)( float
`$timeout_read` , float `$timeout_write` ): bool

public [setWatermark](eventbufferevent.setwatermark.md)( int `$events`
, int `$lowmark` , int `$highmark` ): void

public [sslError](eventbufferevent.sslerror.md)(): string

public static [sslFilter](eventbufferevent.sslfilter.md)(
[EventBase](class.eventbase.md) `$base` ,
[EventBufferEvent](class.eventbufferevent.md) `$underlying`,
[EventSslContext](class.eventsslcontext.md) `$ctx` ,
int `$state` ,
int `$options` u003d 0
): [EventBufferEvent](class.eventbufferevent.md)

public [sslGetCipherInfo](eventbufferevent.sslgetcipherinfo.md)():
string

public [sslGetCipherName](eventbufferevent.sslgetciphername.md)():
string

public
[sslGetCipherVersion](eventbufferevent.sslgetcipherversion.md)():
string

public [sslGetProtocol](eventbufferevent.sslgetprotocol.md)(): string

public [sslRenegotiate](eventbufferevent.sslrenegotiate.md)(): void

public static [sslSocket](eventbufferevent.sslsocket.md)(
[EventBase](class.eventbase.md) `$base` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$socket`,
[EventSslContext](class.eventsslcontext.md) `$ctx` ,
int `$state` ,
int `$options` u003d ?
): [EventBufferEvent](class.eventbufferevent.md)

public [write](eventbufferevent.write.md)( string `$data` ): bool

public [writeBuffer](eventbufferevent.writebuffer.md)(
[EventBuffer](class.eventbuffer.md) `$buf`): bool

}

## Властивості

`fd`
Числовий файловий дескриптор пов'язаний із буферизованим сокетом.
Зазвичай є пов'язаним сокетом. дорівнює **`null`**, якщо відсутня
файловий дескриптор(сокет) пов'язаний із буферизованою подією.

`priority`
Пріоритет подій, що використовуються для буферизованих подій.

`input`
Нижчележачий об'єкт вхідного буфера (
[EventBuffer](class.eventbuffer.md))

`output`
Нижчележачий об'єкт вихідного буфера (
[EventBuffer](class.eventbuffer.md))

## Зумовлені константи

**`EventBufferEvent::READING`**
Подія сталася в момент операції читання з буферевенти. Перевірте
інші прапори для цієї події.

**`EventBufferEvent::WRITING`**
Подія сталася в момент операції запису в буферевен. Перевірте
інші прапори для цієї події.

**`EventBufferEvent::EOF`**
Отримано ознаку кінця файлу для буферизованого події.

**`EventBufferEvent::ERROR`**
Сталася помилка під час операції з буферевен. Детальну інформацію
про помилку можна отримати за допомогою методів
[EventUtil::getLastSocketErrno()](eventutil.getlastsocketerrno.md)
та/або
[EventUtil::getLastSocketError()](eventutil.getlastsocketerror.md) .

**`EventBufferEvent::TIMEOUT`**

**`EventBufferEvent::CONNECTED`**
Запитане з'єднання з bufferevent встановлено.

**`EventBufferEvent::OPT_CLOSE_ON_FREE`**
Закрити нижчележачий транспорт, коли об'єкт буферизованої події
знищено. Буде закрито сокет, знищено буфер тощо.

**`EventBufferEvent::OPT_THREADSAFE`**
Автоматично розміщувати блокування для bufferevent, що дозволяє
безпечно використовувати багатопоточність.

**`EventBufferEvent::OPT_DEFER_CALLBACKS`**
Коли прапор встановлений, bufferevent відкладає всі свої функції
зворотного дзвінка. Дивіться [»Швидке, переносиме, неблокуюче
мережеве програмування з Libevent та відкладеними функціями зворотного
виклику (Deferred
callbacks)](http://www.wangafu.net/~nickm/libevent-book/Ref6_bufferevent.md#_deferred_callbacks)
.

**`EventBufferEvent::OPT_UNLOCK_CALLBACKS`**
За замовчуванням, коли bufferevent налаштований як потокобезпечний, для
буферизованого події будуть зберігатися блокування при запуску будь-яких
функцій зворотного виклику. Встановлення цього прапора каже
Libevent прибирати блокування при виклику цих callback-функцій.

**`EventBufferEvent::SSL_OPEN`**
Підтвердження SSL завершено

**`EventBufferEvent::SSL_CONNECTING`**
В даний час SSL бере участь у встановленні з'єднання як клієнт

**`EventBufferEvent::SSL_ACCEPTING`**
В даний момент SSL бере участь у встановленні з'єднання як сервер

## Зміст

- [EventBufferEvent::close](eventbufferevent.close.md) — Закриває
дескриптор файлу, пов'язаний із поточною подією буфера
- [EventBufferEvent::connect](eventbufferevent.connect.md) -
Підключає файловий дескриптор події буфера до вказаної адреси
або сокету UNIX
- [EventBufferEvent::connectHost](eventbufferevent.connecthost.md) -
Підключається на ім'я хоста з можливістю асинхронного дозволу
DNS
- [EventBufferEvent::\_\_construct](eventbufferevent.construct.md) -
Створює об'єкт EventBufferEvent
- [EventBufferEvent::createPair](eventbufferevent.createpair.md) -
Створює дві буферні події, пов'язані один з одним
- [EventBufferEvent::disable](eventbufferevent.disable.md) -
Відключає читання, запис або те й інше у події буфера
- [EventBufferEvent::enable](eventbufferevent.enable.md) — Включає
читання, запис або те й інше в події буфера
- [EventBufferEvent::free](eventbufferevent.free.md) - Звільняє
подія буфера
- [EventBufferEvent::getDnsErrorString](eventbufferevent.getdnserrorstring.md)
— Повертає рядок, що описує останню невдалу спробу пошуку
DNS
- [EventBufferEvent::getEnabled](eventbufferevent.getenabled.md) -
Повертає бітову маску подій, які зараз
активовані для буферної події
- [EventBufferEvent::getInput](eventbufferevent.getinput.md) -
Повертає базовий вхідний буфер, пов'язаний із поточним буферним
подією
- [EventBufferEvent::getOutput](eventbufferevent.getoutput.md) -
Повертає базовий вихідний буфер, пов'язаний із поточним буферним
подією
- [EventBufferEvent::read](eventbufferevent.read.md) — Читає дані
буфера
- [EventBufferEvent::readBuffer](eventbufferevent.readbuffer.md) -
Зливає весь вміст буфера введення та поміщає його у буфер
- [EventBufferEvent::setCallbacks](eventbufferevent.setcallbacks.md)
— Призначає callback-функції для читання, запису та події
(стану)
- [EventBufferEvent::setPriority](eventbufferevent.setpriority.md) -
Надає пріоритет bufferevent
- [EventBufferEvent::setTimeouts](eventbufferevent.settimeouts.md) -
Встановлює час очікування читання та запису для події буфера
- [EventBufferEvent::setWatermark](eventbufferevent.setwatermark.md)
— Регулює водяні знаки читання та/або запису
- [EventBufferEvent::sslError](eventbufferevent.sslerror.md) -
Повертає останню помилку OpenSSL, повідомлену буферною подією
- [EventBufferEvent::sslFilter](eventbufferevent.sslfilter.md)
Створює нову подію буфера SSL для надсилання даних через
інша подія буфера
- [EventBufferEvent::sslGetCipherInfo](eventbufferevent.sslgetcipherinfo.md)
— Повертає текстовий опис шифру
- [EventBufferEvent::sslGetCipherName](eventbufferevent.sslgetciphername.md)
— Повертає поточне ім'я шифру з'єднання SSL
- [EventBufferEvent::sslGetCipherVersion](eventbufferevent.sslgetcipherversion.md)
— Повертає версію шифру, який використовує поточне SSL-з'єднання.
- [EventBufferEvent::sslGetProtocol](eventbufferevent.sslgetprotocol.md)
— Повертає ім'я протоколу, який використовується для поточного з'єднання.
SSL
- [EventBufferEvent::sslRenegotiate](eventbufferevent.sslrenegotiate.md)
— Повідомляє про буферну подію почати перегляд SSL
- [EventBufferEvent::sslSocket](eventbufferevent.sslsocket.md) -
Створює нову буферну подію SSL для надсилання своїх даних через
SSL у сокет
- [EventBufferEvent::write](eventbufferevent.write.md) — Додає
дані у буфер виведення буферної події
- [EventBufferEvent::writeBuffer](eventbufferevent.writebuffer.md)
Додає вміст буфера в буфер виводу буферної події
