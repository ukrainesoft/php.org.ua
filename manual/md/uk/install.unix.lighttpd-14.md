- [« Встановлення Nginx 1.4.x на систему Unix](install.unix.nginx.md)
- [Веб-сервер LiteSpeed/OpenLiteSpeed на системах Unix
»](install.unix.litespeed.md)

- [PHP Manual](index.md)
- [Установка для Unix-системи](install.unix.md)
- Установка PHP на Lighttpd 1.4 на Unix-системах

## Встановлення PHP на Lighttpd 1.4 на Unix-системах

Цей розділ містить інформацію про встановлення PHP на Unix-системи з
сервером Lighttpd 1.4.

Прочитайте, будь ласка, інструкції зі встановлення Lighttpd в
[» документації по Lighttpd](http://trac.lighttpd.net/trac/) перед
установкою PHP.

FastCGI - інтерфейс для зв'язку PHP і Lighttpd. FastCGI
доступний за замовчуванням у php-cgi.

### Управління процесами php через Lighttpd

Для налаштування Lighttpd на з'єднання з PHP та породження процесів
FastCGI необхідно відредагувати конфігураційний файл
`lighttpd.conf`. Переважно підключатися до процесів FastCGI
використовуючи Unix-сокети.

**Приклад #1 Приклад частини файлу lighttpd.conf**

server.modules +u003d ( "mod_fastcgi")

fastcgi.server u003d (".php" u003d>
((
"socket" u003d> "/tmp/php.socket",
"bin-path" u003d> "/usr/local/bin/php-cgi",
"bin-environment" u003d> (
"PHP_FCGI_CHILDREN" u003d> "16",
"PHP_FCGI_MAX_REQUESTS" u003d> "10000"
),
"min-procs" u003d> 1,
"max-procs" u003d> 1,
"idle-timeout" u003d> 20
))
)

Директива `bin-path` дозволяє lighttpd динамічно запускати процеси
FastCGI. Lighttpd буде динамічно створювати дочірні процеси php,
відповідно до змінної оточення `PHP_FCGI_CHILDREN`. Директива
`bin-environment` задає установки для дочірніх процесів.
`PHP_FCGI_MAX_REQUESTS` визначає поріг, при досягненні якого PHP
завершить дочірній процес Директив `min-procs` та `max-procs` зазвичай
варто уникати. PHP керує лише своїми дочірніми процесами, та
інструменти кешування в байт-код (наприклад, APC) будуть використовуватися
лише у цих дочірніх процесах. Якщо значення `min-procs` встановлено
більше `1`, загальна кількість процесів, що обробляють запити, буде
одно `PHP_FCGI_CHILDREN` \ * min-procs.

### Управління процесами за допомогою spawn-fcgi

Lighttpd надає програму spawn-fcgi для полегшення управління
дочірніми процесами FastCGI.

### Управління процесами за допомогою php-cgi

Керувати процесами можна і без spawn-fcgi, але це вимагатиме деяких
доробок. Змінна оточення `PHP_FCGI_CHILDREN` вказує кількість
дочірніх процесів, які запускаються PHP для обробки вхідних запитів.
Змінна `PHP_FCGI_MAX_REQUESTS` відповідає за кількість запитів,
які обробить один процес. Нижче наведений простий bash-скрипт,
що полегшує створення дочірніх процесів.

**Приклад #2 Створення FastCGI-обробників**

#!/bin/sh

# Розташування бінарного файлу php-cgi
PHPu003d/usr/local/bin/php-cgi

# Розташування PID-файлу
PHP_PIDu003d/tmp/php.pid

# Прив'язка до адреси
#FCGI_BIND_ADDRESSu003d10.0.1.1:10000
# Прив'язка до сокету
FCGI_BIND_ADDRESSu003d/tmp/php.sock

PHP_FCGI_CHILDRENu003d16
PHP_FCGI_MAX_REQUESTSu003d10000

env -i PHP_FCGI_CHILDRENu003d$PHP_FCGI_CHILDREN \
PHP_FCGI_MAX_REQUESTSu003d$PHP_FCGI_MAX_REQUESTS \
$PHP -b $FCGI_BIND_ADDRESS &

echo $! > "$PHP_PID"

### Підключення до віддалених процесів FCGI

Обробники FastCGI можуть перебувати на кількох окремих машинах
масштабування навантаження.

**Приклад #3 Підключення до віддалених процесів fastcgi**

fastcgi.server u003d (".php" u003d>
(( "host" u003d> "10.0.0.2", "port" u003d> 1030 ),
( "host" u003d> "10.0.0.3", "port" u003d> 1030))
)
