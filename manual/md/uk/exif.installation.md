- [« Вимоги](exif.requirements.md)
- [Налаштування під час виконання »](exif.configuration.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](exif.setup.md)
- Установка

## Установка

Щоб увімкнути підтримку exif, налаштуйте PHP з опцією
**--enable-exif**

Користувачі Windows повинні увімкнути DLL-файли `php_mbstring.dll` та
`php_exif.dll` в `php.ini`. DLL `php_mbstring.dll` повинна бути завантажена
*до* DLL `php_exif.dll`, так що налаштуйте ваш `php.ini` відповідним
чином.
