- [«
fann_get_cascade_min_cand_epochs](function.fann-get-cascade-min-cand-epochs.md)
- [fann_get_cascade_num_candidate_groups
»](function.fann-get-cascade-num-candidate-groups.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Повертає мінімальну кількість періодів

# fann_get_cascade_min_out_epochs

(PECL fann u003d 1.0.0)

fann_get_cascade_min_out_epochs — Повертає мінімальну кількість
періодів

### Опис

**fann_get_cascade_min_out_epochs**(resource `$ann`): int

Мінімальна кількість періодів визначає кількість періодів,
яких вихідні з'єднання повинні бути навчені після додавання нового
нейрона-кандидата.

Мінімальна кількість періодів за замовчуванням – 50.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Мінімальна кількість періодів або **`false`** у разі виникнення
помилки.

### Примітки

> **Примітка**:
>
> Функція доступна лише в тому випадку, якщо модуль fann був зібраний для
> libfann u003d 2.2.

### Дивіться також

- [fann_set_cascade_min_out_epochs()](function.fann-set-cascade-min-out-epochs.md) -
Встановлює мінімальні епохи вихідних даних
