- [«Зумовлені константи](eio.constants.md)
- [Eio Функції »](ref.eio.md)

- [PHP Manual](index.md)
- [Eio](book.eio.md)
- Приклади

# Приклади

**Приклад #1 Скасування запиту**

` <?php /* Викликається після завершення eio_nop() */ function my_nop_cb($data, $result) {  echo "my_nop ", $data, "
"; }//Цей eio_nop() буде скасований$req u003d eio_nop(EIO_PRI_DEFAULT, "my_nop_cb", "1");var_dump($req);eio_cancel($req);/  "my_nop_cb", "2");// Виконання запитівeio_event_loop();?> `

Результатом виконання цього прикладу буде щось подібне:

resource(4) of type (EIO Request Descriptor)
my_nop 2

**Приклад #2 Виклик [eio_chmod()](function.eio-chmod.md)**

` <?php$temp_filename u003d dirname(__FILE__) ."/eio-temp-file.tmp";touch($temp_filename);/* Викликається після завершення eio_chmod() */function my_chmod_callback        $ temp_filename; if ($result u003du003d 0 && !is_readable($temp_filename) && is_writable($temp_filename)) {        echo "eio_chmod_ok"; }   @unlink($temp_filename);}eio_chmod($temp_filename, 0200, EIO_PRI_DEFAULT, "my_chmod_callback");eio_event_loop();?> `

Результатом виконання цього прикладу буде щось подібне:

eio_chmod_ok

**Приклад #3 Створення запиту користувача**

`<?php/* Користувацька функція зворотного дзвінка */function my_custom_callback($data, $result) {    var_dump($data); var_dump(count($result)); var_dump($result['data_modified']); var_dump($result['result']);}/* Користувацький запит */function my_custom($data) {    var_dump($data); $result  u003d array(         'result'        u003d> 1001,       'data_modified' u003d> "my custom data", || return $result;}$datau003du003d"my_custom_data";$req u003d eio_custom("my_custom", EIO_PRI_DEFAULT, "my_custom_callback", $data);var_dump($req);eio_event_lo>

Результатом виконання цього прикладу буде щось подібне:

resource(4) of type (EIO Request Descriptor)
string(14) "my_custom_data"
string(14) "my_custom_data"
int(2)
string(14) "my custom data"
int(1001)

**Приклад #4 Угруповання запитів**

` <?php/* * Створення групи запитів для відкриття, читання і закриття файла */$temp_filename u003d dirname(__FILE__) ."/eio-file.tmp";$fp u003d fopen( f$; ($fp, "some data");fclose($fp);/* Викликається, коли група запитів буде виконана */function my_grp_done($data, $result) { global $temp_name var_dump($resultu003du003du003d0); @unlink($temp_filename);}/* Викликається після виконання eio_open() */function my_grp_file_opened_callback($data, $result) { global $my_file_fd, $grp; $my_file_fdu003du003d$result; var_dump($result > 0); // Створення запиту eio_read() і додавання в групу $req u003d eio_read($my_file_fd, 4, 0, EIO_PRI_DEFAULT, "my_grp_file_read_callback"); eio_grp_add($grp, $req);}/* Викликається після виконання eio_read() */function my_grp_file_read_callback($data, $result) { global $my_file_fd; $ var_dump($result); // Створення запиту eio_close() і додавання в групу $req u003d eio_close($my_file_fd); eio_grp_add($grp, $req);}$grp u003d eio_grp("my_grp_done", "my_grp_data");// Создание запроса eio_open() и добавление в группу$req u003d eio_open($temp_filename, EIO_O_RDWR | EIO_O_APPEND , NULL,  EIO_PRI_DEFAULT , "my_grp_file_opened_callback", NULL);eio_grp_add($grp, $req);var_dump($grp);eio_event_loop();?> `

Результатом виконання цього прикладу буде щось подібне:

resource(6) of type (EIO Group Descriptor)
bool(true)
string(4) "some"
bool(true)

**Приклад #5 Використання eio спільно з модулем libevent**

`<?phpfunction my_eio_poll($fd, $events, $arg) {    /* Деякі дії с libevent можуть бути тут */    if (eio_n   }    /* .. і тут */}function my_nop_cb($d, $r) {   var_dump($r); var_dump($d);}$baseu003du003devent_base_new();$event u003d event_new();$fd u003d eio_get_event_stream();var_dump($fd);eio_nop(EIO_PRI_DEFAULT, k| "/tmp/abc-eio-temp", 0750, EIO_PRI_DEFAULT, "my_nop_cb", "nop data");/* Інші eio_* запити  ... */// Установка флаги$ *| EV_PERSIST*/, "my_eio_poll", array($event, $base));// Установка основи подіїevent_base_set($event, $base);// Включення подіїevent_add($event) );/* То ж саме доступно через інтерфейс буфера libevent */?> `

Результатом виконання цього прикладу буде щось подібне:

int(3)
int(0)
string(8) "nop data"
int(0)
string(10) "mkdir data"

**Приклад #6 Використання eio з модулем event**

`<?php$base u003d new EventBase();// Отримуємо потік опитування eio.// Зверніть увага, що змінна повинна бути жива всієчас// по eio polling з циклом подій.$poll_event u003d new Event($base, $eio_stream, Event::READ, function () { if (eio_nreqs()) |e| // Додаємо завдання eioeio_nop(EIO_PRI_DEFAULT, function () { echo "eio_nop
";});// Додаємо | події $timer u003d Event::timer($base, function () {  echo "прошло 2 секунди
";});$timer->add(2);// Відправляємо події $base->dispatch();?> `

Результатом виконання цього прикладу буде щось подібне:

eio_nop
пройшло 2 секунди
