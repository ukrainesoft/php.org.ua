- [«
fann_get_cascade_candidate_change_fraction](function.fann-get-cascade-candidate-change-fraction.md)
- [fann_get_cascade_candidate_stagnation_epochs
»](function.fann-get-cascade-candidate-stagnation-epochs.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає межу кандидата

# fann_get_cascade_candidate_limit

(PECL fann u003d 1.0.0)

fann_get_cascade_candidate_limit — Повертає межу кандидата

### Опис

**fann_get_cascade_candidate_limit**(resource `$ann`): float

Межа кандидата - це межа того, скільки нейронів кандидата може
бути навченим. Обмеження - це обмеження на співвідношення між MSE та
балом кандидата.

Встановлює це більш низьке значення, щоб уникнути
переоснащення, і на більш високе, якщо переоснащення не є
проблемою.

Гранична кількість за замовчуванням становить 1000.0.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Межа кандидата або **false** у разі виникнення помилки.

### Дивіться також

- [fann_set_cascade_candidate_limit()](function.fann-set-cascade-candidate-limit.md) -
Встановлює ліміт кандидатів
