- [« Вимоги](imagick.requirements.md)
- [Налаштування під час виконання »](imagick.configuration.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](imagick.setup.md)
- Встановлення

## Установка

Цей модуль [»PECL](https://pecl.php.net/) не поставляється разом з
PHP.

Інформація щодо встановлення цього модуля PECL може бути знайдена у розділі
керівництва [Встановлення модулів PECL](install.pecl.md). Додаткова
інформація, така як нові версії, завантаження, вихідні файли,
інформація про розробника та CHANGELOG, може бути знайдена тут:
[»https://pecl.php.net/package/imagick](https://pecl.php.net/package/imagick).

> **Примітка**: Офіційна назва цього модуля - *imagick*.

Користувачі Windows можуть завантажити готовий файл DLL зі сторінки
[»PECL](https://windows.php.net/downloads/pecl/releases/imagick). Ці
пакети вже містять DLL-модуль (`php_imagick.dll`), який необхідно
розмістити в [extension_dir](ini.core.md#ini.extension-dir). Вони також
містять DLL-бібліотеки ImageMagick, які потрібно помістити
десь у `PATH`. Починаючи з Imagick 3.6.0, вони також містять файли
конфігурації XML в `config`; щоб використовувати їх замість вбудованих
значень за замовчуванням їх необхідно помістити в
`%USERPROFILE%/.config/ImageMagick` або, замість цього на шляху, заданому
в змінному оточенні `MAGICK_CONFIGURE_PATH`. додаткові відомості
дивіться в [» документації за файлами конфігурації
ImageMagick](http://www.imagemagick.org/script/resources.php).
