- [« variant_round](function.variant-round.md)
- [variant_set »] (function.variant-set.md)

- [PHP Manual](index.md)
- [Функції COM](ref.com.md)
- Приведення варіанта до іншого типу "за місцем"

# variant_set_type

(PHP 5, PHP 7, PHP 8)

variant_set_type — Приведення варіанта до іншого типу "за місцем"

### Опис

**variant_set_type**([variant](class.variant.md) `$variant`, int
`$type`): void

Функція аналогічна [variant_cast()](function.variant-cast.md) за
винятком те, що змінюється сам варіант, а чи не створюється новий.
Функції, що передаються, ідентичні параметрам функції
[variant_cast()](function.variant-cast.md).

### Список параметрів

`variant`
Різновид.

`type`

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [variant_cast()](function.variant-cast.md) - Перетворення
варіанти в новий варіант іншого типу
- [variant_get_type()](function.variant-get-type.md) - Отримати тип
варіанти
