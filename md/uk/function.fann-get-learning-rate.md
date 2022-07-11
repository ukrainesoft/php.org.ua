- [«
fann_get_learning_momentum](function.fann-get-learning-momentum.md)
- [fann_get_MSE »](function.fann-get-mse.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає швидкість навчання

# fann_get_learning_rate

(PECL fann u003d 1.0.0)

fann_get_learning_rate — Повертає швидкість навчання

### Опис

**fann_get_learning_rate**(resource `$ann`): float

Швидкість навчання використовується визначення того, наскільки
агресивним має бути навчання для деяких алгоритмів навчання
(**`FANN_TRAIN_INCREMENTAL`**, **`FANN_TRAIN_BATCH`**,
**`FANN_TRAIN_QUICKPROP`**). Однак зверніть увагу, що вона не
використовується в **`FANN_TRAIN_RPROP`**.

Швидкість за замовчуванням дорівнює 0.7.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Швидкість навчання або **`false`** у разі виникнення помилки.

### Дивіться також

- [fann_set_learning_rate()](function.fann-set-learning-rate.md) -
Встановлює швидкість навчання
- [fann_set_training_algorithm()](function.fann-set-training-algorithm.md) -
Встановлює алгоритм навчання
