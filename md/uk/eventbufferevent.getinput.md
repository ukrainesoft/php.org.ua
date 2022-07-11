- [«EventBufferEvent::getEnabled](eventbufferevent.getenabled.md)
- [EventBufferEvent::getOutput »](eventbufferevent.getoutput.md)

- [PHP Manual](index.md)
- [EventBufferEvent](class.eventbufferevent.md)
- Повертає базовий вхідний буфер, пов'язаний із поточним буферним
подією

# EventBufferEvent::getInput

(PECL event \>u003d 1.2.6-beta)

EventBufferEvent::getInput — Повертає базовий вхідний буфер, пов'язаний
з поточною буферною подією

### Опис

public **EventBufferEvent::getInput**():
[EventBuffer](class.eventbuffer.md)

Повертає базовий вхідний буфер, пов'язаний із поточною буферною подією.
Вхідний буфер – це сховище даних для читання.

Зверніть увагу, що є також ` input ` властивість класу
[EventBufferEvent](class.eventbufferevent.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає екземпляр класу [EventBuffer](class.eventbuffer.md)
вхідного буфера, пов'язаного із поточною буферною подією.

### Приклади

**Приклад #1 Callback-функція читання буфера**

` <?phpfunction readcb($bev, $base) {    $input u003d $bev->input; //$bev->getInput(); while(($n u003d $input->remove($buf, 1024)) > 0) {       echo $buf; }}?> `

### Дивіться також

- [EventBufferEvent::getOutput()](eventbufferevent.getoutput.md) -
Повертає базовий вихідний буфер, пов'язаний із поточним буферним
подією
