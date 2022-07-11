- [« fann_get_rprop_delta_min](function.fann-get-rprop-delta-min.md)
- [fann_get_rprop_increase_factor
»](function.fann-get-rprop-increase-factor.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає початковий розмір кроку

# fann_get_rprop_delta_zero

(PECL fann u003d 1.0.0)

fann_get_rprop_delta_zero — Повертає початковий розмір кроку

### Опис

**fann_get_rprop_delta_zero**(resource `$ann`): int

Початковий розмір кроку - це позитивне число, що визначає
Початковий розмір кроку.

За умовчанням нульове значення дельти дорівнює 0.1.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Початковий розмір кроку або **false** у разі виникнення помилки.

### Дивіться також

- [fann_set_rprop_delta_zero()](function.fann-set-rprop-delta-zero.md) -
Встановлює початковий розмір кроку
- [fann_get_rprop_delta_min()](function.fann-get-rprop-delta-min.md) -
Повертає мінімальний розмір кроку
- [fann_get_rprop_delta_max()](function.fann-get-rprop-delta-max.md) -
Повертає максимальний розмір кроку
