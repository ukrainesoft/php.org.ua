- [« Приклади](image.examples.md)
- [Додавання водяних знаків на зображення за допомогою альфа-каналів
»](image.examples-watermark.md)

- [PHP Manual](index.md)
- [Приклади](image.examples.md)
- Створення PNG засобами PHP

## Створення PNG засобами PHP

**Приклад #1 Створення PNG засобами PHP**

` <?phpheader("Content-type: image/png");$string u003d $_GET['text'];$im    u003d imagecreatefrompng("images/button1.png");$orange u003d imagecolorallocate($im, 22 , 210, 60);$px     u003du003d (imagesx($im) - 7.5 * strlen($string)) / 2;imagestring($im, 3, $px, 9, $string, $orange); );imagedestroy($im);?> `

Цей приклад можна було б викликати на сторінці з тегом:
`<img srcu003d"button.php?textu003dtext">`. Наведений вище скрипт
`button.php` візьме рядок ``text'` і накладе її поверх базового
зображення, яке є, в даному випадку ``images/button1.png'' і
виведе кінцеве зображення. Це дуже зручний спосіб уникнути
необхідності створення нової кнопки щоразу, коли ви хочете змінити
текст кнопки. За допомогою цього методу вона генерується динамічно.
