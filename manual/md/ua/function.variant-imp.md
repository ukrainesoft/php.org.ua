- [« variant_idiv](function.variant-idiv.md)
- [variant_int »] (function.variant-int.md)

- [PHP Manual](index.md)
- [Функції COM](ref.com.md)
- Побітова імплікація над двома варіантами

# variant_imp

(PHP 5, PHP 7, PHP 8)

variant_imp - Побітова імплікація над двома варіантами

### Опис

**variant_imp**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$left`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$right`): [variant](class.variant.md)

Побітова імплікація з двох варіантів.

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

| Якщо `left` | Якщо `right` | Тоді результат |
|-------------|--------------|-----------------|
| **`true`** | **`true`** | **`true`** |
| **`true`** | **`false`** | **`false`** |
| **`true`** | **`null`** | **`true`** |
| **`false`** | **`true`** | **`true`** |
| **`false`** | **`false`** | **`true`** |
| **`false`** | **`null`** | **`true`** |
| **`null`** | **`true`** | **`true`** |
| **`null`** | **`false`** | **`null`** |
| **`null`** | **`null`** | **`null`** |

**Таблиця імплікації варіантів**

### Помилки

Викидає виняток [com_exception](class.com-exception.md)
у разі виникнення помилки.
