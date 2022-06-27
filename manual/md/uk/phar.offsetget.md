- [« Phar::offsetExists](phar.offsetexists.md)
- [Phar::offsetSet »](phar.offsetset.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Отримати PharFileInfo об'єкт для конкретного файлу

# Phar::offsetGet

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.0.0)

Phar::offsetGet — Отримати об'єкт
[PharFileInfo](class.pharfileinfo.md) для конкретного файлу

### Опис

public **Phar::offsetGet**(string `$localName`):
[SplFileInfo](class.splfileinfo.md)

Це реалізація інтерфейсу [ArrayAccess](class.arrayaccess.md),
що дозволяє маніпулювати вмістом Phar-архіву в стилі доступу до
елементів масиву. **Phar::offsetGet()** використовується для вилучення
файлів із архіву.

### Список параметрів

`localName`
Назва файлу (відносний шлях).

### Значення, що повертаються

Об'єкт класу [PharFileInfo](class.pharfileinfo.md). Можна, можливо
використовувати для отримання інформації про файл і для отримання контенту
через ітерування.

### Помилки

Викидає виняток
[BadMethodCallException](class.badmethodcallexception.md), якщо такого
файлу немає.

### Приклади

**Приклад #1 Приклад використання **Phar::offsetGet()****

Як і для будь-якого іншого класу, що реалізує
[ArrayAccess](class.arrayaccess.md), метод **Phar::offsetGet()** буде
викликаний автоматично під час використання оператора `[]`.

` <?php$p u003d new Phar(dirname(__FILE__) . '/myphar.phar', 0, 'myphar.phar');$p['exists.txt'] u003d "file exists
";try {    // автоматичний дзвін offsetGet()    echo $p['exists.txt'];    echo $p['doesnotexist.txt'];} catch (BadM|

Результат виконання цього прикладу:

file exists
Entry doesnotexist.txt does not exist

### Дивіться також

- [Phar::offsetExists()](phar.offsetexists.md) - Визначити, чи є
файл в архіві
- [Phar::offsetSet()](phar.offsetset.md) - Зміна вмісту
файлу
- [Phar::offsetUnset()](phar.offsetunset.md) - Видалити файл з
phar-архіву
