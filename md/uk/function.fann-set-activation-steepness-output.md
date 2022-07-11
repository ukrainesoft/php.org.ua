- [«
fann_set_activation_steepness_layer](function.fann-set-activation-steepness-layer.md)
- [fann_set_activation_steepness
»](function.fann-set-activation-steepness.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Встановлює крутість активації у вихідному шарі

# fann_set_activation_steepness_output

(PECL fann u003d 1.0.0)

fann_set_activation_steepness_output — Встановлює крутість активації
у вихідному шарі

### Опис

**fann_set_activation_steepness_output**(resource `$ann`, float
`$activation_steepness`): bool

Встановлює крутість активації у вихідному шарі.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`activation_steepness`
Крутизна активації.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_set_activation_steepness()](function.fann-set-activation-steepness.md) -
Встановлює крутість активації для вказаного нейрона та номера
шару
- [fann_set_activation_steepness_layer()](function.fann-set-activation-steepness-layer.md) -
Встановлює крутість активації для всіх нейронів у зазначеному
номері шару
- [fann_set_activation_steepness_hidden()](function.fann-set-activation-steepness-hidden.md) -
Встановлює крутість крутості активації для всіх нейронів у всіх
прихованих шарах
- [fann_get_activation_steepness()](function.fann-get-activation-steepness.md) -
Повертає крутість активації для нейрона, що поставляється, і номери
шару
- [fann_set_activation_function()](function.fann-set-activation-function.md) -
Встановлює функцію активації для вказаного нейрона та шару
