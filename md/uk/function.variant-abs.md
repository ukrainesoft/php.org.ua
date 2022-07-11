- [« com_print_typeinfo](function.com-print-typeinfo.md)
- [variant_add »](function.variant-add.md)

- [PHP Manual](index.md)
- [Функції COM](ref.com.md)
- Отримати абсолютне значення варіанта

# variant_abs

(PHP 5, PHP 7, PHP 8)

variant_abs — Отримати абсолютне значення варіанта

### Опис

**variant_abs**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): [variant](class.variant.md)

Повертає абсолютне значення варіанта.

### Список параметрів

`value`
Різновид.

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

Повертає абсолютне значення `value`.

### Помилки

Викидає виняток [com_exception](class.com-exception.md)
у разі виникнення помилки.

### Дивіться також

- [abs()](function.abs.md) - Абсолютне значення (модуль числа)
