- [«
fann_get_cascade_activation_functions_count](function.fann-get-cascade-activation-functions-count.md)
- [fann_get_cascade_activation_steepnesses_count
»](function.fann-get-cascade-activation-steepnesses-count.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає функції каскадної активації

# fann_get_cascade_activation_functions

(PECL fann u003d 1.0.0)

fann_get_cascade_activation_functions — Повертає функції каскадної
активації

### Опис

**fann_get_cascade_activation_functions**(resource `$ann`): array

Масив функцій каскадної активації – це масив різних функцій
активації, які використовуються кандидатами.

Дивіться
[fann_get_cascade_num_candidates()](function.fann-get-cascade-num-candidates.md)
для опису того, які нейрони кандидата генеруватимуться цим
масивом.

Функції за замовчуванням: **`FANN_SIGMOID`**,
**`FANN_SIGMOID_SYMMETRIC`**, **`FANN_GAUSSIAN`**,
**`FANN_GAUSSIAN_SYMMETRIC`**, **`FANN_ELLIOT`**,
**`FANN_ELLIOT_SYMMETRIC`**.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Функції каскадної активації або **`false`** у разі виникнення
помилки.

### Дивіться також

- [fann_get_cascade_activation_functions_count()](function.fann-get-cascade-activation-functions-count.md) -
Повертає кількість функцій каскадної активації
- [fann_set_cascade_activation_functions()](function.fann-set-cascade-activation-functions.md) -
Встановлює масив каскадних функцій активації кандидатів
