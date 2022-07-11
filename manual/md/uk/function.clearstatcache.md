- [«chown](function.chown.md)
- [Copy »] (function.copy.md)

- [PHP Manual](index.md)
- [Функції файлової системи](ref.filesystem.md)
- Очищає кеш стану файлів

# clearstatcache

(PHP 4, PHP 5, PHP 7, PHP 8)

clearstatcache — Очищає кеш стану файлів

### Опис

**clearstatcache**(bool `$clear_realpath_cache` u003d **`false`**, string
`$filename` u003d ""): void

Для забезпечення більшої продуктивності під час використання функцій
[stat()](function.stat.md), [lstat()](function.lstat.md) або будь-який
іншої функції, перерахованих у наведеному нижче списку, PHP кешує
результати виконання. Однак, у деяких випадках вам може
потрібно очищення цього кешу. Наприклад, коли ваш скрипт дещо
раз перевіряє стан одного і того ж файлу, який може бути
змінено або видалено під час виконання скрипту, ви можете захотіти
очистити кеш стану. У цьому випадку необхідно використати функцію
**clearstatcache()** для очищення в PHP кешованої інформації про
вказаному файлі.

Зверніть увагу, що PHP не кешує інформацію про неіснуючих
файли. Так що, якщо ви викличете
[file_exists()](function.file-exists.md) на неіснуючому файлі, вона
буде повертати **`false`** доти, доки ви не створите цей файл.
Якщо ж ви створите файл, вона повертатиме **`true`**, навіть якщо
потім ви його вилучите. Однак, функція [unlink()](function.unlink.md)
очистить цей кеш автоматично.

> **Примітка**:
>
> Ця функція кешує інформацію про певні файли, тому
> має сенс викликати **clearstatcache()** тільки в тому випадку, якщо ви
> здійснюєте кілька операцій з одним і тим самим файлом і не хочете
> отримати кешовану інформацію про цей файл.

Список функцій, результати виконання яких кешуються:
[stat()](function.stat.md), [lstat()](function.lstat.md),
[file_exists()](function.file-exists.md),
[is_writable()](function.is-writable.md),
[is_readable()](function.is-readable.md),
[is_executable()](function.is-executable.md),
[is_file()](function.is-file.md), [is_dir()](function.is-dir.md),
[is_link()](function.is-link.md),
[filectime()](function.filectime.md),
[fileatime()](function.fileatime.md),
[filemtime()](function.filemtime.md),
[fileinode()](function.fileinode.md),
[filegroup()](function.filegroup.md),
[fileowner()](function.fileowner.md),
[filesize()](function.filesize.md),
[filetype()](function.filetype.md) та
[fileperms()](function.fileperms.md).

### Список параметрів

`clear_realpath_cache`
Чи потрібно * також * очищати кеш realpath.

`filename`
Очистити кеш realpath лише для певного імені файлу; використовується
тільки в тому випадку, якщо параметр clear_realpath_cache встановлено
значення **`true`**.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **clearstatcache()****

` <?php$file u003d 'output_log.txt';function get_owner($file){   $stat u003dstat($file); $useru003du003dposix_getpwuid($stat['uid']); return $user['name'];}$format u003d "UID @ %s: %s
";printf($format, date('r'), get_owner($file));chown($file, 'ross');printf($format, date('r'), get_owner($file)); clearstatcache();printf($format, date('r'), get_owner($file));?> `

Результатом виконання цього прикладу буде щось подібне:

UID @ Sun, 12 Oct 2008 20:48:28 +0100: root
UID @ Sun, 12 Oct 2008 20:48:28 +0100: root
UID @ Sun, 12 Oct 2008 20:48:28 +0100: ross
