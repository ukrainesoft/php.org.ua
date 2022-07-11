- [«
fann_set_output_scaling_params](function.fann-set-output-scaling-params.md)
- [fann_set_quickprop_mu »](function.fann-set-quickprop-mu.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Встановлює коефіцієнт загасання quickprop

# fann_set_quickprop_decay

(PECL fann u003d 1.0.0)

fann_set_quickprop_decay — Встановлює коефіцієнт загасання quickprop

### Опис

**fann_set_quickprop_decay**(resource `$ann`, float `$quickprop_decay`):
bool

Встановлює коефіцієнт загасання quickprop.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`quickprop_decay`
Коефіцієнт згасання quickprop.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_get_quickprop_decay()](function.fann-get-quickprop-decay.md) -
Повертає зниження, яке є фактором, при якому ваги
повинні зменшуватися на кожній ітерації під час навчання quickprop
