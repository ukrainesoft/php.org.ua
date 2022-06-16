- [«
SessionHandlerInterface::close](sessionhandlerinterface.close.md)
- [SessionHandlerInterface::gc »](sessionhandlerinterface.gc.md)

- [PHP Manual](index.md)
- [SessionHandlerInterface](class.sessionhandlerinterface.md)
- Знищує сесію

# SessionHandlerInterface::destroy

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

SessionHandlerInterface::destroy — Знищує сесію

### Опис

public **SessionHandlerInterface::destroy**(string `$id`): bool

Знищує сесію. Викликається функціями
[session_regenerate_id()](function.session-regenerate-id.md) (з
$destroy u003d **`true`**),
[session_destroy()](function.session-destroy.md) та при невдалому
завершення функції [session_decode()](function.session-decode.md).

### Список параметрів

`id`
Ідентифікатор сесії знищується.

### Значення, що повертаються

Значення сесійного сховища, що повертається (зазвичай **`true`** у випадку
успішного виконання, **`false`** у разі виникнення помилки). Це
значення повертається назад до PHP для внутрішньої обробки.
