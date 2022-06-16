- [« Ds\Map::get](ds-map.get.md)
- [Ds\Map::hasValue »](ds-map.hasvalue.md)

- [PHP Manual](index.md)
- [Колекція пар ключ-значення](class.ds-map.md)
- Перевіряє, чи колекція містить заданий ключ

# Ds\Map::hasKey

(PECL ds \>u003d 1.0.0)

Ds\Map::hasKey — Перевіряє, чи колекція містить заданий ключ

### Опис

public
**Ds\Map::hasKey**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`): bool

Перевіряє, чи колекція містить заданий ключ.

### Список параметрів

`key`
Ключ, що перевіряється.

### Значення, що повертаються

Повертає **`true`**, якщо ключ знайдений, інакше **`false`**.

### Приклади

**Приклад #1 Приклад використання **Ds\Map::hasKey()****

` <?php$map u003d new \Ds\Map(["a" u003d> 1, "b" u003d> 2, c" u003d> 3]);var_dump($map->hasKey("a")) ; // Truevar_dump($map->hasKey("e")); // false?> `

Результатом виконання цього прикладу буде щось подібне:

bool(true)
bool(false)
