- [« Встановлення](wincache.installation.md)
- [Скрипт статистики WinCache »](wincache.stats.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](wincache.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

У таблиці наведено список конфігураційних параметрів модуля
WinCache:

| Ім'я За замовчуванням | Мінімум | Максимум Місце зміни | Список змін |
|------------------------------------------------- -------------------------------------|------------ --|---------|----------|-------------------------- --------|----------------------------------------- -------|
| [wincache.fcenabled](wincache.configuration.md#ini.wincache.fcenabled) | "1" | "0" | "1" | PHP_INI_ALL | Доступно з WinCache 1.0.0
| [wincache.fcenabledfilter](wincache.configuration.md#ini.wincache.fcenabledfilter) | "NULL" | "NULL" | "NULL" | PHP_INI_SYSTEM | Доступно з WinCache 1.0.0
| [wincache.fcachesize](wincache.configuration.md#ini.wincache.fcachesize) | "24" | "5" | "255" | PHP_INI_SYSTEM | Доступно з WinCache 1.0.0
| [wincache.fcndetect](wincache.configuration.md#ini.wincache.fcndetect) | "1" | "0" | "1" | PHP_INI_SYSTEM | Доступно із WinCache 1.1.0 |
| [wincache.maxfilesize](wincache.configuration.md#ini.wincache.maxfilesize) | "256" | "10" | "2048" | PHP_INI_SYSTEM | Доступно з WinCache 1.0.0
| [wincache.ocenabled](wincache.configuration.md#ini.wincache.ocenabled) | "1" | "0" | "1" | PHP_INI_ALL | Доступно із WinCache 1.0.0. Вилучено у 2.0.0.0 |
| [wincache.ocenabledfilter](wincache.configuration.md#ini.wincache.ocenabledfilter) | "NULL" | "NULL" | "NULL" | PHP_INI_SYSTEM | Доступно із WinCache 1.0.0. Вилучено у 2.0.0.0 |
| [wincache.ocachesize](wincache.configuration.md#ini.wincache.ocachesize) | "96" | "15" | "255" | PHP_INI_SYSTEM | Доступно із WinCache 1.0.0. Вилучено у 2.0.0.0 |
| [wincache.filecount](wincache.configuration.md#ini.wincache.filecount) | "4096" | "1024" | "16384" | PHP_INI_SYSTEM | Доступно з WinCache 1.0.0
| [wincache.chkinterval](wincache.configuration.md#ini.wincache.chkinterval) | "30" | "0" | "300" | PHP_INI_SYSTEM | Доступно з WinCache 1.0.0
| [wincache.ttlmax](wincache.configuration.md#ini.wincache.ttlmax) | "1200" | "0" | "7200" | PHP_INI_SYSTEM | Доступно з WinCache 1.0.0
| [wincache.enablecli](wincache.configuration.md#ini.wincache.enablecli) | 0 | 0 | 1 | PHP_INI_SYSTEM | Доступно з WinCache 1.0.0
| [wincache.ignorelist](wincache.configuration.md#ini.wincache.ignorelist) | NULL | NULL | NULL | PHP_INI_ALL | Доступно з WinCache 1.0.0
| [wincache.namesalt](wincache.configuration.md#ini.wincache.namesalt) | NULL | NULL | NULL | PHP_INI_SYSTEM | Доступно з WinCache 1.0.0
| [wincache.ucenabled](wincache.configuration.md#ini.wincache.ucenabled) | 1 | 0 | 1 | PHP_INI_SYSTEM | Доступно із WinCache 1.1.0 |
| [wincache.ucachesize](wincache.configuration.md#ini.wincache.ucachesize) | 8 | 5 | 85 | PHP_INI_SYSTEM | Доступно із WinCache 1.1.0 |
| [wincache.scachesize](wincache.configuration.md#ini.wincache.scachesize) | 8 | 5 | 85 | PHP_INI_SYSTEM | Доступно із WinCache 1.1.0 |
| [wincache.rerouteini](wincache.configuration.md#ini.wincache.rerouteini) | NULL | NULL | NULL | PHP_INI_SYSTEM | Доступно із WinCache 1.2.0. Видалено в 1.3.7 |
| [wincache.reroute_enabled](wincache.configuration.md#ini.wincache.reroute_enabled) | 1 | 0 | 1 | PHP_INI_SYSTEM \| PHP_INI_PERDIR | Доступно із WinCache 1.3.7 |
| [wincache.srwlocks](wincache.configuration.md#ini.wincache.srwlocks) | 1 | 0 | 1 | PHP_INI_SYSTEM | Доступно із WinCache 1.3.6.3. Вилучено у 2.0.0.0 |
| [wincache.filemapdir](wincache.configuration.md#ini.wincache.filemapdir) NULL | NULL | NULL | PHP_INI_SYSTEM | Доступно із WinCache 1.3.7.4 |

**Конфігураційні параметри WinCache**

Для детального опису констант PHP_INI\_\*, зверніться до розділу [Де
можуть бути встановлені параметри
конфігурації] (configuration.changes.modes.md).

Коротке пояснення конфігураційних директив.

`wincache.fcenabled` bool
Включає/вимикає файлове кешування.

`wincache.fcenabledfilter` string
Визначає список ідентифікаторів IIS веб-серверів, розділених комою,
для яких має бути дозволено/заборонено файлове кешування. Ця
налаштування працює в парі з `wincache.fcenabled`: якщо
`wincache.fcenabled` встановлено в 1, то для серверів, перерахованих у
`wincache.fcenabledfilter` файлове кешування буде відключено; якщо
`wincache.fcenabled` встановлено як 0, то для серверів, перерахованих у
`wincache.fcenabledfilter` файлове кешування буде увімкнено.

`wincache.fcachesize` int
Визначає максимальний розмір пам'яті (мегабайт) для файлового кеша.
Коли розмір всіх закешованих файлів перевищить це значення, з кешу
будуть видалені найзастаріліші файли.

`wincache.fcndetect` bool
Вмикає/вимикає функцію сповіщення про зміну файлу. Якщо
функціонал оповіщення про зміни файлу підтримується, то він може
бути використаний для оновлення кеша опкодів та файлового кешу при
отримання відповідних оповіщень. Якщо такий механізм не
підтримується, наприклад, при використанні мережевих папок, wincache
самостійно перевірятиме файли на предмет зміни через задані
в налаштуванні `wincache.chkinterval` інтервали часу.

`wincache.maxfilesize` int
Визначає максимальний розмір одного файлу (у кілобайтах) для файлового
кеша. Якщо розмір файлу перевищує задане значення, він не буде
закешований. Ця установка застосовується лише до файлового кешу.

`wincache.ocenabled` bool
**Увага**
Ця опція була *Видалена* у версії 2.0.0.0

Включає/вимикає кешування опкодів

`wincache.ocenabledfilter` string
**Увага**
Ця опція була *Видалена* у версії 2.0.0.0

Визначає список ідентифікаторів IIS веб-серверів, розділених комою,
для яких має бути дозволено/заборонено кешування опкодів. Ця
налаштування працює в парі з `wincache.ocenabled`: якщо
`wincache.ocenabled` встановлено в 1, то для серверів, перерахованих у
`wincache.ocenabledfilter` файлове кешування буде відключено; якщо
`wincache.ocenabled` встановлено як 0, то для серверів, перерахованих у
`wincache.ocenabledfilter` файлове кешування буде дозволено.

`wincache.ocachesize` int
**Увага**
Ця опція була *Видалена* у версії 2.0.0.0

Визначає максимальний розмір пам'яті (мегабайт) для кеша опкодів.
Коли розмір всіх закешованих опкодів перевищить це значення, з кеша
будуть видалені найстаріші з них. Зверніть увагу, що кеш
опкодів повинен бути як мінімум у 3 рази більшим за файловий кеш. Якщо це
не так, то розмір кеша опкодів буде автоматично збільшено.

`wincache.filecount` int
Визначає, скільки приблизно файлів буде закешовано модулем, щоб
при старті було виділено відповідний шматок пам'яті. Якщо кількість
файлів перевищить задане значення, то WinCache зробить переаллокацію
пам'яті.

`wincache.chkinterval` int
Визначає наскільки часто (в секундах) модуль перевірятиме файли на
предмет їх зміни оновлення кешей. Значення 0 відключає цей
функціонал. Зміни файлів не будуть відображені в кеші, доки
закешований запис не буде видалено з кешу збирачем застарілих
записів, або поки не буде перероблено пул додатків IIS, або не
буде викликано функцію wincache_refresh_if_changed.

`wincache.ttlmax` int
Визначає максимальний час (у секундах) незатребуваності для запису
у кеші. Установка 0 відключає процес видалення застарілих записів, що
призведе до того, що запис буде лежати в кеші, поки сервер IIS не буде
зупинено.

`wincache.enablecli` bool
Визначає, чи дозволено кешування під час роботи PHP з командного рядка
(CLI).

`wincache.ignorelist` string
Визначає список файлів, які не потрібно кешувати. Вказуються
лише імена файлів. Символ роздільника - вертикальна характеристика "\|".

**Приклад #1 Приклад використання `wincache.ignorelist`**

`` inicode
wincache.ignorelist u003d "index.php|misc.php|admin.php"
````

`wincache.namesalt` string
Визначає рядок, який використовуватиметься при іменуванні об'єктів,
поміщаються в пам'ять, що розділяється. Це необхідно для запобігання
колізій, коли кілька процесів працюють з пам'яттю, що розділяється.
Довжина цього рядка не повинна перевищувати 8 символів.

`wincache.ucenabled` bool
Вмикає/вимикає кеш користувача.

`wincache.ucachesize` int
Визначає максимальний розмір пам'яті (у мегабайтах)
кешу користувача. Коли розмір всіх закешованих змінних
перевищить це значення, з кеша будуть видалені найзастаріліші
змінні.

`wincache.scachesize` int
Визначає максимальний розмір пам'яті (у мегабайтах) для сесійного
кеша. Коли розмір всіх закешованих даних перевищить це значення,
кеша будуть видалені найзастаріліші дані.

`wincache.rerouteini` string
**Увага**
Ця опція була *Видалена* у версії 1.3.7. Починаючи з 1.3.7. замість неї
використовуйте `wincache.reroute_enabled`.

Задає абсолютний чи відносний шлях до reroute.ini, який містить
список функцій PHP, чия реалізація має бути підмінена реалізацією з
модуля WinCache Якщо заданий відносний шлях, він вирішуватиметься
щодо розташування файлу php-cgi.exe.

`wincache.reroute_enabled` bool
Вмикає/вимикає перенаправлення деяких функцій файлового
введення/виводу для роботи через файловий кеш.

`wincache.srwlocks` bool
**Увага**
Ця опція була *Видалена* у версії 2.0.0.0

Вмикає/вимикає використання блокувань читання/запису, що розділяються.
Вимкнення корисне при налагодженні ситуацій взаємних блокувань WinCache.

`wincache.filemapdir` string
Задає абсолютний шлях до директорії, де WinCache триматиметься
тимчасові файли для сегментів пам'яті, що розділяється. Ця директорія має
розташовуватися на локальній машині і в жодному разі не на мережевий
файлової системи. Якщо директорія не вказана, WinCache буде
використовувати Windows System Page File.
