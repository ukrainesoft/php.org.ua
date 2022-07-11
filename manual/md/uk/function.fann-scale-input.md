- [«
fann_scale_input_train_data](function.fann-scale-input-train-data.md)
- [fann_scale_output_train_data
»](function.fann-scale-output-train-data.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Масштабує дані у вхідному векторі перед подачею їх у ann на
основі раніше розрахованих параметрів

# fann_scale_input

(PECL fann u003d 1.0.0)

fann_scale_input — Масштабує дані у вхідному векторі перед подачею
їх у ann на основі раніше розрахованих параметрів

### Опис

**fann_scale_input**(resource `$ann`, array `$input_vector`): bool

Масштабує дані у вхідному векторі перед подачею їх у ann на основі
раніше розрахованих параметрів.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`input_vector`
Вхідний вектор, який масштабується.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_descale_input()](function.fann-descale-input.md) -
Масштабує дані у вхідному векторі після отримання на основі
раніше розрахованих параметрів
- [fann_scale_output()](function.fann-scale-output.md) -
Масштабує дані у вихідному векторі перед їх передачею в ann
основі раніше розрахованих параметрів
