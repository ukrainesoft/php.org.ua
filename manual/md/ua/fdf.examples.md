- [«Зумовлені константи](fdf.constants.md)
- [FDF »](ref.fdf.md)

- [PHP Manual](index.md)
- [FDF](book.fdf.md)
- Приклади

# Приклади

Наступний приклад показує просту обробку даних.

**Приклад #1 Обробка документа FDF**

` <?php// Откроем fdf из входной строки, предоставляемой этим модулем// Форма pdf содержит несколько полей для ввода со следующими именами:// volume, date, comment, publisher, preparer, и два чекбокса// show_publisher и show_preparer.$ fdf u003d fdf_open_string($HTTP_FDF_DATA);$volume u003d fdf_get_value($fdf, "volume");echo "Поле volume містить '<b>$volume</b>'<br />"$$da , "date");echo "Поле date містить '<b>$date</b>'<br />";$comment u003d fdf_get_value($fdf, "comment");echo "Поле comment містить '<< $comment</b>'<br />";if (fdf_get_value($fdf, "show_publisher") u003du003d "On") { $publisher u003d fdf_get_value($fdf, "publisher"); echo "Поле publisher містить '<b>$publisher</b>'<br />";} else  echo "Поле Publisher не повинно бути показано.<br>/>";if (fdf u003du003d "On") {  $preparer u003d fdf_get_value($fdf, "preparer"); echo "Поле preparer містить '<b>$preparer</b>'<br />";} else  echo "Поле preparer не мусить бути показано.<br />";fdf_close($fd
