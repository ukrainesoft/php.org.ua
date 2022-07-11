- [« fann_run](function.fann-run.md)
- [fann_save »] (function.fann-save.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Зберігає структуру навчання у файл

# fann_save_train

(PECL fann u003d 1.0.0)

fann_save_train — Зберігає структуру навчання у файл

### Опис

**fann_save_train**(resource `$data`, string `$file_name`): bool

Зберігає дані навчання у файл у форматі, вказаному в
[fann_read_train_from_file()](function.fann-read-train-from-file.md).

### Список параметрів

`data`
Ресурс (resource) навчальних даних нейронної мережі.

`file_name`
Назва файлу, в якому зберігаються дані навчання.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_read_train_from_file()](function.fann-read-train-from-file.md) -
Читає файл, у якому зберігаються дані навчання
