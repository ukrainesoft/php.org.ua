- [« Функції для роботи з сесіями](ref.session.md)
- [session_cache_expire »](function.session-cache-expire.md)

- [PHP Manual](index.md)
- [Функції для роботи з сесіями](ref.session.md)
- скасовує зміни в масиві сесії та завершує її

# session_abort

(PHP 5 \>u003d 5.6.0, PHP 7, PHP 8)

session_abort — Скасує зміни в масиві сесії та завершує її

### Опис

**session_abort**(): bool

**session_abort()** завершує сесію без збереження даних. Таким
Отже, зберігаються вихідні значення сесії.

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
- Директива конфігурації
[session.auto_start](session.configuration.md#ini.session.auto-start)
- [session_start()](function.session-start.md) - Стартує нову
сесію, або відновлює існуючу
- [session_reset()](function.session-reset.md) - Реініціалізує
сесію оригінальними значеннями
- [session_commit()](function.session-commit.md) - Псевдонім
session_write_close
