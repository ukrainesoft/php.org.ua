- [«
Imagick::getImageChannelDistortions](imagick.getimagechanneldistortions.md)
- [Imagick::getImageChannelKurtosis
»](imagick.getimagechannelkurtosis.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає екстремуми для одного або кількох каналів зображення

# Imagick::getImageChannelExtrema

(PECL imagick 2, PECL imagick 3)

Imagick::getImageChannelExtrema — Повертає екстремуми для одного або
кількох каналів зображення

**Увага**

Функція оголошена *УСТАРШЕНОЮ* в Imagick 3.4.4. Покладатись на цю
функцію не рекомендується.

### Опис

public **Imagick::getImageChannelExtrema**(int `$channel`): array

Отримує екстремуми для одного або кількох каналів зображення.
Повертається - асоціативний масив з ключами "minima" і
"Максима".

### Список параметрів

`channel`
Вкажіть будь-яку константу CHANNEL, яка підходить для вашого режиму
каналу. Для застосування більш ніж одного каналу об'єднайте константи
типу CHANNEL за допомогою побітових операторів. Зверніться до цього списку
[констант CHANNEL](imagick.constants.md#imagick.constants.channel).

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.
