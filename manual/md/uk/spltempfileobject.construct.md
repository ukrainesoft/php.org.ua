- [« SplTempFileObject](class.spltempfileobject.md)
- [Різні класи та інтерфейси »](spl.misc.md)

- [PHP Manual](index.md)
- [SplTempFileObject](class.spltempfileobject.md)
- Створює новий об'єкт тимчасового файлу

# SplTempFileObject::\_\_construct

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

SplTempFileObject::\_\_construct — Створює новий об'єкт тимчасового файлу

### Опис

public **SplTempFileObject::\_\_construct**(int `$maxMemory` u003d 2 \* 1024
\* 1024)

Створює новий об'єкт, який представляє часовий файл.

### Список параметрів

`maxMemory`
Максимальний обсяг пам'яті (у байтах, за умовчанням дорівнює 2 МБ)
тимчасового файлу. Якщо тимчасовий файл перевищуватиме цей розмір, він буде
переміщений у файл у папці тимчасових файлів.

Якщо значення `maxMemory` негативне, буде використовуватись тільки
пам'ять. Якщо значення `maxMemory` дорівнює нулю, то пам'ять не буде
використовуватись.

### Помилки

Викидає виняток [RuntimeException](class.runtimeexception.md)
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SplTempFileObject()****

Цей приклад створює в пам'яті тимчасовий файл, який можна записати
дані та прочитати їх.

` <?php$temp u003d new SplTempFileObject();$temp->fwrite("Перший рядок
"); $ temp-> fwrite ("А це друга.
");echo "Вчасний файл записано " . $temp->ftell() . " байт.

";// Перемотка в початок і читання того, було записано$temp->rewind();foreach ($temp as $line) {   echo $line;}?> `

Результатом виконання цього прикладу буде щось подібне:

У часовий файл записано 28 байт.

Перший рядок
А це друга.

### Дивіться також

- [SplFileObject](class.splfileobject.md)
- [потоки введення-виводу PHP] (wrappers.php.md) (для `php://temp` і
`php://memory`)
