- [« variant_cmp](function.variant-cmp.md)
- [variant_date_to_timestamp
»](function.variant-date-to-timestamp.md)

- [PHP Manual](index.md)
- [Функції COM](ref.com.md)
- Отримати подання дати для варіанта з тимчасової мітки Unix

# variant_date_from_timestamp

(PHP 5, PHP 7, PHP 8)

variant_date_from_timestamp — Отримати подання дати для варіанта
з тимчасової мітки Unix

### Опис

**variant_date_from_timestamp**(int `$timestamp`):
[Variant](class.variant.md)

Перетворює `timestamp` із значення тимчасової мітки Unix у варіант типу
**`VT_DATE`**. Це дозволяє більш просто поєднати частину PHP у
Unix-стилі з COM.

### Список параметрів

`timestamp`
Тимчасова мітка Unix.

### Значення, що повертаються

Повертає варіант типу **VT_DATE**.

### Дивіться також

- [variant_date_to_timestamp()](function.variant-date-to-timestamp.md) -
Перетворює варіант типу дата/час у часову мітку Unix
- [mktime()](function.mktime.md) - Повертає позначку часу Unix для
заданої дати
- [time()](function.time.md) - Повертає поточну мітку системного
часу Unix
