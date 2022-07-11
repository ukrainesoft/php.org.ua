- [«FFI::memset](ffi.memset.md)
- [FFI::scope »](ffi.scope.md)

- [PHP Manual](index.md)
- [FFI](class.ffi.md)
- Створює структуру даних C

# FFI::new

(PHP 7 \>u003d 7.4.0, PHP 8)

FFI::new — Створює структуру даних C

### Опис

public static **FFI::new**([FFI\CType](class.ffi-ctype.md)\|string
`$type`, bool `$owned` u003d **`true`**, bool `$persistent` u003d **`false`**):
?[FFI\CData](class.ffi-cdata.md)

public **FFI::new**([FFI\CType](class.ffi-ctype.md)\|string `$type`,
bool `$owned` u003d **`true`**, bool `$persistent` u003d **`false`**):
?[FFI\CData](class.ffi-cdata.md)

Створює структуру даних заданого типу. При статичному виклику
даного методу необхідно використовувати лише визначені імена
типів С (такі як `int`, `char`, тощо); під час виклику як метод об'єкта,
допустимо будь-який тип оголошений йому.

### Список параметрів

`type`
`type` - коректна декларація типу С, наприклад, string або заздалегідь
створений об'єкт класу [FFI\CType](class.ffi-ctype.md).

`owned`
Чи створювати керовані чи некеровані дані. Керовані дані
живуть у зв'язці з повернутим об'єктом [FFI\CData](class.ffi-cdata.md)
і вивільняється коли стандартний підрахунок посилань PHP або GC (складальник
сміття) звільнять останнє посилання на цей об'єкт. Некеровані дані
необхідно вивільняти вручну за допомогою [FFI::free()](ffi.free.md).

`persistent`
Чи розташовувати дані на постійній основі до системної купи (heap)
(використовуючи **malloc()**), або в купі запиту PHP (використовуючи
**emalloc()**).

### Значення, що повертаються

Повертає новий об'єкт [FFI\CData](class.ffi-cdata.md) або **`null`**
у разі виникнення помилки.
