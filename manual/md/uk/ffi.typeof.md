- [«FFI::type](ffi.type.md)
- [FFI\CData »](class.ffi-cdata.md)

- [PHP Manual](index.md)
- [FFI](class.ffi.md)
- Отримує FFI\CType для FFI\CData

# FFI::typeof

(PHP 7 \>u003d 7.4.0, PHP 8)

FFI::typeof — Отримує FFI\CType для FFI\CData

### Опис

public static **FFI::typeof**([FFI\CData](class.ffi-cdata.md)
`&$ptr`): [FFI\CType](class.ffi-ctype.md)

Повертає об'єкт [FFI\CType](class.ffi-ctype.md), який представляє тип
об'єкта [FFI\CData](class.ffi-cdata.md).

### Список параметрів

`ptr`
Вказівник на структуру даних C.

### Значення, що повертаються

Повертає об'єкт [FFI\CType](class.ffi-ctype.md), який представляє тип
об'єкта [FFI\CData](class.ffi-cdata.md).
