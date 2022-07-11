- [« fann_descale_output](function.fann-descale-output.md)
- [fann_destroy_train »](function.fann-destroy-train.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Масштабування вхідних та вихідних даних на основі попередньо
розрахованих параметрів

# fann_descale_train

(PECL fann u003d 1.0.0)

fann_descale_train — Масштабування вхідних та вихідних даних на основі
попередньо розрахованих параметрів

### Опис

**fann_descale_train**(resource `$ann`, resource `$train_data`): bool

Масштабування вхідних та вихідних даних на основі попередньо
розрахованих параметрів.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`train_data`
Ресурс (resource) навчальних даних нейронної мережі.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_scale_train()](function.fann-scale-train.md) - Масштабує
вхідні та вихідні дані на основі раніше розрахованих параметрів
- [fann_set_scaling_params()](function.fann-set-scaling-params.md) -
Розраховує вхідні та вихідні параметри масштабування для
майбутнього використання на основі даних навчання
