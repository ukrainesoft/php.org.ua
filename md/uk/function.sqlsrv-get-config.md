- [«sqlsrv_free_stmt](function.sqlsrv-free-stmt.md)
- [sqlsrv_get_field »](function.sqlsrv-get-field.md)

- [PHP Manual](index.md)
- [Функції SQLSRV](ref.sqlsrv.md)
- Повертає значення вказаного параметра конфігурації

#sqlsrv_get_config

(No version information available, might only be in Git)

sqlsrv_get_config — Повертає значення вказаного параметра
конфігурації

### Опис

**sqlsrv_get_config**(string `$setting`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає значення вказаного параметра конфігурації.

### Список параметрів

`setting`
Назва параметра, для якого повертається значення. Список настроюваних
параметрів дивіться у розділі
[sqlsrv_configure()](function.sqlsrv-configure.md).

### Значення, що повертаються

Повертає значення вказаного параметра. Якщо вказано неправильний параметр,
повертається **`false`**.

### Дивіться також

- [sqlsrv_configure()](function.sqlsrv-configure.md) - Змінює
конфігурацію обробки помилок драйвера та ведення журналу
