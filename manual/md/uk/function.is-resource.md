- [«is_real](function.is-real.md)
- [is_scalar »](function.is-scalar.md)

- [PHP Manual](index.md)
- [Функції для роботи зі змінними](ref.var.md)
- Перевіряє, чи є змінна ресурсом

#is_resource

(PHP 4, PHP 5, PHP 7, PHP 8)

is_resource — Перевіряє, чи є змінна ресурсом

### Опис

**is_resource**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

Перевіряє, чи є ця змінна ресурсом (resource).

### Список параметрів

`value`
Перевірена змінна.

### Значення, що повертаються

Повертає **`true`**, якщо `value` є ресурсом (resource), або
**`false`** інакше.

### Приклади

**Приклад #1 Приклад використання **is_resource()****

` <?php$handle u003dfopen("php://stdout", "w");if (is_resource($handle)) {    echo '$handle - цересурс';}?> `

Результат виконання цього прикладу:

$handle - це ресурс

### Примітки

> **Примітка**:
>
> Функція **is_resource()** не виконує суворої перевірки типу; вона
> поверне **`false`**, якщо `value` є ресурсом, який був
> закритий.

### Дивіться також

- [Тип resource](language.types.resource.md)
- [get_resource_type()](function.get-resource-type.md) - Повертає
тип ресурсу
