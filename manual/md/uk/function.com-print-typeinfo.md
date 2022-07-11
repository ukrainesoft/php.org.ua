- [«com_message_pump](function.com-message-pump.md)
- [variant_abs »](function.variant-abs.md)

- [PHP Manual](index.md)
- [Функції COM](ref.com.md)
- Друкує визначення класу PHP для інтерфейсу, що наслідує
IDispatch

#com_print_typeinfo

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

com_print_typeinfo — Друкує визначення класу PHP для інтерфейсу,
наслідуючого IDispatch

### Опис

**com_print_typeinfo**([variant](class.variant.md)\|string `$variant`,
?string `$dispatch_interface` u003d **`null`**, bool `$display_sink` u003d
**`false`**): bool

Призначення функції полягає у створенні "риби" класу для використання в
як приймач подій. Також ви можете використовувати її для
генерації заглушки для будь-якого об'єкта COM за умови, що він
підтримує достатню кількість інтерфейсів самодіагностики, і що
ви знаєте ім'я інтерфейсу, який ви хочете відобразити.

### Список параметрів

`variant`
`variant` має бути екземпляром класу COM, або ім'ям бібліотеки
типів (яке буде розібрано згідно з набором правил, заданим у
[com_load_typelib()](function.com-load-typelib.md)).

`dispatch_interface`
Ім'я інтерфейсу, що успадковує `IDispatch`, який ви хочете відобразити.

`display_sink`
Якщо **`true`**, то буде відображено відповідний інтерфейс приймача
подій.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [com_event_sink()](function.com-event-sink.md) - Зв'язати повідомлення
об'єкт COM з об'єктом PHP
- [com_load_typelib()](function.com-load-typelib.md) - Завантаження
Typelib
