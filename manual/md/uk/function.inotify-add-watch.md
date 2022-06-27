- [« Функції Inotify](ref.inotify.md)
- [inotify_init »](function.inotify-init.md)

- [PHP Manual](index.md)
- [Функції Inotify](ref.inotify.md)
- Додати спостерігача для екземпляра inotify

#inotify_add_watch

(PECL inotify \>u003d 0.1.2)

inotify_add_watch — Додати спостерігача для екземпляра inotify

### Опис

**inotify_add_watch**(resource `$inotify_instance`, string `$pathname`,
int `$mask`): int

**inotify_add_watch()** додає нового спостерігача або змінює
існуючого для файлу чи директорії, заданих у `pathname`.

Використання **inotify_add_watch()** на об'єкті, що вже відстежується.
замінить поточного спостерігача. використання константи **`IN_MASK_ADD`**
додасть (OR) події існуючому спостерігачеві.

### Список параметрів

`inotify_instance`
Ресурс, що повертається [inotify_init()](function.inotify-init.md)

`pathname`
Файл або директорія для відстеження

`mask`
Події, які слід відслідковувати. Дивіться [Предвизначені
константи](inotify.constants.md).

### Значення, що повертаються

Повертає унікальний (в контексті екземпляра inotify) дескриптор
спостерігача.

### Дивіться також

- [inotify_init()](function.inotify-init.md) - Ініціалізує
екземпляр inotify
