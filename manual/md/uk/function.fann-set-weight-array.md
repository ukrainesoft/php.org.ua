- [«
fann_set_training_algorithm](function.fann-set-training-algorithm.md)
- [fann_set_weight »](function.fann-set-weight.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Створення зв'язків у мережі

# fann_set_weight_array

(PECL fann u003d 1.0.0)

fann_set_weight_array — Створення зв'язків у мережі

### Опис

**fann_set_weight_array**(resource `$ann`, array `$connections`): bool

Створення зв'язків у мережі.

Можуть бути змінені лише вагові коефіцієнти, що не існують у мережі
зв'язку та ваги ігноруватимуться.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`connections`
Масив об'єктів [FANNConnection](class.fannconnection.md)

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.
