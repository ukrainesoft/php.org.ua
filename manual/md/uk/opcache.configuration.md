- [« Установка](opcache.installation.md)
- [Типи ресурсів»] (opcache.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](opcache.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- -------------------------------------------------- ------------|--------------|-----------------|---- -------------------------------------------------- -----------------------------|
| [opcache.enable](opcache.configuration.md#ini.opcache.enable) | "1" | PHP_INI_ALL | |
| [opcache.enable_cli](opcache.configuration.md#ini.opcache.enable-cli) | "0" | PHP_INI_SYSTEM | У версіях з PHP 7.1.2 до 7.1.6 включно, значення за замовчуванням "1" (включено) |
| [opcache.memory_consumption](opcache.configuration.md#ini.opcache.memory-consumption) | "128" | PHP_INI_SYSTEM | |
| [opcache.interned_strings_buffer](opcache.configuration.md#ini.opcache.interned-strings-buffer) | "8" | PHP_INI_SYSTEM | |
| [opcache.max_accelerated_files](opcache.configuration.md#ini.opcache.max-accelerated-files) | "10000" | PHP_INI_SYSTEM | |
| [opcache.max_wasted_percentage](opcache.configuration.md#ini.opcache.max-wasted-percentage) | "5" | PHP_INI_SYSTEM | |
| [opcache.use_cwd](opcache.configuration.md#ini.opcache.use-cwd) | "1" | PHP_INI_SYSTEM | |
| [opcache.validate_timestamps](opcache.configuration.md#ini.opcache.validate-timestamps) | "1" | PHP_INI_ALL | |
| [opcache.revalidate_freq](opcache.configuration.md#ini.opcache.revalidate-freq) | "2" | PHP_INI_ALL | |
| [opcache.revalidate_path](opcache.configuration.md#ini.opcache.revalidate-path) | "0" | PHP_INI_ALL | |
| [opcache.save_comments](opcache.configuration.md#ini.opcache.save-comments) | "1" | PHP_INI_SYSTEM | |
| [opcache.fast_shutdown](opcache.configuration.md#ini.opcache.fast-shutdown) | "0" | PHP_INI_SYSTEM | |
| [opcache.enable_file_override](opcache.configuration.md#ini.opcache.enable-file-override) | "0" | PHP_INI_SYSTEM | |
| [opcache.optimization_level](opcache.configuration.md#ini.opcache.optimization-level) | "0x7FFEBFFF" | PHP_INI_SYSTEM | До PHP 7.3.0 було 0x7FFFBFFF |
| [opcache.inherited_hack](opcache.configuration.md#ini.opcache.inherited-hack) | "1" | PHP_INI_SYSTEM | Видалено у PHP 7.3.0 |
| [opcache.dups_fix](opcache.configuration.md#ini.opcache.dups-fix) | "0" | PHP_INI_ALL | |
| [opcache.blacklist_filename](opcache.configuration.md#ini.opcache.blacklist-filename) | "" | PHP_INI_SYSTEM | |
| [opcache.max_file_size](opcache.configuration.md#ini.opcache.max-file-size) | "0" | PHP_INI_SYSTEM | |
| [opcache.consistency_checks](opcache.configuration.md#ini.opcache.consistency-checks) | "0" | PHP_INI_ALL | |
| [opcache.force_restart_timeout](opcache.configuration.md#ini.opcache.force-restart-timeout) | "180" | PHP_INI_SYSTEM | |
| [opcache.error_log](opcache.configuration.md#ini.opcache.error-log) | "" | PHP_INI_SYSTEM | |
| [opcache.log_verbosity_level](opcache.configuration.md#ini.opcache.log-verbosity-level) | "1" | PHP_INI_SYSTEM | |
| [opcache.record_warnings](opcache.configuration.md#ini.opcache.record-warnings) | "0" | PHP_INI_SYSTEM | Доступно з PHP 8.0.0. |
| [opcache.preferred_memory_model](opcache.configuration.md#ini.opcache.preferred-memory-model) | "" | PHP_INI_SYSTEM | |
| [opcache.protect_memory](opcache.configuration.md#ini.opcache.protect-memory) | "0" | PHP_INI_SYSTEM | |
| [opcache.mmap_base](opcache.configuration.md#ini.opcache.mmap-base) | **`null`** | PHP_INI_SYSTEM | |
| [opcache.restrict_api](opcache.configuration.md#ini.opcache.restrict-api) | "" | PHP_INI_SYSTEM | |
| [opcache.file_update_protection](opcache.configuration.md#ini.opcache.file_update_protection) | "2" | PHP_INI_ALL | |
| [opcache.huge_code_pages](opcache.configuration.md#ini.opcache.huge_code_pages) | "0" | PHP_INI_SYSTEM | |
| [opcache.lockfile_path](opcache.configuration.md#ini.opcache.lockfile_path) | "/tmp" | PHP_INI_SYSTEM | |
| [opcache.opt_debug_level](opcache.configuration.md#ini.opcache.opt_debug_level) | "0" | PHP_INI_SYSTEM | Доступно з PHP 7.1.0 |
| [opcache.file_cache](opcache.configuration.md#ini.opcache.file-cache) | NULL | PHP_INI_SYSTEM | |
| [opcache.file_cache_only](opcache.configuration.md#ini.opcache.file-cache-only) | "0" | PHP_INI_SYSTEM | |
| [opcache.file_cache_consistency_checks](opcache.configuration.md#ini.opcache.file-cache-consistency-checks) | "1" | PHP_INI_SYSTEM | |
| [opcache.file_cache_fallback](opcache.configuration.md#ini.opcache.file-cache-fallback) | "1" | PHP_INI_SYSTEM | |
| [opcache.validate_permission](opcache.configuration.md#ini.opcache.validate-permission) | "0" | PHP_INI_SYSTEM | Доступно з PHP 7.0.14 |
| [opcache.validate_root](opcache.configuration.md#ini.opcache.validate-root) | "0" | PHP_INI_SYSTEM | Доступно з PHP 7.0.14 |
| [opcache.preload](opcache.configuration.md#ini.opcache.preload) | "" | PHP_INI_SYSTEM | Доступно з PHP 7.4.0 |
| [opcache.preload_user](opcache.configuration.md#ini.opcache.preload-user) | "" | PHP_INI_SYSTEM | Доступно з PHP 7.4.0 |
| [opcache.cache_id](opcache.configuration.md#ini.opcache.cache-id) | "" | PHP_INI_SYSTEM | Тільки Windows. Доступно з PHP 7.4.0 |
| [opcache.jit](opcache.configuration.md#ini.opcache.jit) | "tracing" | PHP_INI_ALL | Доступно з PHP 8.0.0 |
| [opcache.jit_buffer_size](opcache.configuration.md#ini.opcache.jit-buffer-size) | "0" | PHP_INI_SYSTEM | Доступно з PHP 8.0.0 |
| [opcache.jit_debug](opcache.configuration.md#ini.opcache.jit-debug) | "0" | PHP_INI_ALL | Доступно з PHP 8.0.0 |
| [opcache.jit_bisect_limit](opcache.configuration.md#ini.opcache.jit-bisect-limit) | "0" | PHP_INI_ALL | Доступно з PHP 8.0.0 |
| [opcache.jit_prof_threshold](opcache.configuration.md#ini.opcache.jit-prof-threshold) | "0.005" | PHP_INI_ALL | Доступно з PHP 8.0.0 |
| [opcache.jit_max_root_traces](opcache.configuration.md#ini.opcache.jit-max-root-traces) | "1024" | PHP_INI_SYSTEM | Доступно з PHP 8.0.0 |
| [opcache.jit_max_side_traces](opcache.configuration.md#ini.opcache.jit-max-side-traces) | "128" | PHP_INI_SYSTEM | Доступно з PHP 8.0.0 |
| [opcache.jit_max_exit_counters](opcache.configuration.md#ini.opcache.jit-max-exit-counters) | "8192" | PHP_INI_SYSTEM | Доступно з PHP 8.0.0 |
| [opcache.jit_hot_loop](opcache.configuration.md#ini.opcache.jit-hot-loop) | "64" | PHP_INI_SYSTEM | Доступно з PHP 8.0.0 |
| [opcache.jit_hot_func](opcache.configuration.md#ini.opcache.jit-hot-func) | "127" | PHP_INI_SYSTEM | Доступно з PHP 8.0.0 |
| [opcache.jit_hot_return](opcache.configuration.md#ini.opcache.jit-hot-return) | "8" | PHP_INI_SYSTEM | Доступно з PHP 8.0.0 |
| [opcache.jit_hot_side_exit](opcache.configuration.md#ini.opcache.jit-hot-side-exit) | "8" | PHP_INI_SYSTEM | Доступно з PHP 8.0.0 |
| [opcache.jit_blacklist_root_trace](opcache.configuration.md#ini.opcache.jit-blacklist-root-trace) | "16" | PHP_INI_ALL | Доступно з PHP 8.0.0 |
| [opcache.jit_blacklist_side_trace](opcache.configuration.md#ini.opcache.jit-blacklist-side-trace) | "8" | PHP_INI_ALL | Доступно з PHP 8.0.0 |
| [opcache.jit_max_loop_unrolls](opcache.configuration.md#ini.opcache.jit-max-loop-unrolls) | "8" | PHP_INI_ALL | Доступно з PHP 8.0.0 |
| [opcache.jit_max_recursive_calls](opcache.configuration.md#ini.opcache.jit-max-recursive-calls) | "2" | PHP_INI_ALL | Доступно з PHP 8.0.0 |
| [opcache.jit_max_recursive_returns](opcache.configuration.md#ini.opcache.jit-max-recursive-return) | "2" | PHP_INI_ALL | Доступно з PHP 8.0.0 |
| [opcache.jit_max_polymorphic_calls](opcache.configuration.md#ini.opcache.jit-max-polymorphic-calls) | "2" | PHP_INI_ALL | Доступно з PHP 8.0.0 |

**Опції налаштування OPcache**

Для детального опису констант PHP_INI\_\*, зверніться до розділу [Де
можуть бути встановлені параметри
конфігурації] (configuration.changes.modes.md).

Коротке пояснення конфігураційних директив.

`opcache.enable` bool
Дозволяє кешування опкодів. Якщо заборонено, код не буде
оптимізуватися та кешуватися. Опцію `opcache.enable` не можна увімкнути
під час виконання за допомогою [ini_set()](function.ini-set.md), але
можна вимкнути. Спроба увімкнути її таким чином призведе до генерації
попередження.

`opcache.enable_cli` bool
Дозволяє кешування опкодів для CLI-версії PHP.

`opcache.memory_consumption` int
Розмір пам'яті, що розділяється, в мегабайтах для OPcache. Мінімально
допустиме значення - "8", яке застосовується, якщо встановлено
менше значення.

`opcache.interned_strings_buffer` int
Кількість пам'яті в мегабайтах для зберігання інтернованих рядків.

`opcache.max_accelerated_files` int
Максимальна кількість ключів (і, відповідно, скриптів)
хеш-таблиці OPcache. Фактичне значення буде першим
числом із набору
`{ 223, 463, 983, 1979, 3907, 7963, 16229, 32531, 65407, 130987, 262237, 524521, 1048793 }`,
яке більше або дорівнює заданому в цьому параметрі. Мінімум 200,
максимум 1000000. Значення за межами цього діапазону обмежені до
допустимого діапазону.

`opcache.max_wasted_percentage` int
Максимальне значення втраченої пам'яті (у відсотках) після якого
планується перезапуск, якщо недостатньо вільної пам'яті. Максимально
допустиме значення: "50", яке застосовується, якщо встановлено
більше значення.

`opcache.use_cwd` bool
Якщо увімкнено, OPcache додає поточну робочу директорію до ключа
скрипта, тим самим усуваючи можливість колізій для файлів з однаковим
ім'ям. Відключення цієї опції підвищує продуктивність, але може
призвести до збоїв.

`opcache.validate_timestamps` bool
Якщо увімкнено, OPcache перевірятиме актуальність закешованих
скриптів кожні
[opcache.revalidate_freq](opcache.configuration.md#ini.opcache.revalidate-freq)
секунд. Коли заборонено, ви можете перезапустити OPcache вручну з
за допомогою [opcache_reset()](function.opcache-reset.md),
[opcache_invalidate()](function.opcache-invalidate.md) або
перезапустивши веб-сервер для того, щоб зміни набули чинності.

`opcache.revalidate_freq` int
Як часто в секундах перевіряти тимчасові позначки файлів. `0` призведе до
тому, що OPcache проводитиме цю перевірку при кожному запиті.

Ця директива ігнорується, якщо вимкнено
[opcache.validate_timestamps](opcache.configuration.md#ini.opcache.validate-timestamps).

`opcache.revalidate_path` bool
Якщо вимкнено, існуючі закешовані файли, що використовують один і
той же [include_path](ini.core.md#ini.include-path), будуть повторно
використовуватись. Таким чином, якщо файл з тим же ім'ям знаходиться в
іншому місці в include_path, він не буде знайдено.

`opcache.save_comments` bool
Якщо вимкнено, всі коментарі будуть відкинуті з кешу опкодів
мінімізації розміру коду. Вимкнення цієї опції може призвести до того,
що деякі фреймворки, що покладаються на інструкції в коментарях,
перестануть працювати, включаючи Doctrine, Zend Framework 2 та PHPUnit.

`opcache.fast_shutdown` bool
Якщо увімкнено, то буде використана швидка послідовність
перезавантаження, при якому не відбувається очищення всіх виділених блоків
пам'яті. Натомість для звільнення всього набору змінних
використовується стандартний менеджер пам'яті Zend Engine.

Ця директива була видалена у PHP 7.2.0. Варіант швидкої
послідовність перезавантаження була інтегрована в PHP і автоматично
буде використовуватись, якщо це можливо.

`opcache.enable_file_override` bool
Якщо увімкнено, то кеш опкодів перевірятиме, чи вже закешований файл
під час виклику функцій [file_exists()](function.file-exists.md),
[is_file()](function.is-file.md) та
[is_readable()](function.is-readable.md). Це може підвищити
продуктивність для додатків, що перевіряють присутність та доступність
для читання скриптом PHP, але несе ризик повернення застарілих даних, якщо
заборонено опцію
[opcache.validate_timestamps](opcache.configuration.md#ini.opcache.validate-timestamps).

`opcache.optimization_level` int
Бітова маска, яка контролює, які кроки оптимізації виконуються. за
замовчуванням застосовуються всі безпечні оптимізації. Зміна значення по
замовчуванням в основному корисно для налагодження/розробки оптимізатора
(Дивіться також
[opcache.opt_debug_level](opcache.configuration.md#ini.opcache.opt_debug_level)).

`opcache.inherited_hack` bool
Ця директива ігнорується.

`opcache.dups_fix` bool
Цей хак потрібний лише для обходу помилок "Cannot redeclare class".

`opcache.blacklist_filename` string
Розташування чорного списку OPcache. Файл чорного списку містить
імена файлів, які не потрібно прискорювати, по одному запису на рядок.
Допустимі шаблони пошуку та префікси. Рядки, що починаються з точки з
комою ігноруються

Приклад простого чорного списку:

; Вказуємо конкретний файл.
/var/www/broken.php
; Префікс, що означає всі файли, що починаються з x.
/var/www/x
; Шаблон пошуку.
/var/www/*-broken.php

`opcache.max_file_size` int
Максимальний розмір файлу для кешування у байтах. Якщо поставити `0`, то
кешуватимуться всі файли.

`opcache.consistency_checks` int
Якщо не нуль, OPcache звірятиме контрольну суму кешу кожні N
запитів, де N - задане у цій директиві значення. Рекомендується
включати тільки при налагодженні, тому що сильно впливає на
продуктивність.

`opcache.force_restart_timeout` int
Кількість секунд очікування визволення кешу, після якого буде
примусово здійснено запланований перезапуск. Якщо цей час
перевищено, OPcache вважає, що відбувається щось неправильне та вбиває
процес, що блокує кеш.

Якщо параметр
[opcache.log_verbosity_level](opcache.configuration.md#ini.opcache.log-verbosity-level)
задати рівним 2 або більше, то, при виникненні такої ситуації,
лог помилок буде записано попередження.

Директива не підтримується у Windows.

`opcache.error_log` string
Лог помилок OPcache. Порожній рядок вважається як `stderr`, і помилки будуть
виведені у стандартний потік помилок (у більшості випадків це лог
помилок веб-сервера).

`opcache.log_verbosity_level` int
Рівень подробиці помилок лога. За замовчуванням записуватимуться тільки
фатальні помилки (рівень 0) та помилки (рівень 1). Також значення можуть
бути такими: попередження (рівень 2), інформаційні повідомлення
(рівень 3) та повідомлення налагодження (рівень 4).

`opcache.record_warnings` bool
Якщо увімкнено, OPcache запише попередження під час компіляції та
відтворить їх при наступному включенні, навіть якщо воно виконується з
кеша.

`opcache.preferred_memory_model` string
Вподобана модель пам'яті для OPcache. Якщо залишити порожнім, то
OPcache самостійно вибере найкращу модель, яка буде
поводитися коректно практично в будь-яких випадках.

Можливі значення включають `mmap`, `shm`, `posix` та `win32`.

`opcache.protect_memory` bool
Захищає пам'ять, що розділяється, від несподіваного запису під час запуску
скриптів. Корисно тільки для внутрішнього налагодження.

`opcache.mmap_base` string
Базове значення для сегмента пам'яті, що розділяється в Windows. Усі процеси
PHP повинні відображати пам'ять, що розділяється, в однакове адресне
простір. Дана опція допомагає полагодити помилки типу "Unable to
reattach to base address".

`opcache.restrict_api` string
Дозволяє викликати функції API OPcache лише скриптам, чий шлях
починається із зазначеного рядка. Значення за замовчуванням "" означає
відсутність обмежень.

`opcache.file_update_protection` string
Запобігає кешування файлів молодшого за вказану кількість секунд.
Це допомагає запобігти кешуванням не до кінця оновлених файлів. В
у випадку, якщо у вас всі оновлення файлів атомарні, можна підвищити
продуктивність, задавши цей параметр рівним "0".

`opcache.huge_code_pages` bool
Включає або відключає копіювання коду PHP (текстового сегмента) у HUGE
PAGES. Це може підвищити продуктивність, але потребує відповідних
системних налаштувань. Доступно в Linux починаючи з PHP 7.0.0 та FreeBSD
починаючи з PHP 7.4.0.

`opcache.lockfile_path` string
Абсолютний шлях до сховища спільних файлів блокувань (тільки \*nix)

`opcache.opt_debug_level` string
Здійснює виведення опкодів для налагодження різних етапів оптимізації. 0x10000
приведе до виведення опкодів як тільки вони згенеровані компілятором,
застосування будь-якої оптимізації. 0x20000 призведе до виведення опкодів
після оптимізації.

`opcache.file_cache` string
Дозволяє та ставить директорію кеша другого рівня. Це має підвищити
продуктивність у випадку, якщо пам'ять SHM заповнена, сервер
перезапущено або SHM скинуто. Значення за промовчанням "" забороняє
кешування на файловій системі.

`opcache.file_cache_only` bool
Включає або вимикає кешування опкодів в пам'яті, що розділяється.

> **Примітка**:
>
> До PHP 8.1.0 відключення цієї директиви з вже заповненим файловим
> кешем вимагало ручного очищення файлового кеша.

`opcache.file_cache_consistency_checks` bool
Включає або вимикає перевірку контрольної суми під час завантаження скрипту
із файлового кеша.

`opcache.file_cache_fallback` bool
Застосовує opcache.file_cache_onlyu003d1 для деяких процесів, які
завершилися помилкою при перепідключенні до пам'яті, що розділяється (тільки для
Windows). Потрібно явно дозволене кешування на файлову систему.

**Застереження**
Відключення цієї опції конфігурації може завадити запуску процесів, та
тому не рекомендується.

`opcache.validate_permission` bool
Перевірка прав доступу до кешованого файлу для поточного користувача.

`opcache.validate_root` bool
Запобігає колізії імен у chroot-оточенні. Повинно бути увімкнено для
всіх випадків використання chroot-оточень для запобігання доступу до
файли за межами chroot.

`opcache.preload` string
Задає скрипт PHP, який буде скомпілюваний та запущений при старті
сервера і зможе завантажити інші файли, або за допомогою
[include](function.include.md) або використовуючи функцію
[opcache_compile_file()](function.opcache-compile-file.md). всі
сутності (наприклад, функції та класи), визначені в цих файлах,
автоматично будуть доступні до моменту вимкнення сервера.

> **Примітка**:
>
> Попереднє завантаження не підтримується у Windows.

`opcache.preload_user` string
Попереднє завантаження коду з правами root заборонено з міркувань
безпеки. Ця директива полегшує запуск попереднього завантаження від
імені іншого користувача.

`opcache.cache_id` string
У Windows всі процеси, що виконують один і той же PHP SAPI під одним і
тим же обліковим записом користувача з однаковим ідентифікатором кеша,
спільно використовують один екземпляр OPcache. Значення ідентифікатора
кеша може бути вільно вибрано.

**Підказка**
Для IIS різні пули додатків можуть мати власний екземпляр
OPcache, використовуючи змінне середовище `APP_POOL_ID` як
`opcache.cache_id`.

`opcache.jit` string\|int
Для звичайного використання параметр приймає одне із чотирьох рядкових
значень:

- `disable`: Повністю відключено, не може бути включено під час
виконання.
- `off`: Вимкнено, але може бути увімкнено під час виконання.
- `tracing`/`on`: Використовуйте трасування JIT. Увімкнено за замовчуванням та
рекомендується більшість користувачів.
- `function`: Використовуйте функцію JIT.

Для розширеного використання параметр приймає 4-значне ціле число
CRTO, де цифри означають:

`C` (Прапори оптимізації для процесора)
- `0`: Вимкнути оптимізацію для ЦП.
- `1`: Увімкніть AVX, якщо ЦП підтримує його.

`R` (розподіл регістрів)
- `0`: Не виконувати розподіл регістрів.
- `1`: Виконувати виділення локального блокового регістру.
- `2`: Виконувати виділення глобального регістру.

`T` (тригер)
- `0`: Компіляція всіх функцій під час завантаження скрипта.
- `1`: Компіляція функцій під час першого виконання.
- `2`: Профілювання функцій при першому запиті і потім
компілювання найпопулярніших функцій.
- `3`: Профілювання на лету та компіляція гарячих функцій.
- `4`: В даний час не використовується.
- `5`: Використання трасування JIT. Профілювання на льоту та
компіляція трасування для гарячих сегментів коду

`O` (рівень оптимізації)
- `0`: Без JIT.
- `1`: Мінімальний JIT (виклик стандартних обробників віртуальних
машин).
- `2`: Вбудовані обробники віртуальних машин.
- `3`: Використовувати висновок типу.
- `4`: Використовувати графік дзвінків.
- `5`: Оптимізувати весь сценарій.

Режим ``tracing'' відповідає `CRTO u003d 1254`, Режим ``function''
відповідає `CRTOu003d1205`.

`opcache.jit_buffer_size` int
Об'єм пам'яті, що розділяється, резервований для скомпілованого JIT-коду.
Нульове значення вимикає JIT.

Якщо використовується int значення вимірюється байтами. ви також можете
використовувати скорочений запис, який описано в [цьому розділі
FAQ](faq.using.md#faq.using.shorthandbytes).

`opcache.jit_debug` int
Бітова маска, яка визначає, який висновок налагодження JIT слід увімкнути.
Можливі значення дивіться у `zend_jit.h`.

`opcache.jit_bisect_limit` int
Опція налагодження, що відключає JIT-компіляцію після компіляції певного
кількості функцій. Може бути корисним для поділу джерела
неправильної компіляції JIT. Примітка: цей параметр працює тільки
якщо для тригера JIT встановлено значення 0 (компіляція під час завантаження
скрипта) або 1 (компіляція при першому виконанні), наприклад,
`opcache.jitu003d1215`. Докладніше дивіться у розділі
[opcache.jit](opcache.configuration.md#ini.opcache.jit).

`opcache.jit_prof_threshold` float
При використанні режиму тригера "профілювання функцій при першому
запит" цей поріг визначає, чи вважається функція гарячою. Кількість
викликів функції, поділений на кількість викликів усіх функцій,
бути вище граничного значення. Наприклад, поріг 0,005 означає, що
функції, що становлять понад 0,5% всіх викликів, будуть скомпільовані JIT.

`opcache.jit_max_root_traces` int
Максимальна кількість кореневих стеків виклику.

`opcache.jit_max_side_traces` int
Максимальна кількість бічних стеків виклику, які може мати
кореневий стек.

`opcache.jit_max_exit_counters` int
Максимальна кількість лічильників виходу бокового стека виклику. Це
обмежує загальну кількість бічних стеків, які можуть бути у всіх
кореневих стеках.

`opcache.jit_hot_loop` int
Через скільки ітерацій цикл вважається гарячим. Допустимий діапазон
значень: `[0,255]`; для будь-якого значення поза цим діапазоном, наприклад,
-1 або 256 буде використовуватися значення за замовчуванням. Зокрема,
нульове значення відключить JIT для відстеження та компіляції будь-яких
циклів.

`opcache.jit_hot_func` int
Через скільки дзвінків функція вважається гарячою. Допустимий діапазон
значень: `[0,255]`; для будь-якого значення поза цим діапазоном, наприклад,
-1 або 256 буде використовуватися значення за замовчуванням. Зокрема,
нульове значення відключить JIT для відстеження та компіляції будь-яких
функцій.

`opcache.jit_hot_return` int
Через скільки повернень повернення вважається гарячим. Допустимий діапазон
значень: `[0,255]`; для будь-якого значення поза цим діапазоном, наприклад,
-1 або 256 буде використовуватися значення за замовчуванням. Зокрема,
нульове значення відключить JIT для відстеження та компіляції будь-яких
повернень.

`opcache.jit_hot_side_exit` int
Через скільки виходів бічний стек вважається гарячим. Допустимий
діапазон значень: `[0,255]`; для будь-якого значення поза цим діапазоном,
наприклад, -1 або 256, використовуватиметься значення за замовчуванням. В
зокрема, нульове значення відключить JIT для відстеження та компіляції
будь-яких побічних виходів.

`opcache.jit_blacklist_root_trace` int
Максимальна кількість спроб компіляції кореневого трасування, насамперед
чим вона буде занесена до чорного списку.

`opcache.jit_blacklist_side_trace` int
Максимальна кількість спроб компіляції бічного трасування до того,
як вона буде занесена до чорного списку.

`opcache.jit_max_loop_unrolls` int
Максимальна кількість спроб розгорнути цикл у бічній трасуванні,
намагаючись досягти кореневого трасування та закрити зовнішній цикл.

`opcache.jit_max_recursive_calls` int
Максимальна кількість розгорнутих рекурсивних циклів дзвінка.

`opcache.jit_max_recursive_returns` int
Максимальна кількість розгорнутих рекурсивних циклів повернення.

`opcache.jit_max_polymorphic_calls` int
Максимальна кількість спроб вбудованих поліморфних (динамічних або
методичних) викликів. Виклики вище за цей ліміт обробляються як
метаморфічні та не вбудовуються.
