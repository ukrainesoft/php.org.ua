- [« fann_set_callback](function.fann-set-callback.md)
- [fann_set_cascade_activation_steepnesses
»](function.fann-set-cascade-activation-steepnesses.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- встановлює масив каскадних функцій активації кандидатів

# fann_set_cascade_activation_functions

(PECL fann u003d 1.0.0)

fann_set_cascade_activation_functions — Встановлює масив каскадних
функцій активації кандидатів

### Опис

**fann_set_cascade_activation_functions**(resource `$ann`, array
`$cascade_activation_functions`): bool

Встановлює масив каскадних функцій активації кандидатів.

Дивіться
[fann_get_cascade_num_candidates()](function.fann-get-cascade-num-candidates.md)
для опису того, які нейрони-кандидати будуть згенеровані цим
масивом.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`cascade_activation_functions`
Масив каскадних функцій активації кандидатів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_get_cascade_activation_functions_count()](function.fann-get-cascade-activation-functions-count.md) -
Повертає кількість функцій каскадної активації
- **fann_set_cascade_activation_functions()**
