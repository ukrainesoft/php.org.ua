- [«
fann_get_cascade_activation_functions](function.fann-get-cascade-activation-functions.md)
- [fann_get_cascade_activation_steepnesses
»](function.fann-get-cascade-activation-steepnesses.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Кількість крутості активації

# fann_get_cascade_activation_steepnesses_count

(PECL fann u003d 1.0.0)

fann_get_cascade_activation_steepnesses_count — Кількість крутості
активації

### Опис

**fann_get_cascade_activation_steepnesses_count**(resource `$ann`): int

Кількість крутості активації в масиві
[fann_get_cascade_activation_functions()](function.fann-get-cascade-activation-functions.md).

Кількість крутості активації за замовчуванням – 4.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Кількість крутості активації або **`false`** у разі виникнення
помилки.

### Дивіться також

- [fann_get_cascade_activation_steepnesses()](function.fann-get-cascade-activation-steepnesses.md) -
Повертає крутість каскадної активації
- [fann_set_cascade_activation_functions()](function.fann-set-cascade-activation-functions.md) -
Встановлює масив каскадних функцій активації кандидатів
