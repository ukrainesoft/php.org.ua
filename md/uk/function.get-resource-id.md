- [«get_defined_vars](function.get-defined-vars.md)
- [get_resource_type »](function.get-resource-type.md)

- [PHP Manual](index.md)
- [Функції для роботи зі змінними](ref.var.md)
- Повертає цілий ідентифікатор для даного ресурсу

#get_resource_id

(PHP 8)

get_resource_id — Повертає цілий ідентифікатор для цього
ресурсу

### Опис

**get_resource_id**(resource `$resource`): int

Функція забезпечує безпечний типів спосіб генерації
цілого ідентифікатора для ресурсу.

### Список параметрів

`resource`
Дескриптор ресурсу.

### Значення, що повертаються

Цілочисельний ідентифікатор (int) для зазначеного `resource`.

Функція насправді є перетворенням цілого числа (int) від
`resource`, щоб полегшити отримання ідентифікатора ресурсу.

### Приклади

**Приклад #1 Використання **get_resource_id()** дає той самий результат,
що й приведення до цілого числа (int)**

` <?php$handle u003d fopen("php://stdout", "w");echo (int) $handle . "
";echo get_resource_id($handle);?> `

Результатом виконання цього прикладу буде щось подібне:

698
698

### Дивіться також

- [get_resource_type()](function.get-resource-type.md) - Повертає
тип ресурсу
