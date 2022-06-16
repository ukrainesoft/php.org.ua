- [«
fann_scale_output_train_data](function.fann-scale-output-train-data.md)
- [fann_scale_train_data »](function.fann-scale-train-data.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Масштабує дані у вихідному векторі перед їх передачею в ann на
основі раніше розрахованих параметрів

# fann_scale_output

(PECL fann u003d 1.0.0)

fann_scale_output — Масштабує дані у вихідному векторі перед їх
передачею в ann на основі раніше розрахованих параметрів

### Опис

**fann_scale_output**(resource `$ann`, array `$output_vector`): bool

Масштабує дані у вихідному векторі перед їх передачею в ann
основу раніше розрахованих параметрів.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`output_vector`
Вихідний вектор, який масштабується.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_descale_output()](function.fann-descale-output.md) -
Масштабує дані у вихідному векторі після отримання їх на основі
раніше розрахованих параметрів
- [fann_scale_input()](function.fann-scale-input.md) - Масштабує
дані у вхідному векторі перед подачею їх у ann на основі раніше
розрахованих параметрів
