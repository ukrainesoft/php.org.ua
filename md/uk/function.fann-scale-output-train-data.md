- [« fann_scale_input](function.fann-scale-input.md)
- [fann_scale_output »](function.fann-scale-output.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Масштабує вихідні дані у навчальних даних до вказаного
діапазону

# fann_scale_output_train_data

(PECL fann u003d 1.0.0)

fann_scale_output_train_data — Масштабує вихідні дані у навчальних
даних до вказаного діапазону

### Опис

**fann_scale_output_train_data**(resource `$train_data`, float
`$new_min`, float `$new_max`): bool

Масштабує вихідні дані у навчальних даних до вказаного діапазону.

### Список параметрів

`train_data`
Ресурс (resource) навчальних даних нейронної мережі.

`new_min`
Новий мінімум після масштабування вихідних даних у навчальних даних.

`new_max`
Новий максимум після масштабування вихідних даних у навчальних даних.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_scale_input_train_data()](function.fann-scale-input-train-data.md) -
Масштабує вхідні дані до навчальних даних до зазначеного
діапазону
- [fann_scale_train_data()](function.fann-scale-train-data.md) -
Масштабує вхідні та вихідні дані в навчальних даних до
вказаного діапазону
