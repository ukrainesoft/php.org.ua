- [« RarArchive::open](rararchive.open.md)
- [RarArchive::\_\_toString »](rararchive.tostring.md)

- [PHP Manual](index.md)
- [RarArchive](class.rararchive.md)
- Чи відкривати пошкоджені архіви

# RarArchive::setAllowBroken

(PECL rar \>u003d 3.0.0)

RarArchive::setAllowBroken — Чи відкривати пошкоджені архіви

### Опис

Об'єктно-орієнтований стиль (метод):

public **RarArchive::setAllowBroken**(bool `$allow_broken`): bool

Процедурний стиль:

**rar_allow_broken_set**([RarArchive](class.rararchive.md) `$rarfile`,
bool `$allow_broken`): bool

Метод визначає, чи можна намагатися читати пошкоджений архів, чи все
операції з ним мають закінчуватися помилкою. Пошкоджені архіви – це
такі архіви, які відкриваються без помилок, але при спробі прочитати
Записи виникають помилки.

### Список параметрів

`rarfile`
Об'єкт [RarArchive](class.rararchive.md), відкритий за допомогою
[rar_open()](rararchive.open.md).

`allow_broken`
Чи дозволяти роботу з пошкодженими архівами (**`true`**) чи ні
(**`false`**).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. Помилка може виникнути лише якщо файл
вже закрито.

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

`<?phpfunction retnull() { return null; }$file u003d dirname(__FILE__) . "/multi_broken.part1.rar";/* третій аргумент пригнічує повідомлення "volume not found" */$a u003d RarArchive::open($file, null, 'retnull');$a->setAllowBroke ($a->getEntries() as $e) {   echo "$e
";}var_dump(count($a));?> `

Результатом виконання цього прикладу буде щось подібне:

RarEntry для файлу "file1.txt" (52b28202)
int(1)

**Приклад #2 Процедурний стиль**

`<?phpfunction retnull() { return null; }$file u003d dirname(__FILE__) . "/multi_broken.part1.rar";/* третій аргумент пригнічує повідомлення "volume not found" */$a u003d rar_open($file, null, 'retnull');rar_allow_broken_set($a, list a) as $e) {   echo "$e
";}var_dump(count($a));?> `

### Дивіться також

- [RarArchive::isBroken()](rararchive.isbroken.md) - Перевіряє, чи не
чи зламаний архів (не завершено)
