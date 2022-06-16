- [« variant_neg](function.variant-neg.md)
- [variant_or»] (function.variant-or.md)

- [PHP Manual](index.md)
- [Функції COM](ref.com.md)
- Побітове заперечення над варіантом

# variant_not

(PHP 5, PHP 7, PHP 8)

variant_not - Побитове заперечення над варіантом

### Опис

**variant_not**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): [variant](class.variant.md)

Виробляє побитове заперечення над `value` і повертає що вийшло
значення.

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

Повертає результат побитового заперечення. Якщо `value` є
**`null`**, то результат також буде **`null`**.

### Помилки

Викидає виняток [com_exception](class.com-exception.md)
у разі виникнення помилки.
