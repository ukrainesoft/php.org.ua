- [« fann_set_learning_rate](function.fann-set-learning-rate.md)
- [fann_set_quickprop_decay »](function.fann-set-quickprop-decay.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- розраховує вихідні параметри масштабування для майбутнього
використання на основі даних навчання

# fann_set_output_scaling_params

(PECL fann u003d 1.0.0)

fann_set_output_scaling_params — Розраховує вихідні параметри
масштабування для майбутнього використання на основі даних навчання

### Опис

**fann_set_output_scaling_params**(
resource `$ann`,
resource `$train_data`,
float `$new_output_min`,
float `$new_output_max`
): bool

Розраховує вихідні параметри масштабування для майбутнього
використання з урахуванням даних навчання.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`train_data`
Ресурс (resource) навчальних даних нейронної мережі.

`new_output_min`
Бажана нижня межа у вихідних даних після масштабування (суворо
не дотримується)

`new_output_max`
Бажана верхня межа у вихідних даних після масштабування (суворо
не дотримується)

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_set_input_scaling_params()](function.fann-set-input-scaling-params.md) -
Розраховує вхідні параметри масштабування для майбутнього
використання на основі даних навчання
