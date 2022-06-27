- [«Gmagick::labelimage](gmagick.labelimage.md)
- [Gmagick::magnifyimage »](gmagick.magnifyimage.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Регулює рівні зображення

# Gmagick::levelimage

(PECL gmagick \>u003d Unknown)

Gmagick::levelimage — Регулює рівні зображення

### Опис

public **Gmagick::levelimage**(
float `$blackPoint`,
float `$gamma`,
float `$whitePoint`,
int `$channel` u003d Gmagick::CHANNEL_DEFAULT
):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Регулює рівні зображення, масштабуючи кольори, що потрапляють між
зазначеними білими та чорними точками, до повного доступного квантового
діапазону. Надані параметри є чорними, середніми.
та білі точки. Чорна точка вказує на темний колір зображення.
Кольори темніші за крапки чорного встановлюються на нуль. Середня точка
визначає гамма-корекцію, що застосовується до зображення. Біла точка
визначає найсвітліший колір зображення. Колір яскравіший за крапку білого
встановлюються на максимальне квантове значення.

### Список параметрів

`blackPoint`
Чорна точка зображення.

`gamma`
Значення гами.

`whitePoint`
Білий точки зображення.

`channel`
Вкажіть будь-яку константу каналу, яка дійсна для вашого режиму
каналу. Щоб застосувати до одного каналу, об'єднайте константи
типу каналу за допомогою бітових операторів. Зверніться до списку
[констант каналу](gmagick.constants.md#gmagick.constants.channel).

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md) із вирівняним зображенням.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
