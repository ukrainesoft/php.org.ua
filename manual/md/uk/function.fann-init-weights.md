- [«
fann_get_training_algorithm](function.fann-get-training-algorithm.md)
- [fann_length_train_data »](function.fann-length-train-data.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Ініціалізує ваги за допомогою алгоритму Widrow+Nguyen

# fann_init_weights

(PECL fann u003d 1.0.0)

fann_init_weights - Ініціалізує ваги за допомогою алгоритму Widrow +
Nguyen

### Опис

**fann_init_weights**(resource `$ann`, resource `$train_data`): bool

Ініціалізує ваги за допомогою алгоритму Widrow+Nguyen.

Функція поводиться аналогічно
[fann_randomize_weights()](function.fann-randomize-weights.md). Вона
буде використовувати алгоритм, розроблений Дерріком Нгуєном та Бернардом
Видроу встановити ваги таким чином, щоб прискорити навчання.
Метод не завжди буває успішним, а в деяких випадках може бути меншим
ефективнішим, ніж суто випадкова ініціалізація.

Алгоритм вимагає доступу до діапазону вхідних даних (наприклад,
найбільшим і найменшим вхідним даним) і, отже, приймає
другий аргумент, data, який є навчальними даними, які
будуть використовуватись для навчання мережі.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`train_data`
Ресурс (resource) навчальних даних нейронної мережі.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_randomize_weights()](function.fann-randomize-weights.md) -
Привласнює кожному з'єднанню випадкову вагу між min_weight та
max_weight
- [fann_read_train_from_file()](function.fann-read-train-from-file.md) -
Читає файл, у якому зберігаються дані навчання
