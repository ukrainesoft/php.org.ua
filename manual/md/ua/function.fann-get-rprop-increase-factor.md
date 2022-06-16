- [«
fann_get_rprop_delta_zero](function.fann-get-rprop-delta-zero.md)
- [fann_get_sarprop_step_error_shift
»](function.fann-get-sarprop-step-error-shift.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає коефіцієнт збільшення, який використовується під час навчання
RPROP

# fann_get_rprop_increase_factor

(PECL fann u003d 1.0.0)

fann_get_rprop_increase_factor — Повертає коефіцієнт збільшення,
використовується під час навчання RPROP

### Опис

**fann_get_rprop_increase_factor**(resource `$ann`): float

Коефіцієнт збільшення - це значення більше 1, яке використовується для
Збільшення розміру кроку під час навчання RPROP.

Коефіцієнт збільшення за умовчанням становить 1.2.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Коефіцієнт збільшення або **`false`** у разі виникнення помилки.

### Дивіться також

- [fann_set_rprop_increase_factor()](function.fann-set-rprop-increase-factor.md) -
Встановлює коефіцієнт збільшення, який використовується під час навчання
Rprop
