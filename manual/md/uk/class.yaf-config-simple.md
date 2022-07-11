- [« Yaf_Config_Ini::valid](yaf-config-ini.valid.md)
- [Yaf_Config_Simple::\_\_construct
»](yaf-config-simple.construct.md)

- [PHP Manual](index.md)
- [Yaf](book.yaf.md)
- Клас Yaf_Config_Simple

# Клас Yaf_Config_Simple

(Yaf \>u003d1.0.0)

## Вступ

## Огляд класів

class **Yaf_Config_Simple** extends
[Yaf_Config_Abstract](class.yaf-config-abstract.md) implements
[Iterator](class.iterator.md), [ArrayAccess](class.arrayaccess.md),
[Countable](class.countable.md) {

/\* Властивості \*/

protected `$_readonly`;

/\* Методи \*/

public [\_\_construct](yaf-config-simple.construct.md)(array
`$configs`, bool `$readonly` u003d false)

public [count](yaf-config-simple.count.md)(): void

public [current](yaf-config-simple.current.md)(): void

public [\_\_get](yaf-config-simple.get.md)(string `$name` u003d ?): void

public [\_\_isset](yaf-config-simple.isset.md)(string `$name`): void

public [key](yaf-config-simple.key.md)(): void

public [next](yaf-config-simple.next.md)(): void

public [offsetExists](yaf-config-simple.offsetexists.md)(string
`$name`): void

public [offsetGet](yaf-config-simple.offsetget.md)(string `$name`):
void

public [offsetSet](yaf-config-simple.offsetset.md)(string `$name`,
string `$value`): void

public [offsetUnset](yaf-config-simple.offsetunset.md)(string
`$name`): void

public [readonly](yaf-config-simple.readonly.md)(): void

public [rewind](yaf-config-simple.rewind.md)(): void

public [\_\_set](yaf-config-simple.set.md)(string `$name`, string
`$value`): void

public [toArray](yaf-config-simple.toarray.md)(): array

public [valid](yaf-config-simple.valid.md)(): void

/\* Наслідувані методи \*/

abstract public
[Yaf_Config_Abstract::get](yaf-config-abstract.get.md)(string `$name`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

abstract public
[Yaf_Config_Abstract::readonly](yaf-config-abstract.readonly.md)():
bool

abstract public
[Yaf_Config_Abstract::set](yaf-config-abstract.set.md)():
[Yaf_Config_Abstract](class.yaf-config-abstract.md)

abstract public
[Yaf_Config_Abstract::toArray](yaf-config-abstract.toarray.md)():
array

}

## Властивості

`_config`

`_readonly`

## Зміст

- [Yaf_Config_Simple::\_\_construct](yaf-config-simple.construct.md)
- Призначення \_\_construct
- [Yaf_Config_Simple::count](yaf-config-simple.count.md) -
Призначення count
- [Yaf_Config_Simple::current](yaf-config-simple.current.md) -
Призначення current
- [Yaf_Config_Simple::\_\_get](yaf-config-simple.get.md) -
Призначення \_\_get
- [Yaf_Config_Simple::\_\_isset](yaf-config-simple.isset.md) -
Призначення \_\_isset
- [Yaf_Config_Simple::key](yaf-config-simple.key.md) — Призначення
key
- [Yaf_Config_Simple::next](yaf-config-simple.next.md) — Призначення
next
- [Yaf_Config_Simple::offsetExists](yaf-config-simple.offsetexists.md)
— Призначення offsetExists
- [Yaf_Config_Simple::offsetGet](yaf-config-simple.offsetget.md) -
Призначення offsetGet
- [Yaf_Config_Simple::offsetSet](yaf-config-simple.offsetset.md) -
Призначення offsetSet
- [Yaf_Config_Simple::offsetUnset](yaf-config-simple.offsetunset.md)
- Призначення offsetUnset
- [Yaf_Config_Simple::readonly](yaf-config-simple.readonly.md) -
Призначення readonly
- [Yaf_Config_Simple::rewind](yaf-config-simple.rewind.md) -
Призначення rewind
- [Yaf_Config_Simple::\_\_set](yaf-config-simple.set.md) -
Призначення \_\_set
- [Yaf_Config_Simple::toArray](yaf-config-simple.toarray.md) -
Повертає масив PHP
- [Yaf_Config_Simple::valid](yaf-config-simple.valid.md) -
Призначення valid
