- [«
fann_get_cascade_candidate_stagnation_epochs](function.fann-get-cascade-candidate-stagnation-epochs.md)
- [fann_get_cascade_max_out_epochs
»](function.fann-get-cascade-max-out-epochs.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- отримує найбільший період кандидата

# fann_get_cascade_max_cand_epochs

(PECL fann u003d 1.0.0)

fann_get_cascade_max_cand_epochs — Отримує найбільший період кандидата

### Опис

**fann_get_cascade_max_cand_epochs**(resource `$ann`): int

Максимальний період кандидата визначає максимальну кількість
періодів, у яких вхідні з'єднання з кандидатами можуть бути навчені
перед додаванням нового нейрона-кандидата.

Максимальний період за замовчуванням - 150.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Максимальний період кандидата або **`false`** у разі виникнення
помилки.

### Дивіться також

- [fann_set_cascade_max_cand_epochs()](function.fann-set-cascade-max-cand-epochs.md) -
Встановлює максимальний період кандидата
