- [«
fann_get_activation_function](function.fann-get-activation-function.md)
- [fann_get_bias_array »](function.fann-get-bias-array.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає крутість активації для нейрона, що постачається, і номери
шару

# fann_get_activation_steepness

(PECL fann u003d 1.0.0)

fann_get_activation_steepness — Повертає крутість активації для
нейрона, що поставляється, і номери шару

### Опис

**fann_get_activation_steepness**(resource `$ann`, int `$layer`, int
`$neuron`): float

Отримує крутість активації для нейрона з номером `neuron` у шарі з
номером `layer`, вважаючи вхідний шар як шар 0.

Неможливо отримати крутість активації для нейронів у вхідному шарі.

Крутизна функції активації говорить про те, як швидко функція активації
переходить від мінімуму до максимуму. Високе значення для функції
активації також надасть більш агресивне навчання.

При навчанні нейронних мереж, де вихідні значення мають бути на
граничних значеннях (зазвичай 0 і 1, залежно від функції активації),
може використовуватись крута функція активації (наприклад, 1,0).

Крутизна активації за замовчуванням – 0,5.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`layer`
Номер шару

`neuron`
Номер нейрона

### Значення, що повертаються

Крутизна активації для нейрона або -1, якщо нейрон не визначений у
нейронної мережі, або **`false`** у разі виникнення помилки.

### Дивіться також

- [fann_set_activation_function()](function.fann-set-activation-function.md) -
Встановлює функцію активації для вказаного нейрона та шару
- [fann_set_activation_steepness_layer()](function.fann-set-activation-steepness-layer.md) -
Встановлює крутість активації для всіх нейронів у зазначеному
номері шару
- [fann_set_activation_steepness_hidden()](function.fann-set-activation-steepness-hidden.md) -
Встановлює крутість крутості активації для всіх нейронів у всіх
прихованих шарах
- [fann_set_activation_steepness_output()](function.fann-set-activation-steepness-output.md) -
Встановлює крутість активації у вихідному шарі
- [fann_set_activation_steepness()](function.fann-set-activation-steepness.md) -
Встановлює крутість активації для вказаного нейрона та номера
шару
