- [«
fann_set_rprop_delta_zero](function.fann-set-rprop-delta-zero.md)
- [fann_set_sarprop_step_error_shift
»](function.fann-set-sarprop-step-error-shift.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Встановлює коефіцієнт збільшення, який використовується під час навчання
Rprop

# fann_set_rprop_increase_factor

(PECL fann u003d 1.0.0)

fann_set_rprop_increase_factor — Встановлює коефіцієнт збільшення,
використовується під час навчання Rprop

### Опис

**fann_set_rprop_increase_factor**(resource `$ann`, float
`$rprop_increase_factor`): bool

Встановлює коефіцієнт збільшення, який використовується під час навчання
Rprop

### Список параметрів

`ann`
Ресурс нейронної мережі.

`rprop_increase_factor`
Коефіцієнт збільшення.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_get_rprop_increase_factor()](function.fann-get-rprop-increase-factor.md) -
Повертає коефіцієнт збільшення, який використовується під час навчання
RPROP
