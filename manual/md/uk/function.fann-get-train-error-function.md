- [« fann_get_total_neurons](function.fann-get-total-neurons.md)
- [fann_get_train_stop_function
»](function.fann-get-train-stop-function.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає функцію обробки помилок, що використовується під час навчання

# fann_get_train_error_function

(PECL fann u003d 1.0.0)

fann_get_train_error_function — Повертає функцію обробки помилок,
використовується під час навчання

### Опис

**fann_get_train_error_function**(resource `$ann`): int

Повертає функцію обробки помилок, яка використовується під час навчання.

Функції обробки помилок описані далі у константах [функції обробки
помилок](fann.constants.md#constants.fann-errorfunc).

Функції обробки помилок за промовчанням: **`FANN_ERRORFUNC_TANH`**.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Константа [функції обробки
помилок](fann.constants.md#constants.fann-errorfunc) або **`false`**
у разі виникнення помилки.

### Дивіться також

- [fann_set_train_error_function()](function.fann-set-train-error-function.md) -
Встановлює функцію помилки, що використовується під час тренування
