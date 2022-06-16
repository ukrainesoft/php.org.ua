- [« fann_descale_input](function.fann-descale-input.md)
- [fann_descale_train »](function.fann-descale-train.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Масштабує дані у вихідному векторі після отримання їх на основі
раніше розрахованих параметрів

# fann_descale_output

(PECL fann u003d 1.0.0)

fann_descale_output — Масштабує дані у вихідному векторі після
отримання їх на основі раніше розрахованих параметрів

### Опис

**fann_descale_output**(resource `$ann`, array `$output_vector`): bool

Масштабує дані у вихідному векторі після отримання їх на основі
раніше розрахованих параметрів.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`output_vector`
Вихідний вектор, який буде масштабовано

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_scale_output()](function.fann-scale-output.md) -
Масштабує дані у вихідному векторі перед їх передачею в ann
основі раніше розрахованих параметрів
- [fann_descale_input()](function.fann-descale-input.md) -
Масштабує дані у вхідному векторі після отримання на основі
раніше розрахованих параметрів
