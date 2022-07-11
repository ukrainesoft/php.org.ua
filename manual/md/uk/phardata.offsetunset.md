- [« PharData::offsetSet](phardata.offsetset.md)
- [PharData::setAlias »](phardata.setalias.md)

- [PHP Manual](index.md)
- [PharData](class.phardata.md)
- Видалити файл із tar/zip-архіву

# PharData::offsetUnset

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

PharData::offsetUnset — Видалити файл із tar/zip-архіву

### Опис

public **PharData::offsetUnset**(string `$localName`): void

Це реалізація інтерфейсу [ArrayAccess](class.arrayaccess.md),
що дозволяє маніпулювати вмістом tar/zip-архіву в стилі доступу до
елементів масиву. offsetUnset використовується для видалення файлів та
запускається щоразу, коли використовується конструкція
[unset()](function.unset.md).

### Список параметрів

`localName`
Назва файлу (відносний шлях).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

Викидає виняток [PharException](class.pharexception.md)
у разі проблем із записом на диск.

### Приклади

**Приклад #1 Приклад використання **PharData::offsetUnset()****

` <?php$p u003d new PharData('/path/to/my.zip');try {    // удалення file.txt з my.zip шляхом|виклику offsetUnset    unset($p['file. } catch (Exception $e) {    echo 'Не удалося видалити file.txt: ', $e;}?> `

### Дивіться також

- [Phar::offsetUnset()](phar.offsetunset.md) - Видалити файл з
phar-архіву
