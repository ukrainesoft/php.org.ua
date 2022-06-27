- [« session_commit](function.session-commit.md)
- [session_decode »](function.session-decode.md)

- [PHP Manual](index.md)
- [Функції для роботи з сесіями](ref.session.md)
- створює новий ідентифікатор сесії

# session_create_id

(PHP 7 \>u003d 7.1.0, PHP 8)

session_create_id — Створює новий ідентифікатор сесії

### Опис

**session_create_id**(string `$prefix` u003d ""): string\|false

**session_create_id()** використовується для створення нового ідентифікатора
поточної сесії. Повертає ідентифікатор сесії, який не схильний
колізій.

За неактивної сесії перевірка на колізії не здійснюється.

Ідентифікатор сесії створюється відповідно до налаштувань php.ini.

Важливо використовувати той самий ідентифікатор користувача на вашому
веб-сервері, що і для скрипта завдання збирача сміття. В протилежному
випадку, у вас можуть виникнути проблеми доступу, особливо з дескриптором
збереження файлів.

### Список параметрів

`prefix`
Якщо вказано параметр `prefix`, новий ідентифікатор сесії буде з
префіксом `prefix`. Не всі символи можна використовувати в
ідентифікатор сесії. Допускається використовувати лише символи з
діапазону: `a-z A-Z 0-9, (кома)` і `- (мінус)`.

### Значення, що повертаються

**session_create_id()** повертає новий, не схильний до колізій,
ідентифікатор поточної сесії Якщо використовується при неактивній сесії,
перевірка на колізії пропускається. У разі невдачі повертається
**`false`**.

### Приклади

**Приклад #1 Приклад використання **session_create_id()** з функцією
[session_regenerate_id()](function.session-regenerate-id.md)**

`<?php// Функція My session start з управлінням на основі часових метокfunction my_session_start() {    session_start(); // Не дозволяти використання занадто старих ідентифікаторів сесії    if (!empty($_SESSION['deleted_time']) && $_SESSION['deleted_time']                                                    session_start(); }}// Функція My session regenerate idfunction my_session_regenerate_id() {     // Виклик session_create_id() поки сесія активна, щ         if (session_status() !u003d PHP_SESSION_ACTIVE) {         session_start(); }    // УВАГА: Ніколи не використовуйте конфіденційні рядки в якості префіксу! $newidu003du003dsession_create_id('myprefix-'); // Установка тимчасової мітки видалення. Дані активної сесії не повинні видалятися відразу ж. $_SESSION['deleted_time'] u003d time(); // Завершення сесії session_commit (); // Переконаємося в можливості установки користувацького ідентифікатора сесії    // ЗАУВАЖЕННЯ: Ви маємо включати опцію use_strict_mode для звичайних операцій. ini_set('session.use_strict_mode', 0); // Установка нового користувацького ідентифікатора сесії    session_id($newid); // Старт сессии с пользовательским идентификатором    session_start();}// Убеждаемся, что опция use_strict_mode включена.// Опция use_strict_mode обязательна по соображениям безопасности.ini_set('session.use_strict_mode', 1);my_session_start();// Идентификатор сессии должен генеруватися заново при:// - -Вході користувача в систему//  - Виході користувача із системи//  - По прошествии визначеного періоду часуmy_session_re> |

### Дивіться також

- [session_regenerate_id()](function.session-regenerate-id.md) -
Генерує та оновлює ідентифікатор поточної сесії
- [session_start()](function.session-start.md) - Стартує нову
сесію, або відновлює існуючу
- [session.use_strict_mode](session.configuration.md#ini.session.use-strict-mode)
- [SessionHandler::create_sid()](sessionhandler.create-sid.md) -
Повертає новий ідентифікатор сесії
