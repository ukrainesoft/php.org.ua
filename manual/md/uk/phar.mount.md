- [« Phar::mapPhar](phar.mapphar.md)
- [Phar::mungServer »](phar.mungserver.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Монтування зовнішнього шляху або файлу до віртуального шляху
phar-архіві

# Phar::mount

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

Phar::mount — Монтування зовнішнього шляху або файлу до віртуального шляху
phar-архіві

### Опис

final public static **Phar::mount**(string `$pharPath`, string
`$externalPath`): void

Дуже схоже на концепцію файлової системи unix по монтуванню зовнішнього.
пристрої у існуюче дерево директорій. **Phar::mount()** дозволяє
посилатися на зовнішні файли та директорії, ніби вони знаходяться всередині
архів. Це дозволяє підвищити рівень абстракції, звертаючись до зовнішніх.
конфігураційним файлам так, ніби вони є частиною архіву.

### Список параметрів

`pharPath`
Внутрішній шлях в архіві, яким необхідно примонтувати зовнішній
шлях. Це має бути неіснуючий відносний шлях усередині архіву.

`externalPath`
Шлях або URL зовнішнього файлу чи директорії

### Значення, що повертаються

Нічого не вертає. У разі виникнення помилки викидає
виняток [PharException](class.pharexception.md).

### Помилки

Викидає виняток [PharException](class.pharexception.md) у
виникнення помилок.

### Приклади

**Приклад #1 Приклад використання **Phar::mount()****

У наступному прикладі демонструється доступ до зовнішнього конфігураційного
файлу, як він знаходиться всередині архіву.

Для початку код, що міститься в архіві:

` <?php$configuration u003d simplexml_load_string(file_get_contents(    Phar::running(false) . '/config.xml')));?> `

Далі зовнішній код, що монтує файл до архіву:

`<?php// для початку налаштуємо асоціацію між абстрактним config.xml// і конкретним файлом на дискуPhar::mount('phar://config.xml', '/home/example/config.xml');/// а тепер запускаємо додатокinclude '/path/to/archive.phar';?> `

Інший метод - помістити монтуючий код у заглушку (stub) Phar-архіву.
Приклад використання конфігураційного файлу за замовчуванням, якщо
Файл конфігурації користувача не заданий:

`<?php// для початку налаштуємо зв'язок між абстрактним config.xml// і конкретним файлом на дискеif (defined('EXTERNAL_CONFIG')) {    Phar::ml if (file_exists(__DIR__ . '/extra_config.xml')) {        Phar::mount('extra.xml', __DIR__ . '/extra_config.xml'); }} else {    Phar::mount('config.xml', 'phar://' . __FILE__ . '/default_config.xml'); Phar::mount('extra.xml', 'phar://' . __FILE__ . '/default_extra.xml');}// а тепер запускаємо додатокinclude 'phar://' . __FILE__ . '/index.php';__HALT_COMPILER();?> `

... і код для завантаження цього phar-архіву:

` <?phpdefine('EXTERNAL_CONFIG', '/home/example/config.xml');// а тепер запускаємо додатокinclude '/path/to/archive.phar';?> `
