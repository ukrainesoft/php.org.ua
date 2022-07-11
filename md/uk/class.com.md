- [« Масиви та властивості COM у стилі
масивів](com.examples.arrays.md)
- [com::\_\_construct »](com.construct.md)

- [PHP Manual](index.md)
- [COM] (book.com.md)
- Клас com

# Клас com

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

## Вступ

Клас com дозволяє створювати екземпляри OLE-сумісного COM-об'єкта,
викликати його методи та отримувати доступ до його властивостей.

## Огляд класів

class **com** extends [variant](class.variant.md) {

/\* Методи \*/

public [\_\_construct](com.construct.md)(
string `$module_name`,
array\|string\|null `$server_name` u003d **`null`**,
int `$codepage` u003d **`CP_ACP`**,
string `$typelib` u003d ""
)

}

## Перевантажені методи

Об'єкти, що повертаються, є перевантаженими, тобто PHP не бачить
будь-яких фіксованих методів, як це відбувається зі звичайними
класами. Натомість властивості та доступ до методів передається через COM.

PHP автоматично визначає методи, які звертаються до властивостей
посиланням і автоматично перетворять стандартні змінні PHP на вигляд,
який можна передавати за посиланням. Це означає, що ви можете викликати
методи не вносячи будь-яких доповнень до свого коду.

## Приклади використання com

**Приклад #1 Перший приклад**

` <?php// запускаємо word$word u003d new com("word.application") or die("Неможливо створити примірник Word");echo "Завантажений Word, версія {$word->Version}
";//робимо його активним окном$word->Visible u003d 1;//відкриваємо порожній документ$word->Documents->Add();//Що то з ним робимо$word->Selection->TypeText("Це перевірка...");$word->Documents[1]->SaveAs("Берисний тест.doc");//закриваємо word$word->Quit();//вивільняємо ресурси об'єкта$word u003d null;? > `

**Приклад #2 Другий приклад**

` <?php$conn u003d new com("ADODB.Connection") ordie("Cannot start ADO");$conn->Open("Provideru003dSQLOLEDB; Data Sourceu003dlocalhost;Initial Catalogu003ddatabase; User IDu003d user; Passwordu003dpassword");$rs u003d $conn->Execute("SELECT * FROM sometable"); // Набір записів$num_columns u003d $rs->Fields->Count();echo $num_columns . "
";for ($iu003d0; $i < $num_columns; $i++) {    $fld[$i] u003d $rs->Fields($i);}$rowcount u003d 0;while (!$rs->EOF ) {    for ($iu003d0; $i < $num_columns; $i++) {        echo $fld[$i]->value . " ";  o  } 
";   $rowcount++;              // збільшуємо лічильник рядків    $rs->MoveNext();}$rs->Close();$conn->n||

## Зміст

- [com::\_\_construct](com.construct.md) - Конструктор класу com
