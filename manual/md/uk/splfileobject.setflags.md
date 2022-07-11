- [« SplFileObject::setCsvControl](splfileobject.setcsvcontrol.md)
- [SplFileObject::setMaxLineLen »](splfileobject.setmaxlinelen.md)

- [PHP Manual](index.md)
- [SplFileObject](class.splfileobject.md)
- Встановлює прапори для SplFileObject

# SplFileObject::setFlags

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplFileObject::setFlags — Встановлює прапори для SplFileObject

### Опис

public **SplFileObject::setFlags**(int `$flags`): void

Встановлює прапори, які використовуватимуться
[SplFileObject](class.splfileobject.md).

### Список параметрів

`flags`
Бітова маска прапори для встановлення. Дивіться [константи
SplFileObject](class.splfileobject.md#splfileobject.constants) для
отримання списку доступних прапорів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **SplFileObject::setFlags()****

` <?php$file u003d new SplFileObject("data.csv");$file->setFlags(SplFileObject::READ_CSV);foreach ($file as $fields) {    var_dump($fields);}?> `

### Дивіться також

- [SplFileObject::getFlags()](splfileobject.getflags.md) - Отримує
прапорці налаштування об'єкта SplFileObject
