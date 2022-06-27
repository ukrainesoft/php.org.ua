- [«readline_on_new_line](function.readline-on-new-line.md)
- [readline_redisplay »](function.readline-redisplay.md)

- [PHP Manual](index.md)
- [Функції Readline](ref.readline.md)
- Прочитати історію команд із файлу

#readline_read_history

(PHP 4, PHP 5, PHP 7, PHP 8)

readline_read_history — Прочитати історію команд із файлу

### Опис

**readline_read_history**(?string `$filename` u003d **`null`**): bool

Функція читає історію команд із файлу.

### Список параметрів

`filename`
Шлях до файлу.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ----|
| 8.0.0 | `filename` тепер припускає значення null. |
