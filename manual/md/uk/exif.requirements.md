- [« Встановлення та налаштування](exif.setup.md)
- [Встановлення »](exif.installation.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](exif.setup.md)
- Вимоги

## Вимоги

Ваш PHP має бути скомпільований з опцією `--enable-exif`. Для
включення підтримки багатобайтових кодувань у тегах EXIF необхідно
увімкнути модуль [mbstring](ref.mbstring.md). Включити його можна,
скомпілювавши PHP з опцією `--enable-mbstring`.

Тільки Windows: модуль [mbstring](ref.mbstring.md) завжди повинен
бути включеним. Зверніть увагу, що модуль
[mbstring](ref.mbstring.md) повинен завантажуватися раніше, ніж EXIF
(Наступність в `php.ini`).
