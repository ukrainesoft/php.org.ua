- [« fann_reset_errstr](function.fann-reset-errstr.md)
- [fann_run »] (function.fann-run.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- скидає середньоквадратичну помилку з мережі

# fann_reset_MSE

(PECL fann u003d 1.0.0)

fann_reset_MSE — Скидає середньоквадратичну помилку з мережі

### Опис

**fann_reset_MSE**(string `$ann`): bool

Скидає середньоквадратичну помилку із мережі.

Функція також скидає кількість бітів, що вийшли з ладу.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Дивіться також

- [fann_get_MSE()](function.fann-get-mse.md) - Зчитує
середньоквадратичну помилку мережі
- [fann_get_bit_fail()](function.fann-get-bit-fail.md) - Кількість
бітів збою
- [fann_get_bit_fail_limit()](function.fann-get-bit-fail-limit.md) -
Повертає межу збою бітів, використану під час навчання
