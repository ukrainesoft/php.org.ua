- [« fann_get_bit_fail_limit](function.fann-get-bit-fail-limit.md)
- [fann_get_cascade_activation_functions_count
»](function.fann-get-cascade-activation-functions-count.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Кількість бітів збою

# fann_get_bit_fail

(PECL fann u003d 1.0.0)

fann_get_bit_fail - Кількість бітів збою

### Опис

**fann_get_bit_fail**(resource `$ann`): int

Кількість бітів збою; означає число вихідних нейронів, які
відрізняються більше, ніж межа збою бітів (дивіться
[fann_get_bit_fail_limit()](function.fann-get-bit-fail-limit.md),
[fann_set_bit_fail_limit()](function.fann-set-bit-fail-limit.md)).
Біти враховуються у всіх навчальних даних, тому це число може бути
більше кількості навчальних даних.

Це значення скидається
[fann_reset_MSE()](function.fann-reset-mse.md) і оновлюється всіма
тими самими функціями, які також оновлюють значення MSE (наприклад,
[fann_test_data()](function.fann-test-data.md),
[fann_train_epoch()](function.fann-train-epoch.md))

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Кількість бітів збою або **`false`** у разі виникнення помилки.

### Дивіться також

- [fann_get_MSE()](function.fann-get-mse.md) - Зчитує
середньоквадратичну помилку мережі
- [fann_reset_MSE()](function.fann-reset-mse.md) - Скидає
середньоквадратичну помилку з мережі
- [fann_test_data()](function.fann-test-data.md) - Тестування
набору навчальних даних та обчислення MSE для нього
- [fann_train_epoch()](function.fann-train-epoch.md) - Навчання в
протягом однієї епохи
- [fann_get_bit_fail_limit()](function.fann-get-bit-fail-limit.md) -
Повертає межу збою бітів, використану під час навчання
- [fann_set_bit_fail_limit()](function.fann-set-bit-fail-limit.md) -
Встановлює межу помилок, що використовується під час навчання
