- [« ssh2_connect](function.ssh2-connect.md)
- [ssh2_exec »](function.ssh2-exec.md)

- [PHP Manual](index.md)
- [Функції SSH2](ref.ssh2.md)
- Закрити з'єднання з віддаленим сервером SSH

# ssh2_disconnect

(PECL ssh2 \>u003d 1.0)

ssh2_disconnect — Закрити з'єднання з віддаленим сервером SSH

### Опис

**ssh2_disconnect**(resource `$session`): bool

Закрити з'єднання з віддаленим сервером SSH.

### Список параметрів

`session`
Ідентифікатор посилання на з'єднання SSH, отриманий в результаті виклику
[ssh2_connect()](function.ssh2-connect.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ssh2_connect()](function.ssh2-connect.md) - Підключення до
SSH-серверу
