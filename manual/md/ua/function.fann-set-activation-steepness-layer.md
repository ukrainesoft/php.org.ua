- [«
fann_set_activation_steepness_hidden](function.fann-set-activation-steepness-hidden.md)
- [fann_set_activation_steepness_output
»](function.fann-set-activation-steepness-output.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Встановлює крутість активації для всіх нейронів у зазначеному
номері шару

# fann_set_activation_steepness_layer

(PECL fann u003d 1.0.0)

fann_set_activation_steepness_layer — Встановлює крутість активації
для всіх нейронів у вказаному номері шару

### Опис

**fann_set_activation_steepness_layer**(resource `$ann`, float
`$activation_steepness`, int `$layer`): bool

Встановіть крутість активації для всіх нейронів у шарі номер `layer`,
рахуючи вхідний шар як шар 0.

Неможливо встановити крутість активації нейронів у вхідному шарі.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`activation_steepness`
Крутизна активації.

`layer`
Номер шару.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_set_activation_steepness()](function.fann-set-activation-steepness.md) -
Встановлює крутість активації для вказаного нейрона та номера
шару
- [fann_set_activation_steepness_hidden()](function.fann-set-activation-steepness-hidden.md) -
Встановлює крутість крутості активації для всіх нейронів у всіх
прихованих шарах
- [fann_set_activation_steepness_output()](function.fann-set-activation-steepness-output.md) -
Встановлює крутість активації у вихідному шарі
- [fann_get_activation_steepness()](function.fann-get-activation-steepness.md) -
Повертає крутість активації для нейрона, що поставляється, і номери
шару
- [fann_set_activation_function()](function.fann-set-activation-function.md) -
Встановлює функцію активації для вказаного нейрона та шару
