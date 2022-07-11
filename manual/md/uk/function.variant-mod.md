- [« variant_int](function.variant-int.md)
- [variant_mul »] (function.variant-mul.md)

- [PHP Manual](index.md)
- [Функції COM](ref.com.md)
- Залишок від поділу двох варіантів

# variant_mod

(PHP 5, PHP 7, PHP 8)

variant_mod - Залишок від поділу двох варіантів

### Опис

**variant_mod**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$left`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$right`): [variant](class.variant.md)

Поділяє `left` на `right` і повертає залишок.

### Список параметрів

`left`
Лівий операнд.

`right`
Правий операнд.

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

Повертає залишок від поділу.

### Помилки

Викидає виняток [com_exception](class.com-exception.md)
у разі виникнення помилки.

### Дивіться також

- [variant_div()](function.variant-div.md) - Отримати результат
поділу двох варіантів
- [variant_idiv()](function.variant-idiv.md) - Перетворення
варіантів до цілих з наступним розподілом
