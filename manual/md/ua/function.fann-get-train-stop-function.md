- [«
fann_get_train_error_function](function.fann-get-train-error-function.md)
- [fann_get_training_algorithm
»](function.fann-get-training-algorithm.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає функцію зупинки, що використовується під час навчання

# fann_get_train_stop_function

(PECL fann u003d 1.0.0)

fann_get_train_stop_function — Повертає функцію зупинки,
використовується під час навчання

### Опис

**fann_get_train_stop_function**(resource `$ann`): int

Повертає функцію зупинки під час навчання.

Опції зупинки описані далі в константах [функції
зупинки](fann.constants.md#constants.fann-stopfunc).

Функція зупинки за промовчанням: **`FANN_STOPFUNC_MSE`**.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Константа [функції
зупинки](fann.constants.md#constants.fann-stopfunc) або **`false`**
у разі виникнення помилки.

### Дивіться також

- [fann_set_train_stop_function()](function.fann-set-train-stop-function.md) -
Встановлює функцію зупинки під час тренування.
