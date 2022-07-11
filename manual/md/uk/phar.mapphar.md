- [« Phar::loadPhar](phar.loadphar.md)
- [Phar::mount »](phar.mount.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Прочитати поточний запущений phar-архів та зареєструвати його
маніфест

# Phar::mapPhar

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.0.0)

Phar::mapPhar — Прочитати поточний запущений phar-архів та
зареєструвати його маніфест

### Опис

final public static **Phar::mapPhar**(?string `$alias` u003d **`null`**, int
$offset u003d 0): bool

Цей статичний метод можна використовувати лише у заглушці завантажувача
Phar-архів з метою його ініціалізації, коли він запущений безпосередньо, або
включений до іншого скрипту.

### Список параметрів

`alias`
Псевдонім можна використовувати в обгортках `phar://`, посилаючись на цей
архів замість використання повного шляху.

`offset`
Невикористовувана змінна. Існує тільки для сумісності з
PEAR-пакет PHP_Archive.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Викидається виняток [PharException](class.pharexception.md), якщо
викликається із скрипту, в якому не виявлено токена
\_\_HALT_COMPILER(); або якщо файл недоступний для читання.

### Приклади

**Приклад #1 Приклад використання **Phar::mapPhar()****

Phar::mapPhar слід використовувати тільки всередині завантажувача заглушки
Phar-архів. Використовуйте loadPhar для завантаження зовнішнього phar на згадку.

Простий завантажувач Phar, який використовує mapPhar.

`<?phpfunction __autoload($class){    include 'phar://me.phar/' . str_replace('_', '/', $class) . '.php';}try {    Phar::mapPhar('me.phar'); include 'phar://me.phar/startup.php';} catch (PharException $e) {   echo $e->getMessage(); die('Cannot initialize Phar');}__HALT_COMPILER(); `

### Дивіться також

- [Phar::loadPhar()](phar.loadphar.md) - Завантажити phar-архів з
псевдонімом
