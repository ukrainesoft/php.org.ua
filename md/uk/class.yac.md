- [«Зумовлені константи](yac.constants.md)
- [Yac::add »](yac.add.md)

- [PHP Manual](index.md)
- [Yac](book.yac.md)
- Клас Yac

# Клас Yac

(PECL yac \>u003d 1.0.0)

## Вступ

## Огляд класів

class **Yac** {

/\* Властивості \*/

protected `$_prefix`;

/\* Методи \*/

public [\_\_construct](yac.construct.md)(string `$prefix` u003d "")

public [add](yac.add.md)(string `$keys`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`, int `$ttl` u003d 0): bool

public [add](yac.add.md)(array `$key_vals`): bool

public [delete](yac.delete.md)(string\|array `$keys`, int `$ttl` u003d ?):
bool

public [dump](yac.dump.md)(int `$$num`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [flush](yac.flush.md)(): bool

public [get](yac.get.md)(string\|array `$key`, int `&$cas` u003d
**`null`**):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [\_\_get](yac.getter.md)(string `$key`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [info](yac.info.md)(): array

public [set](yac.set.md)(string `$keys`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`, int `$ttl` u003d 0): bool

public [add](yac.add.md)(array `$key_vals`): bool

public [\_\_set](yac.setter.md)(string `$keys`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

}

## Властивості

`_prefix`

## Зміст

- [Yac::add](yac.add.md) — Зберігає в кеш
- [Yac::\_\_construct](yac.construct.md) - Конструктор класу
- [Yac::delete](yac.delete.md) — Видалення елементів із кешу
- [Yac::dump](yac.dump.md) - Дамп кеша
- [Yac::flush](yac.flush.md) - Очищає кеш
- [Yac::get](yac.get.md) — Витягує значення з кеша
- [Yac::\_\_get](yac.getter.md) - Геттер
- [Yac::info](yac.info.md) — Стан кешу
- [Yac::set](yac.set.md) — Зберігає в кеш
- [Yac::\_\_set](yac.setter.md) - Сеттер
