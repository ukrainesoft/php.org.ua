- [«FFI::free](ffi.free.md)
- [FFI::load »](ffi.load.md)

- [PHP Manual](index.md)
- [FFI](class.ffi.md)
- Перевіряє, чи FFI\CData є нульовим покажчиком

# FFI::isNull

(PHP 7 \>u003d 7.4.0, PHP 8)

FFI::isNull — Перевіряє, чи FFI\CData є нульовим покажчиком

### Опис

public static **FFI::isNull**([FFI\CData](class.ffi-cdata.md)
`&$ptr`): bool

Перевіряє, чи FFI\CData є нульовим покажчиком.

### Список параметрів

`ptr`
Вказівник на структуру даних C.

### Значення, що повертаються

Повертає **`true`** або **`false`** залежно від того, чи є
FFICData нульовим покажчиком.
