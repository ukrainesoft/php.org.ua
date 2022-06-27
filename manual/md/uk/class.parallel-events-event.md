- [« parallel\Events\Input::remove](parallel-events-input.remove.md)
- [Parallel\Events\Event\Type
»](class.parallel-events-event-type.md)

- [PHP Manual](index.md)
- [parallel](book.parallel.md)
- Клас parallel\Events\Event

# Клас parallel\Events\Event

(0.9.0)

## Об'єкти подій

Коли повертається об'єкт Event, `Event::$object` має бути видалено з
циклу, який його повернув, якщо подія є подією запису, клас
**Input** екземпляра `Event::$source` також слід видалити.

## Огляд класів

final class **parallel\Events\Event** {

/\* Одна з констант **Event\Type**. \*/

public int `$type`;

/\* Має бути джерелом події (ім'я мети) \*/

public string `$source`;

/\* Має бути або Future, або Channel \*/

public object `$object`;

/\* Має бути встановлений для подій читання/помилки \*/

public `$value`;

}
