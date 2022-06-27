- [«FFI\CData](class.ffi-cdata.md)
- [FFI\CType::getAlignment »](ffi-ctype.getalignment.md)

- [PHP Manual](index.md)
- [FFI](book.ffi.md)
- Доступ до типів C

# Доступ до типів C

(PHP 7 \>u003d 7.4.0, PHP 8)

## Вступ

## Огляд класів

final class **FFI\CType** {

/\* Методи \*/

public [getAlignment](ffi-ctype.getalignment.md)(): int

public [getArrayElementType](ffi-ctype.getarrayelementtype.md)():
[FFI\CType](class.ffi-ctype.md)

public [getArrayLength](ffi-ctype.getarraylength.md)(): int

public [getAttributes](ffi-ctype.getattributes.md)(): int

public [getEnumKind](ffi-ctype.getenumkind.md)(): int

public [getFuncABI](ffi-ctype.getfuncabi.md)(): int

public [getFuncParameterCount](ffi-ctype.getfuncparametercount.md)():
int

public [getFuncParameterType](ffi-ctype.getfuncparametertype.md)(int
`$index`): [FFI\CType](class.ffi-ctype.md)

public [getFuncReturnType](ffi-ctype.getfuncreturntype.md)():
[FFI\CType](class.ffi-ctype.md)

public [getKind](ffi-ctype.getkind.md)(): int

public [getName](ffi-ctype.getname.md)(): string

public [getPointerType](ffi-ctype.getpointertype.md)():
[FFI\CType](class.ffi-ctype.md)

public [getSize](ffi-ctype.getsize.md)(): int

public [getStructFieldNames](ffi-ctype.getstructfieldnames.md)():
array

public
[getStructFieldOffset](ffi-ctype.getstructfieldoffset.md)(string
`$name`): int

public [getStructFieldType](ffi-ctype.getstructfieldtype.md)(string
`$name`): [FFI\CType](class.ffi-ctype.md)

}

## Зміст

- [FFI\CType::getAlignment](ffi-ctype.getalignment.md) — Опис
- [FFI\CType::getArrayElementType](ffi-ctype.getarrayelementtype.md)
- Опис
- [FFI\CType::getArrayLength](ffi-ctype.getarraylength.md) -
Опис
- [FFI\CType::getAttributes](ffi-ctype.getattributes.md) — Опис
- [FFI\CType::getEnumKind](ffi-ctype.getenumkind.md) — Опис
- [FFI\CType::getFuncABI](ffi-ctype.getfuncabi.md) — Опис
- [FFI\CType::getFuncParameterCount](ffi-ctype.getfuncparametercount.md)
- Опис
- [FFI\CType::getFuncParameterType](ffi-ctype.getfuncparametertype.md)
- Опис
- [FFI\CType::getFuncReturnType](ffi-ctype.getfuncreturntype.md) -
Опис
- [FFI\CType::getKind](ffi-ctype.getkind.md) — Опис
- [FFI\CType::getName](ffi-ctype.getname.md) — Опис
- [FFI\CType::getPointerType](ffi-ctype.getpointertype.md) -
Опис
- [FFI\CType::getSize](ffi-ctype.getsize.md) — Опис
- [FFI\CType::getStructFieldNames](ffi-ctype.getstructfieldnames.md)
- Опис
- [FFI\CType::getStructFieldOffset](ffi-ctype.getstructfieldoffset.md)
- Опис
- [FFI\CType::getStructFieldType](ffi-ctype.getstructfieldtype.md) -
Опис
