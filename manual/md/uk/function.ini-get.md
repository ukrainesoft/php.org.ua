- [«ini_get_all](function.ini-get-all.md)
- [ini_restore »](function.ini-restore.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Отримує значення налаштування конфігурації

#ini_get

(PHP 4, PHP 5, PHP 7, PHP 8)

ini_get — Отримує значення конфігураційної установки

### Опис

**ini_get**(string `$option`): string\|false

У разі успішного виконання повертає значення налаштування
Зміни.

### Список параметрів

`option`
Ім'я конфігурації.

### Значення, що повертаються

Повертає значення конфігурації у вигляді рядка. Для значень
null буде повертатися порожній рядок. Функція поверне **`false`**,
якщо вказане налаштування не існує.

### Приклади

**Приклад #1 Кілька прикладів використання **ini_get()****

` <?php/*Наш файл php.ini містить наступні настройки:display_errors u003d Onregister_globals u003d Offpost_max_size u003d 8M*/echo 'display_errors u003d ' . ini_get('display_errors') . "
";echo 'register_globals u003d ' . ini_get('register_globals') . "
";echo 'post_max_size u003d ' . ini_get('post_max_size') . "
";echo 'post_max_size+1 u003d ' . (ini_get('post_max_size')+1) . "
";echo 'post_max_size in bytes u003d ' . return_bytes(ini_get('post_max_size'));function return_bytes($val) {    $val u003d trim($val); $$| 1]);    switch($last) {        // Модификатор 'G' доступен        case 'g':            $val *u003d 1024;        case 'm':            $val *u003d 1024;        case 'k':            $val *u003d 1024; }   return $val;}?> `

Результатом виконання цього прикладу буде щось подібне:


display_errors u003d 1
register_globals u003d 0
post_max_sizeu003d8M
post_max_size+1 u003d 9
post_max_size in bytes u003d 8388608

### Примітки

> **Примітка**: **Поворотні логічні значення**
>
> Boolean-значення ini-налаштування `off` буде повернено у вигляді порожньої
> рядки або рядки "0", тоді як значення `on` буде
> відповідати рядок "1". Функція також може повертати літерні
> значення INI-налаштування.

> **Примітка**: **Повертані значення кількості пам'яті**
>
> Багато ini-налаштувань, значення яких вимірюються кількістю пам'яті,
> такі як
> [upload_max_filesize](ini.core.md#ini.upload-max-filesize),
> зберігаються в `php.ini` у скороченому вигляді. **ini_get()** поверне
> саме те, що записано у файлі `php.ini`, а *НЕ* цілісний (int)
> еквівалент цієї величини. Спроба використання отриманої величини
> арифметичних операціях не дасть бажаного результату. У наведеному
> вище прикладі продемонстровано, як можна перекласти скорочену
> запис у число байт.

> **Примітка**:
>
> **ini_get()** не може прочитати опції типу "масив", такі як
> pdo.dsn.\*, і повертає **`false`** таких випадках.

### Дивіться також

- [get_cfg_var()](function.get-cfg-var.md) - Витягує значення
налаштування конфігурації PHP
- [ini_get_all()](function.ini-get-all.md) - Отримує всі налаштування
конфігурації
- [ini_restore()](function.ini-restore.md) - Відновлює
значення налаштування конфігурації
- [ini_set()](function.ini-set.md) - Встановлює значення
налаштування конфігурації
