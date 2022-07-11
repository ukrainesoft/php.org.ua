- [« fann_save](function.fann-save.md)
- [fann_scale_input »](function.fann-scale-input.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Масштабує вхідні дані до навчальних даних до зазначеного
діапазону

# fann_scale_input_train_data

(PECL fann u003d 1.0.0)

fann_scale_input_train_data — Масштабує вхідні дані в учнів
даних до вказаного діапазону

### Опис

**fann_scale_input_train_data**(resource `$train_data`, float
`$new_min`, float `$new_max`): bool

Масштабує вхідні дані до навчальних даних до вказаного діапазону.

### Список параметрів

`train_data`
Ресурс (resource) навчальних даних нейронної мережі.

`new_min`
Новий мінімум після масштабування вхідних даних до навчальних даних.

`new_max`
Новий максимум після масштабування вхідних даних до навчальних даних.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_scale_output_train_data()](function.fann-scale-output-train-data.md) -
Масштабує вихідні дані у навчальних даних до зазначеного
діапазону
- [fann_scale_train_data()](function.fann-scale-train-data.md) -
Масштабує вхідні та вихідні дані в навчальних даних до
вказаного діапазону
