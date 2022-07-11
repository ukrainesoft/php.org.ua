- [«
fann_set_cascade_min_cand_epochs](function.fann-set-cascade-min-cand-epochs.md)
- [fann_set_cascade_num_candidate_groups
»](function.fann-set-cascade-num-candidate-groups.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Встановлює мінімальні епохи вихідних даних

# fann_set_cascade_min_out_epochs

(PECL fann u003d 1.0.0)

fann_set_cascade_min_out_epochs - Встановлює мінімальні епохи
вихідних даних

### Опис

**fann_set_cascade_min_out_epochs**(resource `$ann`, int
`$cascade_min_out_epochs`): bool

Встановлює мінімальні часи вихідних даних.

### Список параметрів

`ann`
Ресурс нейронної мережі.

`cascade_min_out_epochs`
Мінімальні епохи вихідних даних.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`** у
інакше.

### Примітки

> **Примітка**:
>
> Функція доступна лише в тому випадку, якщо модуль fann був зібраний для
> libfann u003d 2.2.

### Дивіться також

- [fann_get_cascade_min_out_epochs()](function.fann-get-cascade-min-out-epochs.md) -
Повертає мінімальну кількість періодів
