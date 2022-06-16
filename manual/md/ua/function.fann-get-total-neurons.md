- [«
fann_get_total_connections](function.fann-get-total-connections.md)
- [fann_get_train_error_function
»](function.fann-get-train-error-function.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Отримує загальну кількість нейронів у всій мережі

# fann_get_total_neurons

(PECL fann u003d 1.0.0)

fann_get_total_neurons — Отримує загальну кількість нейронів у всій мережі

### Опис

**fann_get_total_neurons**(resource `$ann`): int

Отримує загальну кількість нейронів у всій мережі. Число також включає
нейрони усунення, тому мережа 2-4-2 має 2+4+2 +2 (зміщення) u003d 10
нейронів.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

Загальна кількість нейронів у всій мережі або **`false`** у випадку
виникнення помилки.
