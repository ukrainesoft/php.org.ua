- [«filter_has_var](function.filter-has-var.md)
- [filter_input_array »](function.filter-input-array.md)

- [PHP Manual](index.md)
- [Функції фільтрації даних](ref.filter.md)
- Повертає ідентифікатор, що належить іменованому фільтру

#filter_id

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

filter_id — Повертає ідентифікатор, який належить іменованому фільтру

### Опис

**filter_id**(string `$name`): int\|false

### Список параметрів

`name`
Ім'я фільтра.

### Значення, що повертаються

Ідентифікатор фільтра у разі успішного виконання або **`false`**,
якщо фільтр не існує.

### Дивіться також

- [filter_list()](function.filter-list.md) - Повертає список усіх
підтримуваних фільтрів
