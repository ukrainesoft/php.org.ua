- [« Комплексний приклад
PHP/FFI/preloading](ffi.examples-complete.md)
- [FFI::addr »](ffi.addr.md)

- [PHP Manual](index.md)
- [FFI](book.ffi.md)
- Основний інтерфейс до коду та даних C

# Основний інтерфейс до коду та даних C

(PHP 7 \>u003d 7.4.0, PHP 8)

## Вступ

Об'єкти цього класу створюються фабричними методами
[FFI::cdef()](ffi.cdef.md), [FFI::load()](ffi.load.md) та
[FFI::scope()](ffi.scope.md). Оголошені змінні C доступні як
характеристики екземпляра FFI, а функції як його способи. Оголошені типи C
можна використовувати для створення структур даних за допомогою
[FFI::new()](ffi.new.md) та [FFI::type()](ffi.type.md).

Розбір оголошень FFI і завантаження бібліотеки, що розділяється, може зайняти
значний час. Не має сенсу робити це для кожного HTTP-запиту
в оточенні Web. Проте можна перезавантажити оголошення FFI та
бібліотеки при старті PHP та інстанціювати об'єкти FFI по
необхідності. Заголовні файли можуть бути розширені спеціальними
оголошеннями `FFI_SCOPE` (наприклад, `#define FFI_SCOPE "foo"”"`; скоуп
за замовчуванням "C") і завантажені за допомогою [FFI::load()](ffi.load.md)
час передзавантаження. Це призведе до створення постійних прив'язок, які
будуть доступні для всіх запитів через [FFI::scope()](ffi.scope.md).
Докладніше читайте на сторінці [Прості приклади використання
FFI] (ffi.examples-complete.md).

У той самий скоуп можна завантажити кілька заголовних файлів.

## Огляд класів

final class **FFI** {

/\* Методи \*/

public static [addr](ffi.addr.md)([FFI\CData](class.ffi-cdata.md)
`&$ptr`): [FFI\CData](class.ffi-cdata.md)

public static
[alignof](ffi.alignof.md)([FFI\CData](class.ffi-cdata.md)\|[FFI\CType](class.ffi-ctype.md)
`&$ptr`): int

public static
[arrayType](ffi.arraytype.md)([FFI\CType](class.ffi-ctype.md)
`$type`, array `$dimensions`): [FFI\CType](class.ffi-ctype.md)

public static
[cast](ffi.cast.md)([FFI\CType](class.ffi-ctype.md)\|string `$type`,
[FFI\CData](class.ffi-cdata.md)\|int\|float\|bool\|null `&$ptr`):
?[FFI\CData](class.ffi-cdata.md)

public [cast](ffi.cast.md)([FFI\CType](class.ffi-ctype.md)\|string
`$type`, [FFI\CData](class.ffi-cdata.md)\|int\|float\|bool\|null
`&$ptr`): ?[FFI\CData](class.ffi-cdata.md)

public static [cdef](ffi.cdef.md)(string `$code` u003d "", ?string `$lib`
u003d **`null`**): [FFI](class.ffi.md)

public static [free](ffi.free.md)([FFI\CData](class.ffi-cdata.md)
`&$ptr`): void

public static
[isNull](ffi.isnull.md)([FFI\CData](class.ffi-cdata.md) `&$ptr`):
bool

public static [load](ffi.load.md)(string `$filename`):
?[FFI](class.ffi.md)

public static
[memcmp](ffi.memcmp.md)(string\|[FFI\CData](class.ffi-cdata.md)
`&$ptr1`, string\|[FFI\CData](class.ffi-cdata.md) `&$ptr2`, int
`$size`): int

public static
[memcpy](ffi.memcpy.md)([FFI\CData](class.ffi-cdata.md) `&$to`,
[FFI\CData](class.ffi-cdata.md)\|string `&$from`, int `$size`): void

public static
[memset](ffi.memset.md)([FFI\CData](class.ffi-cdata.md) `&$ptr`, int
`$value`, int `$size`): void

public static
[new](ffi.new.md)([FFI\CType](class.ffi-ctype.md)\|string `$type`,
bool `$owned` u003d **`true`**, bool `$persistent` u003d **`false`**):
?[FFI\CData](class.ffi-cdata.md)

public [new](ffi.new.md)([FFI\CType](class.ffi-ctype.md)\|string
`$type`, bool `$owned` u003d **`true`**, bool `$persistent` u003d **`false`**):
?[FFI\CData](class.ffi-cdata.md)

public static [scope](ffi.scope.md)(string `$name`):
[FFI](class.ffi.md)

public static
[sizeof](ffi.sizeof.md)([FFI\CData](class.ffi-cdata.md)\|[FFI\CType](class.ffi-ctype.md)
`&$ptr`): int

public static
[string](ffi.string.md)([FFI\CData](class.ffi-cdata.md) `&$ptr`,
?int `$size` u003d **`null`**): string

public static [type](ffi.type.md)(string `$type`):
?[FFI\CType](class.ffi-ctype.md)

public [type](ffi.type.md)(string `$type`):
?[FFI\CType](class.ffi-ctype.md)

public static
[typeof](ffi.typeof.md)([FFI\CData](class.ffi-cdata.md) `&$ptr`):
[FFI\CType](class.ffi-ctype.md)

}

## Зміст

- [FFI::addr](ffi.addr.md) — Створює некерований покажчик на
дані C
- [FFI::alignof](ffi.alignof.md) - Повертає величину вирівнювання
- [FFI::arrayType](ffi.arraytype.md) — динамічно конструює
новий тип З масиву
- [FFI::cast](ffi.cast.md) — Перетворення типу C
- [FFI::cdef](ffi.cdef.md) — Створення нового об'єкту FFI
- [FFI::free](ffi.free.md) — Вивільняє некеровану структуру
даних
- [FFI::isNull](ffi.isnull.md) — Перевіряє, чи є FFI\CData
нульовим покажчиком
- [FFI::load](ffi.load.md) — Завантажити декларації C із заголовного
файлу
- [FFI::memcmp](ffi.memcmp.md) — Порівнює дві області пам'яті
- [FFI::memcpy](ffi.memcpy.md) — Копіює вміст однієї області
пам'яті в іншу
- [FFI::memset](ffi.memset.md) — Заповнити область пам'яті
- [FFI::new](ffi.new.md) — Створює структуру даних C
- [FFI::scope](ffi.scope.md) — Встановлює об'єкт FFI в
відповідно до декларації С, розібраної на етапі передзавантаження
- [FFI::sizeof](ffi.sizeof.md) — Повертає розмір даних або типу C
- [FFI::string](ffi.string.md) — Створює рядок PHP з області
пам'яті
- [FFI::type](ffi.type.md) — Створює об'єкт FFI\CType із декларації
З
- [FFI::typeof](ffi.typeof.md) — Отримує FFI\CType для FFI\CData
