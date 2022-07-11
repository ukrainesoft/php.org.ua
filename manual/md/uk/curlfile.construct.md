- [«CURLFile](class.curlfile.md)
- [CURLFile::getFilename »](curlfile.getfilename.md)

- [PHP Manual](index.md)
- [CURLFile](class.curlfile.md)
- Створює об'єкт CURLFile

# CURLFile::\_\_construct

#curl_file_create

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

CURLFile::\_\_construct -- curl_file_create — Створює об'єкт CURLFile

### Опис

Об'єктно-орієнтований стиль

public **CURLFile::\_\_construct**(string `$filename`, ?string
`$mime_type` u003d **`null`**, ?string `$posted_filename` u003d **`null`**)

Процедурний стиль

**curl_file_create**(string `$filename`, ?string `$mime_type` u003d
**`null`**, ?string `$posted_filename` u003d **`null`**):
[CURLFile](class.curlfile.md)

Створює об'єкт [CURLFile](class.curlfile.md), який використовується для
завантаження файлу за допомогою опції **`CURLOPT_POSTFIELDS`**.

### Список параметрів

`filename`
Шлях до файлу, який буде завантажено

`mime_type`
Mime-тип файлу.

`posted_filename`
Ім'я файлу під час надсилання методом POST.

### Значення, що повертаються

Повертає об'єкт типу [CURLFile](class.curlfile.md).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- --------------|
| 8.0.0 | `mime_type` та `posted_filename` тепер допускають значення null; раніше значенням за умовчанням був '0'. |

### Приклади

**Приклад #1 Приклад використання **CURLFile::\_\_construct()****

Об'єктно-орієнтований стиль

` <?php/* http://example.com/upload.php:<?php var_dump($_FILES); ?>*/// Створюємо дескриптор cURL$ch u003d curl_init('http://example.com/upload.php');// Створюємо об'єкт CURLFile$cfile u003d new CURLFile('cats.jpg','image/ ','test_name');// Встановлюємо дані для POST$data u003d array('test_file' u003d> $cfile);curl_setopt($ch, CURLOPT_POST,1);curl_setopt($ch, CURLOPT_$ Запускаємо дескриптор на виконання curl_exec($ch);?> `

Процедурний стиль

` <?php/* http://example.com/upload.php:<?php var_dump($_FILES); ?>*/// Створюємо дескриптор cURL$ch u003d curl_init('http://example.com/upload.php');// Створюємо об'єкт CURLFile$cfile u003d curl_file_create('cats.jpg','image/ ,'test_name');// Встановлюємо дані для POST$data u003d array('test_file' u003d> $cfile);curl_setopt($ch, CURLOPT_POST,1);curl_setopt($ch, CURLOPT_POST дескриптор на виконанняcurl_exec($ch);?> `

Результат виконання цього прикладу:

array(1) {
["test_file"]u003d>
array(5) {
["name"]u003d>
string(9) "test_name"
["type"]u003d>
string(10) "image/jpeg"
["tmp_name"]u003d>
string(14) "/tmp/phpPC9Kbx"
["error"]u003d>
int(0)
["size"]u003d>
int(46334)
}
}

**Приклад #2 Приклад використання **CURLFile::\_\_construct()** для
завантаження кількох файлів**

Об'єктно-орієнтований стиль

` <?php$request u003dcurl_init('http://www.example.com/upload.php');curl_setopt($request, CURLOPT_POST, true);curl_setopt($request, CURLOPT_SAFE_UPLOAD, true);curl_se , CURLOPT_POSTFIELDS, [    'blob[0]' u003d> new CURLFile(realpath('first-file.jpg'), 'image/jpeg'),    'blob[1]' u003d> new .txt'), 'text/plain'),    'blob[2]' u003d> new CURLFile(realpath('third-file.exe'), 'application/octet-stream'),]);curl_setopt($request , CURLOPT_RETURNTRANSFER, true);echo curl_exec($request);var_dump(curl_getinfo($request));curl_close($request); `

Процедурний стиль

` <?php// procedural$request u003dcurl_init('http://www.example.com/upload.php');curl_setopt($request, CURLOPT_POST, true);curl_setopt($request, CURLOPT_SAFE_UPLOAD, ($request, CURLOPT_POSTFIELDS, [    'blob[0]' u003d> curl_file_create(realpath('first-file.jpg'), 'image/jpeg'),    'blob[1]' u003d>'cur file.txt'), 'text/plain'),    'blob[2]' u003d> curl_file_create(realpath('third-file.exe'), 'application/octet-stream'),]);curl_setopt($request , CURLOPT_RETURNTRANSFER, true);echo curl_exec($request);var_dump(curl_getinfo($request));curl_close($request); `

Результат виконання цього прикладу:

array(26) {
["url"]u003d>
string(31) "http://www.example.com/upload.php"
["content_type"]u003d>
string(24) "text/html; charsetu003dUTF-8"
["http_code"]u003d>
int(200)
["header_size"]u003d>
int(198)
["request_size"]u003d>
int(196)
["filetime"]u003d>
int(-1)
["ssl_verify_result"]u003d>
int(0)
["redirect_count"]u003d>
int(0)
["total_time"]u003d>
float(0.060062)
["namelookup_time"]u003d>
float(0.028575)
["connect_time"]u003d>
float(0.029011)
["pretransfer_time"]u003d>
float(0.029121)
["size_upload"]u003d>
float(3230730)
["size_download"]u003d>
float(811)
["speed_download"]u003d>
float(13516)
["speed_upload"]u003d>
float(53845500)
["download_content_length"]u003d>
float(811)
["upload_content_length"]u003d>
float(3230730)
["starttransfer_time"]u003d>
float(0.030355)
["redirect_time"]u003d>
float(0)
["redirect_url"]u003d>
string(0) ""
["primary_ip"]u003d>
string(13) "0.0.0.0"
["certinfo"]u003d>
array(0) {
}
["primary_port"]u003d>
int(80)
["local_ip"]u003d>
string(12) "0.0.0.0"
["local_port"]u003d>
int(34856)
}

### Дивіться також

- [curl_setopt()](function.curl-setopt.md) - Встановлює параметр
для сеансу CURL
