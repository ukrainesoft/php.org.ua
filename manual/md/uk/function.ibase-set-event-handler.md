- [« ibase_service_detach](function.ibase-service-detach.md)
- [ibase_trans »](function.ibase-trans.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Реєструє callback-функцію, яка буде викликатись при
публікації подій

# ibase_set_event_handler

(PHP 5, PHP 7 \< 7.4.0)

ibase_set_event_handler - Реєструє callback-функцію, яка буде
викликатись при публікації подій

### Опис

**ibase_set_event_handler**([callable](language.types.callable.md)
`$event_handler`, string `$event_name`, string `...$even_names`):
resource

**ibase_set_event_handler**(
resource `$connection`,
[callable](language.types.callable.md) `$event_handler`,
string `$event_name`,
string `...$event_names`
): resource

Функція реєструє користувальницьку функцію PHP як обробник
подій для зазначених подій.

### Список параметрів

`event_handler`
Callback-функція викликається з ім'ям події та ресурсом посилання в
як аргументи щоразу, коли одна із зазначених подій
публікується базою даних.

Callback-функція повинна повертати **`false`**, якщо обробник події
має бути скасовано. Будь-яке інше значення, що повертається, ігнорується.
Функція приймає до 15 аргументів.

`event_name`
Найменування події.

`event_names`
Дозволено максимум 15 подій.

### Значення, що повертаються

Значення, що повертається, є ресурсом події. Цей ресурс можна
використовувати для звільнення обробника подій за допомогою
[ibase_free_event_handler()](function.ibase-free-event-handler.md).

### Приклади

**Приклад #1 Приклад використання **ibase_set_event_handler()****

`<?phpfunction event_handler($event_name, $link){   if ($event_name u003du003d "NEW ORDER") {         | } else if ($event_name u003du003d "DB_SHUTDOWN") {        // скасовуємо обробник подій         return false; }}ibase_set_event_handler($link, "event_handler", "NEW_ORDER", "DB_SHUTDOWN");?> `

### Дивіться також

- [ibase_free_event_handler()](function.ibase-free-event-handler.md) -
Скасує зареєстрований обробник події
- [ibase_wait_event()](function.ibase-wait-event.md) - Чекаємо, поки
подія буде опублікована в базі даних
