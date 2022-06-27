- [«
fann_set_rprop_increase_factor](function.fann-set-rprop-increase-factor.md)
- [fann_set_sarprop_step_error_threshold_factor
»](function.fann-set-sarprop-step-error-threshold-factor.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Встановлює зрушення помилки кроку sarprop

# fann_set_sarprop_step_error_shift

(PECL fann u003d 1.0.0)

fann_set_sarprop_step_error_shift - Встановлює зсув помилки кроку
sarprop

### Опис

**fann_set_sarprop_step_error_shift**(resource `$ann`, float
`$sarprop_step_error_shift`): bool

Встановлює зрушення помилки кроку sarprop.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`sarprop_step_error_shift`
Зрушення помилки кроку sarprop.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Примітки

> **Примітка**:
>
> Функція доступна лише в тому випадку, якщо модуль fann був зібраний для
> libfann u003d 2.2.

### Дивіться також

- [fann_get_sarprop_step_error_shift()](function.fann-get-sarprop-step-error-shift.md) -
Повертає зрушення помилки кроку sarprop
