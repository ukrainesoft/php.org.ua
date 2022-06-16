- [« variant_add](function.variant-add.md)
- [variant_cast »](function.variant-cast.md)

- [PHP Manual](index.md)
- [Функції COM](ref.com.md)
- Побітове І над двома варіантами

# variant_and

(PHP 5, PHP 7, PHP 8)

variant_and - Побітове І над двома варіантами

### Опис

**variant_and**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$left`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$right`): [variant](class.variant.md)

Побітове І над двома варіантами. Зверніть увагу, що це не зовсім
Проста операція І.

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

| Якщо `left` дорівнює | та `right` дорівнює | результат буде |
|-------------------|-----------------|----------- ------|
| **`true`** | **`true`** | **`true`** |
| **`true`** | **`false`** | **`false`** |
| **`true`** | **`null`** | **`null`** |
| **`false`** | **`true`** | **`false`** |
| **`false`** | **`false`** | **`false`** |
| **`false`** | **`null`** | **`false`** |
| **`null`** | **`true`** | **`null`** |
| **`null`** | **`false`** | **`false`** |
| **`null`** | **`null`** | **`null`** |

**Правила І для варіантів**

### Помилки

Викидає виняток [com_exception](class.com-exception.md)
у разі виникнення помилки.

### Дивіться також

- [variant_or()](function.variant-or.md) - Побітове АБО над двома
варіантами
