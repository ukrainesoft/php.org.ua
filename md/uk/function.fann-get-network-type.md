- [« fann_get_MSE](function.fann-get-mse.md)
- [fann_get_num_input »](function.fann-get-num-input.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Отримує тип нейронної мережі

# fann_get_network_type

(PECL fann u003d 1.0.0)

fann_get_network_type — Отримує тип нейронної мережі

### Опис

**fann_get_network_type**(resource `$ann`): int

Отримує тип нейронної мережі, де вона була створена.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Константа [типу мережі](fann.constants.md#constants.fann-nettype) або
**`false`** у разі виникнення помилки.
