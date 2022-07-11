- [«Apache 2.x на Unix системах](install.unix.apache2.md)
- [Установка PHP на Lighttpd 1.4 на Unix-системах
»](install.unix.lighttpd-14.md)

- [PHP Manual](index.md)
- [Установка для Unix-системи](install.unix.md)
- Встановлення Nginx 1.4.x на систему Unix

## Встановлення Nginx 1.4.x на систему Unix

Ця документація описує процес встановлення та налаштування PHP з
PHP-FPM для Nginx 1.4.x сервера HTTP.

Даний посібник має на увазі, що ви зібрали Nginx з вихідних джерел,
отже, всі бінарні файли та файли конфігурації розташовуються в
`/usr/local/nginx`. Якщо ні, і ви отримали Nginx в інший спосіб,
тоді, будь ласка, зверніться до [» Nginx
Wiki](https://www.nginx.com/resources/wiki/), щоб перекласти це
посібник для вашої установки.

Даний посібник охоплює ази налаштування Nginx сервера, для обробки
PHP додатків та відображення їх на порту 80. Рекомендується вивчити
документацію Nginx та PHP-FPM, якщо ви хочете оптимізувати вашу
встановлення за рамками цієї документації.

Будь ласка, зверніть увагу, що у всій даній документації номери
версій було замінено на 'x', щоб ця документація залишалася
коректною у майбутньому. Будь ласка, замініть 'x' на необхідний номер
версії.

1. Рекомендується відвідати [сторінку
установки](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/)
на Nginx Wiki, для інформації про отримання та встановлення Nginx.

2. Отримання та розпакування вихідники PHP:

tar zxf php-x.x.x

3. Налаштування та складання PHP. У цьому розділі описується налаштування та
збирання PHP з вихідних кодів. Запустіть ./configure --help для
отримання списку доступних опцій. У нашому прикладі ми зробимо прості
налаштування з PHP-FPM та підтримкою MySQLi.

cd ../php-x.x.x
./configure --enable-fpm --with-mysqli
make
sudo make install

4. Переміщення файлів налаштування в необхідні директорії

cp php.ini-development /usr/local/php/php.ini
cp /usr/local/etc/php-fpm.d/www.conf.default /usr/local/etc/php-fpm.d/www.conf
cp sapi/fpm/php-fpm /usr/local/bin

5. Важливо, що ми забороняємо Nginx від відправляти запити в бекенд
PHP-FPM, якщо файл не існує, що допомагає уникнути атаки
ін'єкції сценарію.

Ми можемо виправити це шляхом встановлення директиви
[cgi.fix_pathinfo](ini.core.md#ini.cgi.fix-pathinfo) рівної `0` в
нашому php.ini файлі.

Редагування php.ini:

vim /usr/local/php/php.ini

Знайдіть опцію `cgi.fix_pathinfou003d` та змініть її наступним чином:

cgi.fix_pathinfou003d0

6. php-fpm.conf має бути модифікований, щоб точно визначити, що
php-fpm повинен працювати під користувачем www-data та групою
www-data до того, як ми запустимо сервіс:

vim /usr/local/etc/php-fpm.d/www.conf

Знайдіть та зміните наступне:

; Unix user/group of processes
; Примітка: Користувач є обов'язковим. Якщо групу не встановлено,
; то буде використано стандартну групу користувача.
user u003d www-data
group u003d www-data

Тепер можна запускати сервіс php-fpm:

/usr/local/bin/php-fpm

Більше в цьому посібнику ми не будемо стосуватися налаштування php-fpm.
Якщо вам необхідно зробити додаткові налаштування - зверніться
до документації з php-fpm.

7. Тепер Nginx має бути налаштований на підтримку виконання PHP:

vim /usr/local/nginx/conf/nginx.conf

Змініть блок "location", заданий за замовчуванням так, щоб можна було
було обробляти .php файли:

``nginx-confcode
location / {
root html;
index index.php index.md index.htm;
}
````

Наступний крок - переконатися, що .php файли відправляються в бекенд
PHP-FPM. Введіть таке:

``nginx-confcode
location ~* \.php$ {
fastcgi_index index.php;
fastcgi_pass 127.0.0.1: 9000;
include fastcgi_params;
fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
fastcgi_param SCRIPT_NAME $fastcgi_script_name;
}
````

Перезапустіть Nginx.

sudo /usr/local/nginx/sbin/nginx -s stop
sudo /usr/local/nginx/sbin/nginx

8. Створіть тестовий файл

rm /usr/local/nginx/html/index.md
echo "<?php phpinfo(); ?>" >> /usr/local/nginx/html/index.php

Тепер відкрийте у браузері http://localhost. Повинна відобразитись
інформація phpinfo().

Наслідуючи вищевказані кроки, ви отримаєте робочий Nginx сервер з
підтримкою PHP як модуля `FPM` `SAPI`. Звичайно, доступна велика кількість
опцій налаштувань для Nginx та PHP. Для більш детальної інформації наберіть
**./configure --help** у відповідному дереві вихідних кодів.
