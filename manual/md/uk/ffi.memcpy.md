- [«FFI::memcmp](ffi.memcmp.md)
- [FFI::memset »](ffi.memset.md)

- [PHP Manual](index.md)
- [FFI](class.ffi.md)
- Копіює вміст однієї області пам'яті в іншу

# FFI::memcpy

(PHP 7 \>u003d 7.4.0, PHP 8)

FFI::memcpy — Копіює вміст однієї області пам'яті в іншу

### Опис

public static **FFI::memcpy**([FFI\CData](class.ffi-cdata.md) `&$to`,
[FFI\CData](class.ffi-cdata.md)\|string `&$from`, int `$size`): void

Копіює `size` байт з області пам'яті `from` у область пам'яті `to`.

### Список параметрів

`to`
Цільова область пам'яті.

`from`
Область пам'яті, звідки відбуватиметься копіювання.

`size`
Кількість байт для копіювання.

### Значення, що повертаються

Функція не повертає значення після виконання.
