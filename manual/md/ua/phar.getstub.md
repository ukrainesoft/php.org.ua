- [« Phar::getSignature](phar.getsignature.md)
- [Phar::getSupportedCompression »](phar.getsupportedcompression.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Отримати завантажувач PHP або завантажувач заглушки Phar-архіву

# Phar::getStub

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.0.0)

Phar::getStub — Отримати завантажувач PHP або завантажувач заглушки
Phar-архіву

### Опис

public **Phar::getStub**(): string

Phar-архіви містять початкове завантаження або заглушку (`stub`),
написану на PHP, який запускається при запуску архіву, коли його
підключають через include:

`<?phpinclude ''myphar.phar';?> `

або просто запускають:

php myphar.phar

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рядок із вмістом початкового завантажувача (заглушки)
поточного Phar-архіву.

### Помилки

Викидає виняток [RuntimeException](class.runtimeexception.md),
якщо з будь-яких причин не може отримати текст завантажувача.

### Приклади

**Приклад #1 Приклад використання **Phar::getStub()****

` <?php$p u003d new Phar('/path/to/my.phar', 0, 'my.phar');echo$$->getStub();echo "u003du003dNEXTu003du003d
";$p->setStub("<?phpfunction __autoload($class){   include 'phar://' . str_replace('_', '/', $class);}Phar::mapPhar('myphar.phar ');include 'phar://myphar.phar/startup.php';__HALT_COMPILER(); ?>");echo $p->getStub();?> `

Результат виконання цього прикладу:

<?php __HALT_COMPILER(); ?>
u003du003dNEXTu003du003d
<?php
function __autoload($class)
{
include 'phar://'. str_replace('_', '/', $class);
}
Phar::mapPhar('myphar.phar');
include 'phar://myphar.phar/startup.php';
__HALT_COMPILER(); ?>

### Дивіться також

- [Phar::setStub()](phar.setstub.md) - Встановити завантажувач або
завантажувальну заглушку в Phar-архів
- [Phar::createDefaultStub()](phar.createdefaultstub.md) - Створити
заглушку у форматі phar-архіву
