- [«EventBase::stop](eventbase.stop.md)
- [EventBuffer::add »](eventbuffer.add.md)

- [PHP Manual](index.md)
- [Event] (book.event.md)
- Клас EventBuffer

# Клас EventBuffer

(PECL event \>u003d 1.5.0)

## Вступ

**EventBuffer** представляє подійний буфер бібліотеки Libevent -
допоміжний функціонал для буферизованого вводу/виводу.

Буфери подій зазвичай корисні для організації "буферної" частини
буферизованого мережевого введення/виводу.

## Огляд класів

class **EventBuffer** {

/\* Константи \*/

const int `EOL_ANY` u003d 0;

const int `EOL_CRLF` u003d 1;

const int `EOL_CRLF_STRICT` u003d 2;

const int `EOL_LF` u003d 3;

const int `PTR_SET` u003d 0;

const int `PTR_ADD` u003d 1;

/\* Властивості \*/

public readonly int `$length`;

public readonly int `$contiguous_space`;

/\* Методи \*/

public [add](eventbuffer.add.md)( string `$data` ): bool

public [addBuffer](eventbuffer.addbuffer.md)(
[EventBuffer](class.eventbuffer.md) `$buf`): bool

public [appendFrom](eventbuffer.appendfrom.md)(
[EventBuffer](class.eventbuffer.md) `$buf`, int `$len`): int

public [\_\_construct](eventbuffer.construct.md)()

public [copyout](eventbuffer.copyout.md)( string `&$data` , int
`$max_bytes` ): int

public [drain](eventbuffer.drain.md)( int `$len` ): bool

public [enableLocking](eventbuffer.enablelocking.md)(): void

public [expand](eventbuffer.expand.md)( int `$len` ): bool

public [freeze](eventbuffer.freeze.md)( bool `$at_front` ): bool

public [lock](eventbuffer.lock.md)(): void

public [prepend](eventbuffer.prepend.md)( string `$data` ): bool

public [prependBuffer](eventbuffer.prependbuffer.md)(
[EventBuffer](class.eventbuffer.md) `$buf`): bool

public [pullup](eventbuffer.pullup.md)( int `$size` ): string

public [read](eventbuffer.read.md)( int `$max_bytes` ): string

public [read](eventbuffer.read.md)(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd` , int `$howmuch` ): int

public [readLine](eventbuffer.readline.md)( int `$eol_style` ): string

public [search](eventbuffer.search.md)( string `$what` , int `$start`
u003d -1 , int `$end` u003d -1 ):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [searchEol](eventbuffer.searcheol.md)( int `$start` u003d -1 , int
`$eol_style` u003d **`EventBuffer::EOL_ANY`** ):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [substr](eventbuffer.substr.md)( int `$start` , int `$length` u003d
?): string

public [unfreeze](eventbuffer.unfreeze.md)( bool `$at_front` ): bool

public [unlock](eventbuffer.unlock.md)(): bool

public [write](eventbuffer.write.md)(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd` , int `$howmuch` u003d ?): int

}

## Властивості

`length`
Кількість байт у буфері подій.

`contiguous_space`
Кількість байтів, що зберігаються суміжно у передній частині буфера. Байти в
буфер можуть розташовуватися в різних шматках пам'яті; властивість повертає
кількість байт що знаходяться, в даний момент, у першому шматку.

## Зумовлені константи

**`EventBuffer::EOL_ANY`**
Кінець рядка є будь-якою послідовністю будь-якого числа символів
перекладу рядка та повернення каретки. Цей формат не дуже корисний і
існує лише забезпечення зворотної сумісності.

**`EventBuffer::EOL_CRLF`**
Кінець рядка є послідовністю з необов'язкового повернення
каретки та перекладу рядка. (Тобто або ``
"або"
"`.)
Цей формат корисний при розборі текстових Інтернет-протоколів, оскільки
стандарти зазвичай наказують позначати кінець рядка як `"
", але
багато клієнтів використовують просто ``
"`.

**`EventBuffer::EOL_CRLF_STRICT`**
Кінець рядка є послідовністю із символів повернення каретки та
перекладу рядка. (Тобто ``
ASCII-коди **`0x0D`** **`0x0A`** ).

**`EventBuffer::EOL_LF`**
Кінець рядка є символом перекладу рядка. (Тобто.
`"
"` . ASCII-код **`0x0A`** .)

**`EventBuffer::PTR_SET`**
Прапор використовується як аргумент методу **EventBuffer::setPosition()**.
Якщо прапорець встановлений, то вказівник позиції переміщується на абсолютну
позицію у буфері.

**`EventBuffer::PTR_ADD`**
Те саме, що і **`EventBuffer::PTR_SET`** , за винятком, що прапор
вказує методом **EventBuffer::setPosition()** перемістити позицію
вперед на вказану кількість байт.

## Зміст

- [EventBuffer::add](eventbuffer.add.md) — Додає дані до кінця
буфер подій
- [EventBuffer::addBuffer](eventbuffer.addbuffer.md) — Переміщує
всі дані з буфера екземпляру EventBuffer
- [EventBuffer::appendFrom](eventbuffer.appendfrom.md) — Переміщує
вказана кількість байтів з вихідного буфера до кінця поточного
буфера
- [EventBuffer::\_\_construct](eventbuffer.construct.md) - Створює
об'єкт EventBuffer
- [EventBuffer::copyout](eventbuffer.copyout.md) — Копіює
вказана кількість байтів з початку буфера
- [EventBuffer::drain](eventbuffer.drain.md) — Видаляє вказане
кількість байтів з початку буфера, нікуди не копіюючи
- [EventBuffer::enableLocking](eventbuffer.enablelocking.md) -
Опис
- [EventBuffer::expand](eventbuffer.expand.md) - Резервує
простір у буфері
- [EventBuffer::freeze](eventbuffer.freeze.md) — Запобігає
виклики, які змінюють буфер подій у разі успішного виконання
- [EventBuffer::lock](eventbuffer.lock.md) — Отримує блокування
буфера
- [EventBuffer::prepend](eventbuffer.prepend.md) — Записує дані
на початок буфера
- [EventBuffer::prependBuffer](eventbuffer.prependbuffer.md) -
Переміщує всі дані з вихідного буфера на початок поточного буфера
- [EventBuffer::pullup](eventbuffer.pullup.md) — Лінеаризує дані
у буфері та повертає їх вміст у вигляді рядка
- [EventBuffer::read](eventbuffer.read.md) — Читає дані з
evbuffer і виснажує прочитані байти
- [EventBuffer::readFrom](eventbuffer.readfrom.md) — Читає дані
з файлу до кінця буфера
- [EventBuffer::readLine](eventbuffer.readline.md) - Витягує
рядок із початку буфера
- [EventBuffer::search](eventbuffer.search.md) — Сканує буфер на
наявність рядка
- [EventBuffer::searchEol](eventbuffer.searcheol.md) - Сканує
буфер на наявність кінця рядка
- [EventBuffer::substr](eventbuffer.substr.md) — Обрізає частину
даних буфера
- [EventBuffer::unfreeze](eventbuffer.unfreeze.md) - Повторно
включає дзвінки, які змінюють буфер подій
- [EventBuffer::unlock](eventbuffer.unlock.md) — Знімає блокування,
встановлену EventBuffer::lock
- [EventBuffer::write](eventbuffer.write.md) — Записує вміст
буфера у файл або сокет
