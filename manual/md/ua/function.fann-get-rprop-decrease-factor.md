- [« fann_get_quickprop_mu](function.fann-get-quickprop-mu.md)
- [fann_get_rprop_delta_max »](function.fann-get-rprop-delta-max.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає коефіцієнт зменшення, який використовується під час навчання
RPROP

# fann_get_rprop_decrease_factor

(PECL fann u003d 1.0.0)

fann_get_rprop_decrease_factor — Повертає коефіцієнт зменшення,
використовується під час навчання RPROP

### Опис

**fann_get_rprop_decrease_factor**(resource `$ann`): float

Коефіцієнт зменшення - це значення менше 1, яке використовується для
Зменшення розміру кроку під час навчання RPROP.

Коефіцієнт зменшення за промовчанням становить 0.5.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Коефіцієнт зменшення або **`false`** у разі виникнення помилки.

### Дивіться також

- [fann_set_rprop_decrease_factor()](function.fann-set-rprop-decrease-factor.md) -
Встановлює коефіцієнт зменшення, який використовується під час навчання
RPROP
