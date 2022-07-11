- [«
fann_set_learning_momentum](function.fann-set-learning-momentum.md)
- [fann_set_output_scaling_params
»](function.fann-set-output-scaling-params.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Встановлює швидкість навчання

# fann_set_learning_rate

(PECL fann u003d 1.0.0)

fann_set_learning_rate - Встановлює швидкість навчання

### Опис

**fann_set_learning_rate**(resource `$ann`, float `$learning_rate`):
bool

Встановлює швидкість навчання.

Докладніша інформація доступна в
[fann_get_learning_rate()](function.fann-get-learning-rate.md).

### Список параметрів

`ann`
Ресурс нейронної мережі.

`learning_rate`
Швидкість навчання.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_get_learning_rate()](function.fann-get-learning-rate.md) -
Повертає швидкість навчання
- [fann_set_training_algorithm()](function.fann-set-training-algorithm.md) -
Встановлює алгоритм навчання
