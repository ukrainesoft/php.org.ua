- [« SplFileObject::fread](splfileobject.fread.md)
- [SplFileObject::fseek »](splfileobject.fseek.md)

- [PHP Manual](index.md)
- [SplFileObject](class.splfileobject.md)
- Розбирає рядок файлу відповідно до заданого формату

# SplFileObject::fscanf

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplFileObject::fscanf — Розбирає рядок файлу відповідно до заданого
форматом

### Опис

public **SplFileObject::fscanf**(string `$format`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&...$vars`): array\|int\|null

Читає рядок з файлу та розбирає його відповідно до заданого формату
`format`.

Будь-які пробіли в рядку `format` відповідає будь-якому пробілу в рядку з
файлу. Це означає, що символ табуляції (``) у рядку формату може
відповідати одному пробілу у рядку файлу.

### Список параметрів

`format`
Інтерпретований формат для параметра `string`, який описаний у
документації функції [sprintf()](function.sprintf.md) з наступними
відмінностями:

- Функція не орієнтована на локалізацію.
- Не підтримуються значення `F`, `g`, `G` та `b`.
- `D` позначає десяткове число.
- `i` означає ціле число з визначенням системи числення.
- `n` означає кількість символів, оброблених на даний момент.
- `s` зупиняє читання на будь-якому символі пробілу.
- `*` замість `argnum$` пригнічує присвоєння даної специфікації
перетворення.

`vars`
Додаткові рядки форматування.

### Значення, що повертаються

Якщо передано лише один параметр, розпізнані в рядку значення будуть
поміщені у масив. Якщо передані додаткові рядки форматування,
функція поверне кількість шаблонів, з якими збігся рядок.
Необов'язкові параметри повинні надсилатися за посиланням.

### Приклади

**Приклад #1 Приклад використання **SplFileObject::fscanf()****

` <?php$file u003d new SplFileObject("misc.txt");while ($userinfo u003d $file->fscanf("%s %s %s")) {    list ($name, $profession, $cou u003d$userinfo; // Працюємо з $name $profession $countrycode}?> `

Вміст файлу users.txt

``` txtcode
javier argonaut pe
hiroshi sculptor jp
robert slacker us
luigi florist it
````

### Дивіться також

- [fscanf()](function.fscanf.md) - Обробляє дані з файлу в
відповідно до формату
- [sscanf()](function.sscanf.md) - Розбирає рядок відповідно до
заданим форматом
- [printf()](function.printf.md) - Виводить відформатований рядок
- [sprintf()](function.sprintf.md) - Повертає відформатовану
рядок
