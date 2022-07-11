- [« ibase_trans](function.ibase-trans.md)
- [IBM DB2 »] (book.ibm-db2.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Чекаємо, доки подія буде опублікована в базі даних

# ibase_wait_event

(PHP 5, PHP 7 \< 7.4.0)

ibase_wait_event — Чекаємо, доки подія буде опублікована в базі даних

### Опис

**ibase_wait_event**(string `$event_name`, string `...$event_names`):
string

**ibase_wait_event**(resource `$connection`, string `$event_name`,
string `...$event_names`): string

Функція призупиняє виконання сценарію доти, доки одне з
зазначених подій не буде опубліковано у базі даних. Ім'я події
яка була опублікована, повертається. Функція приймає до 15
аргументи події.

### Список параметрів

`event_name`
Назва події.

`event_names`

### Значення, що повертаються

Повертає назву події, яка була опублікована.

### Дивіться також

- [ibase_set_event_handler()](function.ibase-set-event-handler.md) -
Реєструє callback-функцію, яка буде викликатись при
публікації подій
- [ibase_free_event_handler()](function.ibase-free-event-handler.md) -
Скасує зареєстрований обробник події
