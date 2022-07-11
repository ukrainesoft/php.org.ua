- [« Phar::mungServer](phar.mungserver.md)
- [Phar::offsetGet »](phar.offsetget.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Визначити, чи є файл у архіві

# Phar::offsetExists

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.0.0)

Phar::offsetExists — Визначити, чи є файл в архіві

### Опис

public **Phar::offsetExists**(string `$localName`): bool

Це реалізація інтерфейсу [ArrayAccess](class.arrayaccess.md),
що дозволяє маніпулювати вмістом Phar-архіву в стилі доступу до
елементів масиву.

offsetExists() запускається щоразу, коли викликається
[isset()](function.isset.md).

### Список параметрів

`localName`
Назва файлу (відносний шлях).

### Значення, що повертаються

Повертає **`true`**, якщо файл присутній в архіві та **`false`** у
інакше.

### Приклади

**Приклад #1 Приклад використання **Phar::offsetExists()****

` <?php$p u003d new Phar(dirname(__FILE__) . '/my.phar', 0, 'my.phar');$p['firstfile.txt'] u003d 'перший файл';$p[' secondfile.txt? );?> `

Результат виконання цього прикладу:

bool(true)
bool(false)

### Дивіться також

- [Phar::offsetGet()](phar.offsetget.md) - Отримати об'єкт
PharFileInfo для конкретного файлу
- [Phar::offsetSet()](phar.offsetset.md) - Зміна вмісту
файлу
- [Phar::offsetUnset()](phar.offsetunset.md) - Видалити файл з
phar-архіву
