- [« variant_mul](function.variant-mul.md)
- [variant_not »](function.variant-not.md)

- [PHP Manual](index.md)
- [Функції COM](ref.com.md)
- Логічне заперечення над варіантом

# variant_neg

(PHP 5, PHP 7, PHP 8)

variant_neg - Логічне заперечення над варіантом

### Опис

**variant_neg**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): [variant](class.variant.md)

Здійснює логічне заперечення над `value`.

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

Повертає результат логічного заперечення.

### Помилки

Викидає виняток [com_exception](class.com-exception.md)
у разі виникнення помилки.
