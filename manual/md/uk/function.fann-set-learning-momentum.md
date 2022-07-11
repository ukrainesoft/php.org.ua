- [«
fann_set_input_scaling_params](function.fann-set-input-scaling-params.md)
- [fann_set_learning_rate »](function.fann-set-learning-rate.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Встановлює імпульс навчання

# fann_set_learning_momentum

(PECL fann u003d 1.0.0)

fann_set_learning_momentum - Встановлює імпульс навчання

### Опис

**fann_set_learning_momentum**(resource `$ann`, float
`$learning_momentum`): bool

Встановлює імпульс навчання.

Докладніша інформація доступна в
[fann_get_learning_momentum()](function.fann-get-learning-momentum.md).

### Список параметрів

`ann`
Ресурс нейронної мережі.

`learning_momentum`
Імпульс навчання.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_get_learning_momentum()](function.fann-get-learning-momentum.md) -
Повертає імпульс навчання
- [fann_set_training_algorithm()](function.fann-set-training-algorithm.md) -
Встановлює алгоритм навчання
