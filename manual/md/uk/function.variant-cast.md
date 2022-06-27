- [« variant_and](function.variant-and.md)
- [variant_cat »] (function.variant-cat.md)

- [PHP Manual](index.md)
- [Функції COM](ref.com.md)
- Перетворення варіанта на новий варіант іншого типу

# variant_cast

(PHP 5, PHP 7, PHP 8)

variant_cast — Перетворення варіанта на новий варіант іншого типу

### Опис

**variant_cast**([variant](class.variant.md) `$variant`, int `$type`):
[Variant](class.variant.md)

Функція робить копію варіанта `variant` та перетворює її до типу `type`.

Функція є обертанням над функцією VariantChangeType() з бібліотеки
COM. Докладніше читайте у MSDN.

### Список параметрів

`variant`
Різновид.

`type`
`type` має бути однією з констант **`VT_XXX`**.

### Значення, що повертаються

Повертає варіант заданого типу `type`.

### Дивіться також

- [variant_set_type()](function.variant-set-type.md) - Приведення
варіанти до іншого типу "за місцем"
