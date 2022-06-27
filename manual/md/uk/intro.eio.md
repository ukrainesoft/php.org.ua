- [«Eio](book.eio.md)
- [Встановлення та налаштування »](eio.setup.md)

- [PHP Manual](index.md)
- [Eio](book.eio.md)
-   Вступ

# Вступ

Модуль реалізує підсистему введення-виводу POSIX I/O засобів
[»libeio](http://software.schmorp.de/pkg/libeio.md) Бібліотека C
Написана Марком Леманном (Marc Lehmann).

> **Примітка**: Для Windows-платформ цей модуль недоступний.

**Увага**

Слід врахувати, що кожен запит виконується в окремому потоці,
цьому виконання запитів безперервно, а їх порядок у черзі виконання
непередбачуваний. Наприклад, наведений нижче приклад коду невірний.

**Приклад #1 Приклад неправильних запитів**

`<?php// Запрос на створення символічного посилання $link на файл $filenameeio_symlink($filename, $link);// Запрос на перейменування файлу| ;?> `

У наведеному вище прикладі запит
[eio_rename()](function.eio-rename.md) може бути виконаний перед
[eio_symlink()](function.eio-symlink.md). Правильним рішенням буде
виклик [eio_rename()](function.eio-rename.md) callback-функцією в
[eio_symlink()](function.eio-symlink.md):

**Приклад #2 Створення запиту за допомогою callback-функції**

` <?phpfunction my_symlink_done($filename, $result) { // Запрос на перемінування $filename в $new_filename eio_rename($filename, "/path/to/new-name"); // Виконання запитів eio_event_loop();}// Запит на створення символічного посилання $link на файл $filenameeio_symlink($filename, $link, e__і_дозаписів)

Альтернативним рішенням є створення групи запитів:

**Приклад #3 Створення запиту за допомогою callback-функції**

` <?php/* Функція викликається після виконання групи запитів */function my_grp_done($data, $result) { // ...}function my_symlink_done($filename, у result)     $requ003du003deio_rename($filename,"/path/to/new-name"); eio_grp_add($grp, $req); // Можливо, ви захочете додати більше запитів...}// Створення групи запитів$grp u003d eio_grp("my_grp_done", "my_grp_data");// Створення запрошення  функцію$req u003d eio_symlink($filename, $link, EIO_PRI_DEFAULT, "my_symlink_done", $filename);eio_grp_add($grp, $req);// Виконання запитівeio_e

Група - це спеціальний вид запиту, що дозволяє створити набір звичайних
*eio*-запитів. Це може бути використано для створення складних
запитів, що відкривають, читають та закривають файл.

Починаючи з версії 0.3.0 alpha, змінна, що використовується для внутрішнього
взаємодії з libeio, може бути отримана функцією
[eio_get_event_stream()](function.eio-get-event-stream.md). Змінна
може бути використана для прив'язки до циклу обробки, що поставляється
стороннім модулем. Можливо організувати простий цикл обробки, де eio
та libevent працюють спільно.

**Приклад #4 Використання eio спільно з libevent**

`<?phpfunction my_eio_poll($fd, $events, $arg) {    /* Деякі дії с libevent можуть бути тут */    if (eio_n   }    /* .. і тут */}function my_res_cb($d, $r) {   var_dump($r); var_dump($d);}$baseu003du003devent_base_new();$event u003d event_new();// Цей потік потрібно для прив'язки к libevent$fd u003d eio_get_event_stream(" ;eio_mkdir("/tmp/abc-eio-temp", 0750, EIO_PRI_DEFAULT, "my_res_cb", "mkdir data");/* Інші eio_* запити ... f , EV_READ /*| EV_PERSIST*/, "my_eio_poll", array($event, $base));// Установка основи подіїevent_base_set($event, $base);// Включення за ($base);/* То ж най доступніше через інтерфейс буфера libevent */?> `
