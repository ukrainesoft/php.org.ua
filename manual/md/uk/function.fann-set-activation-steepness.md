- [«
fann_set_activation_steepness_output](function.fann-set-activation-steepness-output.md)
- [fann_set_bit_fail_limit »](function.fann-set-bit-fail-limit.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Встановлює крутість активації для вказаного нейрона та номера
шару

# fann_set_activation_steepness

(PECL fann u003d 1.0.0)

fann_set_activation_steepness — Встановлює крутість активації для
вказаного нейрона та номери шару

### Опис

**fann_set_activation_steepness**(
resource `$ann`,
float `$activation_steepness`,
int `$layer`,
int `$neuron`
): bool

Встановіть крутизну активації для нейрона номер `neuron` у шарі номер
`layer`, рахуючи вхідний шар як шар 0.

Неможливо встановити крутість активації нейронів у вхідному шарі.

Крутизна функції активації дещо свідчить, наскільки швидко
функція активації переходить від мінімуму до максимуму. Високе значення
функції активації також надасть більш агресивне навчання.

При навчанні нейронних мереж, у яких вихідні значення мають бути
крайніми (зазвичай 0 та 1, залежно від функції активації), може
використовувати круту функцію активації (наприклад, 1.0).

За промовчанням крутість активації становить 0.5.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`activation_steepness`
Крутизна активації.

`layer`
Номер шару.

`neuron`
Номер нейрона.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_set_activation_steepness_layer()](function.fann-set-activation-steepness-layer.md) -
Встановлює крутість активації для всіх нейронів у зазначеному
номері шару
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
