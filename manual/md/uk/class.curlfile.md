- [«CurlShareHandle](class.curlsharehandle.md)
- [CURLFile::\_\_construct »](curlfile.construct.md)

- [PHP Manual](index.md)
- [cURL](book.curl.md)
- Клас CURLFile

# Клас CURLFile

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

## Вступ

Цей клас або [CURLStringFile](class.curlstringfile.md) можуть бути
використані для завантаження файлу за допомогою опції
**`CURLOPT_POSTFIELDS`**.

Десеріалізація екземплярів **CURLFile** не допускається. Починаючи з PHP
7.4.0, серіалізація заборонена насамперед.

## Огляд класів

class **CURLFile** {

/\* Властивості \*/

public string `$name` u003d "";

public string `$mime` u003d "";

public string `$postname` u003d "";

/\* Методи \*/

public [\_\_construct](curlfile.construct.md)(string `$filename`,
?string `$mime_type` u003d **`null`**, ?string `$posted_filename` u003d
**`null`**)

public [getFilename](curlfile.getfilename.md)(): string

public [getMimeType](curlfile.getmimetype.md)(): string

public [getPostFilename](curlfile.getpostfilename.md)(): string

public [setMimeType](curlfile.setmimetype.md)(string `$mime_type`):
void

public [setPostFilename](curlfile.setpostfilename.md)(string
`$posted_filename`): void

}

## Властивості

`name`
Шлях до файлу, який буде надіслано

`mime`
MIME-тип файлу (за замовчуванням `application/octet-stream`)

`postname`
Ім'я файлу при надсиланні методом POST (за замовчуванням `name`)

## Дивіться також

- [curl_setopt()](function.curl-setopt.md)
- [CURLStringFile](class.curlstringfile.md)

## Зміст

- [CURLFile::\_\_construct](curlfile.construct.md) — Створює об'єкт
CURLFile
- [CURLFile::getFilename](curlfile.getfilename.md) — Повертає ім'я
файлу на сервері
- [CURLFile::getMimeType](curlfile.getmimetype.md) — Повертає
MIME-тип файлу
- [CURLFile::getPostFilename](curlfile.getpostfilename.md) -
Повертає ім'я файлу, що надсилається POST-запитом
- [CURLFile::setMimeType](curlfile.setmimetype.md) — Встановлює
MIME-тип
- [CURLFile::setPostFilename](curlfile.setpostfilename.md) -
Встановлює ім'я файлу для надсилання методом POST
