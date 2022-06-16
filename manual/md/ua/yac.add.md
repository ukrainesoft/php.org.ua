- [« Yac] (class.yac.md)
- [Yac::\_\_construct »](yac.construct.md)

- [PHP Manual](index.md)
- [Yac](class.yac.md)
- Зберігає у кеш

# Yac::add

(PECL yac \>u003d 1.0.0)

Yac::add — Зберігає у кеш

### Опис

public **Yac::add**(string `$keys`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`, int `$ttl` u003d 0): bool

public **Yac::add**(array `$key_vals`): bool

Додає елемент у кеш.

### Список параметрів

`keys`
Ключ (string)

`value`
Змішане значення. Можуть бути збережені всі типи значень php, крім
[resource](language.types.resource.md)

`ttl`
Час життя

### Значення, що повертаються

bool, **`true`** у разі успішного виконання, **`false`** у разі
виникнення помилки

> **Примітка**:
>
> **Yac::add()** може завершитися з помилкою, якщо не вдалося отримати
> блокування cas, тому, якщо вам потрібно, щоб значення зберігалося
> належним чином ви можете написати наступне:
>
> **Приклад #1 Переконайтеся, що елемент зберігається**
>
> `while(!$yac->set("key", "vale));`
