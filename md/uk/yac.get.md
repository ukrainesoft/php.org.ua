- [« Yac::flush](yac.flush.md)
- [Yac::\_\_get »](yac.getter.md)

- [PHP Manual](index.md)
- [Yac](class.yac.md)
- Витягує значення з кешу

# Yac::get

(PECL yac \>u003d 1.0.0)

Yac::get — Витягує значення з кешу

### Опис

public **Yac::get**(string\|array `$key`, int `&$cas` u003d **`null`**):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Витягує значення з кешу

### Список параметрів

`key`
Ключ (string) або масив (array), що складається з кількох ключів

`cas`
Якщо не **`null`**, буде встановлено регістр вилучених елементів.

### Значення, що повертаються

Змішане значення у разі успішного виконання, false у разі
виникнення помилки
