- [«get_resource_id](function.get-resource-id.md)
- [gettype»](function.gettype.md)

- [PHP Manual](index.md)
- [Функції для роботи зі змінними](ref.var.md)
- Повертає тип ресурсу

#get_resource_type

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

get_resource_type — Повертає тип ресурсу

### Опис

**get_resource_type**(resource `$resource`): string

Функція повертає тип ресурсу.

### Список параметрів

`resource`
Визначається дескриптор ресурсу.

### Значення, що повертаються

Якщо цей параметр `resource` є ресурсом, функція повертає
рядок, що вказує на його тип. Якщо тип не визначається цією функцією,
значенням, що повертається, буде рядок `Unknown`.

Функція повертає **`null`** і викликає помилку, якщо `resource` не
є ресурсом (resource).

### Приклади

**Приклад #1 Приклад використання **get_resource_type()****

`<?php// Починаючи з версії PHP 8.0.0, наступний код більше не працює. Функція curl_init тепер повертає об'єкт CurlHandle.$c u003dcurl_init();echo get_resource_type($c) . "
";?> `

Результат виконання цього прикладу в PHP 7:

stream
curl

### Дивіться також

- [get_resource_id()](function.get-resource-id.md) - Повертає
цілісний ідентифікатор для цього ресурсу
