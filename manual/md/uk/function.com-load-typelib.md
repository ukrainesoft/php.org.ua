- [« com_get_active_object](function.com-get-active-object.md)
- [com_message_pump »](function.com-message-pump.md)

- [PHP Manual](index.md)
- [Функції COM](ref.com.md)
- Завантаження Typelib

# com_load_typelib

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

com_load_typelib — Завантаження Typelib

### Опис

**com_load_typelib**(string `$typelib`, bool `$case_insensitive` u003d
**`true`**): bool

Завантажує бібліотеку типів та реєструє її константи таким чином,
ніби вони були визначені через [define()](function.define.md).

Зверніть увагу, що набагато ефективніше використовувати опцію
конфігурації `php.ini`
[com.typelib-file](com.configuration.md#ini.com.typelib-file) для
передзавантаження та реєстрації констант. З іншого боку, такий метод менший
гнучкий.

Якщо
[com.autoregister-typelib](com.configuration.md#ini.com.autoregister-typelib)
включено, то PHP постарається автоматично зареєструвати константи,
асоційовані з об'єктом COM, коли ви створюватимете його екземпляр.
Але така поведінка залежить від інтерфейсу об'єкта COM.
недоступне.

### Список параметрів

`typelib`
`typelib` приймає такі значення:

- Ім'я `.tlb`-файлу або модуль, що містить бібліотеку
типів.

- GUID бібліотеки типів, після якого вказано номер версії, наприклад,
`{00000200-0000-0010-8000-00AA006D2EA4},2,0`.

- Ім'я бібліотеки типів, наприклад,
`Microsoft OLE DB ActiveX Data Objects 1.0 Library`.

PHP намагатиметься визначити бібліотеку в такому порядку. Кожен
наступний пункт є дуже витратним за ресурсами ніж попередній. Тобто. краще
вказувати .tbl-файл, якщо неможливо, то GUID і якщо зовсім погано -
тоді ім'я бібліотеки. Пошук бібліотеки на ім'я, наприклад, призведе до
тому, що буде проведено перебір усіх записів регістру.

`case_insensitive`
`case_insensitive` веде себе протилежно до параметра
`$case_insensitive` у функції [define()](function.define.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
