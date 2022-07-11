- [« fann_scale_train_data](function.fann-scale-train-data.md)
- [fann_set_activation_function_hidden
»](function.fann-set-activation-function-hidden.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Масштабує вхідні та вихідні дані на основі раніше розрахованих
параметрів

# fann_scale_train

(PECL fann u003d 1.0.0)

fann_scale_train — Масштабує вхідні та вихідні дані на основі
раніше розрахованих параметрів

### Опис

**fann_scale_train**(resource `$ann`, resource `$train_data`): bool

Масштабує вхідні та вихідні дані на основі раніше розрахованих
параметрів.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`train_data`
Ресурс (resource) навчальних даних нейронної мережі.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_descale_train()](function.fann-descale-train.md) -
Масштабування вхідних та вихідних даних на основі попередньо
розрахованих параметрів
- [fann_set_scaling_params()](function.fann-set-scaling-params.md) -
Розраховує вхідні та вихідні параметри масштабування для
майбутнього використання на основі даних навчання
