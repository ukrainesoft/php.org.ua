- [« Установка](session.installation.md)
- [Типи ресурсів»] (session.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](session.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- -------------------------------------------------- --|------------------------------------|---------- -------|------------------------------------------ -----|
| [session.save_path](session.configuration.md#ini.session.save-path) | "" | PHP_INI_ALL | |
| [session.name](session.configuration.md#ini.session.name) | "PHPSESSID" | PHP_INI_ALL | |
| [session.save_handler](session.configuration.md#ini.session.save-handler) | "files" | PHP_INI_ALL | |
| [session.auto_start](session.configuration.md#ini.session.auto-start) | "0" | PHP_INI_PERDIR | |
| [session.gc_probability](session.configuration.md#ini.session.gc-probability) | "1" | PHP_INI_ALL | |
| [session.gc_divisor](session.configuration.md#ini.session.gc-divisor) | "100" | PHP_INI_ALL | |
| [session.gc_maxlifetime](session.configuration.md#ini.session.gc-maxlifetime) | "1440" | PHP_INI_ALL | |
| [session.serialize_handler](session.configuration.md#ini.session.serialize-handler) | "php" | PHP_INI_ALL | |
| [session.cookie_lifetime](session.configuration.md#ini.session.cookie-lifetime) | "0" | PHP_INI_ALL | |
| [session.cookie_path](session.configuration.md#ini.session.cookie-path) | "/" | PHP_INI_ALL | |
| [session.cookie_domain](session.configuration.md#ini.session.cookie-domain) | "" | PHP_INI_ALL | |
| [session.cookie_secure](session.configuration.md#ini.session.cookie-secure) | "0" | PHP_INI_ALL | До PHP 7.2.0 значення за промовчанням було """. |
| [session.cookie_httponly](session.configuration.md#ini.session.cookie-httponly) | "0" | PHP_INI_ALL | До PHP 7.2.0 значення за промовчанням було """. |
| [session.cookie_samesite](session.configuration.md#ini.session.cookie-samesite) | "" | PHP_INI_ALL | Доступна з PHP 7.3.0. |
| [session.use_strict_mode](session.configuration.md#ini.session.use-strict-mode) | "0" | PHP_INI_ALL | |
| [session.use_cookies](session.configuration.md#ini.session.use-cookies) | "1" | PHP_INI_ALL | |
| [session.use_only_cookies](session.configuration.md#ini.session.use-only-cookies) | "1" | PHP_INI_ALL | |
| [session.referer_check](session.configuration.md#ini.session.referer-check) | "" | PHP_INI_ALL | |
| [session.cache_limiter](session.configuration.md#ini.session.cache-limiter) | "nocache" | PHP_INI_ALL | |
| [session.cache_expire](session.configuration.md#ini.session.cache-expire) | "180" | PHP_INI_ALL | |
| [session.use_trans_sid](session.configuration.md#ini.session.use-trans-sid) | "0" | PHP_INI_ALL | |
| [session.trans_sid_tags](session.configuration.md#ini.session.trans-sid-tags) | "au003dhref,areau003dhref,frameu003dsrc,formu003d" | PHP_INI_ALL | Доступна з PHP 7.1.0. |
| [session.trans_sid_hosts](session.configuration.md#ini.session.trans-sid-hosts) | `$_SERVER['HTTP_HOST']` | PHP_INI_ALL | Доступна з PHP 7.1.0. |
| [session.sid_length](session.configuration.md#ini.session.sid-length) | "32" | PHP_INI_ALL | Доступна з PHP 7.1.0. |
| [session.sid_bits_per_character](session.configuration.md#ini.session.sid-bits-per-character) | "4" | PHP_INI_ALL | Доступна з PHP 7.1.0. |
| [session.upload_progress.enabled](session.configuration.md#ini.session.upload-progress.enabled) | "1" | PHP_INI_PERDIR | |
| [session.upload_progress.cleanup](session.configuration.md#ini.session.upload-progress.cleanup) | "1" | PHP_INI_PERDIR | |
| [session.upload_progress.prefix](session.configuration.md#ini.session.upload-progress.prefix) | "upload_progress\_" | PHP_INI_PERDIR | |
| [session.upload_progress.name](session.configuration.md#ini.session.upload-progress.name) | "PHP_SESSION_UPLOAD_PROGRESS" | PHP_INI_PERDIR | |
| [session.upload_progress.freq](session.configuration.md#ini.session.upload-progress.freq) | "1%" | PHP_INI_PERDIR | |
| [session.upload_progress.min_freq](session.configuration.md#ini.session.upload-progress.min-freq) | "1" | PHP_INI_PERDIR | |
| [session.lazy_write](session.configuration.md#ini.session.lazy-write) | "1" | PHP_INI_ALL | |
| [session.hash_function](session.configuration.md#ini.session.hash-function) | "0" | PHP_INI_ALL | Видалено в PHP 7.1.0. |
| [session.hash_bits_per_character](session.configuration.md#ini.session.hash-bits-per-character) | "4" | PHP_INI_ALL | Видалено в PHP 7.1.0. |
| [session.entropy_file](session.configuration.md#ini.session.entropy-file) | "" | PHP_INI_ALL | Видалено в PHP 7.1.0. |
| [session.entropy_length](session.configuration.md#ini.session.entropy-length) | "0" | PHP_INI_ALL | Видалено в PHP 7.1.0 |

**Опції налаштування механізму сесій**

Для детального опису констант PHP_INI\_\*, зверніться до розділу [Де
можуть бути встановлені параметри
конфігурації] (configuration.changes.modes.md).

Система управління сесіями підтримує ряд опцій, які можуть бути
вказано у файлі `php.ini`. Нижче наведено короткий огляд.

`session.save_handler` string
`session.save_handler` визначає ім'я обробника, який використовується
для зберігання та вилучення даних, пов'язаних із сесією. За замовчуванням
має значення `files`. Слід звернути увагу на те, що деякі модулі
можуть зареєструвати власні обробники (`save_handler`). Поточні
зареєстровані обробники відображаються у
[phpinfo()](function.phpinfo.md). Дивіться також
[session_set_save_handler()](function.session-set-save-handler.md).

`session.save_path` string
`session.save_path` визначає аргумент, який передається в обробник
збереження. За замовчуванням обробнику files, аргумент
містить шлях, де створюватимуться файли. Дивіться також
[session_save_path()](function.session-save-path.md).

Ця директива також має додатковий аргумент `N`,
визначальний глибину розміщення файлів сесії щодо зазначеної
директорії. Наприклад, вказівка `'5;/tmp'` може зрештою
привести до такого розміщення файлу сесії:
`/tmp/4/b/1/e/3/sess_4b1e384ad74619bd212e236e52a5a174If `. Для
того, щоб використати аргумент `N`, необхідно попередньо створити
всі ці директорії. Допомогти в цьому може невеликий скрипт, розташований
в `ext/session`. Версія для bash називається `mod_files.sh`, а
Windows-версія – `mod_files.bat`. Також слід враховувати, що якщо `N`
визначено і більше 0, то автоматичне складання сміття не виконується,
докладніше дивіться інформацію у файлі `php.ini`. Крім того, якщо
використовується `N`, необхідно переконатися, що значення
`session.save_path` вказано в лапках, оскільки роздільник (`;`) в
php.ini використовується як знак коментаря.

Модуль зберігання файлів створює файли з правами 600 за промовчанням. Це
можна змінити за допомогою необов'язкового аргументу `MODE`:
`N;MODE;/path`, де `MODE` - вісімкове представлення режиму доступу до
файлу. Установка `MODE` не торкається umask.

**Увага**
Якщо встановити як значення загальнодоступну для читання директорію,
наприклад, `/tmp` (за замовчуванням), інші користувачі сервера отримають
можливість перехопити сесію користувача, отримавши список таких файлів
директорії.

**Застереження**
При використанні необов'язкового аргументу `N` рівня директорій, як
описано вище, врахуйте, що використання значень вище 1 або 2
неприпустимо для більшості сайтів, тому що потрібно дуже велике
кількість директорій: наприклад, значення 3 призводить до
`(2** session.sid_bits_per_character)** 3` директоріям у файловій
системи, які призводять до величезних втрат місця та inode.

Використовуйте тільки `N` більше 2, якщо ви абсолютно впевнені, що ваш сайт
досить великий, щоб вимагати цього.

`session.name` string
`session.name` визначає назву сесії, яка використовується як назва
cookies. Може містити лише цифри та літери. За замовчуванням одно
`PHPSESSID`. Дивіться також
[session_name()](function.session-name.md).

`session.auto_start` bool
`session.auto_start` визначає, чи модуль сесії запускатиме сесію
автоматично під час старту. Значення за замовчуванням `0` (вимкнено).

`session.serialize_handler` string
`session.serialize_handler` визначає ім'я обробника, який
використовується для серіалізації/десеріалізації даних. Підтримуються
формат серіалізації PHP (найменування `php_serialize`), внутрішній
формат PHP (найменування `php` та `php_binary`) та WDDX (найменування
`wddx`). WDDX доступний тільки в тому випадку, якщо PHP скомпільовано з
[підтримкою WDDX](ref.wddx.md). `php_serialize` використовує просту
функцію серіалізації/десеріалізації для внутрішніх потреб і не має тих
обмежень, які є у `php` та `php_binary`. Старі обробники
серіалізації не можуть зберігати ні числові, ні рядкові індекси,
що містять спеціальні символи (`|` та `!`) в $\_SESSION. Використовуйте
`php_serialize`, щоб обійти помилки числових та рядкових індексів при
завершення сценарію. Значення за промовчанням `php`.

`session.gc_probability` int
`session.gc_probability` у поєднанні з `session.gc_divisor` визначає
ймовірність запуску функції збирача сміття (gc, garbage collection). за
замовчуванням дорівнює `1`. Дивіться докладніше
[session.gc_divisor](session.configuration.md#ini.session.gc-divisor).

`session.gc_divisor` int
`session.gc_divisor` у поєднанні з `session.gc_probability` визначає
ймовірність запуску функції збирача сміття (gc, garbage collection) при
кожної ініціалізації сесії. Імовірність розраховується як
gc_probability/gc_divisor, тобто 1/100 означає, що функція gc
запускається в одному випадку зі ста або 1% при кожному запиті.
`session.gc_divisor` за замовчуванням має значення `100`.

`session.gc_maxlifetime` int
`session.gc_maxlifetime` задає відстрочку часу в секундах, після
якої дані будуть розглядатися як "сміття" та потенційно будуть
видалено. Збір сміття може відбутися протягом старту сесії (у
залежно від значень
[session.gc_probability](session.configuration.md#ini.session.gc-probability)
і
[session.gc_divisor](session.configuration.md#ini.session.gc-divisor)).

> **Примітка**: Якщо різні скрипти мають різні значення
> `session.gc_maxlifetime`, але при цьому одні й ті самі місця для зберігання
> даних сесії, скрипт з мінімальним значенням знищить всі дані.
> У такому разі слід використовувати цю директиву разом з
> [session.save_path](session.configuration.md#ini.session.save-path).

`session.referer_check` string
`session.referer_check` містить підрядок, який можна використовувати
під час перевірки HTTP Referer. Якщо клієнтом був посланий referer та підрядок
не було виявлено, то ідентифікатор сесії буде позначений як
недійсний. За промовчанням використовується порожній рядок.

`session.entropy_file` string
`session.entropy_file` містить шлях до ресурсу (файлу), що використовується
як додаткове джерело ентропії у процесі створення ідентифікатора
сесії. Наприклад, `/dev/random` або `/dev/urandom`, які доступні на
багатьох Unix-системах. Ця можливість також підтримується у Windows.
Вказівка ненульового значення в `session.entropy_length` пропонує PHP
використовувати як джерело ентропії Windows Random API.

> **Примітка**: Видалено в PHP 7.1.0. `session.entropy_file` має
> значення за замовчуванням дорівнює `/dev/urandom` або `/dev/arandom`, якщо
> вони доступні.

`session.entropy_length` int
`session.entropy_length` визначає кількість байт, які будуть
прочитані з вищезгаданого файлу. Типово `32`. Видалено в PHP
7.1.0.

`session.use_strict_mode` bool
`session.use_strict_mode` визначає чи буде модуль використовувати режим
суворого ідентифікатора (ID). Якщо від браузера отримано невизначений
ID, то браузеру буде надіслано новий ID. Таким чином програми
захищаються від фіксації сесії за допомогою суворого режиму. За замовчуванням
`0` (відключено).

> **Примітка**: Включення `session.use_strict_mode` є
> обов'язковою для загальної безпеки сесії. Всім сайтам рекомендується
> її включати. Дивіться приклади
> [session_create_id()](function.session-create-id.md).

**Увага**
Якщо користувальницький обробник сесії, зареєстрований за допомогою
[session_set_save_handler()](function.session-set-save-handler.md), не
реалізує
[SessionUpdateTimestampHandlerInterface::validateId()](sessionupdatetimestamphandlerinterface.validateid.md)
і не надає callback-функцію `validate_sid`, відповідно,
режим суворого ідентифікатора сесії буде вимкнено, незалежно від
значення цієї директиви. Особливо зверніть увагу, що
[SessionHandler](class.sessionhandler.md) *не* реалізує
**SessionHandler::validateId()**.

`session.use_cookies` bool
`session.use_cookies` визначає, чи модуль використовуватиме cookies
для зберігання ідентифікатора сесії за клієнта. Типово `1`
(Включено).

`session.use_only_cookies` bool
`session.use_only_cookies` визначає, чи модуль використовуватиметься
*тільки* cookies для зберігання ідентифікатора сесії на стороні клієнта.
Увімкнення цього параметра запобігає атакам з використанням
ідентифікатора сесії, розміщеного URL. Значення за замовчуванням `1`
(Включено).

`session.cookie_lifetime` int
`session.cookie_lifetime` вказує час життя cookies, що надсилається в
браузер клієнта в секундах. Значення 0 означає, що cookies будуть
валідні до закриття браузера. За замовчуванням одно `0`. Дивіться також
[session_get_cookie_params()](function.session-get-cookie-params.md) та
[session_set_cookie_params()](function.session-set-cookie-params.md).

> **Примітка**: Позначка закінчення часу встановлюється по відношенню
> до серверного часу, який не обов'язково збігається з часом у
> браузер клієнта.

`session.cookie_path` string
`session.cookie_path` визначає встановлюваний шлях у сесійній
cookie. За замовчуванням `/`. Дивіться також
[session_get_cookie_params()](function.session-get-cookie-params.md) та
[session_set_cookie_params()](function.session-set-cookie-params.md).

`session.cookie_domain` string
`session.cookie_domain` визначає встановлюваний домен у сесійній
cookie. Відповідно до специфікації немає сенсу додатково
вказувати ім'я хоста, що згенерував cookies. Дивіться також
[session_get_cookie_params()](function.session-get-cookie-params.md) та
[session_set_cookie_params()](function.session-set-cookie-params.md).

`session.cookie_secure` bool
`session.cookie_secure` вказує, чи повинні cookies передаватися тільки
через захищене з'єднання. За замовчуванням `off`. Дивіться також
[session_get_cookie_params()](function.session-get-cookie-params.md) та
[session_set_cookie_params()](function.session-set-cookie-params.md).

`session.cookie_httponly` bool
Позначка, за якою доступ до cookie з ідентифікатором сесії може
бути отриманий лише через HTTP-протокол. Це означає, що cookie не
буде доступна через скриптові мови, такі як JavaScript. Дана
налаштування дозволяє ефективно захистити від XSS-атак (на жаль, це
функція підтримується не всіма браузерами.

`session.cookie_samesite` string
Дозволяє серверам стверджувати, що cookie не має надсилатися разом
з міжсайтовими запитами. Це твердження дозволяє браузерам
користувачів знизити ризик витоку інформації з різних джерел та
забезпечує певний захист від підробки кросдомених запитів.
Зауважте, що це підтримується не всіма браузерами. Пусте
Значення означає, що атрибут cookie сайту не буде встановлений. `Lax` та
`Strict` означають, що cookie не буде надіслано для кросдоменних
POST-запитів; `Lax` відправить cookie для міждоменних GET-запитів, а
`Strict` не робитиме цього.

`session.cache_limiter` string
`session.cache_limiter` визначає режим кешування, що використовується для
сторінок сесій. Може набувати одне з наступних значень: `nocache`,
`private`, `private_no_expire` або `public`. Типово `nocache`.
Докладніше про дані значення дивіться в
[session_cache_limiter()](function.session-cache-limiter.md).

`session.cache_expire` int
`session.cache_expire` вказує час життя кешованих сторінок сесій
в хвилинах, це не впливає на обмежувач nocache. За замовчуванням
`180`. Дивіться також
[session_cache_expire()](function.session-cache-expire.md).

`session.use_trans_sid` bool
`session.use_trans_sid` вказує, чи використовується прозора підтримка
sid чи ні. За замовчуванням `0` (вимкнено).

> **Примітка**: Управління сесією на основі URL має додаткові
> ризики безпеки в порівнянні з керуванням на основі cookies. В
> як приклад можна згадати такі ситуації, коли користувачі
> можуть надіслати URL, що містить ідентифікатор активної сесії, своїм
> друзям електронною поштою або зберегти посилання з ідентифікатором в
> закладках і весь час відвідувати сайт з тим самим ідентифікатором.
> Починаючи з PHP 7.1.0, повний шлях URL, тобто https://php.net/,
> обробляється "trans sid". Раніше PHP обробляв тільки
> Відносна URL-адреса. Перезапис цільового хоста задається
> [session.trans_sid_hosts](session.configuration.md#ini.session.trans-sid-hosts).

`session.trans_sid_tags` string
`session.trans_sid_tags` задає теги HTML, що перезаписуються, для включення
ідентифікатор сесії коли включена підтримка прозорих "sid". за
замовчуванням `au003dhref,areau003dhref,frameu003dsrc,inputu003dsrc,formu003d``form` -
спеціальних тег. `<input hiddenu003d"session_id" nameu003d"session_name">`
додається у форму.

> **Примітка**: До PHP 7.1.0 для цього використовувався
> [url_rewriter.tags](outcontrol.configuration.md#ini.url-rewriter.tags).
> З PHP 7.1.0, `fieldset` більше не рахується за спеціальний тег.

`session.trans_sid_hosts` string
`session.trans_sid_hosts` задає, які хости будуть перезаписані для
включення ідентифікатора сесії, коли включена підтримка прозорих
"sid". Типово `$_SERVER['HTTP_HOST']`. Кілька хостів можна
вказати через кому. Не допускається вставляти прогалини між хостами.
Так правильно: `php.net, wiki.php.net, bugs.php.net`.

`session.sid_length` int
`session.sid_length` дозволяє вказати довжину ідентифікатора сесії. Це
значення має бути в діапазоні 22-256. 32. Якщо вам потрібна
сумісність, вказуйте 32, 40 і т.д. Довші ідентифікатори
складніше підібрати. Рекомендується використовувати довжину щонайменше 32.

**Підказка**
Нотатки сумісності: Використовуйте 32 для `session.hash_function`u003d0
(MD5) та `session.hash_bits_per_character`u003d4, `session.hash_function`u003d1
(SHA1) та `session.hash_bits_per_character`u003d6. 26 для
`session.hash_function`u003d0 (MD5) та `session.hash_bits_per_character`u003d5.
22 для `session.hash_function`u003d0 (MD5) та
`session.hash_bits_per_character`u003d6. Ви повинні конфігурувати
INI-налаштування таким чином, щоб ідентифікатор сесії складався як
мінімум із 128 біт. Не забудьте задати відповідні значення для
`session.sid_bits_per_character`, інакше ваші ідентифікатори будуть
слабкими.

> **Примітка**: Це налаштування з'явилося в PHP 7.1.0.

`session.sid_bits_per_character` int
`session.sid_bits_per_character` дозволяє задати кількість біт в одному
символ ідентифікатора сесії. Доступні значення '4' (0-9, a-f), '5'
(0-9, a-v), і '6' (0-9, a-z, A-Z, "-", ","). 4. Чим більше
біт, тим сильніший ідентифікатор сесії. У більшості оточень
рекомендується 5.

> **Примітка**: Це налаштування з'явилося в PHP 7.1.0.

`session.hash_function` [mixed](language.types.declarations.md#language.types.declarations.mixed)
`session.hash_function` дозволяє вказати алгоритм хешування,
використовується для створення ідентифікатора сесії. '0' означає MD5 (128
bits), а '1' означає SHA-1 (160 bits).

Можна вказати будь-який з алгоритмів, передбачених [модулем
hash](ref.hash.md) (якщо він доступний), наприклад, `sha512` або
`whirlpool`. Повний список алгоритмів можна отримати за допомогою
функції [hash_algos()](function.hash-algos.md).

> **Примітка**: Видалена в PHP 7.1.0.

`session.hash_bits_per_character` int
`session.hash_bits_per_character` дозволяє вказати скільки бітів зберігається
у кожному символі при перетворенні бінарного уявлення у будь-що
більш легкочитати. Можливі значення: '4' (0-9, a-f), '5' (0-9, a-v)
і '6' (0-9, a-z, A-Z, "-", ",").

> **Примітка**: Видалена в PHP 7.1.0.

`session.upload_progress.enabled` bool
Включає відстеження прогресу завантаження файлів та заповнення
відповідної змінної в масиві `$_SESSION`. Типово 1,
увімкнено.

`session.upload_progress.cleanup` bool
Чистка інформації про прогрес завантаження файлів після завершення обробки
POST-даних (тобто коли завантаження завершено). Типово 1,
увімкнено.

> **Примітка**: Строго рекомендується не вимкнути цю опцію.

`session.upload_progress.prefix` string
Префікс, який використовується для ключа прогресу завантаження в масиві
`$_SESSION`. Для забезпечення унікальності цей ключ буде приєднано
до значення `$_POST[ini_get("session.upload_progress.name")]`. за
замовчуванням дорівнює "upload_progress\_".

`session.upload_progress.name` string
Ім'я ключа, що використовується в масиві `$_SESSION` для зберігання інформації
про прогрес. Дивіться також директиву
[session.upload_progress.prefix](session.configuration.md#ini.session.upload-progress.prefix).
Якщо елемент `$_POST[ini_get("session.upload_progress.name")]` не
переданий прогрес завантаження даного файлу не буде відстежуватися. за
замовчуванням "PHP_SESSION_UPLOAD_PROGRESS".

`session.upload_progress.freq` [mixed](language.types.declarations.md#language.types.declarations.mixed)
Визначає частоту оновлення інформації про прогрес завантаження. Можна, можливо
вказати значення в байтах (тобто "оновлювати інформацію про прогрес
кожні 100 байт") або у відсотках (тобто "оновлювати інформацію про
прогрес після отримання 1% даних від розміру файла"). За замовчуванням
"1%".

`session.upload_progress.min_freq` int
Мінімальна затримка між оновленнями в секундах. За замовчуванням "1"
(одна секунда).

`session.lazy_write` bool
Якщо `session.lazy_write` встановлено в 1, то дані сесії будуть
перезаписуватись тільки при їх зміні. За замовчуванням 1 увімкнено.

Прогрес завантаження файлів не оброблятиметься, якщо не включена опція
session.upload_progress.enabled та не встановлена змінна
$\_POST\[ini_get("session.upload_progress.name")\]. Докладніше про це
дивіться у розділі "[Відстеження прогресу завантаження файлів за допомогою
сесій](session.upload-progress.md)".
