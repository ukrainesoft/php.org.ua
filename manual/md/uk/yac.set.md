- [« Yac::info](yac.info.md)
- [Yac::\_\_set »](yac.setter.md)

- [PHP Manual](index.md)
- [Yac](class.yac.md)
- Зберігає у кеш

# Yac::set

(PECL yac \>u003d 1.0.0)

Yac::set — Зберігає у кеш

### Опис

public **Yac::set**(string `$keys`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`, int `$ttl` u003d 0): bool

public [Yac::add](yac.add.md)(array `$key_vals`): bool

Додає елемент до кешу, якщо ключ уже існує, замінює його.

### Список параметрів

`keys`
Ключ (string)

`value`
Змішане значення. Можуть бути збережені всі типи значень php, крім
[resource](language.types.resource.md)

`ttl`
Час життя

### Значення, що повертаються

Власне значення
