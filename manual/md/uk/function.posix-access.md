- [« POSIX Функції](ref.posix.md)
- [posix_ctermid »](function.posix-ctermid.md)

- [PHP Manual](index.md)
- [POSIX Функції](ref.posix.md)
- Визначає доступність файлу

#posix_access

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

posix_access — Визначає доступність файлу

### Опис

**posix_access**(string `$filename`, int `$flags` u003d 0): bool

Функція **posix_access()** перевіряє права користувача доступу до
файлу.

### Список параметрів

`filename`
Шлях до файлу, що перевіряється.

`flags`
Маска, що складається з однієї або більше констант: **`POSIX_F_OK`**,
**`POSIX_R_OK`**, **`POSIX_W_OK`** або **`POSIX_X_OK`**.

**`POSIX_R_OK`**, **`POSIX_W_OK`** та **`POSIX_X_OK`** перевіряють
існування та доступність файлу на читання, запис та виконання.
**`POSIX_F_OK`** перевіряє лише існування файлу.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **posix_access()****

У цьому прикладі перевіряється доступність файлу на читання та запис,
в іншому випадку виводиться повідомлення про помилку.

` <?php$file u003d 'some_file';if (posix_access($file, POSIX_R_OK | POSIX_W_OK)) {    echo 'Файл доступний на читання і запис!';  echo "Error $error: " . posix_strerror($error);}?> `

### Примітки

### Дивіться також

- [posix_get_last_error()](function.posix-get-last-error.md) -
Повертає номер помилки, що сталася в останній
функції, що завершилася невдачею
- [posix_strerror()](function.posix-strerror.md) - Повертає
системне повідомлення про помилку, ґрунтуючись на отриманому номері
помилки
