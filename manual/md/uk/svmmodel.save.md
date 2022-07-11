- [« SVMModel::predict](svmmodel.predict.md)
- [SVN »](book.svn.md)

- [PHP Manual](index.md)
- [SVMModel](class.svmmodel.md)
- Зберегти готову модель у файл

# SVMModel::save

(PECL svm \>u003d 0.1.0)

SVMModel::save — Зберегти готову модель у файл

### Опис

public **SVMModel::save**(string `$filename`): bool

Зберігає готову модель файлу.

### Список параметрів

`filename`
Назва файлу для збереження моделі.

### Значення, що повертаються

У разі виникнення помилки викидає SVMException. В разі
успішного виконання повертає **`true`**.

### Дивіться також

- [SVMModel::load()](svmmodel.load.md) - Завантажує збережену
модель SVM
