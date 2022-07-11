- [« EventBufferEvent::writeBuffer](eventbufferevent.writebuffer.md)
- [EventConfig »](class.eventconfig.md)

- [PHP Manual](index.md)
- [Event] (book.event.md)
- Про callback-функції подійного буфера

# Про callback-функції подійного буфера

Об'єкт класу [EventBufferEvent](class.eventbufferevent.md)
представляє * подійний буфер *. Асинхронна природа введення/виводу
виконуваного Libevent має на увазі, що сокет (або який інший
файловий дескриптор) не завжди доступний. Модуль викликає відповідні
callback-функції коли ресурс готовий до читання чи запису, або коли
сталася якась подія (наприклад, помилка, або кінець файлу тощо).

Callback-функції читання та запису повинні відповідати наступному
прототипу:

**callback**( [EventBufferEvent](class.eventbufferevent.md) `$bev` u003d
**`null`** ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$arg` u003d **`null`** ): void

`bev`
Пов'язаний об'єкт [EventBufferEvent](class.eventbufferevent.md).

`arg`
Дані користувача прив'язані до всіх callback-функцій через
[EventBufferEvent::\_\_construct()](eventbufferevent.construct.md) або
[EventBufferEvent::setCallbacks()](eventbufferevent.setcallbacks.md) .

Callback-функції подій повинні відповідати наступному прототипу:

**callback**( [EventBufferEvent](class.eventbufferevent.md) `$bev` u003d
**`null`** , int `$events` u003d 0 ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$arg` u003d **`null`** ): void

`bev`
Пов'язаний об'єкт [EventBufferEvent](class.eventbufferevent.md).

`events`
Бітова маска подій: **`EventBufferEvent::READING`** ,
**`EventBufferEvent::WRITING`** , **`EventBufferEvent::EOL`** ,
**`EventBufferEvent::ERROR`** та **`EventBufferEvent::TIMEOUT`** .
Дивіться [Константи
EventBufferEvent](class.eventbufferevent.md#eventbufferevent.constants)

`arg`
Дані користувача прив'язані до всіх callback-функцій через
[EventBufferEvent::\_\_construct()](eventbufferevent.construct.md) або
[EventBufferEvent::setCallbacks()](eventbufferevent.setcallbacks.md) .
