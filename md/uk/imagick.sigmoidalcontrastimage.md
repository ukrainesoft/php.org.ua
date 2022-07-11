- [« Imagick::shearImage](imagick.shearimage.md)
- [Imagick::sketchImage »](imagick.sketchimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Регулює контраст зображення

# Imagick::sigmoidalContrastImage

(PECL imagick 2, PECL imagick 3)

Imagick::sigmoidalContrastImage — Регулює контраст зображення

### Опис

public **Imagick::sigmoidalContrastImage**(
bool `$sharpen`,
float `$alpha`,
float `$beta`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT
): bool

Регулює контраст зображення за допомогою алгоритму нелінійного
сигмоїдального розмаїття. Збільште контраст зображення за допомогою
сигмоїдальної передавальної функції без насичення світлих ділянок або
тіней. Контрастність вказує, наскільки збільшити контраст (0 – ні;
3 – типовий; 20 – посилення); Середня точка вказує де потрапляють
середні тони в результуючому зображенні (0 - білий; 50 - середній
сірий; 100 – чорний). Встановіть різкість на **`true`** для збільшення
контрастності зображення, інакше контрастність зменшується.

Дивіться також [» Приклади ImageMagick v6 - Перетворення зображень -
Контраст сигмоїдальної
нелінійності] (url.imagemagick.usage.color_mods.sigmoidal).

### Список параметрів

`sharpen`
Якщо true, контраст збільшується, якщо false – зменшується.

`alpha`
Кількість застосовуваного розмаїття. 1 - дуже мало, 5 - значне,
20 – максимальна величина.

`beta`
Де буде середина градієнта? Це значення має бути в діапазоні від 0
до 1 – незалежно від квантового значення ImageMagick.

`channel`
До яких колірних каналів застосовуватиметься контраст.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Створення градієнтного зображення за допомогою
**Imagick::sigmoidalContrastImage()**, що підходить для плавного
змішування двох зображень разом, зі змішуванням, що визначається
контрастом та середньою точкою.**

`<?phpfunction generateBlendImage($width, $height, $contrast u003d 10, $midpoint u003d 0.5) {    $imagick u003d new Imagick(); $imagick->newPseudoImage($width, $height, 'gradient:black-white'); $quantau003du003d$imagick->getQuantumRange(); $imagick->sigmoidalContrastImage(true, $contrast, $midpoint * $quanta["quantumRangeLong"]); return $imagick;}?> `
