- [« fann_length_train_data](function.fann-length-train-data.md)
- [fann_num_input_train_data
»](function.fann-num-input-train-data.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Об'єднує навчальні дані

# fann_merge_train_data

(PECL fann u003d 1.0.0)

fann_merge_train_data — Об'єднує навчальні дані

### Опис

**fann_merge_train_data**(resource `$data1`, resource `$data2`):
resource

Об'єднує дані з data1 та data2 у новий ресурс (resource) навчальних
даних.

### Список параметрів

`data1`
Ресурс (resource) навчальних даних нейронної мережі.

`data2`
Ресурс (resource) навчальних даних нейронної мережі.

### Значення, що повертаються

Новий ресурс (resource) об'єднаних навчальних даних або **`false`**
у разі виникнення помилки.
