- [«Imagick](class.imagick.md)
- [Imagick::adaptiveResizeImage »](imagick.adaptiveresizeimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Додає адаптивний фільтр розмиття до зображення

# Imagick::adaptiveBlurImage

(PECL imagick 2, PECL imagick 3)

Imagick::adaptiveBlurImage — Додає адаптивний фільтр розмиття до
зображенню

### Опис

public **Imagick::adaptiveBlurImage**(float `$radius`, float `$sigma`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT): bool

Додає адаптивний фільтр розмиття до зображення. Інтенсивність
адаптивного розмиття значно зменшується до країв зображення,
час як стандартне розмиття рівномірно розподіляється по всьому
зображенню. Цей метод доступний, якщо Imagick був скомпільований з
версією ImageMagick 6.2.9 чи старшою.

### Список параметрів

`radius`
Радіус Гауса, у пікселях, крім центрального пікселя. Якщо передано
0, то радіус буде вибрано автоматично.

`sigma`
Стандартне відхилення Гауса, у пікселях.

`channel`
Надайте будь-яку коректну для вашого режиму каналу константу. Для
застосування до більш ніж одного каналу, комбінуйте [константи
каналов](imagick.constants.md#imagick.constants.channel) за допомогою
побітових операторів. За промовчанням одно **`Imagick::CHANNEL_DEFAULT`**.
Зверніться до списку [констант
каналов](imagick.constants.md#imagick.constants.channel)

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::adaptiveBlurImage()**:**

Адаптивне розмиття зображення та відображення його у браузері.

` <?phpheader('Content-type: image/jpeg');$image u003d new Imagick('test.jpg');$image->adaptiveBlurImage(5,3);echo $image;?> `

Результатом виконання цього прикладу буде щось подібне:

![Приклад виведення : Використання
Imagick::adaptiveBlurImage()](images/c0d23d2d6769e53e24a1b3136c064577-adaptiveBlurImage.gif)

### Дивіться також

- [Imagick::blurImage()](imagick.blurimage.md) - Додає фільтр
розмиття до зображення
- [Imagick::motionBlurImage()](imagick.motionblurimage.md) -
Імітує розмиття у русі
- [Imagick::radialBlurImage()](imagick.radialblurimage.md) -
Радіальне розмиття зображення
