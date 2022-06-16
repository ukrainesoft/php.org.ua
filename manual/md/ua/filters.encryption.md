- [« Компресійні фільтри](filters.compression.md)
- [Список транспортних протоколів, що підтримуються »](transports.md)

- [PHP Manual](index.md)
- [Список доступних фільтрів](filters.md)
- Шифруючі фільтри

## Шифруючі фільтри

Шифруючі фільтри дуже добре підходять для шифрування файлів та потоків.

## mcrypt.\* та mdecrypt.\*

**Увага**

Ця можливість була оголошена *УСТАРШЕНОЮ*, починаючи з PHP 7.1.0.
Вкрай не рекомендується покладатися на цю можливість у майбутньому.

`mcrypt.*` та `mdecrypt.*` забезпечують симетричне шифрування та
дешифрування за допомогою libmcrypt. Обидва набори фільтрів підтримують ті
ж алгоритми, як і [модуль mcrypt](ref.mcrypt.md) як
`mcrypt.ciphername`, де `ciphername` - це назва шифру, якби
воно передавалося функції
[mcrypt_module_open()](function.mcrypt-module-open.md). Також доступні
наступні п'ять параметрів:

| Параметр | Обов'язковий? | За замовчуванням | Приклад значення |
|----------------|-------------|------------------ ----------------|--------------------------------- ----------------------------|
| mode | Ні | cbc | cbc, cfb, ecb, nofb, ofb, stream |
| algorithms_dir | Ні | ini_get('mcrypt.algorithms_dir') | Шлях до модулів алгоритмів
| modes_dir | Ні | ini_get('mcrypt.modes_dir') | Шлях до модулів режимів
| iv | Так | N/A | Зазвичай 8, 16 або 32 байти бінарних даних. залежить від шифру |
| key | Так | N/A | Зазвичай 8, 16 або 32 байти бінарних даних. залежить від шифру |

**Параметри фільтра mcrypt**

**Приклад #1 Шифрування/розшифровка за допомогою Blowfish**

`<?php// приймемо, що $key |уже сформований$iv_size u003d mcrypt_get_iv_size(MCRYPT_BLOWFISH, MCRYPT_MODE_CBC);$iv u003d mcrypt_create_iv($iv );fwrite($fp, $iv);$opts u003d array('mode'u003d>'cbc','iv'u003d>$iv, 'key'u003d>$key);stream_filter_append($fp, 'mcrypt. blowfish', STREAM_FILTER_WRITE, $opts);fwrite($fp, 'message to encrypt');fclose($fp);//розшифровка...$fp u003dfopen('encrypted-file.enc', 'rb ;$iv u003d fread($fp, $iv_size u003d mcrypt_get_iv_size(MCRYPT_BLOWFISH, MCRYPT_MODE_CBC));$opts u003d array('mode'u003d>'cbc','iv'u003d>$iv,> stream_filter_append($fp, 'mdecrypt.blowfish', STREAM_FILTER_READ, $opts);$data u003d rtrim(stream_get_contents($fp));//trims off null paddingfclose($f)

**Приклад #2 Шифрування файлу за допомогою AES-128 CBC з SHA256 HMAC**


