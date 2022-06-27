- [« SplFileInfo::getBasename](splfileinfo.getbasename.md)
- [SplFileInfo::getExtension »](splfileinfo.getextension.md)

- [PHP Manual](index.md)
- [SplFileInfo](class.splfileinfo.md)
- Повертає час останньої зміни індексного дескриптора файлу

# SplFileInfo::getCTime

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

SplFileInfo::getCTime — Повертає час останньої зміни індексного
дескриптора файлу

### Опис

public **SplFileInfo::getCTime**(): int\|false

Повертає час останньої зміни індексного дескриптора файлу.
Повертає тимчасову мітку Unix.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Час останньої зміни у вигляді тимчасової мітки Unix у випадку
успішного виконання або **`false`** у разі виникнення помилки.

### Помилки

У разі виникнення помилки викидає виняток
[RunTimeException](class.runtimeexception.md).

### Приклади

**Приклад #1 Приклад використання **SplFileInfo::getCTime()****

` <?php$info u003d new SplFileInfo(__FILE__);echo 'Час останньої зміни ' . date('g:i a', $info->getCTime());?> `

Результатом виконання цього прикладу буде щось подібне:

Час останньої зміни 1:49 pm

### Дивіться також

- [filectime()](function.filectime.md) - Повертає час зміни
індексного дескриптора файлу
