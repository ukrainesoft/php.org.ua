- [«eio_futime](function.eio-futime.md)
- [eio_get_last_error »](function.eio-get-last-error.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Повертає потік, що відображає змінну, використовувану при
взаємодії з libeio

#eio_get_event_stream

(PECL eio \>u003d 0.3.1b)

eio_get_event_stream — Повертає потік, що відображає змінну,
використовувану при взаємодії з libeio

### Опис

**eio_get_event_stream**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

**eio_get_event_stream()** отримує потік, що відображає змінну,
що використовується при взаємодії з libeio. Може бути використаний для
прив'язки деякого циклу обробки, що поставляється іншим модулем PECL,
наприклад, libevent.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**eio_get_event_stream()** повертає потік у разі успішного
виконання або **`null`** у разі виникнення помилки.

### Приклади

**Приклад #1 Використання eio спільно з libevent**

`<?phpfunction my_eio_poll($fd, $events, $arg) {    /* Деякі дії с libevent можуть бути тут */    if (eio_n   }    /* .. і тут */}function my_res_cb($d, $r) {   var_dump($r); var_dump($d);}$baseu003du003devent_base_new();$event u003d event_new();$fd u003d eio_get_event_stream();var_dump($fd);eio_nop(EIO_PRI_DEFAULT, k| "/tmp/abc-eio-temp", 0750, EIO_PRI_DEFAULT, "my_res_cb", "mkdir data");/* Інші eio_* запити  ... */// Установка флаги$ *| EV_PERSIST*/, "my_eio_poll", array($event, $base));// Установка основи подіїevent_base_set($event, $base);// Включення подіїevent_add($event) );/* То ж саме доступно через інтерфейс буфера libevent */?> `

Результатом виконання цього прикладу буде щось подібне:

int(3)
int(0)
string(8) "nop data"
int(0)
string(10) "mkdir data"
