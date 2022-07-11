- [«Інтерактивна консоль](features.commandline.interactive.md)
- [Опції конфігурації »](features.commandline.ini.md)

- [PHP Manual](index.md)
- [Використання PHP у командному рядку](features.commandline.md)
- Вбудований веб-сервер

## Вбудований веб-сервер

**Увага**

Веб-сервер призначений для допомоги у розробці програм. він також
може бути корисним у тестових цілях або для демонстрації програми,
запускається у повністю контрольованому оточенні. Він не виконує
функції повноцінного веб-сервера і не повинен використовуватися в
загальнодоступні мережі.

Модуль CLI SAPI містить вбудований веб-сервер.

Веб-сервер виконує лише один однопотоковий процес, тому
програми PHP будуть зупинятися, якщо запит заблоковано.

URI запити обслуговуються з поточної директорії, в якій було запущено
PHP, якщо не використовується опція -t для явної вказівки кореневої
документа. Якщо запит URI не вказує на певний файл, то буде
повернуто index.php або index.md у зазначеній директорії. Якщо жоден
з файлів не існує, то пошук цих файлів буде продовжено в
батьківської директорії і так далі, доки вони не будуть
знайдено або було досягнуто коріння документа. Якщо знайдено index.php або
index.md, він повертається, а в $\_SERVER\['PATH_INFO'\] буде
міститься остання частина URL. Інакше повертається 404 код
відповіді.

Якщо PHP файл вказується в командному рядку, коли запускається
веб-сервер, він розглядається як скрипт "маршрутизації" (router).
Скрипт виконується на самому початку кожного запиту HTTP. Якщо цей скрипт
повертає **`false`**, то запитуваний ресурс повертається як є. В
в іншому випадку браузеру буде повернено виведення цього скрипта.

Стандартні MIME-типи повертаються для файлів із наступними
розширеннями: .3gp, .apk, .avi, .bmp, .css, .csv, .doc, .docx, .flac,
.gif, .gz, .gzip, .htm, .md, .ics, .jpe, .jpeg, .jpg, .js, .kml, .kmz,
.m4a, .mov, .mp3, .mp4, .mpeg, .mpg, .odp, .ods, .odt, .oga, .ogg, .ogv,
.pdf, .pdf, .png, .pps, .pptx, .qt, .svg, .swf, .tar, .text, .tif, .txt,
.wav, .webm, .wmv, .xls, .xlsx, .xml, .xsl, .xsd та .zip.

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------------------------|
| 5.5.12 | .xml, .xsl та .xsd |
| 5.5.7 | .3gp, .apk, .avi, .bmp, .csv, .doc, .docx, .flac, .gz, .gzip, .ics, .kml, .kmz, .m4a, .mp3, .mp4, .mpg , .mpeg, .mov, .odp, .ods, .odt, .oga, .pdf, .pptx, .pps, .qt, .swf, .tar, .text, .tif, .wav, .wmv, . xls, .xlsx та .zip |
| 5.5.5 | .pdf |
| 5.4.11 | .ogg, .ogv, та .webm |
| 5.4.4 | .htm та .svg |

**Історія правок: Підтримувані MIME-типи (розширення файлів)**

[TABLE]

**Історія змін**

**Приклад #1 Запуск веб-сервера**

`` shellcode
$ cd ~/public_html
$ php -S localhost:8000
````

У консолі виведеться:

PHP 5.4.0 Development Server started at Thu Jul 21 10:43:28 2011
Listening on localhost:8000
Document root is /home/me/public_html
Press Ctrl-C to quit

Після URI-запитів http://localhost:8000/ та
http://localhost:8000/myscript.md у консолі виведеться приблизно
наступне:

PHP 5.4.0 Development Server started at Thu Jul 21 10:43:28 2011
Listening on localhost:8000
Document root is /home/me/public_html
Press Ctrl-C для quit.
[Thu Jul 21 10:48:48 2011] ::1:39144 GET /favicon.ico - Request read
[Thu Jul 21 10:48:50 2011] ::1:39146 GET / - Request read
[Thu Jul 21 10:48:50 2011] ::1:39147 GET /favicon.ico - Request read
[Thu Jul 21 10:48:52 2011] ::1:39148 GET /myscript.md - Request read
[Thu Jul 21 10:48:52 2011] ::1:39149 GET /favicon.ico - Request read

Зауважте, що до PHP 7.4.0 статичні ресурси з символічними
посиланнями не були доступні в Windows, якщо скрипт маршрутизатора
не обробив би їх.

**Приклад #2 Запуск із зазначенням кореневої директорії**

`` shellcode
$ cd ~/public_html
$ php -S localhost:8000 -t foo/
````

У консолі виведеться:

PHP 5.4.0 Development Server started at Thu Jul 21 10:50:26 2011
Listening on localhost:8000
Document root is /home/me/public_html/foo
Press Ctrl-C to quit

**Приклад #3 Використання скрипта маршрутизації**

У цьому прикладі запити зображень будуть відображати їх, але запити
HTML-файлів повертатимуть "Ласкаво просимо до PHP".

` <?php// router.phpif (preg_match('/\.(?:png|jpg|jpeg|gif)$/', $_SERVER["REQUEST_URI"]))) {   return false; // сервер повертає файли прямо.} else {   echo "<p>Ласкаво просимо в PHP</p>";}?> `

`` shellcode
$ php -S localhost:8000 router.php
````

**Увага**

Вбудований веб-сервер не повинен використовуватись у загальнодоступній мережі.

**Приклад #4 Перевірка використання веб-сервера CLI**

Для спільного використання скрипта маршрутизації при розробці з
веб-сервером CLI та надалі з робочим (production) веб-сервером:

` <?php// router.phpif (php_sapi_name() u003du003d 'cli-server') {    /* Маршрутизація з заданими правилами і повернення false */}/*        

`` shellcode
$ php -S localhost:8000 router.php
````

**Приклад #5 Підтримка непідтримуваних типів файлів**

Якщо вам потрібно обслуговувати статичні ресурси із MIME-типами,
непідтримуваним веб-сервером CLI, використовуйте це:

` <?php// router.php$path u003d pathinfo($_SERVER["SCRIPT_FILENAME"]);if ($path["extension"] u003du003d "el") {    header("Content-Type:text/x- script.elisp"); readfile($_SERVER["SCRIPT_FILENAME"]);}else {   return FALSE;}?> `

`` shellcode
$ php -S localhost:8000 router.php
````

**Приклад #6 Доступ до веб-сервера CLI з віддалених машин**

Ви можете зробити веб-сервер доступним на 8000 порт для всіх мережевих
інтерфейсів:

`` shellcode
$ php -S 0.0.0.0:8000
````
