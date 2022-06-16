- [« Phar::setStub](phar.setstub.md)
- [Phar::stopBuffering »](phar.stopbuffering.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Запускає буферизацію операцій запису, відключаючи запис змін
Phar-архіву на диск

# Phar::startBuffering

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.0.0)

Phar::startBuffering — Запускає буферизацію операцій запису, вимикаючи
запис змін Phar-архіву на диск

### Опис

public **Phar::startBuffering**(): void

Метод **Phar::startBuffering()** може дати значний приріст
продуктивності при створенні, або модифікації phar-архіву з великим
кількістю файлів. Зазвичай, коли додається новий файл, або
змінюється існуючий, запускається операція перестворення phar-архіву.
З увімкненою буферизацією архів буде перестворено один раз на самому кінці
внесення змін.

Ця концепція працює аналогічно до транзакції в базі даних, що
дозволяє зробити поза необхідні зміни і застосувати їх одночасно,
у межах однієї операції. Така поведінка забезпечує пару методів
**Phar::startBuffering()**/[Phar::stopBuffering()](phar.stopbuffering.md).

Настроювання буферизації індивідуальні для кожного архіву. Увімкнена
буферизація для `foo.phar` ніяк не впливає на режим роботи з `bar.phar`.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Phar::startBuffering()****

`<?php// удалимо на всякий випадок@unlink('brandnewphar.phar');try {   $p u003d new Phar(dirname(__FILE__) . '/brandnewphar.phar', 0, );' catch (Exception $e) {    echo 'не можу створити phar:', $e;}echo 'У новому phar міститься ' . $p->count() . "записів
";$p->startBuffering();$p['file.txt'] u003d 'hi';$p['file2.txt'] u003d 'there';$p['file2.txt']->setCompressedGZ ();$p['file3.txt'] u003d 'babyface';$p['file3.txt']->setMetadata(42);$p->setStub("<?phpfunction __autoload($class){    include 'phar://myphar.phar/' . str_replace('_', '/', $class) . '.php';}Phar::mapPhar('myphar.phar');include 'phar://myphar .phar/startup.php';__HALT_COMPILER();");$p->stopBuffering();?> `

### Дивіться також

- [Phar::stopBuffering()](phar.stopbuffering.md) - Зупиняє
буферизацію та записує всі зміни на диск
- [Phar::isBuffering()](phar.isbuffering.md) - Перевірити, чи будуть
операції з Phar-архівом буферизовані або записані безпосередньо на диск
