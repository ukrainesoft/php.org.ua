- [« Функції фільтрації даних](ref.filter.md)
- [filter_id »](function.filter-id.md)

- [PHP Manual](index.md)
- [Функції фільтрації даних](ref.filter.md)
- Перевіряє існування змінної вказаного типу

#filter_has_var

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

filter_has_var — Перевіряє існування змінної вказаного типу

### Опис

**filter_has_var**(int `$input_type`, string `$var_name`): bool

### Список параметрів

`input_type`
Один з **`INPUT_GET`**, **`INPUT_POST`**, **`INPUT_COOKIE`**,
**`INPUT_SERVER`**, **`INPUT_ENV`**.

`var_name`
Ім'я змінної, що перевіряється.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
