- [«
fann_set_train_error_function](function.fann-set-train-error-function.md)
- [fann_set_training_algorithm
»](function.fann-set-training-algorithm.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Встановлює функцію зупинки під час тренування.

# fann_set_train_stop_function

(PECL fann u003d 1.0.0)

fann_set_train_stop_function — Встановлює функцію зупинки,
використовується під час тренування

### Опис

**fann_set_train_stop_function**(resource `$ann`, int `$stop_function`):
bool

Встановлює функцію зупинки під час тренування.

Опції зупинки описані далі в константах [функції
зупинки](fann.constants.md#constants.fann-stopfunc).

### Список параметрів

`ann`
Ресурс нейронної мережі.

`stop_function`
Константа [функції
зупинки](fann.constants.md#constants.fann-stopfunc).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_get_train_stop_function()](function.fann-get-train-stop-function.md) -
Повертає функцію зупинки, що використовується під час навчання
