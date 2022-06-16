- [« streamWrapper::unlink](streamwrapper.unlink.md)
- [Функції для роботи з потоками»] (ref.stream.md)

- [PHP Manual](index.md)
- [streamWrapper](class.streamwrapper.md)
- Отримання інформації про файл

# streamWrapper::url_stat

(PHP 4 \>u003d 4.3.2, PHP 5, PHP 7, PHP 8)

streamWrapper::url_stat — Отримання інформації про файл

### Опис

public **streamWrapper::url_stat**(string `$path`, int `$flags`):
array\|false

Цей метод викликається в процесі виконання будь-якої
[stat()](function.stat.md) функцій, таких як:

- [copy()](function.copy.md)
- [fileperms()](function.fileperms.md)
- [fileinode()](function.fileinode.md)
- [filesize()](function.filesize.md)
- [fileowner()](function.fileowner.md)
- [filegroup()](function.filegroup.md)
- [fileatime()](function.fileatime.md)
- [filemtime()](function.filemtime.md)
- [filectime()](function.filectime.md)
- [filetype()](function.filetype.md)
- [is_writable()](function.is-writable.md)
- [is_readable()](function.is-readable.md)
- [is_executable()](function.is-executable.md)
- [is_file()](function.is-file.md)
- [is_dir()](function.is-dir.md)
- [is_link()](function.is-link.md)
- [file_exists()](function.file-exists.md)
- [lstat()](function.lstat.md)
- [stat()](function.stat.md)
- [SplFileInfo::getPerms()](splfileinfo.getperms.md)
- [SplFileInfo::getInode()](splfileinfo.getinode.md)
- [SplFileInfo::getSize()](splfileinfo.getsize.md)
- [SplFileInfo::getOwner()](splfileinfo.getowner.md)
- [SplFileInfo::getGroup()](splfileinfo.getgroup.md)
- [SplFileInfo::getATime()](splfileinfo.getatime.md)
- [SplFileInfo::getMTime()](splfileinfo.getmtime.md)
- [SplFileInfo::getCTime()](splfileinfo.getctime.md)
- [SplFileInfo::getType()](splfileinfo.gettype.md)
- [SplFileInfo::isWritable()](splfileinfo.iswritable.md)
- [SplFileInfo::isReadable()](splfileinfo.isreadable.md)
- [SplFileInfo::isExecutable()](splfileinfo.isexecutable.md)
- [SplFileInfo::isFile()](splfileinfo.isfile.md)
- [SplFileInfo::isDir()](splfileinfo.isdir.md)
- [SplFileInfo::isLink()](splfileinfo.islink.md)
- [RecursiveDirectoryIterator::hasChildren()](recursivedirectoryiterator.haschildren.md)

### Список параметрів

`path`
Шлях до файлу або його URL-адреси. Пам'ятайте, що URL має бути відокремлено символами
:// , інші форми URL-адреси не підтримуються.

`flags`
Зберігає додаткові прапори, встановлені потоками API. Може зберігати
одне або кілька наведених нижче значень, об'єднаних операцією
АБО.

| Підкреслити | Опис |
|-----------------------|------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------------------|
| STREAM_URL_STAT_LINK | Для ресурсів, які можуть посилатися на інші ресурси (наприклад, HTTP Location: forward, або символічні посилання файлової системи). Цей прапор вказує, що інформація, що повертається, відноситься до самого посилання, а не до ресурсу, на який вона вказує. Цей використовується під час виклику функцій [lstat()](function.lstat.md), [is_link()](function.is-link.md) або [filetype()](function.filetype.md). |
| STREAM_URL_STAT_QUIET | Якщо прапорець встановлений, обгортка не повинна викликати жодних помилок. Якщо ні, можна викликати повідомлення про помилки за допомогою функції [trigger_error()](function.trigger-error.md). |

### Значення, що повертаються

Повинен повертатися масив (array) з тими самими елементами, що і в
[stat()](function.stat.md). Невідомі або недоступні значення
необхідно приводити до розумних значень (зазвичай до **`0`**). Зверніть
особливу увагу на `mode`, як описано в розділі
[stat()](function.stat.md). У разі виникнення помилки повертає
**`false`**.

### Помилки

Викликає помилку рівня **`E_WARNING`**, якщо виклик до цього методу не
удався (наприклад, не реалізований).

### Примітки

> **Примітка**:
>
> Властивість `streamWrapper::$context` буде оновлена, якщо коректна
> контекст був переданий у функцію, що викликається.

### Дивіться також

- [stat()](function.stat.md) - Повертає інформацію про файл
- [streamwrapper::stream_stat()](streamwrapper.stream-stat.md) -
Отримання інформації про файловий ресурс
