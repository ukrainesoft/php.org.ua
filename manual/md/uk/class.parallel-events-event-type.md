- [«parallel\Events\Event](class.parallel-events-event.md)
- [parallel\Sync »](class.parallel-sync.md)

- [PHP Manual](index.md)
- [parallel](book.parallel.md)
- Клас parallel\Events\Event\Type

# Клас parallel\Events\Event\Type

(0.9.0)

## Огляд класів

final class **parallel\Events\Event\Type** {

/\* Event::$object був прочитаний в Event::$value \*/

const `Read`;

/\* Input for Event::$source записано в Event::$object \*/

const `Write`;

/\* Event::$object (Канал) було закрито \*/

const `Close`;

/\* Event::$object (Ф'ючерс) було припинено \*/

const `Cancel`;

/\* Середовище виконання, що виконує Event::$object (Ф'ючерс), було
знищено \*/

const `Kill`;

/\* Event::$object (ф'ючерс) видав помилку \*/

const `Error`;

}
