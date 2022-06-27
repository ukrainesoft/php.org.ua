- [« Функції Exif](ref.exif.md)
- [exif_read_data »](function.exif-read-data.md)

- [PHP Manual](index.md)
- [Exif Функції](ref.exif.md)
- Determine the type of an image

# exif_imagetype

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

exif_imagetype — Визначте type of an image

### Опис

**exif_imagetype**(string `$filename`): int\|false

**exif_imagetype()** зчитує початкові байти зображення та перевіряє
їхню сигнатуру.

**exif_imagetype()** може використовуватися, щоб уникнути інших викликів
[exif-функцій](ref.exif.md) з непідтримуваними аргументами. Також при
взаємодії з `$_SERVER['HTTP_ACCEPT']` можна перевіряти, чи буде
зображення відображатиметься у браузері.

### Список параметрів

`filename`
Зображення, тип якого потрібно визначити.

### Значення, що повертаються

Якщо виявлено коректну сигнатуру, функція поверне відповідну
типу зображення константи. Інакше функція поверне
**`false`**. Повертається значення те саме, що і в другому аргументі при
поверніть із функції [getimagesize()](function.getimagesize.md), однак
**exif_imagetype()** значно швидше.

Наступні певні константи представляють можливі повертання
значення функції **exif_imagetype()**:

| Значення | Константа
|----------|-------------------------------------- -----------|
| 1 | **`IMAGETYPE_GIF`** |
| 2 | **`IMAGETYPE_JPEG`** |
| 3 | **`IMAGETYPE_PNG`** |
| 4 | **`IMAGETYPE_SWF`** |
| 5 | **`IMAGETYPE_PSD`** |
| 6 | **`IMAGETYPE_BMP`** |
| 7 | **`IMAGETYPE_TIFF_II`** (порядок байт intel) |
| 8 | **`IMAGETYPE_TIFF_MM`** (порядок байт motorola) |
| 9 | **`IMAGETYPE_JPC`** |
| 10 | **`IMAGETYPE_JP2`** |
| 11 | **`IMAGETYPE_JPX`** |
| 12 | **`IMAGETYPE_JB2`** |
| 13 | **`IMAGETYPE_SWC`** |
| 14 | **`IMAGETYPE_IFF`** |
| 15 | **`IMAGETYPE_WBMP`** |
| 16 | **`IMAGETYPE_XBM`** |
| 17 | **`IMAGETYPE_ICO`** |
| 18 | **`IMAGETYPE_WEBP`** |

**Константи Imagetype**

> **Примітка**:
>
> У випадках, коли неможливо рахувати кількість байтів із файлу
> достатнє визначення типу зображення, функція
> **exif_imagetype()** викличе попередження рівня **`E_NOTICE`** та
> поверне **`false`**.

### Список змін

| Версія | Опис |
|--------|---------------------------|
| 7.1.0 | Додано підтримку WebP. |

### Приклади

**Приклад #1 Приклад використання **exif_imagetype()****

` <?phpif (exif_imagetype('image.gif') !u003d IMAGETYPE_GIF) {    echo 'Картинка не gif';}?> `

### Дивіться також

- [image_type_to_mime_type()](function.image-type-to-mime-type.md) -
Отримання Mime-типу для типу зображення, що повертається функціями
getimagesize, exif_read_data, exif_thumbnail, exif_imagetype
- [getimagesize()](function.getimagesize.md) - Отримання розміру
зображення
