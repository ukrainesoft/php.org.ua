- [«Зумовлені константи](yaf.constants.md)
- [Конфігурація програми »](yaf.appconfig.md)

- [PHP Manual](index.md)
- [Yaf](book.yaf.md)
- Приклади

# Приклади

**Приклад #1 Класичний приклад каталогу для програми**

- index.php
- .htaccess
+ conf
|- application.ini //Файл налаштувань
- application/
- Bootstrap.php
+ Controllers
- Index.php //Контролер за замовчуванням
+ views
|+ index
- index.phtml // Шаблон виводу для дії за замовчуванням
+ modules
- library
- models
- plugins

**Приклад #2 Вступ**

index.php єдина точка входу в додаток, всі запити ви повинні
направляти через нього (наприклад, за допомогою .htaccess в Apache +
php_mod)

` <?phpdefine("APPLICATION_PATH", dirname(__FILE__));$app u003du003d new Yaf_Application(APPLICATION_PATH . "/conf/application.ini");$app->bootstrap() /Виконання| ->run();?> `

**Приклад #3 Правила перенаправлення**

#для apache (.htaccess)
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule .* index.php

#для nginx
server {
listen****;
server_name domain.com;
root document_root;
index index.php index.md index.htm;

if (!-e $request_filename) {
rewrite ^/(.*) /index.php$1 last;
}
}

#для lighttpd
$HTTP["host"] u003d~ "(www.)?domain.com$" {
url.rewrite u003d (
"^/(.+)/?$" u003d> "/index.php/$1",
)
}

**Приклад #4 Конфігурація програми**

`` inicode
[yaf]
;APPLICATION_PATH повинна бути визначена в index.php
application.directoryu003dAPPLICATION_PATH "/application/"

;product секція повинна успадковувати yaf
[product:yaf]
foou003dbar
````

**Приклад #5 Контролер за замовчуванням**

` <?phpclass IndexController extends Yaf_Controller_Abstract {   /* дія за мовчанням */   public function indexAction() {       $this-> //або       // $this->getView()->word u003d "hello world"; }}?> `

**Приклад #6 Шаблон виводу за замовчуванням**

` <html> <head>   <title>Hello World</title> </head> <body>   <?php echo $word;?> </body></html>`

**Приклад #7 Запуск програми**

Результатом виконання цього прикладу буде щось подібне:

<html>
<head>
<title>Hello World</title>
</head>
<body>
hello world
</body>
</html>

> **Примітка**:
>
> Приклад вище можна також створити за допомогою генератора коду Yaf
> Тут можна знайти yaf@github.
