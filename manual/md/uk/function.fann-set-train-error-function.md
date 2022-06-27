- [« fann_set_scaling_params](function.fann-set-scaling-params.md)
- [fann_set_train_stop_function
»](function.fann-set-train-stop-function.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Встановлює функцію помилки, що використовується під час тренування

# fann_set_train_error_function

(PECL fann u003d 1.0.0)

fann_set_train_error_function — Встановлює функцію помилки,
використовується під час тренування

### Опис

**fann_set_train_error_function**(resource `$ann`, int
`$error_function`): bool

Встановлює функцію помилки під час тренування.

Функції помилок описані далі в константах [функцій
помилок](fann.constants.md#constants.fann-errorfunc).

### Список параметрів

`ann`
Ресурс нейронної мережі.

`error_function`
Константа [функцій помилок](fann.constants.md#constants.fann-errorfunc)

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_get_train_error_function()](function.fann-get-train-error-function.md) -
Повертає функцію обробки помилок, що використовується під час навчання
