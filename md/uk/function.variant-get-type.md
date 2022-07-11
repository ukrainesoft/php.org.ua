- [« variant_fix](function.variant-fix.md)
- [variant_idiv »](function.variant-idiv.md)

- [PHP Manual](index.md)
- [Функції COM](ref.com.md)
- Отримати тип варіанта

# variant_get_type

(PHP 5, PHP 7, PHP 8)

variant_get_type — Отримати тип варіанта

### Опис

**variant_get_type**([variant](class.variant.md) `$variant`): int

Повертає тип об'єкта варіанта.

### Список параметрів

`variant`
Різновид.

### Значення, що повертаються

Функція повертає ціле значення, що позначає тип `variant`,
який може бути екземпляром класів [com](class.com.md),
[dotnet](class.dotnet.md) або [variant](class.variant.md).
Повертається значення одно з констант **`VT_XXX`**.

Значення, що повертається для об'єктів COM і DOTNET зазвичай дорівнює
**`VT_DISPATCH`**; єдина причина, чому ця функція працює для
цих класів полягає в тому, що COM та DOTNET є нащадками
VARIANT.

### Дивіться також

- [variant_set_type()](function.variant-set-type.md) - Приведення
варіанти до іншого типу "за місцем"
