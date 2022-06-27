- [«
fann_get_sarprop_step_error_threshold_factor](function.fann-get-sarprop-step-error-threshold-factor.md)
- [fann_get_sarprop_weight_decay_shift
»](function.fann-get-sarprop-weight-decay-shift.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає температуру sarprop

# fann_get_sarprop_temperature

(PECL fann u003d 1.0.0)

fann_get_sarprop_temperature — Повертає температуру sarprop

### Опис

**fann_get_sarprop_temperature**(resource `$ann`): float

Повертає температуру сарпропи.

Температура за промовчанням становить 0.015.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Температура sarprop або **`false`** у разі виникнення помилки.

### Примітки

> **Примітка**:
>
> Функція доступна лише в тому випадку, якщо модуль fann був зібраний для
> libfann u003d 2.2.

### Дивіться також

- [fann_set_sarprop_temperature()](function.fann-set-sarprop-temperature.md) -
Встановлює температуру sarprop
