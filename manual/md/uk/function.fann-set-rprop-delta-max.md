- [«
fann_set_rprop_decrease_factor](function.fann-set-rprop-decrease-factor.md)
- [fann_set_rprop_delta_min »](function.fann-set-rprop-delta-min.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Встановлює максимальний розмір кроку

# fann_set_rprop_delta_max

(PECL fann u003d 1.0.0)

fann_set_rprop_delta_max — Встановлює максимальний розмір кроку

### Опис

**fann_set_rprop_delta_max**(resource `$ann`, float `$rprop_delta_max`):
bool

Максимальний розмір кроку - це позитивне число, що визначає,
наскільки більшим може бути максимальний розмір кроку.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`rprop_delta_max`
Максимальний розмір кроку.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_get_rprop_delta_max()](function.fann-get-rprop-delta-max.md) -
Повертає максимальний розмір кроку
- [fann_get_rprop_delta_min()](function.fann-get-rprop-delta-min.md) -
Повертає мінімальний розмір кроку
