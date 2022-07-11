- [«inotify_queue_len](function.inotify-queue-len.md)
- [inotify_rm_watch »](function.inotify-rm-watch.md)

- [PHP Manual](index.md)
- [Функції Inotify](ref.inotify.md)
- Читає очікуючі повідомлення із черги

#inotify_read

(PECL inotify \>u003d 0.1.2)

inotify_read — Читає очікувані повідомлення з черги

### Опис

**inotify_read**(resource `$inotify_instance`): array

Читає повідомлення з черги.

### Список параметрів

`inotify_instance`
Ресурс, що повертається [inotify_init()](function.inotify-init.md)

### Значення, що повертаються

Масив подій inotify або **`false`**, якщо подій у черзі немає та
`inotify_instance` не блокуючий. Кожен елемент масиву складається з:

- wd – дескриптор спостерігача, повернутий
[inotify_add_watch()](function.inotify-add-watch.md)
- mask - бітова маска [подій](inotify.constants.md)
- cookie – унікальний ідентифікатор для об'єднання пов'язаних подій
(наприклад **`IN_MOVE_FROM`** та **`IN_MOVE_TO`**)
- name - ім'я файлу (наприклад, якщо в директорії, що спостерігається, змінився
файл)

### Дивіться також

- [inotify_init()](function.inotify-init.md) - Ініціалізує
екземпляр inotify
- [stream_select()](function.stream-select.md) - Запускає
еквівалент системного виклику select() на заданих масивах потоків
з часом очікування, вказаним параметрами seconds та microseconds
- [stream_set_blocking()](function.stream-set-blocking.md) -
Встановити блокуючий/неблокуючий режим у потоці
- [inotify_queue_len()](function.inotify-queue-len.md) - Повертає
кількість очікуваних подій у черзі
