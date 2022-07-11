- [« Додавання водяних знаків на зображення за допомогою
альфа-каналів](image.examples-watermark.md)
- [Функції GD та функції для роботи із зображеннями »](ref.image.md)

- [PHP Manual](index.md)
- [Приклади](image.examples.md)
- Використання imagecopymerge створити напівпрозорий водяний знак

## Використання [imagecopymerge()](function.imagecopymerge.md) створити напівпрозорий водяний знак

**Приклад #1 Використання
[imagecopymerge()](function.imagecopymerge.md) створити напівпрозорий
водяний знак**

` <?php// Загрузка штампа и фото, для которого применяется водяной знак (называется штамп или печать)$im u003d imagecreatefromjpeg('photo.jpeg');// Сначала создаём наше изображение штампа вручную с помощью GD$stamp u003d imagecreatetruecolor( 100, 70);imagefilledrectangle($stamp, 0, 0, 99, 69, 0x0000FF);imagefilledrectangle($stamp, 9, 9, 90, 60, 0xFFFFFF);imagestring($stamp, 0, 0 ', 0x0000FF);imagestring($stamp, 3, 20, 40, '(c) 2007-9', 0x0000FF);// Установка полів для штампа і отримання висоти/ mar| $sx u003d imagesx($stamp);$sy u003d imagesy($stamp);// Злиття штампа з фотографією. Прозорість 50%imagecopymerge($im, $stamp, imagesx($im) - $sx - $marge_right, imagesy($im) - $sy - $marge_bottom, 0, 0, imagesx($) , 50);// Збереження фотографії в файл і звільнення пам'ятіimagepng($im, 'photo_stamp.png');imagedestroy($im);?> `

![Використання imagecopymerge() для створення напівпрозорого водяного
знака](images/21009b70229598c6a80eef8b45bf282b-watermark-merged.png)

У цьому прикладі використовується
[imagecopymerge()](function.imagecopymerge.md) для об'єднання штампу
з нашим вихідним зображенням. За допомогою цього ми можемо встановити
прозорість нашого штампу – у нашому прикладі ми встановили його на 50%
непрозорості (opacity). На практиці це було б корисним для захисту
авторських прав, напівпрозорі водяні знаки важко видалити та дозволяють
глядачам побачити зображення.
