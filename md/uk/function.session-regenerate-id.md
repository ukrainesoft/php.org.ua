- [« session_name](function.session-name.md)
- [session_register_shutdown
»](function.session-register-shutdown.md)

- [PHP Manual](index.md)
- [Функції для роботи з сесіями](ref.session.md)
- Генерує та оновлює ідентифікатор поточної сесії

# session_regenerate_id

(PHP 4 \>u003d 4.3.2, PHP 5, PHP 7, PHP 8)

session_regenerate_id — Генерує та оновлює ідентифікатор поточної
сесії

### Опис

**session_regenerate_id**(bool `$delete_old_session` u003d **`false`**):
bool

**session_regenerate_id()** замінює ідентифікатор поточної сесії знову
згенерованим, при цьому зберігає інформацію про поточну сесію.

При увімкненій опції
[session.use_trans_sid](session.configuration.md#ini.session.use-trans-sid),
висновок має здійснюватися після виклику **session_regenerate_id()**. В
в іншому випадку буде використовуватися старий ідентифікатор сесії.

**Увага**

Поточна реалізація **session_regenerate_id()** погано працює з мережами з
нестабільним з'єднанням, такими як мобільні та WiFi-мережі. Таким
Таким чином, є можливість втратити сесію через виклик
**session_regenerate_id()**.

Ви не повинні знищувати дані старої сесії негайно, а повинні
використовувати тимчасові мітки видалення та контролювати доступ до старої
сесії. Інакше конкуруючий доступ до сторінки може
призвести до неузгодженого стану, втрати сесії чи стану
гонки на стороні клієнта (браузера), що, у свою чергу, призведе до
створення безлічі ідентифікаторів сесії без необхідності. Негайне
видалення сесії також унеможливлює виявлення та запобігання
атак під час перехоплення сесії.

### Список параметрів

`delete_old_session`
Визначає, чи видаляти старий пов'язаний файл із сесією чи ні. Не
слід видаляти стару сесію, якщо потрібно уникати стану гонки
через видалення або виявляти/уникати атак під час перехоплення сесії.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **session_regenerate_id()****

` <?php// ЗАМІТКА: Це не повністю працюючий код, а тільки приклад!session_start(); ) - 300) {    // Зазвичай це не повинно відбуватися. Це може бути атакою або результатом нестабільної мережі. // Видаляємо всі статуси аутентифікації користувачів цієї сесії. remove_all_authentication_flag_from_active_sessions($_SESSION['userid']); throw(new DestroyedSessionAccessException);}$old_sessionid u003d session_id();// Встановлюємо часову мітку видалення$_SESSION['destroyed'] u003d time(); // session_regenerate_id() сохраняет данные старой сессии// Просто вызов session_regenerate_id() может привести к потере сессии и т.д.// Смотрите следующий пример.session_regenerate_id();// Новой сессии не требуется временная метка удаления.unset($_SESSION ['destroyed']);$new_sessionid u003d session_id();echo "Стара сесія: $old_sessionid<br />";echo "Нова сесія: $new_sessionid<br />";print_r($>

Поточний модуль сесії не працює добре з мережами з нестабільним
з'єднанням. Ви повинні керувати ідентифікатором сесії, щоб уникнути
втрати сесії внаслідок виклику **session_regenerate_id()**.

**Приклад #2 Як уникнути втрати сесії під час використання
**session_regenerate_id()****

` <?php// ЗАМІТКА: Це не повністю працюючий код, а тільки приклад!// my_session_start() і my_session_regenerate_id() уникають втрати// сесії з На додаток, даний код може запобігати // використання вкрадених сесій зловмисниками.function my_session_start () if (isset($_SESSION['destroyed'])) {       if ($_SESSION['destroyed'] < time()-300) {         про/ || Це може бути атакою або результатом нестабільної мережі. // Видаляємо всі статуси аутентифікації користувачів цієї сесії. remove_all_authentication_flag_from_active_sessions($_SESSION['userid']); throw(new DestroyedSessionAccessException); }       if (isset($_SESSION['new_session_id'])) {            // Термін дії Ще не повністю закінчився. Cookie могли бути втрачені через нестабільну мережу. // Наново намагаємося встановити правильний cookie ідентифікатора сесії. // ЗАУВАЖЕННЯ: Не намагайтеся заново встановити ідентифікатор сесії якщо, ви волієте             //  видалити прапор аутентифікації. session_commit(); session_id($_SESSION['new_session_id']); // Новий ідентифікатор сесії повинен існувати. session_start(); return; }   }}function my_session_regenerate_id() {     // Новий ідентифікатор сесії необхідний для установки правильного ідентифікатора сесії, ідентифікації $new_session_idu003du003dsession_create_id(); $_SESSION['new_session_id'] u003d $new_session_id; // Встановлюємо тимчасову мітку видалення. $_SESSION['destroyed'] u003d time(); // Записуємо і закриваємо поточну сесію. session_commit(); // Стартуємо сесію з новим ідентифікатором. session_id($new_session_id); ini_set('session.use_strict_mode', 0); session_start(); ini_set('session.use_strict_mode', 1); // Нової сесії не потрібно це. unset($_SESSION['destroyed']); unset($_SESSION['new_session_id']);}?> `

### Дивіться також

- [session_id()](function.session-id.md) - Отримує та/або
встановлює ідентифікатор поточної сесії
- [session_create_id()](function.session-create-id.md) - Створює
новий ідентифікатор сесії
- [session_start()](function.session-start.md) - Стартує нову
сесію, або відновлює існуючу
- [session_destroy()](function.session-destroy.md) - Знищує все
дані сесії
- [session_reset()](function.session-reset.md) - Реініціалізує
сесію оригінальними значеннями
- [session_name()](function.session-name.md) - Отримати або
встановити ім'я поточної сесії
