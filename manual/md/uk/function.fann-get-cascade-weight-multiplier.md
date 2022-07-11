- [«
fann_get_cascade_output_stagnation_epochs](function.fann-get-cascade-output-stagnation-epochs.md)
- [fann_get_connection_array
»](function.fann-get-connection-array.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає множник ваги

# fann_get_cascade_weight_multiplier

(PECL fann u003d 1.0.0)

fann_get_cascade_weight_multiplier — Повертає множник ваги

### Опис

**fann_get_cascade_weight_multiplier**(resource `$ann`): float

Множник ваги – це параметр, який використовується для множення ваги
нейрона-кандидата перед додаванням нейрона до нейронної мережі. Цей
параметр зазвичай знаходиться в діапазоні від 0 до 1 і використовується, щоб
зробити тренування менш агресивним.

Множник ваги за промовчанням дорівнює 0.4.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Множник ваги або **`false`** у разі виникнення помилки.

### Дивіться також

- [fann_set_cascade_weight_multiplier()](function.fann-set-cascade-weight-multiplier.md) -
Встановлює множник ваги
