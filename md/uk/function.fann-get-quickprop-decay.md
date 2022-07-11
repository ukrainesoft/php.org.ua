- [« fann_get_num_output](function.fann-get-num-output.md)
- [fann_get_quickprop_mu »](function.fann-get-quickprop-mu.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає зниження, яке є фактором, за якого ваги
повинні зменшуватися на кожній ітерації під час навчання quickprop

# fann_get_quickprop_decay

(PECL fann u003d 1.0.0)

fann_get_quickprop_decay — Повертає зниження, яке є
фактором, при якому ваги повинні зменшуватися на кожній ітерації в
час навчання quickprop

### Опис

**fann_get_quickprop_decay**(resource `$ann`): float

Зниження - це невелике число із негативними значеннями, яке
є фактором, за яким ваги повинні зменшуватися на кожній
ітерації під час навчання quickprop. Використовується для того, щоб у
час навчання ваги не ставали надто високими.

The default decay is -0.0001.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Зниження або **`false`** у разі виникнення помилки.

### Дивіться також

- [fann_set_quickprop_decay()](function.fann-set-quickprop-decay.md) -
Встановлює коефіцієнт загасання quickprop
