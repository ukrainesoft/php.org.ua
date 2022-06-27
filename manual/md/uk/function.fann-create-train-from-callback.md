- [« fann_create_standard](function.fann-create-standard.md)
- [fann_create_train »](function.fann-create-train.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- створює структуру даних навчання з наданої користувачем
функції

# fann_create_train_from_callback

(PECL fann u003d 1.0.0)

fann_create_train_from_callback — Створює структуру даних навчання з
наданої користувачем функції

### Опис

**fann_create_train_from_callback**(
int `$num_data`,
int `$num_input`,
int `$num_output`,
[callable](language.types.callable.md) `$user_function`
): resource

Створює структуру даних навчання із наданої користувачем
функції. Оскільки навчальні дані є пронумерованими (дані 1,
дані 2...), користувач повинен написати функцію, яка отримує
номер набору навчальних даних (вхід, вихід) та повертає набір.

### Список параметрів

`num_data`
Кількість тренувальних даних

`num_input`
Кількість входів на тренувальні дані

`num_output`
Кількість виходів на тренувальні дані

`user_function`
Функція, надана користувачем із наступними параметрами:

- `num` - Кількість навчальних даних
- `num_input` - Кількість входів на тренувальних даних
- `num_output` - Кількість виходів на тренувальних даних

Функція повинна повертати асоціативний масив із ключами `input` та
`output` і двома значеннями масиву input та output.

### Значення, що повертаються

Повертає ресурс (resource) навчальних даних, або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **fann_create_train_from_callback()****

` <?phpfunction create_train_callback($num_data, $num_input, $num_output) {    return array(        "input" u003d> array_fill(0, $num_input, 1),        "output" u003d> array_fill(0, $num_output, 1),    ) ;}$num_data u003d 3;$num_input u003d 2;$num_output u003d 1;$train_data u003d fann_create_train_from_callback($num_data, $num_input, $num_output, "create_train_callback");if ($train_data) {    // Сделай что-нибудь с $ train_data}?> `

### Примітки

> **Примітка**:
>
> Функція доступна лише в тому випадку, якщо модуль fann був зібраний для
> libfann u003d 2.2.

### Дивіться також

- [fann_read_train_from_file()](function.fann-read-train-from-file.md) -
Читає файл, у якому зберігаються дані навчання
- [fann_train_on_data()](function.fann-train-on-data.md) - Навчання
на всьому обсязі даних на часовому інтервалі
- [fann_destroy_train()](function.fann-destroy-train.md) -
Знищує тренувальні дані
- [fann_save_train()](function.fann-save-train.md) - Зберігає
структуру навчання у файл
