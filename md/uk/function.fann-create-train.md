- [«
fann_create_train_from_callback](function.fann-create-train-from-callback.md)
- [fann_descale_input »](function.fann-descale-input.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- створює порожню структуру даних для навчання

# fann_create_train

(PECL fann u003d 1.0.0)

fann_create_train — Створює порожню структуру даних для навчання

### Опис

**fann_create_train**(int `$num_data`, int `$num_input`, int
`$num_output`): resource

Створює порожню структуру даних на навчання.

### Список параметрів

`num_data`
Кількість тренувальних даних

`num_input`
Кількість входів на тренувальні дані

`num_output`
Кількість виходів на тренувальні дані

### Значення, що повертаються

Повертає ресурс (resource) навчальних даних, або **`false`** у разі
виникнення помилки.

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
