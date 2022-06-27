- [« fann_get_bit_fail](function.fann-get-bit-fail.md)
- [fann_get_cascade_activation_functions
»](function.fann-get-cascade-activation-functions.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає кількість функцій каскадної активації

# fann_get_cascade_activation_functions_count

(PECL fann u003d 1.0.0)

fann_get_cascade_activation_functions_count — Повертає кількість
функцій каскадної активації

### Опис

**fann_get_cascade_activation_functions_count**(resource `$ann`): int

Кількість функцій активації у масиві
[fann_get_cascade_activation_functions()](function.fann-get-cascade-activation-functions.md).

Кількість функцій активації за промовчанням - 6.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Кількість функцій каскадної активації або **`false`** у разі
виникнення помилки.

### Дивіться також

- [fann_get_cascade_activation_functions()](function.fann-get-cascade-activation-functions.md) -
Повертає функції каскадної активації
- [fann_set_cascade_activation_functions()](function.fann-set-cascade-activation-functions.md) -
Встановлює масив каскадних функцій активації кандидатів
