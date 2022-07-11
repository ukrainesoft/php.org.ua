- [« variant_or](function.variant-or.md)
- [variant_round »](function.variant-round.md)

- [PHP Manual](index.md)
- [Функції COM](ref.com.md)
- Зводить один варіант у ступінь, заданий у другому

# variant_pow

(PHP 5, PHP 7, PHP 8)

variant_pow — Зводить один варіант у ступінь, заданий у другому

### Опис

**variant_pow**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$left`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$right`): [variant](class.variant.md)

Повертає результат зведення `left` у ступінь `right`.

### Список параметрів

`left`
Лівий операнд.

`right`
Правий операнд (ступінь).

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

Повертає результат зведення `left` у ступінь `right`.

### Помилки

Викидає виняток [com_exception](class.com-exception.md)
у разі виникнення помилки.

### Дивіться також

- [pow()](function.pow.md) - Зведення у ступінь
