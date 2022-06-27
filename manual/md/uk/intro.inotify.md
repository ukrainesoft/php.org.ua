- [« Inotify](book.inotify.md)
- [Встановлення та налаштування »](inotify.setup.md)

- [PHP Manual](index.md)
- [Inotify](book.inotify.md)
-   Вступ

# Вступ

Модуль inotify надає функції
[inotify_init()](function.inotify-init.md),
[inotify_add_watch()](function.inotify-add-watch.md) та
[inotify_rm_watch()](function.inotify-rm-watch.md).

У той час як функція мови C
[inotify_init()](function.inotify-init.md) повертає дескриптор
файлу, функція [inotify_init()](function.inotify-init.md) в PHP
повертає потоковий ресурс, який можна використовувати в стандартних
функціях, наприклад, [stream_select()](function.stream-select.md),
[stream_set_blocking()](function.stream-set-blocking.md) та
[fclose()](function.fclose.md). Функція
[inotify_read()](function.inotify-read.md) замінює спосіб читання
подій inotify в C.
