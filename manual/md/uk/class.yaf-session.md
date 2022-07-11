- [« Yaf_Route_Supervar::route](yaf-route-supervar.route.md)
- [Yaf_Session::\_\_construct »](yaf-session.construct.md)

- [PHP Manual](index.md)
- [Yaf](book.yaf.md)
- Клас Yaf_Session

# Клас Yaf_Session

(Yaf \>u003d1.0.0)

## Вступ

## Огляд класів

class **Yaf_Session** implements [Iterator](class.iterator.md),
[ArrayAccess](class.arrayaccess.md), [Countable](class.countable.md)
{

/\* Властивості \*/

protected static `$_instance`;

protected `$_session`;

protected `$_started`;

/\* Методи \*/

private [\_\_construct](yaf-session.construct.md)()

public [count](yaf-session.count.md)(): void

public [current](yaf-session.current.md)(): void

public [del](yaf-session.del.md)(string `$name`): void

public [\_\_get](yaf-session.get.md)(string `$name`): void

public static [getInstance](yaf-session.getinstance.md)(): void

public [has](yaf-session.has.md)(string `$name`): void

public [\_\_isset](yaf-session.isset.md)(string `$name`): void

public [key](yaf-session.key.md)(): void

public [next](yaf-session.next.md)(): void

public [offsetExists](yaf-session.offsetexists.md)(string `$name`):
void

public [offsetGet](yaf-session.offsetget.md)(string `$name`): void

public [offsetSet](yaf-session.offsetset.md)(string `$name`, string
`$value`): void

public [offsetUnset](yaf-session.offsetunset.md)(string `$name`): void

public [rewind](yaf-session.rewind.md)(): void

public [\_\_set](yaf-session.set.md)(string `$name`, string `$value`):
void

public [start](yaf-session.start.md)(): void

public [\_\_unset](yaf-session.unset.md)(string `$name`): void

public [valid](yaf-session.valid.md)(): void

}

## Властивості

`_instance`

`_session`

`_started`

## Зміст

- [Yaf_Session::\_\_construct](yaf-session.construct.md) -
Конструктор класу Yaf_Session
- [Yaf_Session::count](yaf-session.count.md) - Призначення count
- [Yaf_Session::current](yaf-session.current.md) - Призначення
current
- [Yaf_Session::del](yaf-session.del.md) — Призначення del
- [Yaf_Session::\_\_get](yaf-session.get.md) - Призначення \_\_get
- [Yaf_Session::getInstance](yaf-session.getinstance.md) -
Призначення getInstance
- [Yaf_Session::has](yaf-session.has.md) — Призначення has
- [Yaf_Session::\_\_isset](yaf-session.isset.md) - Призначення
\_\_isset
- [Yaf_Session::key](yaf-session.key.md) — Призначення key
- [Yaf_Session::next](yaf-session.next.md) - Призначення next
- [Yaf_Session::offsetExists](yaf-session.offsetexists.md) -
Призначення offsetExists
- [Yaf_Session::offsetGet](yaf-session.offsetget.md) — Призначення
offsetGet
- [Yaf_Session::offsetSet](yaf-session.offsetset.md) — Призначення
offsetSet
- [Yaf_Session::offsetUnset](yaf-session.offsetunset.md) -
Призначення offsetUnset
- [Yaf_Session::rewind](yaf-session.rewind.md) — Призначення rewind
- [Yaf_Session::\_\_set](yaf-session.set.md) - Призначення \_\_set
- [Yaf_Session::start](yaf-session.start.md) — Призначення start
- [Yaf_Session::\_\_unset](yaf-session.unset.md) — Призначення
\_\_unset
- [Yaf_Session::valid](yaf-session.valid.md) — Призначення valid
