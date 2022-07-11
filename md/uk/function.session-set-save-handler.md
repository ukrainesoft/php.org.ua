- [«
session_set_cookie_params](function.session-set-cookie-params.md)
- [session_start »](function.session-start.md)

- [PHP Manual](index.md)
- [Функції для роботи з сесіями](ref.session.md)
- Встановлює користувальницькі обробники зберігання сесії

# session_set_save_handler

(PHP 4, PHP 5, PHP 7, PHP 8)

session_set_save_handler — Встановлює користувальницькі обробники
зберігання сесії

### Опис

**session_set_save_handler**(
[callable](language.types.callable.md) `$open`,
[callable](language.types.callable.md) `$close`,
[callable](language.types.callable.md) `$read`,
[callable](language.types.callable.md) `$write`,
[callable](language.types.callable.md) `$destroy`,
[callable](language.types.callable.md) `$gc`,
[callable](language.types.callable.md) `$create_sid` u003d ?,
[callable](language.types.callable.md) `$validate_sid` u003d ?,
[callable](language.types.callable.md) `$update_timestamp` u003d ?
): bool

Також можна зареєструвати наступний прототип:

**session_set_save_handler**(object `$sessionhandler`, bool
`$register_shutdown` u003d **`true`**): bool

**session_set_save_handler()** встановлює користувацькі
обробники зберігання сесії, які використовуються для збереження та
отримання даних, пов'язаних із сесією. Це особливо корисно, коли
переважним є метод зберігання, відмінний від тих, які
надаються сесіями PHP, наприклад, зберігання даних сесії в
локальної бази даних.

### Список параметрів

Ця функція має два визначення (прототипу).

`sessionhandler`
Примірник класу, що реалізує інтерфейс
[SessionHandlerInterface](class.sessionhandlerinterface.md) та
необов'язкові [SessionIdInterface](class.sessionidinterface.md) та/або
[SessionUpdateTimestampHandlerInterface](class.sessionupdatetimestamphandlerinterface.md),
такий як [SessionHandler](class.sessionhandler.md), для реєстрації в
як оброблювач сесії.

`register_shutdown`
Зареєструвати
[session_write_close()](function.session-write-close.md) як функцію
[register_shutdown_function()](function.register-shutdown-function.md).

або

`open`
Callback-функція з наступною сигнатурою:

open(string `$savePath`, string `$sessionName`): bool

Callback-функція `open` працює як конструктор у класах та виконується
під час відкриття сесії. Це перша callback-функція, яка виконується,
коли сесія стартує автоматично або вручну через
[session_start()](function.session-start.md). Значення, що повертається
**`true`** у разі успішного виконання, **`false`** у разі невдачі.

`close`
Callback-функція з наступною сигнатурою:

close(): bool

Callback-функція `close` працює як деструктор у класах та виконується
після того, як була викликана callback-функція 'write'. Вона також
викликається під час виклику
[session_write_close()](function.session-write-close.md). Повертається
значення має бути **`true`** у разі успішного виконання,
**`false`** у разі невдачі.

`read`
Callback-функція з наступною сигнатурою:

read(string `$sessionId`): string

Callback-функція `read` повинна завжди повертати кодовану
(серіалізований) рядок сесії або порожній рядок, якщо немає даних для
читання.

Ця callback-функція викликається внутрішнім механізмом PHP при старті
сесії або під час виклику [session_start()](function.session-start.md).
Перед тим, як буде викликана ця callback-функція, PHP викличе
callback-функцію `open`.

Повертається значення даної callback-функції має бути в такому
ж серіалізованому форматі, який спочатку передавався для зберігання
в callback-функцію `write`. Значення, що повертається, буде автоматично
десеріалізовано PHP та використано для заповнення суперглобальної
змінної `$_SESSION`. Навіть якщо дані схожі на результат
[serialize()](function.serialize.md), варто пам'ятати, що це інший
формат серіалізації, визначений ini-директивою
[session.serialize_handler](session.configuration.md#ini.session.serialize-handler).

`write`
Callback-функція з наступною сигнатурою:

write(string `$sessionId`, string `$data`): bool

Callback-функція `write` викликається, коли сесія має бути збережена
та закрита. Ця callback-функція приймає ідентифікатор поточної
сесії та серіалізовану версію суперглобальної змінної `$_SESSION`.
Метод серіалізації, що використовується всередині PHP, визначений ini-директивою
[session.serialize_handler](session.configuration.md#ini.session.serialize-handler).

Передані в цю callback-функцію серіалізовані дані сесії мають
бути збережені у зв'язку із переданим ідентифікатором сесії. При
отриманні цих даних, callback-функція `read` повинна повернути те ж саме
Саме значення було передано в callback-функцію `write`.

Ця callback-функція викликається, коли PHP завершує роботу або явно
під час виклику [session_write_close()](function.session-write-close.md).
Слід пам'ятати, що після виконання цієї callback-функції, PHP
виконає callback-функцію `close`.

> **Примітка**:
>
> Обробник "write" не виконається доти, доки вихідний потік не
> буде закрито. Таким чином, виведення налагоджувальних операторів в обробнику
> "write" ніколи не відобразиться у браузері. Якщо необхідний висновок
> налагоджувальної інформації, рекомендується записувати налагоджувальні дані в
> файл.

`destroy`
Callback-функція з наступною сигнатурою:

destroy(string `$sessionId`): bool

Ця callback-функція викликається, коли сесія знищується за допомогою
[session_destroy()](function.session-destroy.md) або під час виклику
[session_regenerate_id()](function.session-regenerate-id.md) з
параметром destroy, встановленим у **`true`**. Значення, що повертається
має бути **`true`** у разі успішного виконання, **`false`** в
у разі невдачі.

`gc`
Callback-функція з наступною сигнатурою:

gc(int `$lifetime`): bool

Callback-функція збирача сміття періодично викликається PHP для очищення
даних старих сесій. Частота контролюється директивами
[session.gc_probability](session.configuration.md#ini.session.gc-probability)
і
[session.gc_divisor](session.configuration.md#ini.session.gc-divisor).
Значення lifetime, яке передається в дану callback-функцію
бути встановлено в
[session.gc_maxlifetime](session.configuration.md#ini.session.gc-maxlifetime).
Повертане значення має бути **`true`** у разі успішного
виконання, **`false`** у разі невдачі.

`create_sid`
Callback-функція з наступною сигнатурою:

create_sid(): string

Ця callback-функція виконується, коли потрібен новий ідентифікатор
сесії. Не передбачає параметрів, а значення, що повертається
бути рядком, який є допустимим ідентифікатором сесії для
вашого обробника.

`validate_sid`
Callback-функція з наступною сигнатурою:

validate_sid(string `$key`): bool

Callback-функція виконується, коли має бути запущена сесія,
надається ідентифікатор сесії та включається
[session.use_strict_mode](session.configuration.md#ini.session.use-strict-mode).
`key` – це ідентифікатор сесії для перевірки. Ідентифікатор сесії
дійсний, якщо сесія з таким ідентифікатором існує.
Повертане значення має бути **`true`** у разі успішного
виконання або **`false`** у разі виникнення помилки.

`update_timestamp`
Callback-функція з наступною сигнатурою:

update_timestamp(string `$key`, string `$val`): bool

Callback-функція виконується під час сесії. `key` - це ідентифікатор
сесії, `val` - це дані сесії. Повертане значення має бути
**`true`** у разі успішного виконання або **`false`** у разі
виникнення помилки.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Користувальницький обробник сесії: повний код дивіться
описі
[SessionHandlerInterface](class.sessionhandlerinterface.md).**

Тут лише продемонстровано виклик session_set_save_handler, повний
приклад можна переглянути в описі
[SessionHandlerInterface](class.sessionhandlerinterface.md).

Зауважте, що з **session_set_save_handler()** ми використовуємо
ООП-прототип і реєструємо функцію завершення, використовуючи прапорець параметра
функції. Це зазвичай рекомендується при реєстрації об'єктів як
обробників зберігання сесії

`<?phpclass MySessionHandler implements SessionHandlerInterface{    // тут реалізація інтерфейсу}$handler u003d new MySessionHandler();session_set_save_handler($handle; |

### Примітки

**Увага**

Обробники `write` та `close` викликаються після деструктора об'єкта та
тому не можуть використовувати його контекст або кидати винятки.
Винятки не можуть бути оброблені, тому що не будуть спіймані, не буде
відображена трасування стека виключення та виконання просто припиниться
несподівано. Однак при цьому деструктори об'єкта можуть використовувати
сесії.

Можна викликати [session_write_close()](function.session-write-close.md)
з деструктора, щоб вирішити цю проблему "курки та яйця", але самий
надійний спосіб – це реєструвати функцію завершення, як описано
вище.

**Увага**

Поточний робочий каталог змінюється деякими SAPI, якщо сесія
закривається після завершення скрипта. Завершити сесію можна раніше з
за допомогою [session_write_close()](function.session-write-close.md).

### Дивіться також

- Директива
[session.save_handler](session.configuration.md#ini.session.save-handler)
- Директива
[session.serialize_handler](session.configuration.md#ini.session.serialize-handler)
- [register_shutdown_function()](function.register-shutdown-function.md) -
Реєструє функцію, яка виконається після завершення роботи
скрипта
- [session_register_shutdown()](function.session-register-shutdown.md) -
Функція завершення сесії
-   Зверніться до
[» save_handler.inc](https://github.com/php/php-src/blob/master/ext/session/tests/save_handler.inc)
для повного набору рекомендацій щодо реалізації
