- [«FFI::addr](ffi.addr.md)
- [FFI::arrayType »](ffi.arraytype.md)

- [PHP Manual](index.md)
- [FFI](class.ffi.md)
- Повертає величину вирівнювання

# FFI::alignof

(PHP 7 \>u003d 7.4.0, PHP 8)

FFI::alignof — Повертає величину вирівнювання

### Опис

public static
**FFI::alignof**([FFI\CData](class.ffi-cdata.md)\|[FFI\CType](class.ffi-ctype.md)
`&$ptr`): int

Повертає величину вирівнювання об'єктів
[FFI\CData](class.ffi-cdata.md) або [FFI\CType](class.ffi-ctype.md).

### Список параметрів

`ptr`
Дескриптор покажчика даних або тип C.

### Значення, що повертаються

Повертає величину вирівнювання об'єктів
[FFI\CData](class.ffi-cdata.md) або [FFI\CType](class.ffi-ctype.md).
