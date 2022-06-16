- [« Командний рядок PHP у Microsoft
Windows](install.windows.commandline.md)
- [Стандартні проблеми PHP під Windows
»](install.windows.troubleshooting.md)

- [PHP Manual](index.md)
- [Установка Windows](install.windows.md)
- Apache 2.x у Microsoft Windows

## Apache 2.x у Microsoft Windows

Цей розділ містить примітки та підказки щодо встановлення PHP, пов'язаної з
Apache 2.x на системах Microsoft Windows.

> **Примітка**:
>
> Спочатку слід прочитати [кроки ручний
> установки](install.windows.manual.md)!

Вкрай рекомендується звернутися до [»  Документації
Apache](http://httpd.apache.org/docs/current/), щоб отримати базове
уявлення про сервер Apache 2.x. Також подумайте про читання [»
Приміток для
Windows](http://httpd.apache.org/docs/current/platform/windows.md) для
Apache 2.x перед читанням цього посібника.

Завантажте останню версію [» Apache
2.x](https://www.apachelounge.com/download/) та відповідну версію PHP.
Виконайте кроки ручної установки (install.windows.manual.md) та
повертайтеся, щоб продовжити інтеграцію PHP та Apache.

Існує три способи настроїти PHP для роботи з Apache 2.x у Windows.
PHP можна запускати як обробник, як CGI або під FastCGI.

> **Примітка**: Пам'ятайте, що при вказівці шляхів у конфігураційних
> файлах Apache під Windows, всі зворотні сліші, наприклад,
> `c:\directory ile.ext` повинні бути змінені на прямі:
> `c:/directory/file.ext`. Для шляхів із директоріями також може
> знадобиться сліш наприкінці.

### Установка як обробник Apache

Щоб завантажити PHP-модуль для Apache 2.x, необхідно вставити наступні
рядки у файл конфігурації Apache `httpd.conf`:

**Приклад #1 PHP і Apache 2.x як обробник**

`` apache-confcode
# до PHP 8.0.0 ім'я модуля було php7_module
LoadModule php_module "c:/php/php8apache2_4.dll"
<FilesMatch \.php$>
SetHandler application/x-httpd-php
</FilesMatch>
# вкажіть шлях до php.ini
PHPIniDir "C:/php"
````

> **Примітка**: У наведених вище прикладах необхідно підставити
> фактичний шлях до PHP замість `C:/php/`. Переконайтеся, що файл,
> вказаний у директиві `LoadModule`, знаходився у вказаному місці.
> Використовуйте `php7apache2_4.dll` для PHP 7 або `php8apache2_4.dll` для
> PHP 8.

### Запуск PHP як CGI

Рекомендуємо звернутися до [» Документації Apache
CGI](http://httpd.apache.org/docs/current/howto/cgi.md) для більш
повне розуміння того, як запускати CGI в Apache.

Щоб запустити PHP як CGI, файли php-cgi повинні бути поміщені в
каталог, позначений як каталог CGI з використанням директиви
ScriptAlias.

Рядок `#!` необхідно буде помістити у файли PHP, які вказують на
розташування бінарного файлу PHP:

**Приклад #2 PHP та Apache 2.x як CGI**

#!C:/php/php.exe
<?php
phpinfo();
?>

**Увага**

Використовуючи інсталяцію CGI, ваш сервер відкритий перед кількома можливими
вразливості. Будь ласка, ознайомтесь із розділом ["Безпека
CGI"](security.cgi-bin.md) щоб дізнатися, як можна захистити себе від
таких атак.

### Запуск PHP під FastCGI

Запуск PHP під FastCGI має низку переваг перед запуском як CGI.
Налаштування в такий спосіб досить просте:

Завантажте `mod_fcgid` з
[»https://www.apachelounge.com](https://www.apachelounge.com/download/).
Бінарні файли Win32 доступні для завантаження із цього сайту. Встановіть
модуль відповідно до інструкції, що додається до нього.

Налаштуйте свій веб-сервер, як показано нижче, подбавши про те, щоб
всі шляхи відображали те, як ви провели установку у своїй конкретній
системі:

**Приклад #3 Налаштування Apache для запуску PHP як FastCGI**

LoadModule fcgid_module modules/mod_fcgid.so
# Де знаходиться файл php.ini?
FcgidInitialEnv PHPRC "c:/php"
<FilesMatch \.php$>
SetHandler fcgid-script
</FilesMatch>
FcgidWrapper "c:/php/php-cgi.exe" .php

Файли з розширенням .php тепер виконуватимуться обгорткою PHP FastCGI.
