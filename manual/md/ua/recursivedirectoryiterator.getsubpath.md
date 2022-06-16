- [«
RecursiveDirectoryIterator::getChildren](recursivedirectoryiterator.getchildren.md)
- [RecursiveDirectoryIterator::getSubPathname
»](recursivedirectoryiterator.getsubpathname.md)

- [PHP Manual](index.md)
- [RecursiveDirectoryIterator](class.recursivedirectoryiterator.md)
- Повертає шлях до піддиректорії

# RecursiveDirectoryIterator::getSubPath

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

RecursiveDirectoryIterator::getSubPath — Повертає шлях до піддиректорії

### Опис

public **RecursiveDirectoryIterator::getSubPath**(): string

Повертає шлях до піддиректорії щодо директорії, заданої в
конструктори.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Шлях до піддиректорії.

### Приклади

**Приклад #1 Приклад використання **getSubPath()****

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

- [RecursiveDirectoryIterator::getSubPathName()](recursivedirectoryiterator.getsubpathname.md) -
Повертає шлях до піддиректорії та ім'я файлу
- [RecursiveDirectoryIterator::key()](recursivedirectoryiterator.key.md) -
Повертає шлях та ім'я файлу поточного елемента
