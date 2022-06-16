- [«rewind](function.rewind.md)
- [set_file_buffer »](function.set-file-buffer.md)

- [PHP Manual](index.md)
- [Функції файлової системи](ref.filesystem.md)
- Видаляє директорію

#rmdir

(PHP 4, PHP 5, PHP 7, PHP 8)

rmdir — Видаляє директорію

### Опис

**rmdir**(string `$directory`, ?resource `$context` u003d **`null`**): bool

Намагається видалити директорію з ім'ям directory. Директорія має бути
порожній і повинні бути необхідні для цього права. При невдалому
виконання буде згенерована помилка рівня **`E_WARNING`**.

### Список параметрів

`directory`
Шлях до директорії.

`context`
Ресурс (resource) із [контекстом потоку](stream.contexts.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **rmdir()****

` <?phpif (!is_dir('examples')) {   mkdir('examples');}rmdir('examples');?> `

### Дивіться також

- [is_dir()](function.is-dir.md) - Визначає, чи є ім'я файлу
директорією
- [mkdir()](function.mkdir.md) - Створює директорію
- [unlink()](function.unlink.md) - Видаляє файл
