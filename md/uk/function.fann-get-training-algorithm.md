- [«
fann_get_train_stop_function](function.fann-get-train-stop-function.md)
- [fann_init_weights »](function.fann-init-weights.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає алгоритм навчання

# fann_get_training_algorithm

(PECL fann u003d 1.0.0)

fann_get_training_algorithm — Повертає алгоритм навчання

### Опис

**fann_get_training_algorithm**(resource `$ann`): int

Повертає алгоритм навчання. Цей алгоритм навчання використовується
[fann_train_on_data()](function.fann-train-on-data.md) та пов'язаними
функціями.

Зверніть увагу, що цей алгоритм також використовується під час
[fann_cascadetrain_on_data()](function.fann-cascadetrain-on-data.md),
хоча під час каскадного навчання дозволено тільки
**`FANN_TRAIN_RPROP`** and **`FANN_TRAIN_QUICKPROP`**.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Константа [Алгоритма навчання](fann.constants.md#constants.fann-train)
або **`false`** у разі виникнення помилки.

### Дивіться також

- [fann_set_training_algorithm()](function.fann-set-training-algorithm.md) -
Встановлює алгоритм навчання
