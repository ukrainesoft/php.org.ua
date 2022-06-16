- [«inotify_add_watch](function.inotify-add-watch.md)
- [inotify_queue_len »](function.inotify-queue-len.md)

- [PHP Manual](index.md)
- [Функції Inotify](ref.inotify.md)
- Ініціалізує екземпляр inotify

#inotify_init

(PECL inotify \>u003d 0.1.2)

inotify_init - Ініціалізує екземпляр inotify

### Опис

**inotify_init**(): resource

Ініціалізує екземпляр inotify для використання в
[inotify_add_watch()](function.inotify-add-watch.md)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Потоковий ресурс або ** false **.

### Приклади

**Приклад #1 Приклад використання inotify**

` <?php// Создаём экземпляр inotify$fd u003d inotify_init();// Отслеживаем __FILE__ на предмет изменения метаданных (например mtime)$watch_descriptor u003d inotify_add_watch($fd, __FILE__, IN_ATTRIB);// создаём событиеtouch(__FILE__);/ / Читаємо події$events u003d inotify_read($fd);print_r($events);// Наступні функції дозволяють використовувати функції inotify без блокування на inotify_read()_ fd);$write u003d null;$except u003d null;stream_select($read,$write,$except,0); // Не блокуємо і повертаємо false якщо не очікуючих подій// - Використовуємо inotify_queue_len() для перевірки, що черга подій не пуста$queue_len $ // Якщо > 0, inotify_read() то не блокуємо//Закінчуємо спостерігати за __FILE__inotify_rm_watch($fd, $watch_descriptor);// Закриваємо екземпляр не    

Результатом виконання цього прикладу буде щось подібне:

array(
array(
'wd' u003d> 1, // Equals $watch_descriptor
'mask' u003d> 4, // IN_ATTRIB bit is set
'cookie' u003d> 0, // unique id to connect related events (e.g.
// IN_MOVE_FROM and IN_MOVE_TO events)
'name' u003d> '', // name of a file (e.g. if we monitored changes
// in a directory)
),
);

### Дивіться також

- [inotify_add_watch()](function.inotify-add-watch.md) - Додати
спостерігача для екземпляра inotify
- [inotify_rm_watch()](function.inotify-rm-watch.md) - Видалити
спостерігача
- [inotify_queue_len()](function.inotify-queue-len.md) - Повертає
кількість очікуваних подій у черзі
- [inotify_read()](function.inotify-read.md) - Читає очікуючі
повідомлення з черги
- [fclose()](function.fclose.md) - Закриває відкритий дескриптор
файлу
