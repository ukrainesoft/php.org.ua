- [«phpversion](function.phpversion.md)
- [restore_include_path »](function.restore-include-path.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Встановлює значення змінного середовища

# putenv

(PHP 4, PHP 5, PHP 7, PHP 8)

putenv — Встановлює значення змінного середовища

### Опис

**putenv**(string `$assignment`): bool

Додає `assignment` у змінні оточення сервера. Змінна буде
існувати лише на час виконання поточного запиту. За його
Після завершення змінна повернеться в початковий стан.

### Список параметрів

`assignment`
Установка виду ``FOOu003dBAR'`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Встановлення значення змінного середовища**

` <?phpputenv("UNIQIDu003d$uniqid");?> `

### Дивіться також

- [getenv()](function.getenv.md) - Отримання значення змінної
оточення
- [apache_setenv()](function.apache-setenv.md) - Встановлює
змінну subprocess_env Apache
