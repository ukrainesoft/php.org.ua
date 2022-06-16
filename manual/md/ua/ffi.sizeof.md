- [«FFI::scope](ffi.scope.md)
- [FFI::string »](ffi.string.md)

- [PHP Manual](index.md)
- [FFI](class.ffi.md)
- Повертає розмір даних або типу C

# FFI::sizeof

(PHP 7 \>u003d 7.4.0, PHP 8)

FFI::sizeof — Повертає розмір даних або типу C

### Опис

public static
**FFI::sizeof**([FFI\CData](class.ffi-cdata.md)\|[FFI\CType](class.ffi-ctype.md)
`&$ptr`): int

Повертає розмір об'єктів [FFI\CData](class.ffi-cdata.md) або
[FFI\CType](class.ffi-ctype.md).

### Список параметрів

`ptr`
Дескриптор покажчика типу або даних C.

### Значення, що повертаються

Розмір області пам'яті, який вказує `ptr`.
