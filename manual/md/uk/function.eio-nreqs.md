- [«eio_nready](function.eio-nready.md)
- [eio_nthreads »](function.eio-nthreads.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Повертає кількість запитів, які потрібно виконати

#eio_nreqs

(PECL eio \>u003d 0.0.1dev)

eio_nreqs — Повертає кількість запитів, які потрібно виконати

### Опис

**eio_nreqs**(): int

**eio_nreqs()** може бути виконана у довільному циклі, викликаному
[eio_poll()](function.eio-poll.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**eio_nreqs()** повертає кількість запитів, які потрібно виконати.

### Приклади

**Приклад #1 Приклад використання **eio_nreqs()****

` <?phpfunction res_cb($data, $result) {    var_dump($data); var_dump($result);}eio_nop(EIO_PRI_DEFAULT,"res_cb", "1");eio_nop(EIO_PRI_DEFAULT, "res_cb", "2");eio_nop(EIO_PRI_DEFAULT, "res_c )) {   eio_poll();}?> `

Результатом виконання цього прикладу буде щось подібне:

string(1) "1"
int(0)
string(1) "3"
int(0)
string(1) "2"
int(0)

### Дивіться також

- [eio_poll()](function.eio-poll.md) - Може бути викликана коли
є запити, що очікують на виконання
- [eio_nready()](function.eio-nready.md) - Повертає число ще не
оброблених запитів
