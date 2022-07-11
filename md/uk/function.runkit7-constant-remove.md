- [«
runkit7_constant_redefine](function.runkit7-constant-redefine.md)
- [runkit7_function_add »](function.runkit7-function-add.md)

- [PHP Manual](index.md)
- [Функції runkit7](ref.runkit7.md)
- Видаляє вже певну константу

# runkit7_constant_remove

(PECL runkit7 \>u003d Unknown)

runkit7_constant_remove — Видаляє вже певну константу

### Опис

**runkit7_constant_remove**(string `$constant_name`): bool

### Список параметрів

`constant_name`
Константа, яку потрібно видалити. Або ім'я світової константи,
або `classname::constname` для видалення константи класу.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [define()](function.define.md) - Визначає іменовану константу
- [runkit7_constant_add()](function.runkit7-constant-add.md) -
Аналогічний define(), але також дозволяє визначити константу класу
- [runkit7_constant_redefine()](function.runkit7-constant-redefine.md) -
Перевизначає вже певну константу
