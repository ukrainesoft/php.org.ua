- [«Зумовлені константи](yaz.constants.md)
- [Функції YAZ »](ref.yaz.md)

- [PHP Manual](index.md)
- [YAZ](book.yaz.md)
- Приклади

# Приклади

PHP/YAZ зберігає список з'єднань з адресатами (Z-Асоціація). Ресурс же
надає з'єднання з адресатом.

Приклад нижче демонструє особливість паралельного пошуку API. Якщо
аргументи не передано, виводиться форма запиту; інакше (передані
аргументи) відбувається пошук за адресами, вказаними в масиві `host`.

**Приклад #1 Паралельний пошук за допомогою Yaz**

` <?php$hostu003d$_REQUEST[host];$queryu003d$_REQUEST[query];$num_hosts u003d count($host);if (empty($query) || count($host) u003du003d 0) { echo '<form methodu003d"get">    <input typeu003d"checkbox"    nameu003d"host[]"valueu003d"bagel.indexdata.dk/gils" />        "Тест []" valueu003d"localhost:9999/Default" />        Локальний тест| Бібліотека Конгресу                        <<<<< >    ';} else {    echo 'Ви шукали ' . htmlspecialchars($query) . '<br />'; for ($i u003d 0; $i < $num_hosts; $i++) {        $id[] u003d yaz_connect($host[$i]); yaz_syntax($id[$i], "usmarc"); yaz_range($id[$i], 1, 10); yaz_search($id[$i], "rpn", $query); }   yaz_wait(); for ($i u003d 0; $i < $num_hosts; $i++) {        echo '<hr />' . $host[$i] . ':'; $erroru003du003dyaz_error($id[$i]); if (!empty($error)) {             echo "Помилка: $error"; } else {             $hits u003d yaz_hits($id[$i]); echo "Всього результатів $hits"; }        echo '<dl>'; for ($p u003d 1; $p <u003d 10;$$++) {            $rec u003d yaz_record($id[$i], $p, "string"); if (empty($rec)) continue; echo "<dt><b>$p</b></dt><dd>"; echo nl2br($rec); echo "</dd>"; }        echo '</dl>'; }}?> `
