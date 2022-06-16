- [« fann_create_train](function.fann-create-train.md)
- [fann_descale_output »](function.fann-descale-output.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Масштабує дані у вхідному векторі після отримання на основі
раніше розрахованих параметрів

# fann_descale_input

(PECL fann u003d 1.0.0)

fann_descale_input — Масштабує дані у вхідному векторі після
отримання їх на основі раніше розрахованих параметрів

### Опис

**fann_descale_input**(resource `$ann`, array `$input_vector`): bool

Масштабує дані у вхідному векторі після отримання на основі
раніше розрахованих параметрів.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`input_vector`
Вхідний вектор, який буде масштабовано

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_scale_input()](function.fann-scale-input.md) - Масштабує
дані у вхідному векторі перед подачею їх у ann на основі раніше
розрахованих параметрів
- [fann_descale_output()](function.fann-descale-output.md) -
Масштабує дані у вихідному векторі після отримання їх на основі
раніше розрахованих параметрів
