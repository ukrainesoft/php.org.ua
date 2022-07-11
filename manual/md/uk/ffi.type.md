- [«FFI::string](ffi.string.md)
- [FFI::typeof »](ffi.typeof.md)

- [PHP Manual](index.md)
- [FFI](class.ffi.md)
- Створює об'єкт FFI\CType із декларації С

# FFI::type

(PHP 7 \>u003d 7.4.0, PHP 8)

FFI::type — Створює об'єкт FFI\CType із декларації С

### Опис

public static **FFI::type**(string `$type`):
?[FFI\CType](class.ffi-ctype.md)

public **FFI::type**(string `$type`): ?[FFI\CType](class.ffi-ctype.md)

Функція створює та повертає об'єкт [FFI\CType](class.ffi-ctype.md)
для заданого рядка, що містить декларацію типу С. Якщо метод викликається
статично, то можна використовувати лише визначені імена типів С
(наприклад, `int`, `char`, і т.д.); якщо метод викликається як метод
об'єкта, то допустимі будь-які певні йому типи.

### Список параметрів

`type`
Коректна декларація типу С або об'єкт класу
[FFI\CType](class.ffi-ctype.md).

### Значення, що повертаються

Повертає новий об'єкт [FFI\CType](class.ffi-ctype.md) або **`null`**
у разі виникнення помилки.
