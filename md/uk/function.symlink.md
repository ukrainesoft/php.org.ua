- [«stat](function.stat.md)
- [tempnam »] (function.tempnam.md)

- [PHP Manual](index.md)
- [Функції файлової системи](ref.filesystem.md)
- Створює символічне посилання

# symlink

(PHP 4, PHP 5, PHP 7, PHP 8)

symlink — Створює символічне посилання

### Опис

**symlink**(string `$target`, string `$link`): bool

**symlink()** створює символічне посилання на існуючий файл `target`
з ім'ям `link`.

### Список параметрів

`target`
Ціль посилання.

`link`
Ім'я посилання.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Функція завершується з помилкою та видає **`E_WARNING`**, якщо `link` вже
існує. У Windows функція також не працює та видає
**`E_WARNING`**, якщо `target` не існує.

### Приклади

**Приклад #1 Створення символічного посилання**

` <?php$target u003d 'uploads.php';$link u003d 'uploads';symlink($target, $link);echo readlink($link);?> `

### Дивіться також

- [link()](function.link.md) - Створює жорстке посилання
- [readlink()](function.readlink.md) - Повертає файл, на який
вказує символічне посилання
- [linkinfo()](function.linkinfo.md) - Повертає інформацію про
засланні
- [unlink()](function.unlink.md) - Видаляє файл
