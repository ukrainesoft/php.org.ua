- [« Функції runkit7](ref.runkit7.md)
- [runkit7_constant_redefine
»](function.runkit7-constant-redefine.md)

- [PHP Manual](index.md)
- [Функції runkit7](ref.runkit7.md)
- Аналогічний define(), але також дозволяє визначити константу класу

# runkit7_constant_add

(PECL runkit7 \>u003d Unknown)

runkit7_constant_add - Аналогічний define(), але також дозволяє
визначити константу класу

### Опис

**runkit7_constant_add**(string `$constant_name`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`, int `$newVisibility` u003d ?): bool

### Список параметрів

`constant_name`
Ім'я константи, що оголошується. Або рядок для позначення глобального
константи, або `classname::constname` визначення константи класу.

`value`
Значення константи (NULL, Bool, Long, Double, String, Array або
Resource).

`newVisibility`
Видимість константи для констант класу. За замовчуванням є загальнодоступним.
Одна із констант **`RUNKIT7_ACC_*`**.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [define()](function.define.md) - Визначає іменовану константу
- [runkit7_constant_redefine()](function.runkit7-constant-redefine.md) -
Перевизначає вже певну константу
- [runkit7_constant_remove()](function.runkit7-constant-remove.md) -
Видаляє вже певну константу
