- [« Phar::offsetGet](phar.offsetget.md)
- [Phar::offsetUnset »](phar.offsetunset.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Зміна вмісту файлу

# Phar::offsetSet

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.0.0)

Phar::offsetSet — Зміна вмісту файлу

### Опис

public **Phar::offsetSet**(string `$localName`, resource\|string
`$value`): void

> **Примітка**:
>
> Для коректної роботи з об'єктами [Phar](class.phar.md) цим методом
> необхідна установка значення `php.ini` `phar.readonly` у `0`. В
> інакше, буде викинуто виняток
> [PharException](class.pharexception.md).

Це реалізація інтерфейсу [ArrayAccess](class.arrayaccess.md),
що дозволяє маніпулювати вмістом Phar-архіву в стилі доступу до
елементів масиву. offsetSet використовується для зміни контенту
існуючого файлу, або створення нового.

### Список параметрів

`localName`
Назва файлу (відносний шлях).

`value`
Вміст файлу.

### Значення, що повертаються

Нічого не вертає.

### Помилки

Якщо опція [phar.readonly](phar.configuration.md#ini.phar.readonly)
встановлений в `1`, то буде викинуто виняток
[BadMethodCallException](class.badmethodcallexception.md), оскільки
модифікувати Phar-архів можна лише, якщо phar.readonly дорівнює `0`.
Якщо виникнуть якісь проблеми із записом на диск - викидається
виняток [PharException](class.pharexception.md).

### Приклади

**Приклад #1 Приклад використання **Phar::offsetSet()****

offsetSet не потрібно викликати безпосередньо. Використовуйте синтаксис `[]`.

` <?php$p u003d new Phar('/path/to/my.phar', 0, 'my.phar');try| ;} catch (Exception $e) {    echo 'Не можу змінити file.txt:', $e;}?> `

### Примітки

> **Примітка**: [Phar::addFile()](phar.addfile.md),
> [Phar::addFromString()](phar.addfromstring.md) та
> **Phar::offsetSet()** зберігає новий phar-архів щоразу при їх
> дзвінок. Якщо продуктивність викликає занепокоєння, натомість
> слід використовувати
> [Phar::buildFromDirectory()](phar.buildfromdirectory.md) або
> [Phar::buildFromIterator()](phar.buildfromiterator.md).

### Дивіться також

- [Phar::offsetExists()](phar.offsetexists.md) - Визначити, чи є
файл в архіві
- [Phar::offsetGet()](phar.offsetget.md) - Отримати об'єкт
PharFileInfo для конкретного файлу
- [Phar::offsetUnset()](phar.offsetunset.md) - Видалити файл з
phar-архіву
