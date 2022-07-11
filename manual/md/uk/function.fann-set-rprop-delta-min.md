- [« fann_set_rprop_delta_max](function.fann-set-rprop-delta-max.md)
- [fann_set_rprop_delta_zero
»](function.fann-set-rprop-delta-zero.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Встановлює мінімальний розмір кроку

# fann_set_rprop_delta_min

(PECL fann u003d 1.0.0)

fann_set_rprop_delta_min — Встановлює мінімальний розмір кроку

### Опис

**fann_set_rprop_delta_min**(resource `$ann`, float `$rprop_delta_min`):
bool

Мінімальний розмір кроку - це невелике позитивне число,
визначальне, наскільки невеликим може бути мінімальний розмір кроку.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`rprop_delta_min`
Мінімальний розмір кроку.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_get_rprop_delta_min()](function.fann-get-rprop-delta-min.md) -
Повертає мінімальний розмір кроку
