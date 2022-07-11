- [«posix_getgrnam](function.posix-getgrnam.md)
- [posix_getlogin »](function.posix-getlogin.md)

- [PHP Manual](index.md)
- [POSIX Функції](ref.posix.md)
- Повертає список груп для поточного процесу

#posix_getgroups

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_getgroups — Повертає список груп для поточного процесу

### Опис

**posix_getgroups**(): array\|false

Повертає список груп для поточного процесу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає числовий масив, що містить список ідентифікаторів груп для
поточного процесу або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **posix_getgroups()****

` <?php$groups u003d posix_getgroups();print_r($groups);?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> 4
[1] u003d> 20
[2] u003d> 24
[3] u003d> 25
[4] u003d> 29
[5] u003d> 30
[6] u003d> 33
[7] u003d> 44
[8] u003d> 46
[9] u003d> 104
[10] u003d> 109
[11] u003d> 110
[12] u003d> 1000
)

### Дивіться також

- [posix_getgrgid()](function.posix-getgrgid.md) - Повертає
інформацію про групу з її ID
