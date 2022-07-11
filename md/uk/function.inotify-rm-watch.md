- [«inotify_read](function.inotify-read.md)
- [xattr »](book.xattr.md)

- [PHP Manual](index.md)
- [Функції Inotify](ref.inotify.md)
- Видалити спостерігача

#inotify_rm_watch

(PECL inotify \>u003d 0.1.2)

inotify_rm_watch — Видалити спостерігача

### Опис

**inotify_rm_watch**(resource `$inotify_instance`, int
`$watch_descriptor`): bool

**inotify_rm_watch()** видаляє спостерігача `watch_descriptor` з
екземпляра inotify `inotify_instance`.

### Список параметрів

`inotify_instance`
Ресурс, що повертається [inotify_init()](function.inotify-init.md)

`watch_descriptor`
Спостерігач для видалення

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [inotify_init()](function.inotify-init.md) - Ініціалізує
екземпляр inotify
