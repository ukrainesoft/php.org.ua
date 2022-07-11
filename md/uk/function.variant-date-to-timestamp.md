- [«
variant_date_from_timestamp](function.variant-date-from-timestamp.md)
- [variant_div »] (function.variant-div.md)

- [PHP Manual](index.md)
- [Функції COM](ref.com.md)
- Перетворює варіант типу дата/час у тимчасову мітку Unix

# variant_date_to_timestamp

(PHP 5, PHP 7, PHP 8)

variant_date_to_timestamp - Перетворює варіант типу дата/час у
тимчасову мітку Unix

### Опис

**variant_date_to_timestamp**([variant](class.variant.md) `$variant`):
?int

Конвертує `variant` із значення **`VT_DATE`** (або аналогічного типу)
у тимчасову мітку Unix. Це дозволяє простіше поєднати частину PHP у
Unix-стилі з COM.

### Список параметрів

`variant`
Різновид.

### Значення, що повертаються

Повертає тимчасову мітку Unix або **`null`** у разі виникнення
помилки.

### Дивіться також

- [variant_date_from_timestamp()](function.variant-date-from-timestamp.md) -
Отримати подання дати для варіанта з тимчасової мітки Unix
- [date()](function.date.md) - Форматує тимчасову мітку Unix
- [strftime()](function.strftime.md) - Форматує поточну
дату/час з урахуванням поточних налаштувань локалі
