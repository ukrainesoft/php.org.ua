- [«posix_seteuid](function.posix-seteuid.md)
- [posix_setpgid »](function.posix-setpgid.md)

- [PHP Manual](index.md)
- [POSIX Функції](ref.posix.md)
- Встановлює ідентифікатор групи для поточного GID процесу

#posix_setgid

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_setgid — Встановлює ідентифікатор групи для поточного процесу
GID

### Опис

**posix_setgid**(int `$group_id`): bool

Встановлює фактичний ідентифікатор поточного процесу. Це
привілейована функція і потребує відповідних прав (зазвичай прав
суперкористувача root) у системі, щоб мати можливість виконати її.
Правильним є такий порядок виклику функцій: спочатку
**posix_setgid()**, потім [posix_setuid()](function.posix-setuid.md).

> **Примітка**:
>
> Якщо функція буде викликана суперкористувачем, також буде
> встановлений та ефективний ідентифікатор групи користувача.

### Список параметрів

`group_id`
Ідентифікатор групи.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **posix_setgid()****

Код нижче виводить ефективний ідентифікатор групи до та після зміни.

`<?phpecho 'My real group id is '.posix_getgid(); //20posix_setgid(40);echo 'My real group id is '.posix_getgid(); //40echo 'My effective group id is '.posix_getegid(); //40?> `

### Дивіться також

- [posix_getgrgid()](function.posix-getgrgid.md) - Повертає
інформацію про групу з її ID
- [posix_getgid()](function.posix-getgid.md) - Повертає
дійсний ID групи поточного процесу GID
