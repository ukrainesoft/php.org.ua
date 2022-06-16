- [« Встановлення та налаштування](mcrypt.setup.md)
- [Встановлення »](mcrypt.installation.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](mcrypt.setup.md)
- Вимоги

## Вимоги

Ці функції працюють використовуючи
[»mcrypt](http://mcrypt.sourceforge.net/). Для того, щоб використовувати
їх, завантажте `libmcrypt-x.x.tar.gz` з
[»http://mcrypt.sourceforge.net/](http://mcrypt.sourceforge.net/) та
дотримуйтесь інструкцій із встановлення.

Вам буде потрібно libmcrypt версії 2.5.6 або вище.

Користувачі Windows можуть знайти бібліотеку в бінарному релізі PHP 5.2
для Windows. Бінарний реліз PHP 5.3 для Windows використовує статичну
версію бібліотеки MCrypt, DLL файл не потрібен.

Якщо ви використовуєте libmcrypt 2.4.x або вище, підтримуються такі
додаткові блокові алгоритми: CAST, LOKI97, RIJNDAEL, SAFERPLUS,
SERPENT і наступні шифри потоків: ENIGMA (crypt), PANAMA, RC4 and
WAKE. З libmcrypt 2.4.x або вище також доступний інший режим шифрування:
nOFB.
