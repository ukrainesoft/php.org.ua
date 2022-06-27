- [«filesize](function.filesize.md)
- [flock »] (function.flock.md)

- [PHP Manual](index.md)
- [Функції файлової системи](ref.filesystem.md)
- Повертає тип файлу

# filetype

(PHP 4, PHP 5, PHP 7, PHP 8)

filetype — Повертає тип файлу

### Опис

**filetype**(string `$filename`): string\|false

Повертає тип файлу.

### Список параметрів

`filename`
Шлях до файлу.

### Значення, що повертаються

Повертає тип файлу. Можливі значення є fifo, char, dir,
block, link, file, socket та unknown.

Повертає **`false`** у разі виникнення помилки. **filetype()**
також викликає помилку рівня **`E_NOTICE`**, якщо системний виклик stat
помилка завершиться або тип файлу невідомий.

### Помилки

У разі невдалого завершення роботи генерується помилка рівня
**`E_WARNING`**.

### Приклади

**Приклад #1 Приклад використання функції **filetype()****

`<?phpecho filetype('/etc/passwd'); // fileecho filetype('/etc/'); // dir?> `

### Примітки

> **Примітка**: Результати цієї функції кешуються. Детальніше
> інформацію дивіться у розділі
> [clearstatcache()](function.clearstatcache.md).

**Підказка**

Починаючи з PHP 5.0.0, ця функція також може бути використана з
* Деякими * обгортками url. Список обгорток, що підтримуються сімейством
функцій [stat()](function.stat.md), дивіться у розділі [Підтримувані
протоколи та обгортки](wrappers.md).

### Дивіться також

- [is_dir()](function.is-dir.md) - Визначає, чи є ім'я файлу
директорією
- [is_file()](function.is-file.md) - Визначає, чи є файл
звичайним файлом
- [is_link()](function.is-link.md) - Визначає, чи є файл
символічним посиланням
- [file_exists()](function.file-exists.md) - Перевіряє існування
вказаного файлу чи каталогу
- [mime_content_type()](function.mime-content-type.md) - Визначає
MIME-тип вмісту файлу
- [pathinfo()](function.pathinfo.md) - Повертає інформацію про шлях
до файлу
- [stat()](function.stat.md) - Повертає інформацію про файл
