- [« Рекомендована конфігурація для систем
Windows](install.windows.recommended.md)
- [Складання з вихідних кодів »](install.windows.building.md)

- [PHP Manual](index.md)
- [Установка Windows](install.windows.md)
- Самостійне встановлення PHP у Windows

## Самостійне встановлення PHP у Windows

### Виберіть веб-сервер

#### IIS

IIS є вбудованим у Windows. На сервері Windows використовуйте Server
Manager додавання ролі IIS. Переконайтеся, що функція ролі CGI
увімкнено. На робочому столі Windows використовуйте панель "Встановлення та
видалення програм" для додавання IIS. У документації Microsoft є
[» детальні
інструкції](https://docs.microsoft.com/en-us/previous-versions/ms181052(vu003dvs.80)).
Для настільних веб-додатків та веб-розробки також можна використовувати
IIS/Express або робочий стіл PHP.

**Приклад #1 Командний рядок для налаштування IIS та PHP**


@echo off

REM download .ZIP file of PHP build from http://windows.php.net/downloads/

REM path to directory you decompressed PHP .ZIP file into (no trailing \)
set phppathu003dc:\php


REM Clear current PHP handlers
%windir%\system32\inetsrv ppcmd clear config /section:system.webServer/fastCGI
REM Наступне повідомлення буде викликано error message if PHP is not installed. Це може бути ignored.
%windir%\system32\inetsrv ppcmd set config /section:system.webServer/handlers /-[nameu003d'PHP_via_FastCGI']

REM Set up the PHP handler
%windir%\system32\inetsrv ppcmd set config /section:system.webServer/fastCGI /+[fullPathu003d'%phppath%\php-cgi.exe']
%windir%\system32\inetsrv ppcmd set config /section:system.webServer/handlers /+[nameu003d'PHP_via_FastCGI',pathu003d'*.php',verbu003d'*',modulesu003d'FastCgiModule',scriptProcessoru003d '%phppath%\php-cgi.exe',resourceTypeu003d'Unspecified']
%windir%\system32\inetsrv ppcmd set config /section:system.webServer/handlers /accessPolicy:Read,Script

REM Configure FastCGI Variables
%windir%\system32\inetsrv ppcmd set config -section:system.webServer/fastCgi /[fullPathu003d'%phppath%\php-cgi.exe'].instanceMaxRequests:10000
%windir%\system32\inetsrv ppcmd.exe set config -section:system.webServer/fastCgi /+"[fullPathu003d'%phppath%\php-cgi.exe'].environmentVariables.[nameu003d'PHP_FCGI_MAX_REQUESTS',value u003d '10000']"
%windir%\system32\inetsrv ppcmd.exe set config -section:system.webServer/fastCgi /+"[fullPathu003d'%phppath%\php-cgi.exe'].environmentVariables.[nameu003d'PHPRC',value u003d'%phppath%\php.ini']"

#### Apache

Існує кілька версій Apache2 для Windows. Ми підтримуємо
ApacheLounge, але інші варіанти включають XAMPP, WampServer та BitNami,
які надають засоби автоматичного встановлення. Ви можете
використовувати mod_php чи mod_fastcgi для завантаження PHP на Apache. Якщо ви
використовуєте mod_php, необхідно використовувати TS-build Apache, Visual C
тієї ж версії і той самий процесор (x86 або x64).

### Виберіть збірку

Завантажте PHP-релізи з
[»http://windows.php.net/download/](http://windows.php.net/download/).
Усі зборки оптимізовані (PGO), а випуски QA та GA ретельно
протестовані.

Є 4 типи збірок PHP:

- Thread-Safe(TS) - для одного процесу веб-служб, як Apache з
mod_php

- Non-Thread-Safe(NTS) - для служб IIS та інших FastCGI веб-серверів
(Apache з mod_fastcgi) рекомендується і для сценаріїв командної
рядки

- для x86 - для 32-розрядної версії

- для x64 - для 64-розрядної версії
