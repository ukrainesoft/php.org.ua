- [«
fann_set_train_stop_function](function.fann-set-train-stop-function.md)
- [fann_set_weight_array »](function.fann-set-weight-array.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Встановлює алгоритм навчання

# fann_set_training_algorithm

(PECL fann u003d 1.0.0)

fann_set_training_algorithm — Встановлює алгоритм навчання

### Опис

**fann_set_training_algorithm**(resource `$ann`, int
`$training_algorithm`): bool

Встановлює алгоритм навчання.

Докладніша інформація доступна в
[fann_get_training_algorithm()](function.fann-get-training-algorithm.md).

### Список параметрів

`ann`
Ресурс нейронної мережі.

`training_algorithm`
Константа [Алгоритма навчання](fann.constants.md#constants.fann-train)

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_get_training_algorithm()](function.fann-get-training-algorithm.md) -
Повертає алгоритм навчання
