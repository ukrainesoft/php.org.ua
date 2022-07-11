- [« Налаштування під час виконання](wincache.configuration.md)
- [Обробник сесій WinCache »](wincache.sessionhandler.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](wincache.setup.md)
- Скрипт статистики WinCache

## Скрипт статистики WinCache

Інсталяційний пакет WinCache містить PHP-скрипт, `wincache.php`, який
можна використовувати для отримання статистики використання кеша.

Якщо модуль WinCache встановлено за допомогою Microsoft Web Platform
Installer, то скрипт розташовуватиметься по дорозі
`%SystemDrive%\Program Files\IIS\Windows Cache for PHP\`. На
64-розрядних версіях Windows Server, скрипт лежить по дорозі
`%SystemDrive%\Program Files (x86)\IIS\Windows Cache for PHP`. Якщо
модуль встановлювався самостійно, то `wincache.php` буде лежати у
тому ж каталозі, в який ви розпаковували інсталяційний пакет.

Для використання wincache.php, скопіюйте його в кореневий каталог
веб-сайту або будь-який його підкаталог. Для захисту скрипта, відкрийте його в
текстовому редакторі та змініть значення констант *USERNAME* та
*PASSWORD*. Якщо для аутентифікації IIS використовується інший механізм,
то дотримуйтесь інструкцій у коментарях:

**Приклад #1 Налаштування автентифікації для `wincache.php`**

` <?php/** * u003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003d CONFIGURATION SETTINGS u003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003d u003du003du003du003du003du003du003du003du003du003du003du003du003du003d * If you do not want to use authentication for this page, set USE_AUTHENTICATION to 0. * If you use authen */define('USE_AUTHENTICATION', 1);define('USERNAME', 'wincache');define('PASSWORD', 'wincache');/** * The Basic PHP authentication will work only  * Anonymous Authentication' and nothing else. If IIS is configured to support/use * any other kind of authentication like Basic/Negotiate/Digest etc, this will not work. *In|that|case|use| */$user_allowed u003d array('DOMAIN\user1', 'DOMAIN\user2', 'DOMAIN\user3');/** * If the array contains string 'all', then all the users authen    to the page. Uncomment the below line and comment above line * to grant access to all users who gets authenticated by IIS. *//* $user_allowed u003d array('all'); *//** u003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003d END OF CONFIGURATION SETTINGS u003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003d u003du003du003du003du003du003d */?> `

> **Примітка**: Завжди захищайте скрипт `wincache.php` за допомогою
> вбудованого механізму або за допомогою механізму аутентифікації
> веб-сервер. Залишаючи доступ до скрипту відкритим ви можете
> скомпрометувати вашу програму та веб-сервер.
