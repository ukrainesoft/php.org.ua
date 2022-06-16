- [«
fann_set_activation_function_output](function.fann-set-activation-function-output.md)
- [fann_set_activation_steepness_hidden
»](function.fann-set-activation-steepness-hidden.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Встановлює функцію активації для вказаного нейрона та шару

# fann_set_activation_function

(PECL fann u003d 1.0.0)

fann_set_activation_function — Встановлює функцію активації для
зазначеного нейрона та шару

### Опис

**fann_set_activation_function**(
resource `$ann`,
int `$activation_function`,
int `$layer`,
int `$neuron`
): bool

Встановіть функцію активації для нейрона номер `neuron` у шарі номер
`layer`, рахуючи вхідний шар як шар 0.

Неможливо встановити функції активації для нейронів у вхідному шарі.

При виборі функції активації важливо враховувати, що функції активації
різний діапазон. **`FANN_SIGMOID`**, наприклад, в діапазоні від 0 до 1,
той час як **`FANN_SIGMOID_SYMMETRIC`** знаходиться в діапазоні від -1 до
1, а **`FANN_LINEAR`** без обмежень.

Надане значення activation_function має бути однією з
констант [функцій
активації](fann.constants.md#constants.fann-activation-funcs).

Значення, що повертається - одна з констант [функцій
активації](fann.constants.md#constants.fann-train).

### Список параметрів

`ann`
Ресурс нейронної мережі.

`activation_function`
Константа [функцій
активації](fann.constants.md#constants.fann-activation-funcs).

`layer`
Номер шару.

`neuron`
Номер нейрона.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

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
- [fann_get_activation_function()](function.fann-get-activation-function.md) -
Повертає функцію активації
