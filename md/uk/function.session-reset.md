- [«
session_register_shutdown](function.session-register-shutdown.md)
- [session_save_path »](function.session-save-path.md)

- [PHP Manual](index.md)
- [Функції для роботи з сесіями](ref.session.md)
- реініціалізує сесію оригінальними значеннями

# session_reset

(PHP 5 \>u003d 5.6.0, PHP 7, PHP 8)

session_reset - Реініціалізує сесію оригінальними значеннями

### Опис

**session_reset**(): bool

Функція **session_reset()** повторно ініціалізує сесію, використовуючи
оригінальні значення, збережені у сховищі сесії. Ця функція
вимагає наявності активної сесії та знищує всі зміни у масиві
$\_SESSION.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------|
| 7.2.0 | Тепер тип цієї функції bool, що повертається. Раніше тип void. |

### Дивіться також

- `$_SESSION`
- Опція конфігурації
[session.auto_start](session.configuration.md#ini.session.auto-start)
- [session_start()](function.session-start.md) - Стартує нову
сесію, або відновлює існуючу
- [session_abort()](function.session-abort.md) - Скасує зміни
у масиві сесії та завершує її
- [session_commit()](function.session-commit.md) - Псевдонім
session_write_close
