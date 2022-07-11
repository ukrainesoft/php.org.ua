- [«
RecursiveDirectoryIterator::getSubPath](recursivedirectoryiterator.getsubpath.md)
- [RecursiveDirectoryIterator::hasChildren
»](recursivedirectoryiterator.haschildren.md)

- [PHP Manual](index.md)
- [RecursiveDirectoryIterator](class.recursivedirectoryiterator.md)
- Повертає шлях до піддиректорії та ім'я файлу

# RecursiveDirectoryIterator::getSubPathname

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

RecursiveDirectoryIterator::getSubPathname — Повертає шлях до
піддиректорії та ім'я файлу

### Опис

public **RecursiveDirectoryIterator::getSubPathname**(): string

Повертає шлях до піддиректорії та ім'я файлу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає шлях до піддиректорії та ім'я файлу.

### Приклади

**Приклад #1 Приклад використання **getSubPathname()****

` $directory u003d '/tmp'; $it u003d new RecursiveIteratorIterator(new RecursiveDirectoryIterator($directory)); foreach ($it as $file) {          echo 'Ім'я файлу: ' . $it->getSubPathName() . "
";          echo 'Піддиректорія: ' . $it->getSubPath() . "

";      }`

Результатом виконання цього прикладу буде щось подібне:

Ім'я файлу: fruit/apple.xml
Піддиректорія: fruit

Назва файлу: stuff.xml
Піддиректорія:

Назва файлу: veggies/carrot.xml
Піддиректорія: veggies

### Дивіться також

- [RecursiveDirectoryIterator::getSubPath()](recursivedirectoryiterator.getsubpath.md) -
Повертає шлях до піддиректорії
- [RecursiveDirectoryIterator::key()](recursivedirectoryiterator.key.md) -
Повертає шлях та ім'я файлу поточного елемента
