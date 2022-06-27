- [« Модулі для роботи з сесіями](refs.basic.session.md)
- [Вступ »](intro.session.md)

- [PHP Manual](index.md)
- [Модулі для роботи з сесіями](refs.basic.session.md)
- Управління сесіями

# Управління сесіями

- [Вступ](intro.session.md)
- [Встановлення та налаштування](session.setup.md)
- [Вимоги](session.requirements.md)
- [Установка](session.installation.md)
- [Налаштування під час виконання](session.configuration.md)
- [Типи ресурсів](session.resources.md)
- [Предвизначені константи](session.constants.md)
- [Приклади](session.examples.md)
- [Основи використання](session.examples.basic.md)
- [Передача сесійного ідентифікатора](session.idpassing.md)
- [Обробники користувача
сесії](session.customhandler.md)
- [Відстеження прогресу завантаження файлів за допомогою
сесій](session.upload-progress.md)
- [Безпека сесій](session.security.md)
- [Базові принципи управління
сесіями](features.session.security.management.md)
- [INI-налаштування безпеки сесій](session.security.ini.md)
- [Функції для роботи з сесіями](ref.session.md)
- [session_abort](function.session-abort.md) — Скасує
зміни у масиві сесії та завершує її
- [session_cache_expire](function.session-cache-expire.md) -
Отримує та/або встановлює термін дії поточного кешу
- [session_cache_limiter](function.session-cache-limiter.md) -
Отримати та/або встановити поточний режим кешування
- [session_commit](function.session-commit.md) - Псевдонім
session_write_close
- [session_create_id](function.session-create-id.md) — Створює
новий ідентифікатор сесії
- [session_decode](function.session-decode.md) - Декодує
дані сесії із закодованого рядка сесії
- [session_destroy](function.session-destroy.md) - Знищує
всі дані сесії
- [session_encode](function.session-encode.md) — кодує дані
поточної сесії у форматі рядка сесії
- [session_gc](function.session-gc.md) — Виконує складання сміття
даних сесії
- [session_get_cookie_params](function.session-get-cookie-params.md)
— Повертає параметри cookie сесії
- [session_id](function.session-id.md) — Отримує та/або
встановлює ідентифікатор поточної сесії
- [session_module_name](function.session-module-name.md) -
Повертає та/або встановлює модуль поточної сесії
- [session_name](function.session-name.md) — Отримати або
встановити ім'я поточної сесії
- [session_regenerate_id](function.session-regenerate-id.md) -
Генерує та оновлює ідентифікатор поточної сесії
- [session_register_shutdown](function.session-register-shutdown.md)
- Функція завершення сесії
- [session_reset](function.session-reset.md) - Реініціалізує
сесію оригінальними значеннями
- [session_save_path](function.session-save-path.md) — Отримує
та/або встановлює шлях збереження сесії
- [session_set_cookie_params](function.session-set-cookie-params.md)
— Встановлює параметри сесійної cookie
- [session_set_save_handler](function.session-set-save-handler.md)
- Встановлює користувальницькі обробники зберігання сесії
- [session_start](function.session-start.md) - Стартує нову
сесію, або відновлює існуючу
- [session_status](function.session-status.md) - Повертає
стан поточної сесії
- [session_unset](function.session-unset.md) — Видалити все
змінні сесії
- [session_write_close](function.session-write-close.md) -
Записує дані сесії та завершує її
- [SessionHandler](class.sessionhandler.md) - Клас SessionHandler
- [SessionHandler::close](sessionhandler.close.md) — Закриває
сесію
- [SessionHandler::create_sid](sessionhandler.create-sid.md) -
Повертає новий ідентифікатор сесії
- [SessionHandler::destroy](sessionhandler.destroy.md) -
Знищує сесію
- [SessionHandler::gc](sessionhandler.gc.md) - Очищає старі
сесії
- [SessionHandler::open](sessionhandler.open.md) -
Ініціалізує сесію
- [SessionHandler::read](sessionhandler.read.md) - Зчитує
дані сесії
- [SessionHandler::write](sessionhandler.write.md) - Записує
дані сесії
- [SessionHandlerInterface](class.sessionhandlerinterface.md) -
Клас SessionHandlerInterface
- [SessionHandlerInterface::close](sessionhandlerinterface.close.md)
- Закриває сесію
- [SessionHandlerInterface::destroy](sessionhandlerinterface.destroy.md)
- Знищує сесію
- [SessionHandlerInterface::gc](sessionhandlerinterface.gc.md) -
Очищає старі сесії
- [SessionHandlerInterface::open](sessionhandlerinterface.open.md)
- Ініціалізує сесію
- [SessionHandlerInterface::read](sessionhandlerinterface.read.md)
— Читає дані сесії
- [SessionHandlerInterface::write](sessionhandlerinterface.write.md)
— Записати дані сесії
- [SessionIdInterface](class.sessionidinterface.md) — Інтерфейс
SessionIdInterface
- [SessionIdInterface::create_sid](sessionidinterface.create-sid.md)
- Створити ідентифікатор сесії
- [SessionUpdateTimestampHandlerInterface](class.sessionupdatetimestamphandlerinterface.md)
— Інтерфейс SessionUpdateTimestampHandlerInterface
- [SessionUpdateTimestampHandlerInterface::updateTimestamp](sessionupdatetimestamphandlerinterface.updatetimestamp.md)
— Оновити позначку часу
- [SessionUpdateTimestampHandlerInterface::validateId](sessionupdatetimestamphandlerinterface.validateid.md)
- Перевірити ідентифікатор
