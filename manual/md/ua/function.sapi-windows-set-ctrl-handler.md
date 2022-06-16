- [«
sapi_windows_generate_ctrl_event](function.sapi-windows-generate-ctrl-event.md)
- [sapi_windows_vt100_support
»](function.sapi-windows-vt100-support.md)

- [PHP Manual](index.md)
- [Різні функції](ref.misc.md)
- Встановити чи видалити обробник події CTRL

# sapi_windows_set_ctrl_handler

(PHP 7 u003d 7.4.0, PHP 8)

sapi_windows_set_ctrl_handler — Встановити або видалити обробник
події CTRL

### Опис

**sapi_windows_set_ctrl_handler**(?[callable](language.types.callable.md)
`$handler`, bool `$add` u003d **`true`**): bool

Встановлює або видаляє обробник події CTRL, який дозволить
процесам Windows CLI перехоплювати або ігнорувати події `CTRL+C` та
`CTRL+BREAK`. Зверніть увагу, що в багатопотоковому оточенні це
можливе лише при викликі з головного потоку.

### Список параметрів

`handler`
Функція зворотного дзвінка, яка буде встановлена або видалена. Ця
функція буде викликатись при настанні подій `CTRL+C` та
`CTRL+BREAK`. Функція повинна мати таку сигнатуру:

**handler**(int `$event`): void

`event`
Отримана подія CTRL; **`PHP_WINDOWS_EVENT_CTRL_C`** або
**`PHP_WINDOWS_EVENT_CTRL_BREAK`**.

Встановлення параметра `handler` у значення **`null`** призведе до
ігнорування подій `CTRL+C`, але не `CTRL+BREAK`.

`add`
Якщо **`true`**, то обробник буде встановлений. Якщо **`false`**, то
віддалений.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Використання **sapi_windows_set_ctrl_handler()****

У цьому прикладі показано, як перехоплювати події CTRL.

`<?phpfunction ctrl_handler(int $event){   switch ($event) {         case PHP_WINDOWS_EVENT_CTRL_C: на| |
";             break;         case PHP_WINDOWS_EVENT_CTRL_BREAK:             echo K|
";             break;    }}sapi_windows_set_ctrl_handler('ctrl_handler');while (true); /// Нескінченний цикл?> ``

### Дивіться також

- [sapi_windows_generate_ctrl_event()](function.sapi-windows-generate-ctrl-event.md) -
Надіслати подію CTRL іншому процесу
