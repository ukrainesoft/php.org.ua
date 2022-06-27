- [«FFI::arrayType](ffi.arraytype.md)
- [FFI::cdef »](ffi.cdef.md)

- [PHP Manual](index.md)
- [FFI](class.ffi.md)
- Здійснює перетворення типу C

# FFI::cast

(PHP 7 \>u003d 7.4.0, PHP 8)

FFI::cast — Перетворює тип C

### Опис

public static **FFI::cast**([FFI\CType](class.ffi-ctype.md)\|string
`$type`, [FFI\CData](class.ffi-cdata.md)\|int\|float\|bool\|null
`&$ptr`): ?[FFI\CData](class.ffi-cdata.md)

public **FFI::cast**([FFI\CType](class.ffi-ctype.md)\|string `$type`,
[FFI\CData](class.ffi-cdata.md)\|int\|float\|bool\|null `&$ptr`):
?[FFI\CData](class.ffi-cdata.md)

**FFI::cast()** створює новий об'єкт класу
[FFI\CData](class.ffi-cdata.md), який вказує на ту саму структуру
C, але асоційований з іншим типом. Отриманий об'єкт не стає
власником даних, тому вихідний покажчик `ptr` повинен залишатися
живим довше за отриманий об'єкт. Тип C повинен бути заданий як рядок,
містить ім'я будь-якого коректного типу, або як об'єкт
[FFI\CType](class.ffi-ctype.md). Якщо метод викликається статично, то
можна використовувати лише визначені імена типів С (наприклад,
`int`, `char`, etc.); якщо метод викликається як метод об'єкта, то
допустимі будь-які певні йому типи.

### Список параметрів

`type`
Рядок з ім'ям типу С або об'єкт класу
[FFI\CType](class.ffi-ctype.md).

`ptr`
Дескриптор покажчика структуру даних З.

### Значення, що повертаються

Повертає новий об'єкт [FFI\CData](class.ffi-cdata.md).
