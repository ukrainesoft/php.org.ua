- [«Зумовлені константи](zlib.constants.md)
- [Функції Zlib»] (ref.zlib.md)

- [PHP Manual](index.md)
- [Zlib](book.zlib.md)
- Приклади

# Приклади

У цьому прикладі відкривається тимчасовий файл, записується рядок, а
потім двічі виводиться вміст.

**Приклад #1 Приклад використання Zlib**

` <?php$filename u003d tempnam('/tmp', 'zlibtest') . '.gz';echo "<html>
<head></head>
<body>
<pre>
";$s u003d "Тільки тест, тест, тест, тест, тест, тест, тест, тест!
";// Відкриття файлу для запису з максимальним стисненням$zp u003d gzopen($filename, "w9");// Запис рядки в файлgzwrite($zp, $s);// | файлу для читання $ zp u003d u003d gzopen ($ filename, "")"; ;echo "
";// Відкриття файлу і виведення вмісту (у другий раз)if (readgzfile($filename) !u003d strlen($s)) {     echo "Виникла помилка з| /pre>
</body>
</html>
";?> `

**Приклад #2 Робота з API інкрементальної компресії та декомпресії**

`<?php// Виконання компресії GZIP:$deflateContext u003d deflate_init(ZLIB_ENCODING_GZIP); ZLIB_NO_FLUSH);$compressed .u003d deflate_add($deflateContext, "и ещё больше данных!", ZLIB_FINISH);// Выполнение декомпрессии GZIP:$inflateContext u003d inflate_init(ZLIB_ENCODING_GZIP);$uncompressed u003d inflate_add($inflateContext, $compressed, ZLIB_NO_FLUSH) ;$uncompressed .u003d inflate_add($inflateContext, NULL, ZLIB_FINISH);echo $uncompressed;?> `

Результат виконання цього прикладу:

Дані для стиснення, більше даних та ще більше даних!
