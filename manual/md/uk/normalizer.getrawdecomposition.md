- [« Normalizer](class.normalizer.md)
- [Normalizer::isNormalized »](normalizer.isnormalized.md)

- [PHP Manual](index.md)
- [Normalizer](class.normalizer.md)
- Витягує властивість Decomposition_Mapping для заданого символу UTF-8

# Normalizer::getRawDecomposition

# normalizer_get_raw_decomposition

(PHP 7 \>u003d 7.3, PHP 8)

Normalizer::getRawDecomposition -- normalizer_get_raw_decomposition
Витягує властивість Decomposition_Mapping для заданого символу UTF-8

### Опис

Об'єктно-орієнтований стиль

public static **Normalizer::getRawDecomposition**(string `$string`, int
`$form` u003d Normalizer::FORM_C): ?string

Процедурний стиль

**normalizer_get_raw_decomposition**(string `$string`, int `$form` u003d
Normalizer::FORM_C): ?string

Отримує властивість Decomposition_Mapping, як визначено в Unicode
Character Database (UCD) для заданого символу UTF-8.

### Список параметрів

`string`
Рядок, який повинен являти собою одиничний символ у кодуванні
UTF-8.

### Значення, що повертаються

Повертає рядок (string), що містить властивість Decomposition_Mapping,
якщо воно є у UCD.

Повертає **`null`** якщо для символу відсутня властивість
Decomposition_Mapping.

### Приклади

**Приклад #1 Приклад використання **Normalizer::getRawDecomposition()****

` <?php$result u003d "";$strings u003d [    "a",   "\u{FFDA}",    "\u{FDFA}",    "",    "aa", ; $strings as $string) {    $decomposition u003d Normalizer::getRawDecomposition($string); // $decomposition u003d normalizer_get_raw_decomposition($string); Процедурний стиль стиль $ error_code u003d inl_get_error_code (); $error_messageu003du003d intl_get_error_message(); $string_hexu003du003dbin2hex($string); $result .u003d "---------------------
";    if ($decomposition u003du003du003d null) {        $result .u003d "'$string_hex' не має відповідності декомпозиції
" ;    }}else {        $result .u003d "'$string_hex' має відповідність декомпозиції ''' . bin2hex($decomposition) . ''''
" ;    }}    $result .u003d "error info: '$error_message' ($error_code)
";}echo $result;?> `

Результат виконання цього прикладу:

---------------------
'61' не має відповідності декомпозиції
error info: 'U_ZERO_ERROR' (0)
---------------------
'efbf9a' має відповідність декомпозиції 'e385a1'
error info: 'U_ZERO_ERROR' (0)
---------------------
'efb7ba' має відповідність декомпозиції 'd8b5d984d98920d8a7d984d984d98720d8b9d984d98ad98720d988d8b3d984d985'
error info: 'U_ZERO_ERROR' (0)
---------------------
'' не має відповідності декомпозиції
error info: 'Input string must be exactly one UTF-8 encoded code point long.: U_ILLEGAL_ARGUMENT_ERROR' (1)
---------------------
'6161' не має відповідності декомпозиції
error info: 'Input string must be exactly one UTF-8 encoded code point long.: U_ILLEGAL_ARGUMENT_ERROR' (1)
---------------------
'f5' не має відповідності декомпозиції
error info: 'Code point out of range: U_ILLEGAL_ARGUMENT_ERROR' (1)

### Дивіться також

- [Normalizer::normalize()](normalizer.normalize.md) - Нормалізація
рядки
- [Normalizer::isNormalized()](normalizer.isnormalized.md) -
Перевірити, чи переданий рядок відповідає заданій формі
нормалізації
