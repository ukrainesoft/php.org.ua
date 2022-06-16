- [«imageistruecolor](function.imageistruecolor.md)
- [imagelayereffect »](function.imagelayereffect.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Виводить зображення у браузер або пише у файл

#imagejpeg

(PHP 4, PHP 5, PHP 7, PHP 8)

imagejpeg — Виводить зображення до браузера або пише файл

### Опис

**imagejpeg**([GdImage](class.gdimage.md) `$image`,
resource\|string\|null `$file` u003d **`null`**, int `$quality` u003d -1): bool

Функція **imagejpeg()** створює файл JPEG із зображення `image`.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`file`
Шлях, або відкритий потоковий ресурс (який автоматично закривається
після завершення функції), щоб зберегти файл. Якщо не встановлено або
дорівнює **`null`**, зображення буде виведено в потік виведення у бінарному
вигляді.

`quality`
Необов'язковий параметр, і може набувати значення в діапазоні від 0
(низька якість, маленький розмір файлу) до 100 (висока якість,
великий розмір файлу). За замовчуванням (`-1`) використовується якість IJG
(близько 75).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

**Застереження**

Однак, якщо libgd не може вивести зображення, ця функція поверне
**`true`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Виведення JPEG-зображень у браузер**

`<?php// Створюємо пусте зображення і додаємо текст$im u003d imagecreatetruecolor(120, 20);$text_color u003d imagecolorallocate($im, 233, 14, 91)   Simple Text String', $text_color);// Встановлюємо тип вмісту в заголовок, в даному випадкуimage/jpegheader('Content-Type:image/jpeg'); im);?> `

Результатом виконання цього прикладу буде щось подібне:

![Приклад виведе зображення
JPEG](images/21009b70229598c6a80eef8b45bf282b-imagejpeg.jpg)

**Приклад #2 Збереження зображення JPEG у файл**

`<?php// Створюємо пусте зображення і додаємо текст$im u003d imagecreatetruecolor(120, 20);$text_color u003d imagecolorallocate($im, 233, 14, 91)   Simple Text String', $text_color);// Зберігаємо зображення в 'simpletext.jpg'imagejpeg($im, 'simpletext.jpg');// Звільняємо пам'ятьimagedestroy($im);?> `

**Приклад #3 Висновок JPEG-зображення з 75% якістю в браузер**

`<?php// Створюємо пусте зображення і додаємо текст$im u003d imagecreatetruecolor(120, 20);$text_color u003d imagecolorallocate($im, 233, 14, 91)   Simple Text String', $text_color);// Встановлюємо тип вмісту в заголовок, в даному випадку image/jpegheader('Content-Type: image/jpeg'); %imagejpeg($im, NULL, 75);// Звільняємо пам'ятьimagedestroy($im);?> `

### Примітки

> **Примітка**:
>
> Якщо потрібно вивести Progressive JPEG (прогресивне уявлення
> даних), необхідно використовувати функцію
> [imageinterlace()](function.imageinterlace.md) для активації
> відповідного режиму.

### Дивіться також

- [imagepng()](function.imagepng.md) - Виведення PNG зображення в
браузер або файл
- [imagegif()](function.imagegif.md) - Виводить зображення до браузера
або пише у файл
- [imagewbmp()](function.imagewbmp.md) - Виводить зображення на
браузер або пише у файл
- [imageinterlace()](function.imageinterlace.md) - Увімкнення або
вимкнення інтерлейсингу
- [imagetypes()](function.imagetypes.md) - Повертає список типів
зображень, підтримуваних PHP збиранням
