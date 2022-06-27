- [«
fann_set_sarprop_step_error_threshold_factor](function.fann-set-sarprop-step-error-threshold-factor.md)
- [fann_set_sarprop_weight_decay_shift
»](function.fann-set-sarprop-weight-decay-shift.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Встановлює температуру sarprop

# fann_set_sarprop_temperature

(PECL fann u003d 1.0.0)

fann_set_sarprop_temperature — Встановлює температуру sarprop

### Опис

**fann_set_sarprop_temperature**(resource `$ann`, float
`$sarprop_temperature`): bool

Встановлює температуру sarprop.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`sarprop_temperature`
Температура sarprop.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Примітки

> **Примітка**:
>
> Функція доступна лише в тому випадку, якщо модуль fann був зібраний для
> libfann u003d 2.2.

### Дивіться також

- [fann_get_sarprop_temperature()](function.fann-get-sarprop-temperature.md) -
Повертає температуру sarprop
