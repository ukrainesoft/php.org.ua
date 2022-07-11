- [« SplFileInfo::getInode](splfileinfo.getinode.md)
- [SplFileInfo::getMTime »](splfileinfo.getmtime.md)

- [PHP Manual](index.md)
- [SplFileInfo](class.splfileinfo.md)
- Отримує шлях посилання

# SplFileInfo::getLinkTarget

(PHP 5 \>u003d 5.2.2, PHP 7, PHP 8)

SplFileInfo::getLinkTarget — Отримує шлях посилання

### Опис

public **SplFileInfo::getLinkTarget**(): string\|false

Отримує цільовий шлях посилання на файлову систему.

> **Примітка**:
>
> Цей шлях може бути реальним розташуванням у файлової системі.
> Щоб отримати реальний шлях файлової системи, використовуйте метод
> [SplFileInfo::getRealPath()](splfileinfo.getrealpath.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає цільовий шлях посилання файлової системи у разі успішного
виконання або **`false`** у разі виникнення помилки.

### Помилки

У разі виникнення помилки викидає виняток
[RuntimeException](class.runtimeexception.md).

### Приклади

**Приклад #1 Приклад використання **SplFileInfo::getLinkTarget()****

` <?php$info u003d new SplFileInfo('/Users/bbieber/workspace');if ($info->isLink()) {    var_dump($info->getLinkTarget()); var_dump($info->getRealPath());}?> `

Результатом виконання цього прикладу буде щось подібне:

string(19) "Documents/workspace"
string(34) "/Users/bbieber/Documents/workspace"

### Дивіться також

- [SplFileInfo::isLink()](splfileinfo.islink.md) - Вказує,
чи є файл посиланням
- [SplFileInfo::getRealPath()](splfileinfo.getrealpath.md) -
Отримує абсолютний шлях до файлу
