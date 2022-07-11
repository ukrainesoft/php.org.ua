- [«
fann_set_activation_function_hidden](function.fann-set-activation-function-hidden.md)
- [fann_set_activation_function_output
»](function.fann-set-activation-function-output.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Встановлює функцію активації для всіх нейронів у наданому
шарі

# fann_set_activation_function_layer

(PECL fann u003d 1.0.0)

fann_set_activation_function_layer — Встановлює функцію активації для
всіх нейронів у наданому шарі

### Опис

**fann_set_activation_function_layer**(resource `$ann`, int
`$activation_function`, int `$layer`): bool

Встановіть функцію активації всіх нейронів у шарі номер `layer`,
рахуючи вхідний шар шаром 0.

Неможливо встановити функції активації для нейронів у вхідному шарі.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`activation_function`
Константа [функцій
активації](fann.constants.md#constants.fann-activation-funcs).

`layer`
Номер шару.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_set_activation_function()](function.fann-set-activation-function.md) -
Встановлює функцію активації для вказаного нейрона та шару
- [fann_set_activation_function_hidden()](function.fann-set-activation-function-hidden.md) -
Встановлює функцію активації для всіх прихованих шарів
- [fann_set_activation_function_output()](function.fann-set-activation-function-output.md) -
Встановлює функцію активації для вихідного шару
- [fann_set_activation_steepness()](function.fann-set-activation-steepness.md) -
Встановлює крутість активації для вказаного нейрона та номера
шару
