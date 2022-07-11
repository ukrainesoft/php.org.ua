- [« streamWrapper::dir_opendir](streamwrapper.dir-opendir.md)
- [streamWrapper::dir_rewinddir »](streamwrapper.dir-rewinddir.md)

- [PHP Manual](index.md)
- [streamWrapper](class.streamwrapper.md)
- Читання запису з дескриптора директорії

# streamWrapper::dir_readdir

(PHP 4 \>u003d 4.3.2, PHP 5, PHP 7, PHP 8)

streamWrapper::dir_readdir — Читання запису з дескриптора директорії

### Опис

public **streamWrapper::dir_readdir**(): string

Цей метод викликається у процесі виконання
[readdir()](function.readdir.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повинна повертати рядок (string), який представляє ім'я наступного файлу,
або **`false`**, якщо наступного файлу немає.

> **Примітка**:
>
> Значення, що повертається, буде наведено до типу string.

### Помилки

Викликає помилку рівня **`E_WARNING`**, якщо виклик до цього методу не
удався (наприклад, не реалізований).

### Приклади

**Приклад #1 Отримання списку файлів із tar-архівів**

` <?phpclass streamWrapper {    protected $fp; public function dir_opendir($path, $options) {        $url u003dparse_url($path); $pathu003du003d$url["host"] . $url["path"]; if (!is_readable($path)) {             trigger_error("Не можу прочитати $path ", E_USER_NOTICE); return false; }        if (!is_file($path)) {             trigger_error("$path не є файлом", E_USER_NOTICE); return false; }        $this->fp u003dfopen($path, "rb"); return true; }    public function dir_readdir() {         // Вилучення заголовка        $header      u003d fread($this-> $datau003du003dunpack("a100filename/a8mode/a8uid/a8gid/a12size/a12mtime/a8checksum/a1filetype/a100link/a100linkedfile", $header); // Прибираємо зайві пробіли в імені файла і його розмірі        $filename    u003d trim($data["filename"]); // Немає ? файлу? Значить ми дійшли до кінця архіву (! $ filename) {{            return false; }        $octal_bytes u003d trim($data["size"]); // Розмір файлу визначений в восьмеричній системі        $bytes       u003du003doctdec($octal_bytes); // tar? if ($rest > 0) {             $bytes      +u003d 512 - $rest; }         // Переміщуємося всередині файла        fseek($this->fp, $bytes, SEEK_CUR); return $filename; }    public function dir_closedir() {        return fclose($this->fp); }    public function dir_rewinddir() {        return fseek($this->fp, 0, SEEK_SET); }}stream_wrapper_register("tar", "streamWrapper");$handle u003d opendir("tar://example.tar");while (false !u003du003d ($file u003d readdir($handle))) {    var_dump file);}echo "Перемотання в початок..
";rewind($handle);var_dump(readdir($handle));closedir($handle);?> `

Результатом виконання цього прикладу буде щось подібне:

string(13) "construct.xml"
string(16) "dir-closedir.xml"
string(15) "dir-opendir.xml"
string(15) "dir-readdir.xml"
string(17) "dir-rewinddir.xml"
string(9) "mkdir.xml"
string(10) "rename.xml"
string(9) "rmdir.xml"
string(15) "stream-cast.xml"
string(16) "stream-close.xml"
string(14) "stream-eof.xml"
string(16) "stream-flush.xml"
string(15) "stream-lock.xml"
string(15) "stream-open.xml"
string(15) "stream-read.xml"
string(15) "stream-seek.xml"
string(21) "stream-set-option.xml"
string(15) "stream-stat.xml"
string(15) "stream-tell.xml"
string(16) "stream-write.xml"
string(10) "unlink.xml"
string(12) "url-stat.xml"
Rewinding.
string(13) "construct.xml"

### Дивіться також

- [readdir()](function.readdir.md) - Отримує елемент каталогу
його дескриптору
