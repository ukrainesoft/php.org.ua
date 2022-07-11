- [«
fann_get_rprop_decrease_factor](function.fann-get-rprop-decrease-factor.md)
- [fann_get_rprop_delta_min »](function.fann-get-rprop-delta-min.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає максимальний розмір кроку

# fann_get_rprop_delta_max

(PECL fann u003d 1.0.0)

fann_get_rprop_delta_max — Повертає максимальний розмір кроку

### Опис

**fann_get_rprop_delta_max**(resource `$ann`): float

Максимальний розмір кроку - це позитивне число, що визначає,
наскільки більшим може бути максимальний розмір кроку.

Максимальне значення дельти за промовчанням становить 50.0.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Максимальний розмір кроку або **false** у разі виникнення помилки.

### Дивіться також

- [fann_set_rprop_delta_max()](function.fann-set-rprop-delta-max.md) -
Встановлює максимальний розмір кроку
- [fann_get_rprop_delta_min()](function.fann-get-rprop-delta-min.md) -
Повертає мінімальний розмір кроку
