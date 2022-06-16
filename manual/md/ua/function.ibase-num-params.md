- [« ibase_num_fields](function.ibase-num-fields.md)
- [ibase_param_info »](function.ibase-param-info.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Повертає кількість параметрів у підготовленому запиті

# ibase_num_params

(PHP 5, PHP 7 \< 7.4.0)

ibase_num_params — Повертає кількість параметрів у підготовленому
запиті

### Опис

**ibase_num_params**(resource `$query`): int

Ця функція повертає кількість параметрів у підготовленому запиті,
вказаному `query`. Це кількість сполучних аргументів, які мають
бути при виклику
[ibase_execute()](function.ibase-execute.md).

### Список параметрів

`query`
Дескриптор підготовленого запиту.

### Значення, що повертаються

Повертає кількість параметрів як цілого числа.

### Дивіться також

- [ibase_prepare()](function.ibase-prepare.md) - Підготовка
запит для подальшого зв'язування псевдозмінних та виконання
- [ibase_param_info()](function.ibase-param-info.md) - Повертає
інформацію про параметр у підготовленому запиті
