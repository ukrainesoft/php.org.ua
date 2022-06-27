- [« yaz_scan_result](function.yaz-scan-result.md)
- [yaz_schema »](function.yaz-schema.md)

- [PHP Manual](index.md)
- [Функції YAZ](ref.yaz.md)
- Підготовка сканування

# yaz_scan

(PHP 4 u003d 4.0.5, PECL yaz u003d 0.9.0)

yaz_scan — Підготовка сканування

### Опис

**yaz_scan**(
resource `$id`,
string `$type`,
string `$startterm`,
array `$flags` u003d ?
): void

Функція готує запит на сканування для встановленого з'єднання
за протоколом Z39.50.

Щоб надіслати запит сканування на сервер і отримати відповідь потрібно
викликати функцію [yaz_wait()](function.yaz-wait.md). Як запевняють
[yaz_wait()](function.yaz-wait.md) викличте
[yaz_error()](function.yaz-error.md) для отримання помилки та
[yaz_scan_result()](function.yaz-scan-result.md) для отримання
результату.

### Список параметрів

`id`
Дескриптор з'єднання, повернутий
[yaz_connect()](function.yaz-connect.md).

`type`
В даний час підтримується лише `rpn`.

`startterm`
Початковий елемент для сканування

Форма, в якій представлений початковий елемент сканування, задається
параметром `type`.

Синтаксис цього параметра схожий на запит RPN, який описаний для
[yaz_search()](function.yaz-search.md). Він складається з нуля чи більше
операторних налаштувань `@attr`, за якими слідує єдина лексема.

`flags`
Цей необов'язковий параметр визначає додаткову інформацію для
керування поведінкою запиту сканування. З масиву прапорів доступні
три індекси: `number` (кількість термів, що запитуються), `position`
(позиція терма) та `stepSize` (розмір кроку).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Функція PHP, яка сканує заголовки**

` <?phpfunction scan_titles($id, $startterm){ yaz_scan($id, "rpn", "@attr 1u003d4 " . $startterm); yaz_wait(); $errnou003du003dyaz_errno($id); if ($errno u003du003d 0) {    $ar u003d yaz_scan_result($id, $options); echo 'Scan ok; '; foreach ($options as $key u003d> $val) {      echo "$key u003d $val "; }   echo '<br /><table>'; while(list($key, list($k, $term, $tcount)) u003d each($ar)) {      if (empty($k)) continue; echo "<tr><td>$term</td><td>$tcount</td></tr>"; }   echo '</table>'; } else {    echo "Сканування не удалося. Помилка: " . yaz_error($id) . "<br />"; }}?> `
