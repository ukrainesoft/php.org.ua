- [«CURLFile::setPostFilename](curlfile.setpostfilename.md)
- [CURLStringFile::\_\_construct »](curlstringfile.construct.md)

- [PHP Manual](index.md)
- [cURL](book.curl.md)
- Клас CURLStringFile

# Клас CURLStringFile

(PHP 8 \>u003d 8.1.0)

## Вступ

Клас **CURLStringFile** дозволяє завантажувати файл прямо із змінної.
Він схожий на [CURLFile](class.curlfile.md), але працює з вмістом
файлу, а не з його ім'ям. Цей клас або [CURLFile](class.curlfile.md)
слід використовувати для завантаження вмісту файлу за допомогою
**`CURLOPT_POSTFIELDS`**.

## Огляд класів

class **CURLStringFile** {

/\* Властивості \*/

public string `$data`;

public string `$postname`;

public string `$mime`;

/\* Методи \*/

public [\_\_construct](curlstringfile.construct.md)(string `$data`,
string `$postname`, string `$mime` u003d "application/octet-stream")

}

## Властивості

`data`
Вміст для завантаження.

`postname`
Ім'я файлу, який буде використовуватися в даних, що завантажуються.

`mime`
MIME-тип файлу (за замовчуванням `application/octet-stream`).

## Дивіться також

- [curl_setopt()](function.curl-setopt.md)
- [CURLFile](class.curlfile.md)

## Зміст

- [CURLStringFile::\_\_construct](curlstringfile.construct.md) -
Створює об'єкт CURLStringFile
