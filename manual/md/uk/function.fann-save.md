- [« fann_save_train](function.fann-save-train.md)
- [fann_scale_input_train_data
»](function.fann-scale-input-train-data.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Зберігає всю мережу у файл конфігурації

# fann_save

(PECL fann u003d 1.0.0)

fann_save — Зберігає всю мережу у файлі конфігурації

### Опис

**fann_save**(resource `$ann`, string `$configuration_file`): bool

Зберігає всю мережу файл конфігурації.

Файл конфігурації містить всю інформацію про нейронну мережу і дозволяє
функції [fann_create_from_file()](function.fann-create-from-file.md)
створювати точну копію нейронної мережі та всіх параметрів, пов'язаних з
нейронною мережею.

Три параметри ([fann_set_callback()](function.fann-set-callback.md),
[fann_set_error_log()](function.fann-set-error-log.md),
**fann_set_user_data()**) НЕ зберігаються у файл, тому що їх не можна
безпечно перенести до іншого місця. Також не зберігаються тимчасові
параметри, згенеровані під час навчання, такі як
[fann_get_MSE()](function.fann-get-mse.md).

### Список параметрів

`ann`
Ресурс нейронної мережі.

`configuration_file`
Шлях до конфігураційного файлу.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_create_from_file()](function.fann-create-from-file.md) -
Створює нейронну мережу зі зворотним поширенням помилки з
конфігураційного файлу
