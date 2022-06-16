- [« variant_imp](function.variant-imp.md)
- [variant_mod»] (function.variant-mod.md)

- [PHP Manual](index.md)
- [Функції COM](ref.com.md)
- Повернути цілу частину варіанта

# variant_int

(PHP 5, PHP 7, PHP 8)

variant_int — Повернути цілу частину варіанта

### Опис

**variant_int**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): [variant](class.variant.md)

Витягує цілу частину варіанту.

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

Якщо `value` негативний, то буде повернено перше негативне ціле
більше або дорівнює варіанту. У разі позитивної кількості буде просто
повернута ціла частина `value`.

### Помилки

Викидає виняток [com_exception](class.com-exception.md)
у разі виникнення помилки.

### Дивіться також

- [variant_fix()](function.variant-fix.md) - Повернути цілу частину
варіанти
- [variant_round()](function.variant-round.md) - Округлює варіант з
заданою точністю
- [floor()](function.floor.md) - Округлює дріб у менший бік
- [ceil()](function.ceil.md) - Округлює дріб у велику сторону
- [round()](function.round.md) - Округлює кількість типу float
