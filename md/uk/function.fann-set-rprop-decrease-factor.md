- [« fann_set_quickprop_mu](function.fann-set-quickprop-mu.md)
- [fann_set_rprop_delta_max »](function.fann-set-rprop-delta-max.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Встановлює коефіцієнт зменшення, який використовується під час навчання
RPROP

# fann_set_rprop_decrease_factor

(PECL fann u003d 1.0.0)

fann_set_rprop_decrease_factor — Встановлює коефіцієнт зменшення,
використовується під час навчання RPROP

### Опис

**fann_set_rprop_decrease_factor**(resource `$ann`, float
`$rprop_decrease_factor`): bool

Встановлює коефіцієнт зменшення, який використовується під час навчання
RPROP.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`rprop_decrease_factor`
Коефіцієнт зменшення.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_get_rprop_decrease_factor()](function.fann-get-rprop-decrease-factor.md) -
Повертає коефіцієнт зменшення, який використовується під час навчання
RPROP
