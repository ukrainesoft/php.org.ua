- [« SplFileInfo::isLink](splfileinfo.islink.md)
- [SplFileInfo::isWritable »](splfileinfo.iswritable.md)

- [PHP Manual](index.md)
- [SplFileInfo](class.splfileinfo.md)
- Вказує, чи файл доступний для читання

# SplFileInfo::isReadable

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

SplFileInfo::isReadable — Вказує, чи є файл доступним для
читання

### Опис

public **SplFileInfo::isReadable**(): bool

Перевіряє, чи файл доступний для читання.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо файл доступний для читання; **`false`** в
інакше.

### Приклади

**Приклад #1 Приклад використання **SplFileInfo::isReadable()****

` <?php$info u003d new SplFileInfo(__FILE__);var_dump($info->isReadable());$info u003d new SplFileInfo('foo');var_dump($info->isReadable());?> `

Результатом виконання цього прикладу буде щось подібне:

bool(true)
bool(false)
