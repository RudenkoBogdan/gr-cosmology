# 7. Решение Шварцшильда и классические тесты

Через месяц после публикации уравнений Эйнштейна, в январе 1916 г., Карл Шварцшильд
нашёл их первое точное решение — поле вне сферически-симметричного тела. Это решение
описывает гравитацию Солнца, Земли, нейтронных звёзд и невращающихся чёрных дыр.
В этой главе мы выведем метрику Шварцшильда, докажем теорему Биркгофа о её
единственности, изучим геодезические — орбиты планет и лучи света — и получим
классические тесты ОТО: прецессию перигелия Меркурия, отклонение света Солнцем
и задержку Шапиро. Всюду \(c = 1\), а \(G\) выписывается явно.

## 7.1. Сферическая симметрия

Пространство-время **сферически симметрично**, если его группа изометрий содержит
\(SO(3)\), орбиты которой — двумерные сферы. Площадь сферы-орбиты определяет
**площадную радиальную координату** \(r\): \(A = 4\pi r^2\). Подходящим выбором
остальных координат самая общая сферически-симметричная метрика приводится к виду

\begin{equation}
\d s^2 = -e^{2\alpha(t,r)}\,\d t^2 + e^{2\beta(t,r)}\,\d r^2 + r^2\,\d\Omega^2,
\qquad \d\Omega^2 = \d\theta^2 + \sin^2\theta\,\d\phi^2 .
\label{eq:spherical-ansatz}
\end{equation}

(Перекрёстный член \(\d t\,\d r\) устраняется заменой \(t \to t'(t,r)\); член
\(\d t\,\d\theta\) запрещён симметрией: он выделял бы направление на сфере.) Если
метрика к тому же **статична**, \(\alpha\) и \(\beta\) не зависят от \(t\).

## 7.2. Вывод метрики

Найдём символы Кристоффеля метрики \(\eqref{eq:spherical-ansatz}\) при \(\alpha = \alpha(r)\),
\(\beta = \beta(r)\) — например, методом лагранжиана из [главы 5](05-equivalence.md).
Ненулевые (с точностью до симметрии по нижним индексам; штрих — \(\d/\d r\)):

\begin{equation}
\begin{aligned}
&\Gamma^t_{tr} = \alpha', \quad
\Gamma^r_{tt} = \alpha' e^{2(\alpha-\beta)}, \quad
\Gamma^r_{rr} = \beta', \quad
\Gamma^r_{\theta\theta} = -r e^{-2\beta}, \quad
\Gamma^r_{\phi\phi} = -r e^{-2\beta}\sin^2\theta,\\
&\Gamma^\theta_{r\theta} = \Gamma^\phi_{r\phi} = \frac1r, \quad
\Gamma^\theta_{\phi\phi} = -\sin\theta\cos\theta, \quad
\Gamma^\phi_{\theta\phi} = \cot\theta .
\end{aligned}
\label{eq:christoffel}
\end{equation}

??? calc "Вычисления"

    **Шаг 1. Лагранжиан геодезических.** Для метрики \(\eqref{eq:spherical-ansatz}\) со статическими \(\alpha(r)\), \(\beta(r)\) берём
    \(\mathcal L = g_{\mu\nu}\dot x^\mu\dot x^\nu\) (точка — \(\d/\d\lambda\)):

    \[
    \mathcal L = -e^{2\alpha}\dot t^2 + e^{2\beta}\dot r^2 + r^2\dot\theta^2 + r^2\sin^2\theta\,\dot\phi^2 .
    \]

    Уравнения Эйлера–Лагранжа \(\frac{\d}{\d\lambda}\frac{\pd\mathcal L}{\pd\dot x^\mu} - \frac{\pd\mathcal L}{\pd x^\mu} = 0\),
    приведённые к виду \(\ddot x^\mu + \Gamma^\mu_{\alpha\beta}\dot x^\alpha\dot x^\beta = 0\), дают символы Кристоффеля.
    Перекрёстный член \(2\Gamma^\mu_{\alpha\beta}\dot x^\alpha\dot x^\beta\) (\(\alpha\ne\beta\)) входит с множителем 2 из-за симметрии.

    **Шаг 2. Уравнение для \(t\).** \(\pd\mathcal L/\pd t = 0\), поэтому
    \(\frac{\d}{\d\lambda}\left(-2e^{2\alpha}\dot t\right) = -2e^{2\alpha}\left(\ddot t + 2\alpha'\dot r\,\dot t\right) = 0\)
    (использовали \(\frac{\d}{\d\lambda}e^{2\alpha} = 2\alpha'\dot r\,e^{2\alpha}\)). Отсюда

    \[
    \ddot t + 2\alpha'\,\dot t\,\dot r = 0
    \quad\Longrightarrow\quad
    \Gamma^t_{tr} = \Gamma^t_{rt} = \alpha' .
    \]

    **Шаг 3. Уравнение для \(r\).**

    \[
    \begin{aligned}
    &\frac{\d}{\d\lambda}\left(2e^{2\beta}\dot r\right) = 2e^{2\beta}\left(\ddot r + 2\beta'\dot r^2\right),\\
    &\frac{\pd\mathcal L}{\pd r} = -2\alpha' e^{2\alpha}\dot t^2 + 2\beta' e^{2\beta}\dot r^2 + 2r\dot\theta^2 + 2r\sin^2\theta\,\dot\phi^2 .
    \end{aligned}
    \]

    Вычитаем и делим на \(2e^{2\beta}\):

    \[
    \ddot r + \alpha' e^{2(\alpha-\beta)}\dot t^2 + \beta'\dot r^2 - r e^{-2\beta}\dot\theta^2 - r e^{-2\beta}\sin^2\theta\,\dot\phi^2 = 0,
    \]

    откуда читаем \(\Gamma^r_{tt} = \alpha' e^{2(\alpha-\beta)}\), \(\Gamma^r_{rr} = \beta'\), \(\Gamma^r_{\theta\theta} = -re^{-2\beta}\),
    \(\Gamma^r_{\phi\phi} = -re^{-2\beta}\sin^2\theta\).

    **Шаг 4. Угловые уравнения.** Для \(\theta\): \(\frac{\d}{\d\lambda}(2r^2\dot\theta) - 2r^2\sin\theta\cos\theta\,\dot\phi^2 = 0\);
    для \(\phi\) (\(\pd\mathcal L/\pd\phi = 0\)): \(\frac{\d}{\d\lambda}(2r^2\sin^2\theta\,\dot\phi) = 0\). Раскрывая производные и деля на
    \(2r^2\) и \(2r^2\sin^2\theta\):

    \[
    \ddot\theta + \frac{2}{r}\dot r\dot\theta - \sin\theta\cos\theta\,\dot\phi^2 = 0,
    \qquad
    \ddot\phi + \frac{2}{r}\dot r\dot\phi + 2\cot\theta\,\dot\theta\dot\phi = 0 .
    \]

    Значит, \(\Gamma^\theta_{r\theta} = \Gamma^\phi_{r\phi} = 1/r\), \(\Gamma^\theta_{\phi\phi} = -\sin\theta\cos\theta\), \(\Gamma^\phi_{\theta\phi} = \cot\theta\).

    **Проверка.** При \(\alpha = \beta = 0\) остаются символы плоского пространства в сферических координатах
    (\(\Gamma^r_{\theta\theta} = -r\) и т.д.). Размерности: \(\Gamma\) имеет размерность \(1/\text{длина}\) в радиальных компонентах.

Подставляя их в формулу для тензора Риччи ([глава 4](../part1-math/04-curvature.md)),
получаем

\begin{equation}
\begin{aligned}
R_{tt} &= e^{2(\alpha-\beta)}\left[\alpha'' + \alpha'^2 - \alpha'\beta' + \frac2r\alpha'\right],\\
R_{rr} &= -\alpha'' - \alpha'^2 + \alpha'\beta' + \frac2r\beta',\\
R_{\theta\theta} &= e^{-2\beta}\left[r(\beta' - \alpha') - 1\right] + 1,
\qquad R_{\phi\phi} = \sin^2\theta\,R_{\theta\theta}.
\end{aligned}
\label{eq:ricci}
\end{equation}

??? calc "Вычисления"

    **Шаг 1. Формула.** Из определения \(R_{\mu\nu} = R^\lambda{}_{\mu\lambda\nu}\) (соглашения книги):

    \[
    R_{\mu\nu} = \pd_\lambda\Gamma^\lambda_{\nu\mu} - \pd_\nu\Gamma^\lambda_{\lambda\mu}
    + \Gamma^\lambda_{\lambda\sigma}\Gamma^\sigma_{\nu\mu} - \Gamma^\lambda_{\nu\sigma}\Gamma^\sigma_{\lambda\mu}.
    \]

    Понадобятся следы \(\Gamma^\lambda_{\lambda r} = \Gamma^t_{tr} + \Gamma^r_{rr} + \Gamma^\theta_{\theta r} + \Gamma^\phi_{\phi r} = \alpha' + \beta' + \frac2r\),
    \(\Gamma^\lambda_{\lambda\theta} = \Gamma^\phi_{\phi\theta} = \cot\theta\), \(\Gamma^\lambda_{\lambda t} = 0\).

    **Шаг 2. \(R_{tt}\).** Второе слагаемое нуль (нет зависимости от \(t\)). Первое: \(\pd_r\Gamma^r_{tt} = (\alpha'' + 2\alpha'^2 - 2\alpha'\beta')e^{2(\alpha-\beta)}\).
    Третье: \(\Gamma^\lambda_{\lambda r}\Gamma^r_{tt} = (\alpha'+\beta'+\frac2r)\alpha' e^{2(\alpha-\beta)}\). Четвёртое: ненулевые пары
    \((\lambda,\sigma) = (t,r)\) и \((r,t)\): \(\Gamma^t_{tr}\Gamma^r_{tt} + \Gamma^r_{tt}\Gamma^t_{rt} = 2\alpha'^2e^{2(\alpha-\beta)}\). Итого

    \[
    R_{tt} = e^{2(\alpha-\beta)}\left[\alpha'' + 2\alpha'^2 - 2\alpha'\beta' + \alpha'^2 + \alpha'\beta' + \frac2r\alpha' - 2\alpha'^2\right]
    = e^{2(\alpha-\beta)}\left[\alpha'' + \alpha'^2 - \alpha'\beta' + \frac2r\alpha'\right].
    \]

    **Шаг 3. \(R_{rr}\).** \(\pd_\lambda\Gamma^\lambda_{rr} = \beta''\); \(\pd_r\Gamma^\lambda_{\lambda r} = \alpha'' + \beta'' - \frac{2}{r^2}\);
    \(\Gamma^\lambda_{\lambda r}\Gamma^r_{rr} = (\alpha'+\beta'+\frac2r)\beta'\);
    \(\Gamma^\lambda_{r\sigma}\Gamma^\sigma_{\lambda r} = (\Gamma^t_{rt})^2 + (\Gamma^r_{rr})^2 + (\Gamma^\theta_{r\theta})^2 + (\Gamma^\phi_{r\phi})^2 = \alpha'^2 + \beta'^2 + \frac{2}{r^2}\):

    \[
    R_{rr} = \beta'' - \alpha'' - \beta'' + \frac{2}{r^2} + \alpha'\beta' + \beta'^2 + \frac2r\beta' - \alpha'^2 - \beta'^2 - \frac{2}{r^2}
    = -\alpha'' - \alpha'^2 + \alpha'\beta' + \frac2r\beta' .
    \]

    **Шаг 4. \(R_{\theta\theta}\).** \(\pd_r\Gamma^r_{\theta\theta} = -e^{-2\beta} + 2r\beta'e^{-2\beta}\);
    \(-\pd_\theta\Gamma^\lambda_{\lambda\theta} = -\pd_\theta\cot\theta = \frac{1}{\sin^2\theta}\);
    \(\Gamma^\lambda_{\lambda r}\Gamma^r_{\theta\theta} = -(\alpha'+\beta'+\frac2r)re^{-2\beta}\) (член с \(\Gamma^\theta_{\theta\theta} = 0\) пропадает);
    \(\Gamma^\lambda_{\theta\sigma}\Gamma^\sigma_{\lambda\theta} = \Gamma^r_{\theta\theta}\Gamma^\theta_{r\theta} + \Gamma^\theta_{\theta r}\Gamma^r_{\theta\theta} + (\Gamma^\phi_{\theta\phi})^2 = -2e^{-2\beta} + \cot^2\theta\). Складываем:

    \[
    \begin{aligned}
    R_{\theta\theta} &= -e^{-2\beta} + 2r\beta'e^{-2\beta} + \frac{1}{\sin^2\theta} - r(\alpha'+\beta')e^{-2\beta} - 2e^{-2\beta} + 2e^{-2\beta} - \cot^2\theta\\
    &= e^{-2\beta}\left[r(\beta' - \alpha') - 1\right] + 1,
    \end{aligned}
    \]

    где использовано \(\frac{1}{\sin^2\theta} - \cot^2\theta = 1\). Аналогично \(R_{\phi\phi} = \sin^2\theta\,R_{\theta\theta}\), а недиагональные компоненты равны нулю.

    **Проверка.** При \(\alpha = \beta = 0\) все компоненты обращаются в нуль — плоское пространство.

Решаем вакуумные уравнения \(R_{\mu\nu} = 0\) [(гл. 6)](06-einstein-equations.md).

**Шаг 1.** Комбинация \(e^{2(\beta-\alpha)}R_{tt} + R_{rr} = \frac2r(\alpha' + \beta') = 0\)
даёт \(\alpha = -\beta + \text{const}\). Константу можно убрать перенормировкой
\(t \to e^{-\text{const}}t\), так что \(\alpha = -\beta\).

**Шаг 2.** Тогда \(R_{\theta\theta} = 0\) принимает вид \(e^{2\alpha}(2r\alpha' + 1) = 1\), т.е.

\begin{equation}
\frac{\d}{\d r}\left(r e^{2\alpha}\right) = 1
\quad\Longrightarrow\quad
e^{2\alpha} = 1 - \frac{R_s}{r},
\label{eq:solve}
\end{equation}

где \(R_s\) — константа интегрирования. Легко проверить, что \(R_{tt} = R_{rr} = 0\) теперь
выполнены автоматически.

**Шаг 3.** При \(r \to \infty\) должно быть \(g_{tt} \to -(1 + 2\Phi)\) с \(\Phi = -GM/r\)
[(гл. 5)](05-equivalence.md). Значит, \(R_s = 2GM\) — **радиус Шварцшильда**.

??? calc "Вычисления"

    **Шаг 1. Исключаем \(\alpha''\).** Умножим \(R_{tt}\) из \(\eqref{eq:ricci}\) на \(e^{2(\beta-\alpha)}\) и прибавим \(R_{rr}\):

    \[
    \left[\alpha'' + \alpha'^2 - \alpha'\beta' + \frac2r\alpha'\right] + \left[-\alpha'' - \alpha'^2 + \alpha'\beta' + \frac2r\beta'\right]
    = \frac2r(\alpha' + \beta') = 0 .
    \]

    Значит, \((\alpha + \beta)' = 0\), \(\alpha + \beta = C\). Замена \(t = e^{-C}\tilde t\) даёт \(e^{2\alpha}\d t^2 = e^{2(\alpha - C)}\d\tilde t^2\), т.е. сдвигает \(\alpha \to \alpha - C\); после неё \(\alpha = -\beta\).

    **Шаг 2. Уравнение \(R_{\theta\theta} = 0\).** Подставляем \(\beta = -\alpha\), \(e^{-2\beta} = e^{2\alpha}\):

    \[
    e^{2\alpha}\left[r(-\alpha' - \alpha') - 1\right] + 1 = 0
    \quad\Longleftrightarrow\quad
    e^{2\alpha}\left(2r\alpha' + 1\right) = 1 .
    \]

    Левая часть — полная производная: \(\frac{\d}{\d r}(re^{2\alpha}) = e^{2\alpha} + r\cdot 2\alpha' e^{2\alpha}\). Интегрируем:
    \(re^{2\alpha} = r - R_s\), т.е. \(e^{2\alpha} = 1 - R_s/r\).

    **Шаг 3. Проверка \(R_{tt} = R_{rr} = 0\).** При \(\beta = -\alpha\) обе скобки сводятся к одной комбинации:
    \(R_{rr} = -\left(\alpha'' + 2\alpha'^2 + \frac2r\alpha'\right)\), \(R_{tt} = e^{4\alpha}\left(\alpha'' + 2\alpha'^2 + \frac2r\alpha'\right)\).
    Пусть \(f = e^{2\alpha}\); тогда \(f' = 2\alpha' f\), \(f'' = (2\alpha'' + 4\alpha'^2)f\), и

    \[
    \alpha'' + 2\alpha'^2 + \frac2r\alpha' = \frac{1}{2f}\left(f'' + \frac{2}{r}f'\right)
    = \frac{1}{2f}\left(-\frac{2R_s}{r^3} + \frac2r\cdot\frac{R_s}{r^2}\right) = 0 .
    \]

    **Шаг 4. Ньютонов предел.** \(g_{tt} = -e^{2\alpha} = -(1 - R_s/r)\). Сравнивая с \(-(1 + 2\Phi) = -(1 - 2GM/r)\), получаем \(R_s/r = 2GM/r\), т.е. \(R_s = 2GM\).

    **Проверка.** Размерность: \(GM\) при \(c = 1\) — длина, \(R_s/r\) безразмерно. С \(c\): \(R_s = 2GM/c^2\).

!!! theorem "Метрика Шварцшильда"

    \begin{equation}
    \d s^2 = -\left(1 - \frac{2GM}{r}\right)\d t^2 + \left(1 - \frac{2GM}{r}\right)^{-1}\d r^2 + r^2\,\d\Omega^2 .
    \label{eq:schwarzschild}
    \end{equation}

Символьная проверка того, что \(\eqref{eq:schwarzschild}\) удовлетворяет \(G_{\mu\nu} = 0\),
приведена в [главе 6](06-einstein-equations.md) (раздел 6.7).

!!! theorem "Теорема Биркгофа"
    Любое сферически-симметричное решение вакуумных уравнений Эйнштейна локально
    изометрично метрике Шварцшильда. В частности, оно автоматически статично.

**Идея доказательства.** Повторим вычисление, допустив зависимость \(\alpha, \beta\) от \(t\).
Появляется компонента \(R_{tr} = \frac2r\,\pd_t\beta\), и уравнение \(R_{tr} = 0\) даёт
\(\pd_t\beta = 0\). Остальные уравнения приводят к \(\alpha = -\beta + f(t)\), и функция
\(f(t)\) убирается заменой времени. \(\square\)

Следствия: (1) пульсирующая или коллапсирующая сферическая звезда **не излучает**
гравитационных волн — монопольного излучения в ОТО нет (как и в электродинамике);
(2) внутри сферической полости в сферически-симметричном распределении материи
пространство-время плоское (задача 7.6); (3) внешнее поле Солнца — это \(\eqref{eq:schwarzschild}\)
независимо от его внутреннего строения.

## 7.3. Свойства решения

**Масштабы.** С восстановленными константами \(R_s = 2GM/c^2\):

| Объект | \(R_s\) | \(R_s/R\) |
|---|---|---|
| Земля | 8,9 мм | \(1{,}4\cdot10^{-9}\) |
| Солнце | 2,95 км | \(4{,}2\cdot10^{-6}\) |
| Нейтронная звезда (\(1{,}4\,M_\odot\), 12 км) | 4,1 км | 0,34 |
| Sgr A\(^*\) (\(4\cdot10^6\,M_\odot\)) | \(1{,}2\cdot10^{7}\) км | — |

**Асимптотическая плоскостность.** При \(r \to \infty\) метрика стремится к метрике
Минковского в сферических координатах; \(M\) — полная масса-энергия системы,
измеряемая по кеплеровым орбитам далёких спутников.

**Особенности.** Компоненты метрики сингулярны при \(r = 0\) и \(r = 2GM\). Чтобы понять,
являются ли они физическими, вычисляют скаляры кривизны. Скаляр Кречмана

\begin{equation}
R_{\mu\nu\rho\sigma}R^{\mu\nu\rho\sigma} = \frac{48\,G^2M^2}{r^6}
\label{eq:kretschmann}
\end{equation}

конечен при \(r = 2GM\) и расходится при \(r = 0\). Поверхность \(r = 2GM\) — это лишь
**координатная** особенность (горизонт событий), а \(r = 0\) — истинная сингулярность
кривизны. Для обычных звёзд \(R \gg 2GM\), и обе лежат внутри тела, где метрика
\(\eqref{eq:schwarzschild}\) неприменима. Природа горизонта — предмет [главы 8](08-black-holes.md).

**Смысл координат.** \(t\) — время по часам бесконечно удалённого наблюдателя; статический
наблюдатель на радиусе \(r\) измеряет собственное время \(\d\tau = \sqrt{1 - 2GM/r}\,\d t\).
Собственное радиальное расстояние \(\d\ell = \d r/\sqrt{1 - 2GM/r}\) больше \(\d r\):
пространство искривлено.

## 7.4. Геодезические и эффективный потенциал

Метрика обладает векторами Киллинга \(\pd_t\) и \(\pd_\phi\) (а также ещё двумя
вращательными). По [§5.6](05-equivalence.md) сохраняются

\begin{equation}
E = \left(1 - \frac{2GM}{r}\right)\frac{\d t}{\d\lambda}, \qquad
L = r^2\,\frac{\d\phi}{\d\lambda}.
\label{eq:integrals}
\end{equation}

Для массивной частицы с \(\lambda = \tau\) это энергия и момент импульса на единицу массы.
Сохранение вектора момента позволяет считать движение экваториальным, \(\theta = \pi/2\).
Подставим \(\eqref{eq:integrals}\) в условие нормировки \(g_{\mu\nu}\dot x^\mu\dot x^\nu = -\epsilon\),
где \(\epsilon = 1\) для массивных частиц и \(\epsilon = 0\) для света:

\begin{equation}
\frac12\left(\frac{\d r}{\d\lambda}\right)^2 + V(r) = \frac12 E^2,
\qquad
V(r) = \frac12\epsilon - \epsilon\frac{GM}{r} + \frac{L^2}{2r^2} - \frac{GML^2}{r^3} .
\label{eq:radial}
\end{equation}

??? calc "Вычисления"

    **Шаг 1. Нормировка.** При \(\theta = \pi/2\), \(\dot\theta = 0\) условие \(g_{\mu\nu}\dot x^\mu\dot x^\nu = -\epsilon\) для \(\eqref{eq:schwarzschild}\):

    \[
    -\left(1 - \frac{2GM}{r}\right)\dot t^2 + \left(1 - \frac{2GM}{r}\right)^{-1}\dot r^2 + r^2\dot\phi^2 = -\epsilon .
    \]

    **Шаг 2. Подстановка интегралов.** Из \(\eqref{eq:integrals}\): \(\dot t = E/(1 - 2GM/r)\), \(\dot\phi = L/r^2\):

    \[
    -\frac{E^2}{1 - 2GM/r} + \frac{\dot r^2}{1 - 2GM/r} + \frac{L^2}{r^2} = -\epsilon .
    \]

    **Шаг 3. Умножаем на \((1 - 2GM/r)\) и делим на 2:**

    \[
    \frac12\dot r^2 + \frac12\left(1 - \frac{2GM}{r}\right)\left(\epsilon + \frac{L^2}{r^2}\right) = \frac12E^2 .
    \]

    **Шаг 4. Раскрываем скобки:**

    \[
    V = \frac12\left(\epsilon + \frac{L^2}{r^2} - \frac{2GM\epsilon}{r} - \frac{2GML^2}{r^3}\right)
    = \frac12\epsilon - \epsilon\frac{GM}{r} + \frac{L^2}{2r^2} - \frac{GML^2}{r^3} .
    \]

    **Проверка.** При \(G \to 0\) (нет поля) \(\dot r^2 + L^2/r^2 = E^2 - \epsilon\) — прямолинейное движение в плоском пространстве.

Задача свелась к одномерному движению в потенциале \(V\). Первые три слагаемых
совпадают с ньютоновскими (плюс константа \(\epsilon/2\)); последнее — поправка ОТО. При
малых \(r\) она доминирует и превращает центробежный барьер в провал: в ОТО частица
с любым \(L\) может упасть в центр, если её энергия достаточно велика.

**Круговые орбиты** соответствуют \(V'(r) = 0\):

\begin{equation}
\epsilon GM r^2 - L^2 r + 3GML^2 = 0
\quad\Longrightarrow\quad
r_\pm = \frac{L^2 \pm \sqrt{L^4 - 12\,\epsilon\, G^2M^2L^2}}{2\epsilon\, GM} .
\label{eq:circular}
\end{equation}

??? calc "Вычисления"

    **Шаг 1. Производная потенциала.** Из \(\eqref{eq:radial}\):

    \[
    V'(r) = \frac{\epsilon GM}{r^2} - \frac{L^2}{r^3} + \frac{3GML^2}{r^4} = 0 .
    \]

    Умножаем на \(r^4\): \(\epsilon GMr^2 - L^2r + 3GML^2 = 0\) — квадратное уравнение относительно \(r\).

    **Шаг 2. Корни.** По формуле \(r = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}\) с \(a = \epsilon GM\), \(b = -L^2\), \(c = 3GML^2\):
    \(b^2 - 4ac = L^4 - 12\epsilon G^2M^2L^2\), что и даёт \(r_\pm\).

    **Шаг 3. Пределы при \(L \to \infty\) (\(\epsilon = 1\)).** \(\sqrt{L^4 - 12G^2M^2L^2} = L^2\sqrt{1 - 12G^2M^2/L^2} \approx L^2 - 6G^2M^2\). Тогда

    \[
    r_+ \approx \frac{2L^2 - 6G^2M^2}{2GM} \approx \frac{L^2}{GM},
    \qquad
    r_- \approx \frac{6G^2M^2}{2GM} = 3GM .
    \]

    **Шаг 4. ISCO.** Корни сливаются, когда дискриминант нуль: \(L^4 = 12G^2M^2L^2\), \(L^2 = 12G^2M^2\). Тогда
    \(r = \frac{L^2}{2GM} = \frac{12G^2M^2}{2GM} = 6GM\). При меньших \(L\) дискриминант отрицателен — круговых орбит нет.

    **Шаг 5. Свет (\(\epsilon = 0\)).** Уравнение становится линейным: \(-L^2r + 3GML^2 = 0\), т.е. \(r = 3GM\).
    Так как \(V = \frac{L^2}{2r^2}(1 - 2GM/r) \to 0\) при \(r \to \infty\) и \(\to -\infty\) при \(r \to 0\), это максимум — орбита неустойчива.

    **Проверка.** \(r_+ r_- = c/a = 3L^2\) и \(r_+ + r_- = L^2/(GM)\) — теорема Виета; при \(L^2 = 12G^2M^2\) оба корня равны \(6GM\): сумма \(12GM\), произведение \(36G^2M^2\). ✓

!!! theorem "Круговые орбиты в поле Шварцшильда"
    - **Массивные частицы.** При \(L > \sqrt{12}\,GM\) есть устойчивая орбита \(r_+\) (минимум \(V\))
        и неустойчивая \(r_-\) (максимум). При \(L \to \infty\): \(r_+ \to L^2/GM\) (Ньютон),
        \(r_- \to 3GM\). Две орбиты сливаются при \(L = \sqrt{12}\,GM\) на
        **последней устойчивой круговой орбите (ISCO)**

        \begin{equation}
        r_{\rm ISCO} = 6GM .
        \label{eq:isco}
        \end{equation}

        Неустойчивые круговые орбиты существуют при \(3GM < r < 6GM\).
    - **Свет.** Единственная круговая орбита — неустойчивая **фотонная сфера** \(r = 3GM\).

На ISCO \(E^2 = (1 - 2/6)(1 + 12/36) = 8/9\). Вещество аккреционного диска, медленно
сползая по круговым орбитам до ISCO и затем падая в дыру, излучает долю
\(1 - \sqrt{8/9} \approx 5{,}7\%\) энергии покоя — на порядок больше, чем при термоядерном
синтезе (0,7%). Внутренний край диска на ISCO — наблюдаемая величина в рентгеновской
спектроскопии.

??? calc "Вычисления"

    **Шаг 1. Энергия на круговой орбите.** На круговой орбите \(\dot r = 0\), поэтому \(E^2 = 2V = \tilde V(r)\),
    \(\tilde V = \left(1 - \frac{2GM}{r}\right)\left(1 + \frac{L^2}{r^2}\right)\).

    **Шаг 2. Подстановка ISCO.** \(r = 6GM\), \(L^2 = 12G^2M^2\):

    \[
    1 - \frac{2GM}{6GM} = \frac23, \qquad 1 + \frac{12G^2M^2}{36G^2M^2} = \frac43,
    \qquad E^2 = \frac23\cdot\frac43 = \frac89 .
    \]

    **Шаг 3. Эффективность.** Частица начинает с \(E = 1\) (покой на бесконечности), на ISCO имеет \(E = \sqrt{8/9} = \frac{2\sqrt2}{3} \approx 0{,}9428\).
    Излучённая доля энергии покоя: \(1 - 0{,}9428 \approx 0{,}057\).

### Интерактив: эффективный потенциал

Для массивной частицы (\(\epsilon = 1\)) удобно умножить \(\eqref{eq:radial}\) на 2:
\((\d r/\d\tau)^2 + \tilde V(r) = E^2\), где

\[
\tilde V(r) = \left(1 - \frac{2GM}{r}\right)\left(1 + \frac{L^2}{r^2}\right).
\]

Ниже синим показан \(\tilde V\) в единицах \(G = M = 1\), пунктиром — ньютоновский аналог
\(1 - 2/r + L^2/r^2\) (без члена \(-2L^2/r^3\)). Синяя точка — устойчивая круговая орбита,
жёлтая — неустойчивая, красная линия — ISCO. Уменьшайте \(L/M\): при \(L/M = \sqrt{12} \approx 3{,}46\)
точки сливаются на \(r = 6M\), а ниже минимум исчезает. При \(L/M > 4\) вершина барьера
поднимается выше \(E^2 = 1\) (пунктирная горизонталь): частица, пришедшая с бесконечности
с малой скоростью, отражается.

<div class="interactive" id="veff-demo">
  <canvas id="veff-canvas" width="520" height="360"></canvas>
  <div class="controls">
    <label for="veff-L"><span class="arithmatex">\(L/M\)</span> = <span id="veff-L-val">4.00</span></label>
    <input type="range" id="veff-L" min="2" max="6" step="0.01" value="4">
  </div>
  <div class="controls"><span id="veff-info"></span></div>
</div>

**Период круговой орбиты.** Из \(\eqref{eq:circular}\) и \(\eqref{eq:integrals}\) для координатной
угловой скорости получается точный закон Кеплера \(\Omega^2 = (\d\phi/\d t)^2 = GM/r^3\)
(задача 7.3) — совпадение с Ньютоном, удивительное, но связанное с выбором координат.

## 7.5. Прецессия перигелия

Для формы орбиты удобна переменная \(u = 1/r\) и \(\phi\) вместо \(\lambda\): с
\(\d r/\d\lambda = -L\,\d u/\d\phi\) уравнение \(\eqref{eq:radial}\) (при \(\epsilon = 1\))
после дифференцирования по \(\phi\) даёт

\begin{equation}
\frac{\d^2 u}{\d\phi^2} + u = \frac{GM}{L^2} + 3GM\,u^2 .
\label{eq:orbit}
\end{equation}

??? calc "Вычисления"

    **Шаг 1. Замена переменных.** С \(u = 1/r\) и \(\dot\phi = L/r^2 = Lu^2\):

    \[
    \frac{\d r}{\d\lambda} = \frac{\d r}{\d\phi}\dot\phi = -\frac{1}{u^2}\frac{\d u}{\d\phi}\cdot Lu^2 = -L\frac{\d u}{\d\phi}.
    \]

    **Шаг 2. Подстановка в \(\eqref{eq:radial}\)** (\(\epsilon = 1\), \(u' \equiv \d u/\d\phi\)):

    \[
    \frac12L^2u'^2 + \frac12 - GMu + \frac{L^2u^2}{2} - GML^2u^3 = \frac12E^2 .
    \]

    **Шаг 3. Дифференцируем по \(\phi\):**

    \[
    L^2u'u'' - GMu' + L^2uu' - 3GML^2u^2u' = 0 .
    \]

    **Шаг 4. Делим на \(L^2u'\)** (для некруговой орбиты \(u' \ne 0\)):

    \[
    u'' + u = \frac{GM}{L^2} + 3GMu^2 .
    \]

    **Проверка.** Без последнего члена \(u = \frac{GM}{L^2}(1 + e\cos\phi)\): \(u'' + u = \frac{GM}{L^2}\) — уравнение Бине для ньютоновой коники.
    Поправка \(3GMu^2\) относительно \(u\) имеет порядок \(GM/r\) — безразмерна.

Без последнего члена решение — коника \(u_0 = \frac{GM}{L^2}(1 + e\cos\phi)\). Поправка
мала: \(3GMu^2 / (GM/L^2) = 3L^2u^2 \sim 3GM/r \sim 10^{-7}\) для Меркурия. Подставим
\(u = u_0 + u_1\) и оставим в \(3GMu^2\) только \(u_0\):

\[
u_1'' + u_1 = \frac{3G^3M^3}{L^4}\left(1 + 2e\cos\phi + e^2\cos^2\phi\right).
\]

Константа и \(\cos 2\phi\) дают малые периодические поправки, а член \(2e\cos\phi\) —
**резонансный**: его частное решение \(u_1 = \frac{3G^3M^3}{L^4}\,e\,\phi\sin\phi\) растёт
со временем. Тогда с точностью до первого порядка

\[
u \approx \frac{GM}{L^2}\left[1 + e\cos\phi + e\,\frac{3G^2M^2}{L^2}\phi\sin\phi\right]
\approx \frac{GM}{L^2}\left[1 + e\cos\bigl((1 - \delta)\phi\bigr)\right],
\qquad \delta = \frac{3G^2M^2}{L^2}.
\]

Перигелий повторяется через \(\Delta\phi = 2\pi/(1-\delta) \approx 2\pi + 2\pi\delta\).
Используя \(L^2 = GMa(1 - e^2)\), получаем сдвиг за оборот

\begin{equation}
\delta\phi = \frac{6\pi G M}{a(1 - e^2)} \qquad \left(\text{с } c:\ \frac{6\pi GM}{c^2 a(1-e^2)}\right).
\label{eq:perihelion}
\end{equation}

??? calc "Вычисления"

    **Шаг 1. Правая часть для \(u_1\).** Подставим \(u = u_0 + u_1\) в \(\eqref{eq:orbit}\): \(u_0'' + u_0 = GM/L^2\) сокращается, остаётся
    \(u_1'' + u_1 = 3GM u_0^2\) (с точностью до первого порядка). С \(u_0^2 = \frac{G^2M^2}{L^4}(1 + e\cos\phi)^2\) и
    \(\cos^2\phi = \frac12(1 + \cos 2\phi)\):

    \[
    u_1'' + u_1 = \frac{3G^3M^3}{L^4}\left[\left(1 + \frac{e^2}{2}\right) + 2e\cos\phi + \frac{e^2}{2}\cos2\phi\right].
    \]

    **Шаг 2. Частные решения.** Для постоянной \(A\): \(u_1 = A\). Для \(B\cos2\phi\): \(u_1 = -\frac{B}{3}\cos2\phi\) (так как \((-4 + 1)\cdot(-\tfrac B3) = B\)).
    Для резонансного \(C\cos\phi\) пробуем \(u_1 = k\phi\sin\phi\): \(u_1'' = 2k\cos\phi - k\phi\sin\phi\), откуда \(u_1'' + u_1 = 2k\cos\phi\), \(k = C/2\).
    При \(C = \frac{6G^3M^3e}{L^4}\):

    \[
    u_1^{\rm рез} = \frac{3G^3M^3}{L^4}\,e\,\phi\sin\phi = \frac{GM}{L^2}\cdot e\,\delta\,\phi\sin\phi, \qquad \delta = \frac{3G^2M^2}{L^2}.
    \]

    **Шаг 3. Сворачиваем в косинус.** При \(\delta\phi \ll 1\): \(\cos\bigl((1-\delta)\phi\bigr) = \cos\phi\cos\delta\phi + \sin\phi\sin\delta\phi \approx \cos\phi + \delta\phi\sin\phi\).
    Поэтому \(1 + e\cos\phi + e\delta\phi\sin\phi \approx 1 + e\cos\bigl((1-\delta)\phi\bigr)\).

    **Шаг 4. Сдвиг перигелия.** Максимум \(u\) (перигелий) повторяется, когда \((1-\delta)\phi\) растёт на \(2\pi\):
    \(\Delta\phi = \frac{2\pi}{1 - \delta} \approx 2\pi(1 + \delta)\). Сдвиг за оборот \(2\pi\delta = \frac{6\pi G^2M^2}{L^2}\).

    **Шаг 5. Через элементы орбиты.** Для ньютонова эллипса фокальный параметр \(p = L^2/(GM) = a(1 - e^2)\), т.е. \(L^2 = GMa(1 - e^2)\):

    \[
    \delta\phi = \frac{6\pi G^2M^2}{GMa(1-e^2)} = \frac{6\pi GM}{a(1-e^2)} .
    \]

    **Проверка.** \(GM/a\) безразмерно (\(c = 1\)); для Меркурия \(6\pi\cdot1477/(5{,}79\cdot10^{10}\cdot0{,}9577) \approx 5{,}02\cdot10^{-7}\). ✓

!!! example "Меркурий"
    \(a = 5{,}79\cdot10^{10}\) м, \(e = 0{,}2056\), \(GM_\odot/c^2 = 1477\) м: \(\delta\phi = 5{,}02\cdot10^{-7}\) рад
    за оборот. За столетие Меркурий совершает 415 оборотов, что даёт \(43''\). Наблюдаемая
    прецессия \(\approx 575''\)/век, из которых \(532''\) объясняются возмущениями от других
    планет; остаток \(43{,}1 \pm 0{,}5''\) был известен с 1859 г. (Леверье) и объяснён Эйнштейном
    в ноябре 1915 г. Для двойного пульсара PSR B1913+16 прецессия периастра составляет
    \(4{,}2^\circ\) в год.

## 7.6. Отклонение света

Для фотона (\(\epsilon = 0\)) аналог \(\eqref{eq:orbit}\):

\begin{equation}
\frac{\d^2 u}{\d\phi^2} + u = 3GM\,u^2 .
\label{eq:light-orbit}
\end{equation}

Без правой части решение — прямая \(u_0 = \sin\phi/b\) с прицельным параметром
\(b = L/E\). В первом порядке \(u_1'' + u_1 = \frac{3GM}{b^2}\sin^2\phi = \frac{3GM}{2b^2}(1 - \cos 2\phi)\),
откуда

\[
u = \frac{\sin\phi}{b} + \frac{3GM}{2b^2}\left(1 + \frac13\cos 2\phi\right).
\]

Асимптоты (\(u = 0\)) находятся при \(\phi \approx -\delta\) и \(\phi \approx \pi + \delta\), где
\(-\delta/b + \frac{3GM}{2b^2}\cdot\frac43 = 0\), т.е. \(\delta = 2GM/b\). Полный угол отклонения

\begin{equation}
\Delta\phi = \frac{4GM}{b} \qquad \left(\text{с } c:\ \frac{4GM}{c^2 b}\right).
\label{eq:deflection}
\end{equation}

??? calc "Вычисления"

    **Шаг 1. Уравнение орбиты фотона.** При \(\epsilon = 0\) из \(\eqref{eq:radial}\) с \(\d r/\d\lambda = -L u'\):
    \(\frac12L^2u'^2 + \frac{L^2u^2}{2} - GML^2u^3 = \frac12E^2\). Дифференцируя по \(\phi\) и деля на \(L^2u'\), получаем \(\eqref{eq:light-orbit}\).

    **Шаг 2. Нулевое приближение.** \(u_0 = \sin\phi/b\) удовлетворяет \(u_0'' + u_0 = 0\), а первый интеграл даёт
    \(u_0'^2 + u_0^2 = \frac{1}{b^2} = \frac{E^2}{L^2}\), т.е. \(b = L/E\).

    **Шаг 3. Первый порядок.** \(3GMu_0^2 = \frac{3GM}{b^2}\sin^2\phi = \frac{3GM}{2b^2}(1 - \cos2\phi)\). Частные решения:
    для константы — та же константа; для \(-\frac{3GM}{2b^2}\cos2\phi\) — \(k\cos2\phi\) с \((-4+1)k = -\frac{3GM}{2b^2}\), \(k = \frac{GM}{2b^2}\):

    \[
    u_1 = \frac{3GM}{2b^2} + \frac{GM}{2b^2}\cos2\phi = \frac{3GM}{2b^2}\left(1 + \frac13\cos2\phi\right).
    \]

    **Шаг 4. Асимптоты.** При \(\phi = -\delta\), \(\delta \ll 1\): \(\sin\phi \approx -\delta\), \(\cos2\phi \approx 1\). Условие \(u = 0\):

    \[
    -\frac{\delta}{b} + \frac{3GM}{2b^2}\cdot\frac43 = 0
    \quad\Longrightarrow\quad
    \delta = \frac{2GM}{b}.
    \]

    По симметрии \(\phi \to \pi - \phi\) вторая асимптота при \(\phi = \pi + \delta\). Прямая без отклонения прошла бы от \(0\) до \(\pi\),
    поэтому угол отклонения \(\Delta\phi = 2\delta = 4GM/b\).

    **Проверка.** Для Солнца \(4\cdot1477/6{,}96\cdot10^8 = 8{,}49\cdot10^{-6}\) рад \(= 1{,}75''\). ✓

Для луча, касающегося края Солнца, \(\Delta\phi = 1{,}75''\). «Ньютоновский» расчёт
(частица со скоростью \(c\)) даёт вдвое меньше, \(2GM/b\): вторая половина обусловлена
кривизной пространства \(g_{rr}\). Экспедиции Эддингтона 1919 г. подтвердили значение
Эйнштейна (с точностью \(\sim 20\%\)); современная радиоинтерферометрия (РСДБ) — с
точностью \(10^{-4}\). Отклонение света лежит в основе гравитационного линзирования —
одного из главных инструментов космологии.

## 7.7. Задержка Шапиро

Сигнал, проходящий вблизи массивного тела, запаздывает по сравнению с распространением
в плоском пространстве (И. Шапиро, 1964). В слабом поле \(\eqref{eq:schwarzschild}\) в
изотропной форме имеет вид \(\d s^2 = -(1 + 2\Phi)\d t^2 + (1 - 2\Phi)\d\vb x^2\). Для
светового луча \(\d s = 0\), откуда \(\d t = (1 - 2\Phi)\,\d\ell\). Интегрируя вдоль прямой
с прицельным параметром \(b\) от точки на расстоянии \(r_1\) до точки на расстоянии \(r_2\)
(по разные стороны от Солнца, \(r_{1,2} \gg b\)):

\begin{equation}
\Delta t = 2GM\int\frac{\d x}{\sqrt{x^2 + b^2}} \approx 2GM\ln\frac{4 r_1 r_2}{b^2}.
\label{eq:shapiro}
\end{equation}

??? calc "Вычисления"

    **Шаг 1. Скорость света в слабом поле.** \(\d s^2 = 0\): \((1+2\Phi)\d t^2 = (1-2\Phi)\d\ell^2\), откуда
    \(\d t = \sqrt{\frac{1-2\Phi}{1+2\Phi}}\,\d\ell \approx (1 - 2\Phi)\,\d\ell\) в первом порядке по \(\Phi\).

    **Шаг 2. Избыточное время.** С \(\Phi = -GM/r\) и \(r = \sqrt{x^2 + b^2}\) вдоль прямой \(y = b\):
    \(\d t = \d x + \frac{2GM}{\sqrt{x^2 + b^2}}\,\d x\). Первое слагаемое — время в плоском пространстве, второе — задержка:

    \[
    \Delta t = 2GM\int_{-x_1}^{x_2}\frac{\d x}{\sqrt{x^2+b^2}} = 2GM\left[\operatorname{arsinh}\frac{x_2}{b} + \operatorname{arsinh}\frac{x_1}{b}\right].
    \]

    **Шаг 3. Асимптотика.** \(\operatorname{arsinh} y = \ln\left(y + \sqrt{y^2+1}\right) \approx \ln 2y\) при \(y \gg 1\); и \(x_{1,2} \approx r_{1,2}\) при \(r_{1,2} \gg b\):

    \[
    \Delta t \approx 2GM\left[\ln\frac{2r_2}{b} + \ln\frac{2r_1}{b}\right] = 2GM\ln\frac{4r_1r_2}{b^2}.
    \]

    **Проверка.** С \(c\): \(\Delta t = \frac{2GM}{c^3}\ln\frac{4r_1r_2}{b^2}\); для Солнца \(2GM_\odot/c^3 \approx 9{,}85\) мкс, туда-обратно — \(19{,}7\) мкс на единицу логарифма. ✓

Для радиолокации планеты (туда и обратно) задержка удваивается:
\(\Delta t_{\rm rt} = 4GM\ln(4r_1r_2/b^2)\), где \(4GM_\odot/c^3 = 19{,}7\) мкс. Для Венеры или
Марса в верхнем соединении это \(\sim 200\)–\(250\) мкс. Лучшее ограничение получено по
доплеровскому слежению за аппаратом «Кассини» (2003): параметр ППН \(\gamma\), равный 1 в
ОТО, измерен как \(1 + (2{,}1 \pm 2{,}3)\cdot10^{-5}\).

## 7.8. Численный пример: прецессия точно

Вместо приближённой формулы \(\eqref{eq:perihelion}\) вычислим сдвиг перицентра точно.
Из \(\eqref{eq:radial}\) при \(\epsilon = 1\), \(G = M = 1\):
\((\d u/\d\phi)^2 = 2M(u - u_1)(u_2 - u)(u_3 - u)\), где \(u_1 = 1/r_a\), \(u_2 = 1/r_p\) —
обратные апо- и перицентрическое расстояния, а \(u_1 + u_2 + u_3 = 1/(2M)\). Подстановка
\(u = u_1 + (u_2 - u_1)(1 - \cos\chi)/2\) убирает особенности в точках поворота:

\[
\Delta\phi_{\rm оборот} = 2\int_0^\pi \frac{\d\chi}{\sqrt{2M\,(u_3 - u(\chi))}} .
\]

```python
import numpy as np
from scipy.integrate import quad

def precession(r_p, r_a, M=1.0):
    """Точный сдвиг перицентра за оборот (рад) для орбиты с r_p, r_a (G=c=1)."""
    u1, u2 = 1 / r_a, 1 / r_p
    u3 = 1 / (2 * M) - u1 - u2          # третий корень кубики
    u = lambda chi: u1 + (u2 - u1) * (1 - np.cos(chi)) / 2
    I, _ = quad(lambda chi: 1 / np.sqrt(2 * M * (u3 - u(chi))), 0, np.pi,
                epsabs=0, epsrel=1e-13, limit=200)
    return 2 * I - 2 * np.pi

# Меркурий: a, e, период; GM_sun/c² = 1476.6 м
GM_c2 = 1476.6
a, e, P_days = 5.7909e10, 0.2056, 87.969
r_p, r_a = a * (1 - e) / GM_c2, a * (1 + e) / GM_c2
dphi = precession(r_p, r_a)
approx = 6 * np.pi / (a * (1 - e**2) / GM_c2)
per_century = dphi * (36525 / P_days) * 206264.806
print(f"{dphi:.4e} {approx:.4e}")            # 5.0185e-07 5.0185e-07
print(f"{per_century:.2f} угл. сек/век")      # 42.98

# Сильное поле: r_p = 10M, r_a = 30M (параметр p = 2 r_p r_a/(r_p + r_a) = 15M)
p = 2 * 10 * 30 / 40
print(f"{precession(10, 30):.3f} {6*np.pi/p:.3f}")   # 1.847 1.257
```

Для Меркурия точный и приближённый ответы совпадают, а вблизи ISCO формула первого
порядка занижает прецессию в полтора раза: орбиты становятся «розетками». Когда орбита приближается к сепаратрисе (перицентр
стремится к неустойчивой круговой орбите \(r_-\), \(4GM < r_- < 6GM\)), частица совершает
всё больше витков вблизи перицентра, и сдвиг за оборот логарифмически расходится.

## Задачи

??? question "7.1. Фотонная сфера"
    Найдите радиус круговой орбиты фотона и критический прицельный параметр \(b_c\),
    при котором фотон с бесконечности захватывается. Каков угловой радиус «тени»
    чёрной дыры для далёкого наблюдателя?

    ??? success "Решение"
        При \(\epsilon = 0\): \(V = \frac{L^2}{2r^2}(1 - 2GM/r)\), \(V' = 0\) при \(r = 3GM\).
        \(V_{\max} = L^2/(54G^2M^2)\). Захват при \(E^2/2 > V_{\max}\), т.е. \(b = L/E < b_c = 3\sqrt3\,GM \approx 5{,}2\,GM\).
        Угловой радиус тени \(\approx b_c/D\); для M87\(^*\) (\(6{,}5\cdot10^9 M_\odot\), 16,8 Мпк) это
        \(\approx 20\) мкс дуги, диаметр \(\approx 40\) мкс — что и увидел Event Horizon Telescope.

??? question "7.2. ISCO и эффективность аккреции"
    Найдите \(E\) и \(L\) на круговой орбите радиуса \(r\) и проверьте, что на ISCO
    \(E = \sqrt{8/9}\), \(L = 2\sqrt3\,GM\).

    ??? success "Решение"
        Из \(V' = 0\): \(L^2 = \frac{GMr^2}{r - 3GM}\). Подставляя в \(E^2 = \tilde V\):
        \(E = \frac{1 - 2GM/r}{\sqrt{1 - 3GM/r}}\). При \(r = 6GM\): \(L^2 = 12G^2M^2\),
        \(E = \frac{2/3}{\sqrt{1/2}} = \frac{2\sqrt2}{3} = \sqrt{8/9}\). Эффективность \(1 - E \approx 0{,}057\).

??? question "7.3. Третий закон Кеплера"
    Покажите, что для круговой орбиты \((\d\phi/\d t)^2 = GM/r^3\) точно.

    ??? success "Решение"
        \(\frac{\d\phi}{\d t} = \frac{L/r^2}{E/(1 - 2GM/r)}\). С выражениями из задачи 7.2:
        \(\left(\frac{\d\phi}{\d t}\right)^2 = \frac{L^2(1-2GM/r)^2}{r^4E^2} = \frac{GMr^2}{r-3GM}\cdot\frac{1 - 3GM/r}{r^4} = \frac{GM}{r^3}\).

??? question "7.4. Отклонение света"
    Вычислите угол отклонения для луча, касающегося (а) Солнца (\(R_\odot = 6{,}96\cdot10^8\) м),
    (б) Юпитера (\(GM/c^2 = 1{,}41\) м, \(R = 7{,}0\cdot10^7\) м), (в) нейтронной звезды
    \(1{,}4\,M_\odot\), \(R = 12\) км. Применима ли формула \(\eqref{eq:deflection}\) в случае (в)?

    ??? success "Решение"
        (а) \(4\cdot1477/6{,}96\cdot10^8 = 8{,}49\cdot10^{-6}\) рад \(= 1{,}75''\).
        (б) \(8{,}1\cdot10^{-8}\) рад \(= 0{,}017''\). (в) \(4\cdot2068/12000 \approx 0{,}69\) рад \(\approx 40^\circ\) —
        поправки высших порядков по \(GM/b \approx 0{,}17\) велики, нужен точный расчёт;
        при \(b \to b_c\) угол логарифмически расходится.

??? question "7.5. Задержка Шапиро для Марса"
    Оцените задержку радиосигнала Земля–Марс–Земля, когда луч касается края Солнца
    (\(r_E = 1{,}5\cdot10^{11}\) м, \(r_M = 2{,}3\cdot10^{11}\) м).

    ??? success "Решение"
        \(\ln\frac{4r_Er_M}{R_\odot^2} = \ln\frac{4\cdot3{,}45\cdot10^{22}}{4{,}84\cdot10^{17}} = \ln(2{,}85\cdot10^5) \approx 12{,}6\).
        \(\Delta t_{\rm rt} \approx 19{,}7\cdot12{,}6 \approx 250\) мкс — соответствует лишним 75 км пути.

??? question "7.6. Внутри оболочки"
    Используя теорему Биркгофа, покажите, что внутри сферической полости в центре
    сферически-симметричного распределения материи пространство-время плоское.

    ??? success "Решение"
        Внутри полости вакуум, и по теореме Биркгофа метрика — шварцшильдовская с некоторым
        параметром \(M\). Регулярность в центре \(r = 0\) (отсутствие сингулярности кривизны
        \(\eqref{eq:kretschmann}\)) требует \(M = 0\), т.е. пространство Минковского. Это
        аналог ньютоновской теоремы об отсутствии поля внутри однородной оболочки; однако
        ход часов внутри полости замедлен относительно бесконечности (постоянный сдвиг \(g_{tt}\)).

## Что дальше

Мы рассматривали шварцшильдову геометрию только вне тела, при \(r > 2GM\). Что
происходит, если тело целиком сжато под свой гравитационный радиус? В
[главе 8](08-black-holes.md) мы покажем, что поверхность \(r = 2GM\) — горизонт событий,
построим координаты, регулярные на нём, и познакомимся с вращающимися чёрными дырами
Керра и их термодинамикой.
