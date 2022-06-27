- [«inotify_init](function.inotify-init.md)
- [inotify_read »](function.inotify-read.md)

- [PHP Manual](index.md)
- [Функції Inotify](ref.inotify.md)
- Повертає кількість очікуваних подій у черзі

#inotify_queue_len

(PECL inotify \>u003d 0.1.2)

inotify_queue_len — Повертає кількість очікуваних подій у черзі

### Опис

**inotify_queue_len**(resource `$inotify_instance`): int

Функція дозволяє зрозуміти, чи заблокує
[inotify_read()](function.inotify-read.md) виконання чи ні. Якщо
повернене число більше нуля, отже в черзі є повідомлення та
[inotify_read()](function.inotify-read.md) не заблокує виконання
скрипт.

### Список параметрів

`inotify_instance`
Ресурс, що повертається [inotify_init()](function.inotify-init.md)

### Значення, що повертаються

Повертає кількість очікуваних повідомлень у черзі.

### Дивіться також

- [inotify_init()](function.inotify-init.md) - Ініціалізує
екземпляр inotify
- [stream_select()](function.stream-select.md) - Запускає
еквівалент системного виклику select() на заданих масивах потоків
з часом очікування, вказаним параметрами seconds та microseconds
- [stream_set_blocking()](function.stream-set-blocking.md) -
Встановити блокуючий/неблокуючий режим у потоці
