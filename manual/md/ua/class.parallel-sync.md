- [«
parallel\Events\Event\Type](class.parallel-events-event-type.md)
- [parallel\Sync::\_\_construct »](parallel-sync.construct.md)

- [PHP Manual](index.md)
- [parallel](book.parallel.md)
- Клас parallel\Sync

# Клас parallel\Sync

(1.1.0)

## Синхронізація низького рівня

Клас **parallel\Sync** забезпечує доступ до низькорівневих примітивів
синхронізації, мьютексам, умовним змінним і дозволяє реалізувати
семафори.

Синхронізація для більшості додатків набагато краще реалізується з
використанням каналів, однак у деяких випадках автори
низькорівневого коду можуть вважати корисним мати доступ до цих
механізмів нижчого рівня.

## Огляд класів

final class **parallel\Sync** {

/\* Конструктор \*/

public [\_\_construct](parallel-sync.construct.md)()

public [\_\_construct](parallel-sync.construct.md)(scalar `$value`)

/\* Доступ \*/

public [get](parallel-sync.get.md)(): scalar

public [set](parallel-sync.set.md)(scalar `$value`)

/\* Синхронізація \*/

public [wait](parallel-sync.wait.md)()

public [notify](parallel-sync.notify.md)(bool `$all` u003d ?)

public
[\_\_invoke](parallel-sync.invoke.md)([callable](language.types.callable.md)
`$critical`)

}

## Зміст

- [parallel\Sync::\_\_construct](parallel-sync.construct.md) -
Конструктор класу
- [parallel\Sync::get](parallel-sync.get.md) — Доступ
- [parallel\Sync::set](parallel-sync.set.md) — Доступ
- [parallel\Sync::wait](parallel-sync.wait.md) — Синхронізація
- [parallel\Sync::notify](parallel-sync.notify.md) — Синхронізація
- [parallel\Sync::\_\_invoke](parallel-sync.invoke.md) -
Синхронізація
