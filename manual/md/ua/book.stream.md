- [« SplSubject::notify](splsubject.notify.md)
- [Вступ »](intro.stream.md)

- [PHP Manual](index.md)
- [Інші базові модулі](refs.basic.other.md)
- Потоки

# Потоки

- [Вступ](intro.stream.md)
- [Встановлення та налаштування](stream.setup.md)
- [Вимоги](stream.requirements.md)
- [Установка](stream.installation.md)
- [Налаштування під час виконання](stream.configuration.md)
- [Класи для роботи з потоками](stream.resources.md)
- [Предвизначені константи](stream.constants.md)
- [Потокові фільтри](stream.filters.md)
- [Контексти потоків](stream.contexts.md)
- [Помилки потоку](stream.errors.md)
- [Приклади](stream.examples.md)
- [Приклад класу, зареєстрованого як обгортка
потоку](stream.streamwrapper.example-1.md)
- [php_user_filter](class.php-user-filter.md) - Клас
php_user_filter
- [php_user_filter::filter](php-user-filter.filter.md) -
Викликається, щойно застосовується фільтр
- [php_user_filter::onClose](php-user-filter.onclose.md) -
Викликається при закритті фільтра
- [php_user_filter::onCreate](php-user-filter.oncreate.md) -
Викликається під час створення об'єкта фільтра
- [streamWrapper](class.streamwrapper.md) - Клас streamWrapper
- [streamWrapper::\_\_construct](streamwrapper.construct.md) -
Створює новий об'єкт обертання потоку
- [streamWrapper::\_\_destruct](streamwrapper.destruct.md) -
Знищує існуючу обгортку потоку
- [streamWrapper::dir_closedir](streamwrapper.dir-closedir.md) -
Закрити дескриптор директорії
- [streamWrapper::dir_opendir](streamwrapper.dir-opendir.md) -
Відкрити дескриптор директорії
- [streamWrapper::dir_readdir](streamwrapper.dir-readdir.md) -
Читання запису з дескриптора директорії
- [streamWrapper::dir_rewinddir](streamwrapper.dir-rewinddir.md)
— Дескриптор директорії переміщення на її початку
- [streamWrapper::mkdir](streamwrapper.mkdir.md) — Створення
директорії
- [streamWrapper::rename](streamwrapper.rename.md) -
Перейменовує файл або директорію
- [streamWrapper::rmdir](streamwrapper.rmdir.md) — Видалити
директорію
- [streamWrapper::stream_cast](streamwrapper.stream-cast.md)
Отримує ресурс рівнем нижче
- [streamWrapper::stream_close](streamwrapper.stream-close.md) -
Закриває ресурс
- [streamWrapper::stream_eof](streamwrapper.stream-eof.md)
Перевіряє досягнення кінця файлу за файловим покажчиком
- [streamWrapper::stream_flush](streamwrapper.stream-flush.md)
Скидає висновок
- [streamWrapper::stream_lock](streamwrapper.stream-lock.md) -
Консультативне блокування файлу
- [streamWrapper::stream_metadata](streamwrapper.stream-metadata.md)
— Змінює метадані потоки
- [streamWrapper::stream_open](streamwrapper.stream-open.md)
Відкриває файл або URL
- [streamWrapper::stream_read](streamwrapper.stream-read.md) -
Читає із потоку
- [streamWrapper::stream_seek](streamwrapper.stream-seek.md) -
Переміщення на задану позицію у потоці
- [streamWrapper::stream_set_option](streamwrapper.stream-set-option.md)
— Зміна настройок потоку
- [streamWrapper::stream_stat](streamwrapper.stream-stat.md) -
Отримання інформації про файловий ресурс
- [streamWrapper::stream_tell](streamwrapper.stream-tell.md)
Визначення поточної позиції потоку
- [streamWrapper::stream_truncate](streamwrapper.stream-truncate.md)
- Усічення потоку
- [streamWrapper::stream_write](streamwrapper.stream-write.md) -
Запис у потік
- [streamWrapper::unlink](streamwrapper.unlink.md) — Видалення
файлу
- [streamWrapper::url_stat](streamwrapper.url-stat.md)
Отримання інформації про файл
- [Функції для роботи з потоками](ref.stream.md)
- [stream_bucket_append](function.stream-bucket-append.md) -
Додати відро (bucket) до бригади (brigade)
- [stream_bucket_make_writeable](function.stream-bucket-make-writeable.md)
— Повертає об'єкт кошика із бригади для подальшої роботи з
ним
- [stream_bucket_new](function.stream-bucket-new.md) - Створити
нове відро для використання у поточному потоці
- [stream_bucket_prepend](function.stream-bucket-prepend.md) -
Додати відро на початок бригади
- [stream_context_create](function.stream-context-create.md) -
Створює контекст потоку
- [stream_context_get_default](function.stream-context-get-default.md)
— Отримує контекст потоку за промовчанням
- [stream_context_get_options](function.stream-context-get-options.md)
— Отримує опції для потоку/обгортки/контексту
- [stream_context_get_params](function.stream-context-get-params.md)
— Отримує параметри із контексту
- [stream_context_set_default](function.stream-context-set-default.md)
— Встановити контекст потоку за промовчанням
- [stream_context_set_option](function.stream-context-set-option.md)
— Встановлює опцію для потоку/обгортки/контексту
- [stream_context_set_params](function.stream-context-set-params.md)
— Встановлює параметри потоку/обгортки/контексту
- [stream_copy_to_stream](function.stream-copy-to-stream.md) -
Копіює дані з одного потоку до іншого
- [stream_filter_append](function.stream-filter-append.md) -
Прикріпити фільтр до потоку
- [stream_filter_prepend](function.stream-filter-prepend.md) -
Прикріплює фільтр до потоку
- [stream_filter_register](function.stream-filter-register.md) -
Реєструє потоковий фільтр, визначений користувачем
- [stream_filter_remove](function.stream-filter-remove.md) -
Видалити фільтр із потоку
- [stream_get_contents](function.stream-get-contents.md) -
Читає частину потоку, що залишилася, в рядок
- [stream_get_filters](function.stream-get-filters.md) -
Отримати список зареєстрованих фільтрів
- [stream_get_line](function.stream-get-line.md) - Отримує
рядок із потокового ресурсу до вказаного роздільника
- [stream_get_meta_data](function.stream-get-meta-data.md) -
Витягує заголовок/метадані з потоків/файлових покажчиків
- [stream_get_transports](function.stream-get-transports.md) -
Отримати список зареєстрованих транспортів сокету
- [stream_get_wrappers](function.stream-get-wrappers.md) -
Отримати список зареєстрованих потоків
- [stream_is_local](function.stream-is-local.md) — Перевіряє,
чи є потік локальним потоком
- [stream_isatty](function.stream-isatty.md) — Перевіряє,
чи є потік TTY
- [stream_notification_callback](function.stream-notification-callback.md)
— Callback-функція параметра контексту notification
- [stream_register_wrapper](function.stream-register-wrapper.md)
- Псевдонім stream_wrapper_register
- [stream_resolve_include_path](function.stream-resolve-include-path.md)
— Перетворити повне ім'я файлу за допомогою шляхів увімкнення
- [stream_select](function.stream-select.md) - Запускає
еквівалент системного виклику select() на заданих масивах
потоків з часом очікування, вказаним параметрами seconds та
microseconds
- [stream_set_blocking](function.stream-set-blocking.md) -
Встановити блокуючий/неблокуючий режим у потоці
- [stream_set_chunk_size](function.stream-set-chunk-size.md) -
Встановити розмір фрагмента даних потоку
- [stream_set_read_buffer](function.stream-set-read-buffer.md) -
Встановити буферизацію читання файлу на вказаному потоці
- [stream_set_timeout](function.stream-set-timeout.md) -
Встановити значення часу очікування для потоку
- [stream_set_write_buffer](function.stream-set-write-buffer.md)
— Встановлює буферизацію файлу під час запису у вказаний потік
- [stream_socket_accept](function.stream-socket-accept.md) -
Приймати з'єднання в сокеті, створеному за допомогою функції
stream_socket_server
- [stream_socket_client](function.stream-socket-client.md) -
Відкрити з'єднання з інтернет-сокетом або доменним сокетом
Unix
- [stream_socket_enable_crypto](function.stream-socket-enable-crypto.md)
— Включає або вимикає шифрування на вже підключеному сокеті
- [stream_socket_get_name](function.stream-socket-get-name.md) -
Отримати назву локального або віддаленого сокету
- [stream_socket_pair](function.stream-socket-pair.md) - Створює
пару підключених, невиразних потоків сокетів
- [stream_socket_recvfrom](function.stream-socket-recvfrom.md) -
Отримує дані із сокету, підключеного чи ні
- [stream_socket_sendto](function.stream-socket-sendto.md) -
Відправляє повідомлення до сокету, незалежно від того, приєднаний він
чи ні
- [stream_socket_server](function.stream-socket-server.md) -
Створює інтернет-сокет або доменний сокет Unix
- [stream_socket_shutdown] (function.stream-socket-shutdown.md) -
Закрити повнодуплексне з'єднання
- [stream_supports_lock](function.stream-supports-lock.md) -
Визначає, чи підтримує потік блокування
- [stream_wrapper_register](function.stream-wrapper-register.md)
- Реєструє обгортку URL, реалізовану у вигляді PHP-класу
- [stream_wrapper_restore](function.stream-wrapper-restore.md) -
Відновлює скасовану раніше вбудовану обгортку
- [stream_wrapper_unregister](function.stream-wrapper-unregister.md)
— Скасує реєстрацію обгортки URL
