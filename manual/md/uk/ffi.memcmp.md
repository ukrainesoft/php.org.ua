- [«FFI::load](ffi.load.md)
- [FFI::memcpy »](ffi.memcpy.md)

- [PHP Manual](index.md)
- [FFI](class.ffi.md)
- Порівнює дві області пам'яті

# FFI::memcmp

(PHP 7 \>u003d 7.4.0, PHP 8)

FFI::memcmp — Порівнює дві області пам'яті

### Опис

public static **FFI::memcmp**(string\|[FFI\CData](class.ffi-cdata.md)
`&$ptr1`, string\|[FFI\CData](class.ffi-cdata.md) `&$ptr2`, int
`$size`): int

Порівнює `size` байт пам'яті за вказівниками `ptr1` та `ptr2`. І `ptr1` і
`ptr2` можуть бути будь-якими нативними структурами даних
([FFI\CData](class.ffi-cdata.md)), або рядками PHP.

### Список параметрів

`ptr1`
Вказівник на першу область пам'яті.

`ptr2`
Вказівник на другу область пам'яті.

`size`
Кількість байт для порівняння.

### Значення, що повертаються

Повертає \< `0`, якщо вміст пам'яті для `ptr1` менший, ніж для
`ptr2`, \> `0`, якщо перше більше другого і `0`, якщо рівні.
