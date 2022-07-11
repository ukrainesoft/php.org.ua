- [« ibase_num_params](function.ibase-num-params.md)
- [ibase_pconnect »](function.ibase-pconnect.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Повертає інформацію про параметр у підготовленому запиті

# ibase_param_info

(PHP 5, PHP 7 \< 7.4.0)

ibase_param_info — Повертає інформацію про параметр у підготовленому
запиті

### Опис

**ibase_param_info**(resource `$query`, int `$param_number`): array

Повертає масив з інформацією щодо параметра після підготовки запиту.

### Список параметрів

`query`
Дескриптор підготовленого запиту InterBase.

`param_number`
Зміщення параметра.

### Значення, що повертаються

Повертає масив з такими ключами: `name`, `alias`, `relation`,
`length` та `type`.

### Дивіться також

- [ibase_field_info()](function.ibase-field-info.md) - Отримує
інформацію про поле
- [ibase_num_params()](function.ibase-num-params.md) - Повертає
кількість параметрів у підготовленому запиті
