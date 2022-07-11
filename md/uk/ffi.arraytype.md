- [«FFI::alignof](ffi.alignof.md)
- [FFI::cast »](ffi.cast.md)

- [PHP Manual](index.md)
- [FFI](class.ffi.md)
- Динамічно конструює новий тип масиву

# FFI::arrayType

(PHP 7 \>u003d 7.4.0, PHP 8)

FFI::arrayType — Динамічно конструює новий тип масиву

### Опис

public static **FFI::arrayType**([FFI\CType](class.ffi-ctype.md)
`$type`, array `$dimensions`): [FFI\CType](class.ffi-ctype.md)

Динамічно конструює новий тип масиву з елементами типу `type` і
розмірностями, заданими в `dimensions`. У наступному прикладі `$t1` і
`$t2` визначають масиви однакового типу:

` <?php$t1 u003d FFI::type("int[2][3]");$t2 u003d FFI::arrayType(FFI::type("int"), [2, 3]);?> `

### Список параметрів

`type`
Коректна декларація типу С, наприклад string, або заздалегідь створений
об'єкт класу [FFI\CType](class.ffi-ctype.md).

`dimensions`
Масив, що визначає розмірність типу.

### Значення, що повертаються

Повертає новий об'єкт [FFI\CType](class.ffi-ctype.md).
