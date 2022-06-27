- [«readline_clear_history](function.readline-clear-history.md)
- [readline_info »](function.readline-info.md)

- [PHP Manual](index.md)
- [Функції Readline](ref.readline.md)
- Зареєструвати функцію автодоповнення

#readline_completion_function

(PHP 4, PHP 5, PHP 7, PHP 8)

readline_completion_function — Зареєструвати функцію автодоповнення

### Опис

**readline_completion_function**([callable](language.types.callable.md)
`$callback`): bool

Функція реєструє автодоповнення. Це те саме, як якщо
ви натискаєте табуляцію в Bash і рядок доповнюється найбільш підходящим
текстом.

### Список параметрів

`callback`
Ім'я функції, яка приймає рядок та повертає масив відповідних
збігів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
