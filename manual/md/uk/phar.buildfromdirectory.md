- [« Phar::apiVersion](phar.apiversion.md)
- [Phar::buildFromIterator »](phar.buildfromiterator.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Створює phar-архів із файлів, розташованих усередині директорії

# Phar::buildFromDirectory

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

Phar::buildFromDirectory — Створює phar-архів із файлів, розташованих
всередині директорії

### Опис

public **Phar::buildFromDirectory**(string `$directory`, string
`$pattern` u003d ""): array

> **Примітка**:
>
> Для коректної роботи з об'єктами [Phar](class.phar.md) цим методом
> необхідна установка значення `php.ini` `phar.readonly` у `0`. В
> інакше, буде викинуто виняток
> [PharException](class.pharexception.md).

Заповнює phar-архів вмістом директорії. Необов'язковий другий
параметр є регулярним виразом (PCRE) і використовується для
виключення файлів. Будь-який файл, ім'я якого відповідає регулярному
виразу, буде включений, решта буде виключено. Для більш
деталізованого контролю використовуйте
[Phar::buildFromIterator()](phar.buildfromiterator.md).

### Список параметрів

`directory`
Повний або абсолютний шлях до директорії, всі файли якої мають бути
додано до архіву.

`pattern`
Необов'язковий регулярний вираз (PCRE), який використовується для
фільтрування списку файлів. До архіву будуть включені тільки ті файли, шляхи до
яким відповідають регулярному виразу.

### Значення, що повертаються

**Phar::buildFromDirectory()** повертає асоціативний масив, в
якому відображено відповідність шляху до файлу всередині архіву до шляху до файлу
у файловій системі.

### Помилки

Цей метод викидає виняток
[BadMethodCallException](class.badmethodcallexception.md) у тому
у випадку, якщо не вдалося створити екземпляр ітератора внутрішніх
директорій. Виняток [PharException](class.pharexception.md)
викидається у разі помилок збереження phar-архіву.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -----------------------------------|
| 8.1.0 | **Phar::buildFromDirectory()** більше не повертає значення **`false`**. |

### Приклади

**Приклад #1 Приклад використання **Phar::buildFromDirectory()****

`<?php// створити з псевдонімом "project.phar"$phar u003d new Phar('project.phar', 0, 'project.phar');// додати все файли директорії project в файл$ >buildFromDirectory(dirname(__FILE__) . '/project');$phar->setStub($phar->createDefaultStub('cli/index.php', 'www/index.php'));$phar2 u003d new Phar( 'project2.phar', 0, 'project2.phar');// додати всі файли директорії project в файл project2.phar, включаючи тільки php-файли$phar2->buildFromDirectory(' (' |' /\.php$/');$phar2->setStub($phar->createDefaultStub('cli/index.php', 'www/index.php'));?> `

### Дивіться також

- [Phar::buildFromIterator()](phar.buildfromiterator.md) - Створює
phar-архів з ітератора
