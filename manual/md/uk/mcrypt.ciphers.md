- [«Зумовлені константи](mcrypt.constants.md)
- [Mcrypt »](ref.mcrypt.md)

- [PHP Manual](index.md)
- [Mcrypt](book.mcrypt.md)
- Шифри Mcrypt

# Шифри Mcrypt

Тут перераховані шифри, що підтримуються модулем mcrypt. Для повного
списку підтримуваних шифрів дивіться список наприкінці файлу `mcrypt.h`.
Головне правило API mcrypt-2.2.x API полягає в тому, що доступ до шифрів
з PHP здійснюється шляхом використання констант MCRYPT_ім'я_шифру. Ці
константи також працюють з AI libmcrypt-2.4.x та libmcrypt-2.5.x, але
також можна задати шифр на ім'я за допомогою функції
[mcrypt_module_open()](function.mcrypt-module-open.md).

- MCRYPT_3DES
- MCRYPT_ARCFOUR_IV (тільки для libmcrypt\>2.4.x)
- MCRYPT_ARCFOUR (тільки для libmcrypt \> 2.4.x)
- MCRYPT_BLOWFISH
- MCRYPT_CAST_128
- MCRYPT_CAST_256
- MCRYPT_CRYPT
- MCRYPT_DES
- MCRYPT_DES_COMPAT (лише для libmcrypt 2.2.x)
- MCRYPT_ENIGMA (тільки для libmcrypt \> 2.4.x, псевдонім для
MCRYPT_CRYPT)
- MCRYPT_GOST
- MCRYPT_IDEA (не вільний)
- MCRYPT_LOKI97 (тільки для libmcrypt \> 2.4.x)
- MCRYPT_MARS (тільки для libmcrypt \> 2.4.x, не вільний)
- MCRYPT_PANAMA (тільки для libmcrypt \> 2.4.x)
- MCRYPT_RIJNDAEL_128 (тільки для libmcrypt \> 2.4.x)
- MCRYPT_RIJNDAEL_192 (тільки для libmcrypt \> 2.4.x)
- MCRYPT_RIJNDAEL_256 (тільки для libmcrypt \> 2.4.x)
- MCRYPT_RC2
- MCRYPT_RC4 (тільки для libmcrypt 2.2.x)
- MCRYPT_RC6 (тільки для libmcrypt \> 2.4.x)
- MCRYPT_RC6_128 (лише для libmcrypt 2.2.x)
- MCRYPT_RC6_192 (лише для libmcrypt 2.2.x)
- MCRYPT_RC6_256 (лише для libmcrypt 2.2.x)
- MCRYPT_SAFER64
- MCRYPT_SAFER128
- MCRYPT_SAFERPLUS (тільки для libmcrypt \> 2.4.x)
- MCRYPT_SERPENT(тільки для libmcrypt \> 2.4.x)
- MCRYPT_SERPENT_128 (лише для libmcrypt 2.2.x)
- MCRYPT_SERPENT_192 (лише для libmcrypt 2.2.x)
- MCRYPT_SERPENT_256 (лише для libmcrypt 2.2.x)
- MCRYPT_SKIPJACK (тільки для libmcrypt\>2.4.x)
- MCRYPT_TEAN (лише для libmcrypt 2.2.x)
- MCRYPT_THREEWAY
- MCRYPT_TRIPLEDES (тільки для libmcrypt \> 2.4.x)
- MCRYPT_TWOFISH (для старих версій mcrypt 2.x або mcrypt \> 2.4.x)
- MCRYPT_TWOFISH128 (TWOFISHxxx доступний у нових версіях 2.x, але не в
2.4.x)
- MCRYPT_TWOFISH192
- MCRYPT_TWOFISH256
- MCRYPT_WAKE (тільки для libmcrypt\>2.4.x)
- MCRYPT_XTEA (тільки для libmcrypt \> 2.4.x)

Ви повинні (в режимах **`CFB`** та **`OFB`**) або можете (в режимі
**`CBC`**) надати ініціалізуючий вектор (IV) для обраної
функції шифрування. IV має бути унікальним і має бути однаковим
для шифрування та дешифрування. Для даних, які зберігаються в
шифрованому вигляді ви можете отримати висновок функції для індексу, під
яким дані були збережені (наприклад, MD5 хеш імені файлу). Або ви
можете передати IV разом із зашифрованими даними (див. розділ 9.3
Applied Cryptography by Schneier (ISBN 0-471-11709-9)).
