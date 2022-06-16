- [«
fann_set_sarprop_weight_decay_shift](function.fann-set-sarprop-weight-decay-shift.md)
- [fann_set_train_error_function
»](function.fann-set-train-error-function.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Розраховує вхідні та вихідні параметри масштабування для
майбутнього використання на основі даних навчання

# fann_set_scaling_params

(PECL fann u003d 1.0.0)

fann_set_scaling_params — Розраховує вхідні та вихідні параметри
масштабування для майбутнього використання на основі даних навчання

### Опис

**fann_set_scaling_params**(
resource `$ann`,
resource `$train_data`,
float `$new_input_min`,
float `$new_input_max`,
float `$new_output_min`,
float `$new_output_max`
): bool

Розраховує вхідні та вихідні параметри масштабування для майбутнього
використання з урахуванням даних навчання.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`train_data`
Ресурс (resource) навчальних даних нейронної мережі.

`new_input_min`
Бажана нижня межа у вхідних даних після масштабування (суворо
не дотримується)

`new_input_max`
Бажана верхня межа у вхідних даних після масштабування (суворо
не дотримується)

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
- [fann_set_output_scaling_params()](function.fann-set-output-scaling-params.md) -
Розраховує вихідні параметри масштабування для майбутнього
використання на основі даних навчання
