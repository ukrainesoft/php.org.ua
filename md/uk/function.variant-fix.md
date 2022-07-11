- [« variant_eqv](function.variant-eqv.md)
- [variant_get_type »](function.variant-get-type.md)

- [PHP Manual](index.md)
- [Функції COM](ref.com.md)
- Повернути цілу частину варіанта

# variant_fix

(PHP 5, PHP 7, PHP 8)

variant_fix — Повернути цілу частину варіанта

### Опис

**variant_fix**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): [variant](class.variant.md)

Повертає цілу частину варіанта.

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

### Примітки

**Увага**

Ви, напевно, помітили, що опис цієї функції буквально в букву
збігається з описом функції
[variant_int()](function.variant-int.md). Оскільки ця документація
заснована на MSDN, це або так і повинно бути, або в MSDN помилка.

### Дивіться також

- [variant_int()](function.variant-int.md) - Повернути цілу чисельну
частина варіанта
- [variant_round()](function.variant-round.md) - Округлює варіант з
заданою точністю
- [floor()](function.floor.md) - Округлює дріб у менший бік
- [ceil()](function.ceil.md) - Округлює дріб у велику сторону
- [round()](function.round.md) - Округлює кількість типу float
