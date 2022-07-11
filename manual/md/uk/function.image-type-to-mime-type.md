- [«image_type_to_extension](function.image-type-to-extension.md)
- [image2wbmp »](function.image2wbmp.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Отримання Mime-типу для типу зображення, що повертається функціями
getimagesize, exif_read_data, exif_thumbnail, exif_imagetype

#image_type_to_mime_type

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

image_type_to_mime_type — Отримання типу Mime для типу зображення,
повертається функціями getimagesize, exif_read_data, exif_thumbnail,
exif_imagetype

### Опис

**image_type_to_mime_type**(int `$image_type`): string

Функція **image_type_to_mime_type()** визначає Mime-тип для константи
IMAGETYPE.

### Список параметрів

`image_type`
Одна із констант `IMAGETYPE_XXX`.

### Значення, що повертаються

Значення, що повертаються наведені нижче

| `image_type` | Значення, що повертається |
|------------------------------------------------- |---------------------------------|
| **`IMAGETYPE_GIF`** | `image/gif` |
| **`IMAGETYPE_JPEG`** | `image/jpeg` |
| **`IMAGETYPE_PNG`** | `image/png` |
| **`IMAGETYPE_SWF`** | `application/x-shockwave-flash` |
| **`IMAGETYPE_PSD`** | `image/psd` |
| **`IMAGETYPE_BMP`** | `image/bmp` |
| **`IMAGETYPE_TIFF_II`** (порядок байт intel) | `image/tiff` |
| **`IMAGETYPE_TIFF_MM`** (порядок байт motorola) | `image/tiff` |
| **`IMAGETYPE_JPC`** | `application/octet-stream` |
| **`IMAGETYPE_JP2`** | `image/jp2` |
| **`IMAGETYPE_JPX`** | `application/octet-stream` |
| **`IMAGETYPE_JB2`** | `application/octet-stream` |
| **`IMAGETYPE_SWC`** | `application/x-shockwave-flash` |
| **`IMAGETYPE_IFF`** | `image/iff` |
| **`IMAGETYPE_WBMP`** | `image/vnd.wap.wbmp` |
| **`IMAGETYPE_XBM`** | `image/xbm` |
| **`IMAGETYPE_ICO`** | `image/vnd.microsoft.icon` |
| **`IMAGETYPE_WEBP`** | `image/webp` |

**Повертані значення та Константи**

### Приклади

**Приклад #1 Приклад використання **image_type_to_mime_type()****

` <?phpheader("Content-type: " . image_type_to_mime_type(IMAGETYPE_PNG));?> `

### Примітки

> **Примітка**:
>
> Ця функція не потребує бібліотеки GD.

### Дивіться також

- [getimagesize()](function.getimagesize.md) - Отримання розміру
зображення
- [exif_imagetype()](function.exif-imagetype.md) - Determine the
type of an image
- [exif_read_data()](function.exif-read-data.md) - Читає заголовки
EXIF із файлів зображень
- [exif_thumbnail()](function.exif-thumbnail.md) - Отримує
вбудоване прев'ю зображення
