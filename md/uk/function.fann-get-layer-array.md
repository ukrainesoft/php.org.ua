- [« fann_get_errstr](function.fann-get-errstr.md)
- [fann_get_learning_momentum
»](function.fann-get-learning-momentum.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Отримує кількість нейронів у кожному шарі мережі

# fann_get_layer_array

(PECL fann u003d 1.0.0)

fann_get_layer_array — Отримує кількість нейронів у кожному шарі мережі

### Опис

**fann_get_layer_array**(resource `$ann`): array

Отримує кількість нейронів у кожному шарі мережі.

Зміщення не увімкнено, тому шари відповідають функцій fann_create.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Масив чисел нейтронів у кожному шарі.
