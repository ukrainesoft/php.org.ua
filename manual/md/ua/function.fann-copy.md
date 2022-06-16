- [«
fann_clear_scaling_params](function.fann-clear-scaling-params.md)
- [fann_create_from_file »](function.fann-create-from-file.md)

- [PHP Manual](index.md)
- [Функції Fann](ref.fann.md)
- Створює копію структури fann

# fann_copy

(PECL fann u003d 1.0.0)

fann_copy — Створює копію структури fann

### Опис

**fann_copy**(resource `$ann`): resource

Створює копію структури fann.

### Список параметрів

`ann`
Ресурс нейронної мережі.

### Значення, що повертаються

У разі успішного виконання повертає копію ресурсу нейронного ланцюга
або **`false`** у разі виникнення помилки.

### Примітки

> **Примітка**:
>
> Функція доступна лише в тому випадку, якщо модуль fann був зібраний для
> libfann u003d 2.2.

### Дивіться також

- [fann_test()](function.fann-test.md) - Тестування з набором
вхідних даних та бажаним результатом
