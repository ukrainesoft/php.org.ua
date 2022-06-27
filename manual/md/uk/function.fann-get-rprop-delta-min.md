- [« fann_get_rprop_delta_max](function.fann-get-rprop-delta-max.md)
- [fann_get_rprop_delta_zero
»](function.fann-get-rprop-delta-zero.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає мінімальний розмір кроку

# fann_get_rprop_delta_min

(PECL fann u003d 1.0.0)

fann_get_rprop_delta_min — Повертає мінімальний розмір кроку

### Опис

**fann_get_rprop_delta_min**(resource `$ann`): float

Мінімальний розмір кроку - це невелике позитивне число,
визначальне, наскільки невеликим може бути мінімальний розмір кроку.

Значення дельти за умовчанням min 0.0.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Мінімальний розмір кроку або **`false`** у разі виникнення помилки.

### Дивіться також

- [fann_set_rprop_delta_min()](function.fann-set-rprop-delta-min.md) -
Встановлює мінімальний розмір кроку
