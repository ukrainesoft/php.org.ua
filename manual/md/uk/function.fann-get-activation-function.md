- [«
fann_duplicate_train_data](function.fann-duplicate-train-data.md)
- [fann_get_activation_steepness
»](function.fann-get-activation-steepness.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає функцію активації

# fann_get_activation_function

(PECL fann u003d 1.0.0)

fann_get_activation_function — Повертає функцію активації

### Опис

**fann_get_activation_function**(resource `$ann`, int `$layer`, int
`$neuron`): int

Отримує функцію активації для номера нейрона `neuron` у шарі номер
`layer`, рахуючи вхідний шар як шар 0.

Неможливо отримати функції активації для нейронів у вхідному шарі.

Повертається значення є однією з констант [функцій
активації](fann.constants.md#constants.fann-activation-funcs).

### Список параметрів

`ann`
Ресурс нейронної мережі.

`layer`
Номер шару.

`neuron`
Номер нейрона.

### Значення, що повертаються

Константа [функцій навчання](fann.constants.md#constants.fann-train)
або -1, якщо нейрон не визначений у нейронній мережі або **`false`**
у разі виникнення помилки.

### Дивіться також

- [fann_set_activation_function_layer()](function.fann-set-activation-function-layer.md) -
Встановлює функцію активації для всіх нейронів у наданому
шарі
- [fann_set_activation_function_hidden()](function.fann-set-activation-function-hidden.md) -
Встановлює функцію активації для всіх прихованих шарів
- [fann_set_activation_function_output()](function.fann-set-activation-function-output.md) -
Встановлює функцію активації для вихідного шару
- [fann_set_activation_steepness()](function.fann-set-activation-steepness.md) -
Встановлює крутість активації для вказаного нейрона та номера
шару
- [fann_set_activation_function()](function.fann-set-activation-function.md) -
Встановлює функцію активації для вказаного нейрона та шару
