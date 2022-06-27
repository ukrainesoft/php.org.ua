- [« iptcembed](function.iptcembed.md)
- [jpeg2wbmp »] (function.jpeg2wbmp.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Розбір двійкових IPTC даних на окремі теги

# iptcparse

(PHP 4, PHP 5, PHP 7, PHP 8)

iptcparse — Розбір двійкових даних IPTC на окремі теги

### Опис

**iptcparse**(string `$iptc_block`): array\|false

Розбирає [»IPTC](http://www.iptc.org/) дані на окремі теги.

### Список параметрів

`iptc_block`
Двійкові дані IPTC.

### Значення, що повертаються

Повертає масив значень тегів, використовуючи мітки тегів як
індексу. Повертає **`false`** у разі виникнення помилки, а також
якщо дані IPTC відсутні.

### Приклади

**Приклад #1 iptcparse() використовується спільно з
[getimagesize()](function.getimagesize.md)**

` <?php$size u003d getimagesize('./test.jpg', $info);if(isset($info['APP13'])){   $iptc u003d iptcparse($info['APP13']); var_dump($iptc);}?> `

### Примітки

> **Примітка**:
>
> Ця функція не потребує бібліотеки GD.
