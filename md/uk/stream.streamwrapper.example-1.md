- [« Приклади](stream.examples.md)
- [php_user_filter »](class.php-user-filter.md)

- [PHP Manual](index.md)
- [Приклади](stream.examples.md)
- приклад класу, зареєстрованого як обгортка потоку

## Приклад класу, зареєстрованого як обгортка потоку

Приклад нижче реалізує обробник протоколу var://, який дозволяє
читати/писати в іменовану глобальну змінну, використовуючи стандартні
потокові функції, що працюють із файловою системою, такі як
[fread()](function.fread.md). Протокол var:// під час передачі URL
"var://foo" читатиме/писати з/в $GLOBALS\["foo"\].

**Приклад #1 Потік для читання/запису глобальних змінних**

`<?phpclass VariableStream {    var $position; var $varname; function stream_open($path, $mode, $options, &$opened_path)    {        $url u003d parse_url($path); $this->varname u003d $url["host"]; $this->positionu003du003d0; return true; }   function stream_read($count)    {        $ret u003d substr($GLOBALS[$this->varname], $this->position, $count); $this->position+u003du003dstrlen($ret); return $ret; }   function stream_write($data)   {        $left u003d substr($GLOBALS[$this->varname], 0, $this->position); $rightu003d substr($GLOBALS[$this->varname], $this->position + strlen($data)); $GLOBALS[$this->varname] u003d $left . $data . $right; $this->position+u003du003dstrlen($data); return strlen($data); }   function stream_tell()    {        return $this->position; }    function stream_eof()    {        return $this->position >u003d strlen($GLOBALS[$this->varname]); }    function stream_seek($offset, $whence)    {        switch ($whence) {            case SEEK_SET:                if ($offset < strlen($GLOBALS[$this->varname]) && $offset >u003d 0) {                     $this->position u003d$offset; return true; } else {                      return false; }                  break; case SEEK_CUR:                if ($offset >u003d 0) {          | return true; } else {                      return false; }                  break; case SEEK_END:                if (strlen($GLOBALS[$this->varname]) + $offset >u003d 0) {                     $this->position u003d strlen($GLOBALS[$this->varname]) + $offset; return true; } else {                      return false; }                  break; default: Return False; }  |function stream_metadata($path, $option, $var)   {|                                                             $varname u003d $url["host"]; if(!isset($GLOBALS[$varname])) {                $GLOBALS[$varname] u003d ''; }             return true; }    return false; }}stream_wrapper_register("var", "VariableStream")   oror die("Не удалося зареєструвати обертку");$myvar u003d "";$fp u003d fopen("var://myvar", r+"); fp, "line1
");fwrite($fp, "line2
");fwrite($fp, "line3
");rewind($fp);while (!feof($fp)) {   echo fgets($fp);}fclose($fp);var_dump($myvar);?> `

Результат виконання цього прикладу:

line1
line2
line3
string(18) "line1
line2
line3
"
