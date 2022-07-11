- [« variant_pow](function.variant-pow.md)
- [variant_set_type »](function.variant-set-type.md)

- [PHP Manual](index.md)
- [Функції COM](ref.com.md)
- Округлює варіант із заданою точністю

# variant_round

(PHP 5, PHP 7, PHP 8)

variant_round — Округлює варіант із заданою точністю

### Опис

**variant_round**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`, int `$decimals`): ?[variant](class.variant.md)

Повертає значення `value`, заокруглене до `decimals` десяткових
знаків.

### Список параметрів

`value`
Різновид.

`decimals`
Точність.

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

Округлене значення або **`null`** у разі виникнення помилки.

### Дивіться також

- [round()](function.round.md) - Округлює кількість типу float
