- [« SplFileObject::fseek](splfileobject.fseek.md)
- [SplFileObject::ftell »](splfileobject.ftell.md)

- [PHP Manual](index.md)
- [SplFileObject](class.splfileobject.md)
- Отримує інформацію про файл

# SplFileObject::fstat

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplFileObject::fstat — Отримує інформацію про файл

### Опис

public **SplFileObject::fstat**(): array

Збирає статистичну інформацію про файл. Поведінка ідентична
[fstat()](function.fstat.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив із статистичною інформацією про файл; формат масиву
Детально описано на сторінці функції [stat()](function.stat.md).

### Приклади

**Приклад #1 Приклад використання **SplFileObject::fstat()****

` <?php$file u003d new SplFileObject("/etc/passwd");$stat u003d $file->fstat();// Друк тільки асоціативної частиниprint_r(array_slice($stat, 13));;>> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[dev] u003d> 771
[ino] u003d> 488704
[mode] u003d> 33188
[nlink] u003d> 1
[uid] u003d> 0
[gid] u003d> 0
[rdev] u003d> 0
[size] u003d> 1114
[atime] u003d> 1061067181
[mtime] u003d> 1056136526
[ctime] u003d> 1056136526
[blksize] u003d> 4096
[blocks] u003d> 8
)

### Дивіться також

- [fstat()](function.fstat.md) - Отримує інформацію про файл,
використовуючи відкритий файловий покажчик
- [stat()](function.stat.md) - Повертає інформацію про файл
