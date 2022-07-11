- [« Imagick::thresholdImage](imagick.thresholdimage.md)
- [Imagick::tintImage »](imagick.tintimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Змінює розмір зображення

# Imagick::thumbnailImage

(PECL imagick 2, PECL imagick 3)

Imagick::thumbnailImage — Змінює розмір зображення

### Опис

public **Imagick::thumbnailImage**(
int `$columns`,
int `$rows`,
bool `$bestfit` u003d **`false`**,
bool `$fill` u003d **`false`**,
bool `$legacy` u003d **`false`**
): bool

Змінює розмір зображення до заданих розмірів та видаляє всі пов'язані
профілі. Мета полягає в тому, щоб створювати мініатюри зображень,
відповідні для відображення в Інтернеті. Якщо як третій
параметра встановлено значення **`true`**, тоді параметри стовпців та
рядки використовуються як максимальні для кожної сторони. Обидві сторони
будуть зменшені доти, доки вони не стануть рівними або менше, ніж
параметр, вказаний для сторони.

> **Примітка**: Поводження параметра `bestfit` було змінено в Imagick
>3.0.0. До цієї версії при зміні зображення розміром 200x150
> 400×300 ніяких операцій не відбувалося. В Imagick 3.0.0 і далі
> зображення буде масштабовано до розмірів 400x300, оскільки це
> найкраще відповідає ("best fit") даним розмірам. Якщо
> використовується параметр `bestfit`, то ширина та висота також повинні бути
> визначено.

### Список параметрів

`columns`
Ширина зображення.

`rows`
Висота зображення.

`bestfit`
Визначає, чи слід примусово встановлювати максимальні
значення.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::thumbnailImage()****

` phpfunction thumbnailImage($imagePath) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->setbackgroundcolor('rgb(64, 64, 64)'); $imagick->thumbnailImage(100, 100, true, true); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
