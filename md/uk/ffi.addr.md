- [«FFI](class.ffi.md)
- [FFI::alignof »](ffi.alignof.md)

- [PHP Manual](index.md)
- [FFI](class.ffi.md)
- Створює некерований покажчик даних C

# FFI::addr

(PHP 7 \>u003d 7.4.0, PHP 8)

FFI::addr — Створює некерований покажчик даних C

### Опис

public static **FFI::addr**([FFI\CData](class.ffi-cdata.md) `&$ptr`):
[FFI\CData](class.ffi-cdata.md)

Створює некерований покажчик даних C, представлені заданим
[FFI\CData](class.ffi-cdata.md). Початковий `ptr` повинен пережити
результуючий покажчик. Ця функція використовується головним чином для
передачі аргументів у функцію C за вказівником.

### Список параметрів

`ptr`
Дескриптор некерованого покажчика структуру даних.

### Значення, що повертаються

Повертає новий об'єкт [FFI\CData](class.ffi-cdata.md).
