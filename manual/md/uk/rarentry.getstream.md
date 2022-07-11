- [« RarEntry::getPackedSize](rarentry.getpackedsize.md)
- [RarEntry::getUnpackedSize »](rarentry.getunpackedsize.md)

- [PHP Manual](index.md)
- [RarEntry](class.rarentry.md)
- Отримати обробник для запису

# RarEntry::getStream

(PECL rar \>u003d 2.0.0)

RarEntry::getStream — Отримати обробник для запису

### Опис

public **RarEntry::getStream**(string `$password` u003d ?): resource\|false

Повертає обробник, який підтримує операцію читання. Цей обробник
вміє розпаковувати запис на лету.

Обробник не знищується під час виклику
[rar_close()](rararchive.close.md).

**Увага**

Результативний потік не перевіряється на цілісність. Отже ніяк
не визначається псування файлу або розшифровка з неправильним ключем. Перевірка
контрольної суми розтисненого та розшифрованого файлу повністю на совісті
розробника.

### Список параметрів

`password`
Пароль, який використовується для шифрування запису. Якщо запис не
шифрована, цей параметр ігнорується і в цілому може бути опущений.
Якщо ж параметр опущений, а запис шифрований, буде використано пароль
заданий у функції [rar_open()](rararchive.open.md), якщо звичайно він
був заданий. Якщо був заданий невірний пароль, явно чи неявно через
[rar_open()](rararchive.open.md), цей метод поверне потік з невірними
даними. Якщо пароль не заданий взагалі, а він потрібен, то метод поверне
**`false`**. Зашифрований запис чи ні можна перевірити за допомогою
[RarEntry::isEncrypted()](rarentry.isencrypted.md).

### Значення, що повертаються

Обробник або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|----------------|-------------------------------- -------------------------------------------------- -|
| PECL rar 3.0.0 | Підтримка RAR-архівів з іменами записів, що дублюються, тепер працює нормально. |

### Приклади

**Приклад #1 Приклад використання **RarEntry::getStream()****

` <?php$rar_file u003d rar_open('example.rar');if ($rar_file u003du003du003du003dfalse)   die("Не удалося відкрити Rar архів");$entry u003du003drar_entry_get($rar_file, . ');if ($entry u003du003du003du003dfalse)   die("Не вдалося знайти таку запис");$stream u003d $entry->getStream();if ($stream u003du003du003du003dfalse)  | .");rar_close($rar_file); //потік не залежить від файлаwhile (!feof($stream)) {    $buff u003d fread($stream, 8192); if ($buff !u003du003d false)        echo $buff; else        break; //помилка fread}fclose($stream);?> `

### Дивіться також

- [RarEntry::extract()](rarentry.extract.md) - Витягує елемент з
архів
- [обгортка `rar://`](wrappers.rar.md)
