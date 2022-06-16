- [« Приклади](eio.examples.md)
- [eio_busy »](function.eio-busy.md)

- [PHP Manual](index.md)
- [Eio](book.eio.md)
- Eio Функції

# Eio Функції

## Зміст

- [eio_busy](function.eio-busy.md) - Штучно збільшує
навантаження. Можливо корисно при тестуванні, вивченні
продуктивності
- [eio_cancel](function.eio-cancel.md) — Скасовує запит
- [eio_chmod](function.eio-chmod.md) — Зміна прав доступу до
файлу/директорії
- [eio_chown](function.eio-chown.md) — Зміна прав доступу до
файлу/директорії
- [eio_close](function.eio-close.md) — Закрити файл
- [eio_custom](function.eio-custom.md) — Виконує користувальницький
запит як будь-який інший eio\_\* виклик
- [eio_dup2](function.eio-dup2.md) — Створює дублікат дескриптора
файлу
- [eio_event_loop](function.eio-event-loop.md) — взаємодіє з
libeio доти, доки всі запити не будуть виконані
- [eio_fallocate](function.eio-fallocate.md) — Дозволяє безпосередньо
керувати розміром дискового простору для файлу
- [eio_fchmod](function.eio-fchmod.md) — Зміна прав доступу до
файлу
- [eio_fchown](function.eio-fchown.md) — Змінює власника файлу
- [eio_fdatasync](function.eio-fdatasync.md) — Синхронізує
поточний стан файлу з фізичним пристроєм
- [eio_fstat](function.eio-fstat.md) — Повертає статус файлу
- [eio_fstatvfs](function.eio-fstatvfs.md) - Повертає статистику
файлової системи
- [eio_fsync](function.eio-fsync.md) — Синхронізує поточне
стан файлу з фізичним пристроєм
- [eio_ftruncate](function.eio-ftruncate.md) — Зменшує розмір файлу
- [eio_futime](function.eio-futime.md) — Змінює дату та час
останньої модифікації та доступу до файлу
- [eio_get_event_stream](function.eio-get-event-stream.md) -
Повертає потік, що відображає змінну, використовувану при
взаємодії з libeio
- [eio_get_last_error](function.eio-get-last-error.md) - Повертає
останню помилку, пов'язану з вказівником на ресурс
- [eio_grp_add](function.eio-grp-add.md) — Додає запит до групи
запитів
- [eio_grp_cancel](function.eio-grp-cancel.md) — скасовує групу
запитів
- [eio_grp_limit](function.eio-grp-limit.md) - Встановлює
гранична кількість запитів у групі
- [eio_grp](function.eio-grp.md) — Створює групу запитів
- [eio_init](function.eio-init.md) - (Ре-)ініціалізує Eio
- [eio_link](function.eio-link.md) — Створює жорстке посилання на файл
- [eio_lstat](function.eio-lstat.md) — Повертає статус файлу
- [eio_mkdir](function.eio-mkdir.md) — створення директорії
- [eio_mknod](function.eio-mknod.md) — Створює спеціальний або
звичайний файл
- [eio_nop](function.eio-nop.md) — Прохід циклу запиту, не
здійснюючи жодних операцій
- [eio_npending](function.eio-npending.md) — Повертає число
завершених, але необроблених процесів
- [eio_nready](function.eio-nready.md) - Повертає число ще не
оброблених запитів
- [eio_nreqs](function.eio-nreqs.md) — Повертає кількість запитів,
які належить виконати
- [eio_nthreads](function.eio-nthreads.md) — Повертає кількість
використовуваних в даний момент потоків
- [eio_open](function.eio-open.md) — Відкриває файл
- [eio_poll](function.eio-poll.md) — Може бути викликана коли
є запити, що очікують на виконання
- [eio_read](function.eio-read.md) — Читає дані з файлу, починаючи
із заданого зміщення
- [eio_readahead](function.eio-readahead.md) — Поміщає дані з
файлу в кеш сторінки
- [eio_readdir](function.eio-readdir.md) — Читає вміст
директорії
- [eio_readlink](function.eio-readlink.md) — Читає значення
символічного посилання
- [eio_realpath](function.eio-realpath.md) - Отримує абсолютний
приведений до канонічного виду шлях
- [eio_rename](function.eio-rename.md) — Змінює ім'я або переміщує
файл
- [eio_rmdir](function.eio-rmdir.md) — Видаляє директорію
- [eio_seek](function.eio-seek.md) — Переміщення файлового покажчика
файлу fd на число байт offset відповідно до директиви whence
- [eio_sendfile](function.eio-sendfile.md) — Переміщення даних між
файлами
- [eio_set_max_idle](function.eio-set-max-idle.md) - Встановлює
максимальна кількість очікуваних потоків
- [eio_set_max_parallel](function.eio-set-max-parallel.md) -
Встановлює максимальну кількість паралельних потоків
- [eio_set_max_poll_reqs](function.eio-set-max-poll-reqs.md) -
Встановлює максимальну кількість запитів, що обробляються.
- [eio_set_max_poll_time](function.eio-set-max-poll-time.md) -
Встановлює максимальний час виконання
- [eio_set_min_parallel](function.eio-set-min-parallel.md) -
Встановлює мінімальну кількість паралельних потоків
- [eio_stat](function.eio-stat.md) — Повертає статус файлу
- [eio_statvfs](function.eio-statvfs.md) - Повертає статистику
файлової системи
- [eio_symlink](function.eio-symlink.md) — Створює символічну
посилання
- [eio_sync_file_range](function.eio-sync-file-range.md) -
Синхронізує сегмент файлу із даними файлу на зовнішньому сховищі
- [eio_sync](function.eio-sync.md) — Записує кеш із буфера на
диск
- [eio_syncfs](function.eio-syncfs.md) — Викликає системний syncfs в
Linux, якщо це доступно
- [eio_truncate](function.eio-truncate.md) — Зменшує розмір файлу
- [eio_unlink](function.eio-unlink.md) — Видалення файлу або однієї з
жорстких посилань на нього
- [eio_utime](function.eio-utime.md) — Змінює дату та час
останньої модифікації та доступу до файлу
- [eio_write](function.eio-write.md) — запис у файл
