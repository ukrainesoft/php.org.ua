- [« Phar::startBuffering](phar.startbuffering.md)
- [Phar::unlinkArchive »](phar.unlinkarchive.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Зупиняє буферизацію та записує всі зміни на диск

# Phar::stopBuffering

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.0.0)

Phar::stopBuffering — Зупиняє буферизацію та записує все
зміни на диск

### Опис

public **Phar::stopBuffering**(): void

Метод **Phar::stopBuffering()** використовується спільно з методом
[Phar::startBuffering()](phar.startbuffering.md).
[Phar::startBuffering()](phar.startbuffering.md) може дати
значний приріст продуктивності під час створення, чи модифікації
phar-архів з великою кількістю файлів. Зазвичай, коли додається
новий файл, або змінюється існуючий, запускається операція
перестворення phar-архіву. З увімкненою буферизацією архів буде
перестворено один раз наприкінці внесення змін.

Ця концепція працює аналогічно до транзакції в базі даних, що
дозволяє зробити поза необхідні зміни і застосувати їх одночасно,
у межах однієї операції. Така поведінка забезпечує пару методів
[Phar::startBuffering()](phar.startbuffering.md)/**Phar::stopBuffering()**.

Настроювання буферизації індивідуальні для кожного архіву. Увімкнена
буферизація для `foo.phar` ніяк не впливає на режим роботи з `bar.phar`.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

У разі проблем із записом на диск буде викинуто виняток
[PharException](class.pharexception.md).

### Приклади

**Приклад #1 Приклад використання **Phar::stopBuffering()****

` <?php$p u003d new Phar(dirname(__FILE__) . '/brandnewphar.phar', 0, 'brandnewphar.phar');$p['file1.txt'] u003d 'hi';$p->startBuffering ();var_dump($p->getStub());$p->setStub("<?phpfunction __autoload(\$class){   include 'phar://brandnewphar.phar/' . str_replace('_', ') /', \$class) . '.php';}Phar::mapPhar('brandnewphar.phar');include 'phar://brandnewphar.phar/startup.php';__HALT_COMPILER();");$p ->stopBuffering();var_dump($p->getStub());?> `

Результат виконання цього прикладу:

string(24) "<?php __HALT_COMPILER();"
string(195) "<?php
function __autoload($class)
{
include 'phar://'. str_replace('_', '/', $class);
}
Phar::mapPhar('brandnewphar.phar');
include 'phar://brandnewphar.phar/startup.php';
__HALT_COMPILER();"

### Дивіться також

- [Phar::startBuffering()](phar.startbuffering.md) - Запускає
буферизацію операцій запису, відключаючи запис змін Phar-архіву
на диск
- [Phar::isBuffering()](phar.isbuffering.md) - Перевірити, чи будуть
операції з Phar-архівом буферизовані або записані безпосередньо на диск
