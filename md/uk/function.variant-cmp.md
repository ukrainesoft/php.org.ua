- [« variant_cat](function.variant-cat.md)
- [variant_date_from_timestamp
»](function.variant-date-from-timestamp.md)

- [PHP Manual](index.md)
- [Функції COM](ref.com.md)
- Порівняти два варіанти

# variant_cmp

(PHP 5, PHP 7, PHP 8)

variant_cmp — Порівняти два варіанти

### Опис

**variant_cmp**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$left`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$right,
int `$locale_id` u003d **`LOCALE_SYSTEM_DEFAULT`**,
int `$flags` u003d 0
): int

Порівнює `left` з `right`.

Функція порівнює лише скалярні величини. Масиви та записи варіантів
не порівнює.

### Список параметрів

`left`
Лівий операнд.

`right`
Правий операнд.

`locale_id`
Коректний ідентифікатор локалі, який використовується при порівнянні рядків
(Впливає на сортування рядків).

`flags`
`flags` - побітове АБО наступних значень (або просто одне з них):

| значення | опис |
|---------------------------|--------------------- ----------------------------|
| **`NORM_IGNORECASE`** | Порівнювати реєстронезалежно |
| **`NORM_IGNORENONSPACE`** | Ігнорувати символи, що не займають місця |
| **`NORM_IGNORESYMBOLS`** | ігнорувати символи |
| **`NORM_IGNOREWIDTH`** | Ігнорувати довжину рядка |
| **`NORM_IGNOREKANATYPE`** | Ігнорувати тип Кану |
| **`NORM_IGNOREKASHIDA`** | Ігнорувати символи Кашиди для Арабської мови

**Прапори порівняння варіантів**

> **Примітка**:
>
> Як і з усіма варіантними арифметичними функціями, параметри цієї
> функції можуть бути як рідними типами PHP (integer, string, floating
> point, boolean або **`null`**), так і екземплярами класів COM,
> VARIANT або DOTNET. Рідні PHP типи будуть перетворені на варіанти
> (variants) за тими самими правилами, що й у конструкторі класу
> [Variant](class.variant.md). У об'єктів COM і DOTNET буде взято і
> використано їх значення за замовчуванням як значення варіанта.
>
> Варіантні арифметичні функції є обертанням навколо
> однойменних функцій у бібліотеці COM; для більш детальної інформації
> За цими функціями проконсультуйтеся з бібліотекою MSDN. Назви
> PHP-функцій трохи відрізняються; наприклад,
> [variant_add()](function.variant-add.md) у PHP відповідає
> `VarAdd()` у документації MSDN.

### Значення, що повертаються

Повертає одне з:

| значення | опис |
|-------------------|----------------------------- -------------------|
| **`VARCMP_LT`** | `left` менше, ніж `right` |
| **`VARCMP_EQ`** | `left` ідентичний `right` |
| **`VARCMP_GT`** | `left` більше ніж `right`
| **`VARCMP_NULL`** | Обидва значення `left` та `right` рівні **`null`** |

**Результати порівняння варіантів**
