- [«readline_redisplay](function.readline-redisplay.md)
- [readline »] (function.readline.md)

- [PHP Manual](index.md)
- [Функції Readline](ref.readline.md)
- Записати історію команд у файл

#readline_write_history

(PHP 4, PHP 5, PHP 7, PHP 8)

readline_write_history — Записати історію команд у файл

### Опис

**readline_write_history**(?string `$filename` u003d **`null`**): bool

Функція записує історію команд у файл.

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
