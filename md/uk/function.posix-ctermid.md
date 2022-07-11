- [«posix_access](function.posix-access.md)
- [posix_errno»] (function.posix-errno.md)

- [PHP Manual](index.md)
- [POSIX Функції](ref.posix.md)
- Повертає шлях керуючого терміналу

#posix_ctermid

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_ctermid - Повертає шлях керуючого терміналу

### Опис

**posix_ctermid**(): string\|false

Повертає змінну типу string, що містить шлях до поточного
керуючого терміналу цього процесу. У разі виникнення помилки
буде встановлено її номер, який можна обробити з використанням
[posix_get_last_error()](function.posix-get-last-error.md)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

У разі успішного виконання повертає string із шляхом до поточного
керуючого терміналу. В іншому випадку повертає **`false`** та
встановлює номер помилки, який може бути оброблений за допомогою
[posix_get_last_error()](function.posix-get-last-error.md).

### Приклади

**Приклад #1 Приклад використання **posix_ctermid()****

Цей скрипт виводить шлях до поточного керуючого терміналу (TTY).

`<?phpecho "I am running from ".posix_ctermid();?> `

### Дивіться також

- [posix_ttyname()](function.posix-ttyname.md) - Визначає ім'я
термінального пристрою
- [posix_get_last_error()](function.posix-get-last-error.md) -
Повертає номер помилки, що сталася в останній
функції, що завершилася невдачею
