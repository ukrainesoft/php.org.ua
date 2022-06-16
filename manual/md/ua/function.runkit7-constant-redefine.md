- [«runkit7_constant_add](function.runkit7-constant-add.md)
- [runkit7_constant_remove »](function.runkit7-constant-remove.md)

- [PHP Manual](index.md)
- [Функції runkit7](ref.runkit7.md)
- Перевизначає вже певну константу

# runkit7_constant_redefine

(PECL runkit7 \>u003d Unknown)

runkit7_constant_redefine — Перевизначає вже певну константу

### Опис

**runkit7_constant_redefine**(string `$constant_name`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`, int `$new_visibility` u003d ?): bool

### Список параметрів

`constant_name`
Константа, яку потрібно перевизначити. Або ім'я глобальної
константи, або `classname::constname` для перевизначення константи
класу.

`value`
Значення, яке присвоюється константі.

`new_visibility`
Нова видимість константи для констант класу. За замовчуванням без
змін. Одна із констант **`RUNKIT7_ACC_*`**.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [runkit7_constant_add()](function.runkit7-constant-add.md) -
Аналогічний define(), але також дозволяє визначити константу класу
- [runkit7_constant_remove()](function.runkit7-constant-remove.md) -
Видаляє вже певну константу
