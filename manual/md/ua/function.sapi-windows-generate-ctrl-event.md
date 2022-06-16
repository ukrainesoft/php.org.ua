- [« sapi_windows_cp_set](function.sapi-windows-cp-set.md)
- [sapi_windows_set_ctrl_handler
»](function.sapi-windows-set-ctrl-handler.md)

- [PHP Manual](index.md)
- [Різні функції](ref.misc.md)
- Надіслати подію CTRL іншому процесу

# sapi_windows_generate_ctrl_event

(PHP 7 u003d 7.4.0, PHP 8)

sapi_windows_generate_ctrl_event — Надіслати подію CTRL іншому процесу

### Опис

**sapi_windows_generate_ctrl_event**(int `$event`, int `$pid` u003d 0): bool

Надіслати подію CTRL іншому процесу у тій же групі процесів.

### Список параметрів

`event`
Подія `CTRL`; **`PHP_WINDOWS_EVENT_CTRL_C`** або
**`PHP_WINDOWS_EVENT_CTRL_BREAK`**.

`pid`
Ідентифікатор процесу, якому необхідно надіслати подію. Якщо поставлено
як `0`, то подія буде надіслана всім процесам у групі.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Використання **sapi_windows_generate_ctrl_event()****

У цьому прикладі показано, як надіслати події `CTRL+BREAK` дочірньому
процесу. У цьому випадку дочірній процес друкуватиме
"Я все ще живий!" раз на секунду, поки користувач не натисне
`CTRL+BREAK`. Після цього дочірній процес завершиться.

`<?php// Пересилка подій CTRL+BREAK дочірньому процесуsapi_windows_set_ctrl_handler('sapi_windows_generate_ctrl_event');// Створюємо дочірній процес$cmd    
"; sleep(1); }'];$descspec u003d array(['pipe', 'r'], ['pipe', 'w'], ['pipe', 'w']);$options u003d ['create_process_group' u003d> true];$proc u003d proc_open($cmd, $descspec, $pipes, null, null, $options);while (true) {    echo fgets($)

### Дивіться також

- [proc_open()](function.proc-open.md) - Виконати команду та відкрити
вказівник на файл для введення/виводу
- [sapi_windows_set_ctrl_handler()](function.sapi-windows-set-ctrl-handler.md) -
Встановити чи видалити обробник події CTRL
