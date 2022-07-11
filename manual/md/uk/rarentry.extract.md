- [«RarEntry](class.rarentry.md)
- [RarEntry::getAttr »](rarentry.getattr.md)

- [PHP Manual](index.md)
- [RarEntry](class.rarentry.md)
- Витягує елемент із архіву

# RarEntry::extract

(PECL rar \>u003d 0.1)

RarEntry::extract — Витягує елемент із архіву

### Опис

public **RarEntry::extract**(
string `$dir`,
string `$filepath` u003d "",
string `$password` u003d NULL,
bool `$extended_data` u003d **`false`**
): bool

**RarEntry::extract()** витягує вміст елемента. При цьому
створюється новий файл у зазначеній директорії `dir` з ім'ям, що збігається з
іменем елемента, якщо не заданий другий аргумент. Дивіться
докладніше нижче.

### Список параметрів

`dir`
Шлях до директорії, куди потрібно витягти файли. Цей параметр
враховується лише якщо не вказано параметр `filepath`. Якщо обидва
параметра не вказано, файли витягуються в поточну директорію.

`filepath`
Шлях (повний або відносний) містить директорію та ім'я видобутого
файлу. Цей параметр перевизначає і параметр `dir` та оригінальне ім'я
файлу.

`password`
Пароль використовується для розшифрування поточного елемента. Якщо елемент не
зашифрований, цей параметр не буде використаний і його можна не
вказувати. Якщо цей параметр не вказано, а елемент зашифрований, то
буде використано пароль, переданий функції
[rar_open()](rararchive.open.md), якщо її викликали. Якщо передано
невірний пароль, явно чи неявно через
[rar_open()](rararchive.open.md), то перевірка CRC буде невдалою і
буде повернено **`false`**. Ви можете перевірити чи є елемент
зашифрованим за допомогою
[RarEntry::isEncrypted()](rarentry.isencrypted.md).

`extended_data`
Якщо **`true`**, то до файлу, що видобувається, буде додана додаткова
інформація, така як NTFS ACL і власник у системі Unix, якщо вони
були присутні в архіві.

**Увага**

До версії 2.0.0 не обробляла відносні шляхи коректно.
Використовуйте для цієї ситуації [realpath()](function.realpath.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|----------------|-------------------------------- --------------------------------------|
| PECL rar 3.0.0 | Було додано параметр `extended_data`. |
| PECL rar 3.0.0 | Виправлена підтримка RAR архівів з іменами елементів, що повторюються. |

### Приклади

**Приклад #1 Приклад використання **RarEntry::extract()****

` <?php$rar_file u003d rar_open('example.rar') or die("Не удалося відкрити Rar архів");$entry u003d rar_entry_get($rar_file, 'Dir/file.txt') or die("Не таку запис");$entry->extract('/dir/to'); // створення /dir/to/Dir/file.txt$entry->extract(false, '/dir/to/new_name.txt'); // створення /dir/to/new_name.txt?> `

**Приклад #2 Як витягти всі файли з архіву:**

` <?php/* Приклад від Erik Jenssen aka erix */$filename u003d "foobar.rar";$filepath u003d "/home/foo/bar/";$rar_file u003d rar_open($filepath.$filename);$list u003d rar_list($rar_file);foreach($list as $file) {    $entry u003d rar_entry_get($rar_file, $file); $entry->extract("."); // витягти в поточний каталог}rar_close($rar_file);?> `

### Дивіться також

- [RarEntry::getStream()](rarentry.getstream.md) - Отримати
обробник для запису
- [`rar://`wrapper](wrappers.rar.md)
