- [« fann_set_rprop_delta_min](function.fann-set-rprop-delta-min.md)
- [fann_set_rprop_increase_factor
»](function.fann-set-rprop-increase-factor.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Встановлює початковий розмір кроку

# fann_set_rprop_delta_zero

(PECL fann u003d 1.0.0)

fann_set_rprop_delta_zero — Встановлює початковий розмір кроку

### Опис

**fann_set_rprop_delta_zero**(resource `$ann`, float
`$rprop_delta_zero`): bool

Початковий розмір кроку – це позитивне число, що визначає початковий
Розмір кроку.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`rprop_delta_zero`
Початковий розмір кроку.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_get_rprop_delta_zero()](function.fann-get-rprop-delta-zero.md) -
Повертає початковий розмір кроку
- [fann_get_rprop_delta_min()](function.fann-get-rprop-delta-min.md) -
Повертає мінімальний розмір кроку
- [fann_get_rprop_delta_max()](function.fann-get-rprop-delta-max.md) -
Повертає максимальний розмір кроку
