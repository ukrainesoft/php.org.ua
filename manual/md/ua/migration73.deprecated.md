- [« Зміни, що ламають зворотну
сумісність](migration73.incompatible.md)
- [Інші зміни »](migration73.other-changes.md)

- [PHP Manual](index.md)
- [Міграція з PHP 7.2.x на PHP 7.3.x](migration73.md)
- Функціонал, оголошений застарілим у PHP 7.3.x

## Функціонал, оголошений застарілим у PHP 7.3.x

### Ядро PHP

#### Нечутливі до регістру константи

Оголошення реєстронезалежних констант оголошено застарілим. Передача
**`true`** як третій параметр функції
[define()](function.define.md) тепер згенерує попередження про
застарілої можливості. Використання нечутливих до регістру
констант у разі, коли вони відрізняються від оголошення, також застаріло.

#### Використання assert() усередині просторів імен

Оголошення функції з ім'ям `assert()` всередині простору імен
оголошено застарілим. Функція [assert()](function.assert.md)
схильна до спеціальної обробки двигуном, що може призвести до
неузгодженому поведінці щодо функції у просторі імен з
тим самим ім'ям.

#### Пошук рядків для нестрокового параметра needle

Передача нестрокового параметра needle у рядкові функції пошуку
оголошено застарілим. У майбутньому цей параметр інтерпретуватиметься
як рядок, а не як точка коду ASCII. Залежно від передбачуваного
поведінки необхідно або явно привести параметр до рядка, або
здійснити явний виклик [chr()](function.chr.md). Торкнулися такі
функції:

- [strpos()](function.strpos.md)
- [strrpos()](function.strrpos.md)
- [stripos()](function.stripos.md)
- [strripos()](function.strripos.md)
- [strstr()](function.strstr.md)
- [strchr()](function.strchr.md)
- [strrchr()](function.strrchr.md)
- [stristr()](function.stristr.md)

#### Зміни у видаленні тегів

Функція [fgetss()](function.fgetss.md) та [фільтр потоку
string.strip_tags](filters.string.md) оголошені застарілим. це також
впливає на метод [SplFileObject::fgetss()](splfileobject.fgetss.md) та
на функцію [gzgetss()](function.gzgetss.md).

### Фільтрування даних

Явне використання констант **`FILTER_FLAG_SCHEME_REQUIRED`** та
**`FILTER_FLAG_HOST_REQUIRED`** тепер оголошено застарілим; так чи
інакше, вони мають на увазі використання **`FILTER_VALIDATE_URL`**.

### Обробка зображень та GD

Функція [image2wbmp()](function.image2wbmp.md) оголошена застарілою.

### Функції інтернаціоналізації

Використання **`Normalizer::NONE`** викликає попередження про
застарілому поведінці, якщо PHP не скомпільований з ICU версії ≥ 56.

### Мультибайтові рядки

Наступні недокументовані псевдоніми `mbereg_*()` оголошені
застарілими. Натомість використовуйте відповідні варіанти
`mb_ereg_*()`.

- **mbregex_encoding()**
- **mbereg()**
- **mberegi()**
- **mbereg_replace()**
- **mberegi_replace()**
- **mbsplit()**
- **mbereg_match()**
- **mbereg_search()**
- **mbereg_search_pos()**
- **mbereg_search_regs()**
- **mbereg_search_init()**
- **mbereg_search_getregs()**
- **mbereg_search_getpos()**
- **mbereg_search_setpos()**

### Функції ODBC та DB2 (PDO_ODBC)

Налаштування ini-файлу
[pdo_odbc.db2_instance_name](ref.pdo-odbc.md#ini.pdo-odbc.db2-instance-name)
офіційно оголошено застарілим. Опція застаріла у документації, починаючи
із PHP 5.1.1.
