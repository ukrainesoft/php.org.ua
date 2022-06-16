- [« fann_set_bit_fail_limit](function.fann-set-bit-fail-limit.md)
- [fann_set_cascade_activation_functions
»](function.fann-set-cascade-activation-functions.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Встановлює callback-функцію для використання під час навчання

# fann_set_callback

(PECL fann u003d 1.0.0)

fann_set_callback — Встановлює callback-функцію для використання в
час навчання

### Опис

**fann_set_callback**(resource `$ann`,
[callable](language.types.callable.md) `$callback`): bool

Встановлює функцію callback для використання під час навчання. Це
означає, що вона викликається з
[fann_train_on_data()](function.fann-train-on-data.md) або
[fann_train_on_file()](function.fann-train-on-file.md).

### Список параметрів

`ann`
Ресурс нейронної мережі.

`callback`
Callback-функція, що поставляється, приймає наступні параметри:

- `ann` - Ресурс (resource) нейронної мережі
- `train` - Ресурс (resource) даних для навчання або **`null`**, якщо
викликається з
[fann_train_on_file()](function.fann-train-on-file.md)
- `max_epochs` - Максимальна кількість періодів, у яких має
продовжуватись навчання
- `epochs_between_reports` - Кількість періодів між викликами цієї
функції
- `desired_error` - Бажана функція
[fann_get_MSE()](function.fann-get-mse.md) або
[fann_get_bit_fail()](function.fann-get-bit-fail.md), в
залежно від функції зупинки, вибраної
[fann_set_train_stop_function()](function.fann-set-train-stop-function.md)
- `epochs` - Поточний період

Callback-функція має повернути **`true`**. Якщо вона поверне **`false`**,
навчання буде припинено.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_train_on_data()](function.fann-train-on-data.md) - Навчання
на всьому обсязі даних на часовому інтервалі
- [fann_train_on_file()](function.fann-train-on-file.md) - Навчання
на повному наборі даних, прочитаному з файлу, на тимчасовому
інтервалі
