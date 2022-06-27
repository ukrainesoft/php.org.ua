- [«posix_mknod](function.posix-mknod.md)
- [posix_seteuid »](function.posix-seteuid.md)

- [PHP Manual](index.md)
- [POSIX Функції](ref.posix.md)
- Встановлює ефективний ідентифікатор групи для поточного процесу
EGID

#posix_setegid

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

posix_setegid — Встановлює ефективний ідентифікатор групи для
поточного процесу EGID

### Опис

**posix_setegid**(int `$group_id`): bool

Встановлює ефективний ідентифікатор для поточного процесу.
Це привілейована функція і потребує відповідних прав (як
правило прав суперкористувача root) в системі, щоб мати можливість
виконувати її.

### Список параметрів

`group_id`
Ефективний ідентифікатор групи, що встановлюється, для поточного процесу

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **posix_setegid()****

Даний приклад виводить ефективний ідентифікатор групи процесу до і
після зміни.

`<?phpecho 'My real group id is '.posix_getgid(); //20posix_setegid(40);echo 'My real group id is '.posix_getgid(); //20echo 'My effective group id is '.posix_getegid(); //40?> `

### Дивіться також

- [posix_getgrgid()](function.posix-getgrgid.md) - Повертає
інформацію про групу з її ID
- [posix_getgid()](function.posix-getgid.md) - Повертає
дійсний ID групи поточного процесу GID
- [posix_setgid()](function.posix-setgid.md) - Встановлює
ідентифікатор групи для поточного процесу GID
