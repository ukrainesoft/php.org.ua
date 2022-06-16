- [«FFI::memcpy](ffi.memcpy.md)
- [FFI::new »](ffi.new.md)

- [PHP Manual](index.md)
- [FFI](class.ffi.md)
- Заповнити область пам'яті

# FFI::memset

(PHP 7 \>u003d 7.4.0, PHP 8)

FFI::memset — Заповнити область пам'яті

### Опис

public static **FFI::memset**([FFI\CData](class.ffi-cdata.md) `&$ptr`,
int `$value`, int `$size`): void

Заповнює `size` байт пам'яті за вказівником `ptr` значенням `value`.

### Список параметрів

`ptr`
Вказівник початку ділянки пам'яті.

`value`
Значення заповнення.

`size`
Кількість байт, які будуть заповнені.

### Значення, що повертаються

Функція не повертає значення після виконання.
