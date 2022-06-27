- [« $php_errormsg](reserved.variables.phperrormsg.md)
- [$argc »](reserved.variables.argc.md)

- [PHP Manual](index.md)
- [Предвизначені змінні](reserved.variables.md)
- Заголовки відповідей HTTP

# $http_response_header

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

$http_response_header — Заголовки відповідей HTTP

### Опис

Масив (array) `$http_response_header` схожий на функцию
[get_headers()](function.get-headers.md). При використанні [обгортки
HTTP](wrappers.http.md), `$http_response_header` буде заповнюватися
заголовки відповіді HTTP. `$http_response_header` буде створено в
[локальної області видимості](language.variables.scope.md).

### Приклади

**Приклад #1 Приклад `$http_response_header`**

`<?phpfunction get_contents() { file_get_contents("http://example.com"); var_dump($http_response_header);}get_contents();var_dump($http_response_header);?> `

Результатом виконання цього прикладу буде щось подібне:

array(9) {
[0]u003d>
string(15) "HTTP/1.1 200 OK"
[1]u003d>
string(35) "Date: Sat, 12 Apr 2008 17:30:38 GMT"
[2]u003d>
string(29) "Server: Apache/2.2.3 (CentOS)"
[3]u003d>
string(44) "Last-Modified: Tue, 15 Nov 2005 13:24:10 GMT"
[4]u003d>
string(27) "ETag: "280100-1b6-80bfd280""
[5]u003d>
string(20) "Accept-Ranges: bytes"
[6]u003d>
string(19) "Content-Length: 438"
[7]u003d>
string(17) "Connection: close"
[8]u003d>
string(38) "Content-Type: text/html; charsetu003dUTF-8"
}
NULL
