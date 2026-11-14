# 3. Связность и ковариантная производная

Чтобы записать физический закон в виде дифференциального уравнения, нужно уметь
дифференцировать тензорные поля. В плоском пространстве в декартовых координатах достаточно
частных производных, но на многообразии разность векторов в двух разных точках не определена:
они живут в разных касательных пространствах. Нужно дополнительное правило, связывающее
соседние касательные пространства, — **связность**. На многообразии с метрикой существует
выделенная связность (Леви-Чивиты), и именно она описывает гравитацию в ОТО. С её помощью
определяются параллельный перенос и геодезические — траектории свободного падения.

## 3.1. Почему частная производная не тензорна

Продифференцируем закон преобразования вектора \(V^{\nu'} = \frac{\pd x^{\nu'}}{\pd x^\nu}V^\nu\):

\begin{equation}
\pd_{\mu'}V^{\nu'} = \frac{\pd x^\mu}{\pd x^{\mu'}}\frac{\pd x^{\nu'}}{\pd x^\nu}\,\pd_\mu V^\nu
+ \frac{\pd x^\mu}{\pd x^{\mu'}}\frac{\pd^2 x^{\nu'}}{\pd x^\mu\pd x^\nu}\,V^\nu .
\label{eq:partial-nontensor}
\end{equation}

??? calc "Вычисления"

    **Шаг 1. Цепное правило для производной.** \(\pd_{\mu'} = \dfrac{\pd x^\mu}{\pd x^{\mu'}}\pd_\mu\), поэтому

    \[
    \pd_{\mu'}V^{\nu'} = \frac{\pd x^\mu}{\pd x^{\mu'}}\,\pd_\mu\!\left(\frac{\pd x^{\nu'}}{\pd x^\nu}V^\nu\right).
    \]

    **Шаг 2. Правило Лейбница.** Матрица Якоби зависит от точки, поэтому производная действует на оба множителя:

    \[
    \pd_\mu\!\left(\frac{\pd x^{\nu'}}{\pd x^\nu}V^\nu\right)
    = \frac{\pd x^{\nu'}}{\pd x^\nu}\,\pd_\mu V^\nu + \frac{\pd^2 x^{\nu'}}{\pd x^\mu\pd x^\nu}\,V^\nu .
    \]

    **Шаг 3. Подстановка.** Умножая на \(\pd x^\mu/\pd x^{\mu'}\), получаем \(\eqref{eq:partial-nontensor}\).

    **Проверка.** Для линейной замены \(x^{\nu'} = \Lambda^{\nu'}{}_\nu x^\nu\) вторые производные равны нулю,
    и остаётся тензорный закон.

Первое слагаемое — правильный тензорный закон, второе — лишнее. Оно исчезает только при
линейных заменах координат (как преобразования Лоренца в СТО), поэтому в СТО проблема не
возникала. Причина геометрическая: \(\pd_\mu V^\nu\) сравнивает компоненты вектора в соседних
точках, а компоненты зависят от базиса, который сам меняется от точки к точке.

## 3.2. Ковариантная производная и символы связности

!!! definition "Определение: ковариантная производная"
    **Ковариантная производная** \(\nabla\) — отображение тензорных полей типа \((k,l)\)
    в поля типа \((k,l+1)\), которое

    1. линейно: \(\nabla(T+S) = \nabla T + \nabla S\);
    2. удовлетворяет правилу Лейбница: \(\nabla(T\otimes S) = (\nabla T)\otimes S + T\otimes(\nabla S)\);
    3. коммутирует со свёртками;
    4. на скалярах совпадает с частной производной: \(\nabla_\mu f = \pd_\mu f\).

Из линейности и правила Лейбница следует, что на векторе \(\nabla\) действует как частная
производная плюс линейная поправка:

\begin{equation}
\nabla_\mu V^\nu = \pd_\mu V^\nu + \Gamma^\nu_{\mu\lambda}V^\lambda .
\label{eq:cov-vector}
\end{equation}

Числа \(\Gamma^\nu_{\mu\lambda}\) — **коэффициенты связности**. Требование, чтобы
\(\nabla_\mu V^\nu\) был тензором, вместе с \(\eqref{eq:partial-nontensor}\) фиксирует их
(нетензорный!) закон преобразования:

\begin{equation}
\Gamma^{\nu'}_{\mu'\lambda'} =
\frac{\pd x^\mu}{\pd x^{\mu'}}\frac{\pd x^\lambda}{\pd x^{\lambda'}}\frac{\pd x^{\nu'}}{\pd x^\nu}\Gamma^\nu_{\mu\lambda}
- \frac{\pd x^\mu}{\pd x^{\mu'}}\frac{\pd x^\lambda}{\pd x^{\lambda'}}\frac{\pd^2 x^{\nu'}}{\pd x^\mu\pd x^\lambda}.
\label{eq:gamma-transform}
\end{equation}

??? calc "Вычисления"

    **Шаг 1. Требование тензорности.** Нужно, чтобы

    \[
    \nabla_{\mu'}V^{\nu'} = \frac{\pd x^\mu}{\pd x^{\mu'}}\frac{\pd x^{\nu'}}{\pd x^\nu}\,\nabla_\mu V^\nu
    = \frac{\pd x^\mu}{\pd x^{\mu'}}\frac{\pd x^{\nu'}}{\pd x^\nu}\left(\pd_\mu V^\nu + \Gamma^\nu_{\mu\lambda}V^\lambda\right).
    \]

    **Шаг 2. Левая часть по определению.** \(\nabla_{\mu'}V^{\nu'} = \pd_{\mu'}V^{\nu'} + \Gamma^{\nu'}_{\mu'\lambda'}V^{\lambda'}\);
    подставляем \(\eqref{eq:partial-nontensor}\) и \(V^{\lambda'} = \dfrac{\pd x^{\lambda'}}{\pd x^\lambda}V^\lambda\):

    \[
    \frac{\pd x^\mu}{\pd x^{\mu'}}\frac{\pd x^{\nu'}}{\pd x^\nu}\pd_\mu V^\nu
    + \frac{\pd x^\mu}{\pd x^{\mu'}}\frac{\pd^2 x^{\nu'}}{\pd x^\mu\pd x^\lambda}V^\lambda
    + \Gamma^{\nu'}_{\mu'\lambda'}\frac{\pd x^{\lambda'}}{\pd x^\lambda}V^\lambda .
    \]

    (Во втором члене немой индекс \(\nu\) переименован в \(\lambda\).)

    **Шаг 3. Сравнение.** Члены с \(\pd_\mu V^\nu\) совпадают и сокращаются. Так как \(V^\lambda\)
    произволен, коэффициенты при нём равны:

    \[
    \Gamma^{\nu'}_{\mu'\lambda'}\frac{\pd x^{\lambda'}}{\pd x^\lambda}
    = \frac{\pd x^\mu}{\pd x^{\mu'}}\frac{\pd x^{\nu'}}{\pd x^\nu}\Gamma^\nu_{\mu\lambda}
    - \frac{\pd x^\mu}{\pd x^{\mu'}}\frac{\pd^2 x^{\nu'}}{\pd x^\mu\pd x^\lambda} .
    \]

    **Шаг 4. Снимаем матрицу Якоби.** Умножаем на \(\pd x^\lambda/\pd x^{\rho'}\) и суммируем по \(\lambda\);
    слева \(\dfrac{\pd x^{\lambda'}}{\pd x^\lambda}\dfrac{\pd x^\lambda}{\pd x^{\rho'}} = \delta^{\lambda'}_{\rho'}\).
    Переименовав затем \(\rho' \to \lambda'\), получаем \(\eqref{eq:gamma-transform}\).

Неоднородный член в точности компенсирует лишнее слагаемое в \(\eqref{eq:partial-nontensor}\).
Требование \(\nabla_\mu(\omega_\nu V^\nu) = \pd_\mu(\omega_\nu V^\nu)\) (свойства 3–4) даёт действие
на 1-формы — с обратным знаком:

\begin{equation}
\nabla_\mu\omega_\nu = \pd_\mu\omega_\nu - \Gamma^\lambda_{\mu\nu}\omega_\lambda .
\label{eq:cov-form}
\end{equation}

??? calc "Вычисления"

    **Шаг 1. Лейбниц и свёртка.** По свойствам 2–3 \(\nabla_\mu(\omega_\nu V^\nu) = (\nabla_\mu\omega_\nu)V^\nu + \omega_\nu\nabla_\mu V^\nu\),
    а по свойству 4 левая часть равна \(\pd_\mu(\omega_\nu V^\nu) = (\pd_\mu\omega_\nu)V^\nu + \omega_\nu\pd_\mu V^\nu\).

    **Шаг 2. Подставляем \(\eqref{eq:cov-vector}\).**

    \[
    (\nabla_\mu\omega_\nu)V^\nu + \omega_\nu\pd_\mu V^\nu + \omega_\nu\Gamma^\nu_{\mu\lambda}V^\lambda
    = (\pd_\mu\omega_\nu)V^\nu + \omega_\nu\pd_\mu V^\nu .
    \]

    **Шаг 3. Сокращение и переименование.** Члены \(\omega_\nu\pd_\mu V^\nu\) сокращаются. В оставшемся
    члене с \(\Gamma\) переименуем немые индексы \(\nu\to\lambda\), \(\lambda\to\nu\):
    \(\omega_\lambda\Gamma^\lambda_{\mu\nu}V^\nu\). Тогда

    \[
    \left(\nabla_\mu\omega_\nu - \pd_\mu\omega_\nu + \Gamma^\lambda_{\mu\nu}\omega_\lambda\right)V^\nu = 0 .
    \]

    **Шаг 4.** Так как \(V^\nu\) произволен, скобка равна нулю — это \(\eqref{eq:cov-form}\).

Для тензора общего вида — по одному \(+\Gamma\) на каждый верхний индекс и \(-\Gamma\) на каждый нижний:

\begin{equation}
\nabla_\sigma T^{\mu}{}_{\nu} = \pd_\sigma T^\mu{}_\nu + \Gamma^\mu_{\sigma\lambda}T^\lambda{}_\nu - \Gamma^\lambda_{\sigma\nu}T^\mu{}_\lambda .
\label{eq:cov-general}
\end{equation}

Разность двух связностей \(\Gamma - \tilde\Gamma\) — тензор (неоднородные члены сокращаются).
В частности, тензором является антисимметричная часть

\begin{equation}
T^\lambda{}_{\mu\nu} = \Gamma^\lambda_{\mu\nu} - \Gamma^\lambda_{\nu\mu},
\label{eq:torsion}
\end{equation}

**кручение**. В ОТО кручение считается равным нулю.

??? calc "Вычисления"

    **Шаг 1. Разность связностей.** Запишем \(\eqref{eq:gamma-transform}\) для \(\Gamma\) и \(\tilde\Gamma\)
    и вычтем. Неоднородный член \(-\dfrac{\pd x^\mu}{\pd x^{\mu'}}\dfrac{\pd x^\lambda}{\pd x^{\lambda'}}\dfrac{\pd^2 x^{\nu'}}{\pd x^\mu\pd x^\lambda}\)
    не зависит от связности и сокращается:

    \[
    (\Gamma-\tilde\Gamma)^{\nu'}_{\mu'\lambda'} =
    \frac{\pd x^\mu}{\pd x^{\mu'}}\frac{\pd x^\lambda}{\pd x^{\lambda'}}\frac{\pd x^{\nu'}}{\pd x^\nu}(\Gamma-\tilde\Gamma)^\nu_{\mu\lambda}
    \]

    — тензорный закон типа \((1,2)\).

    **Шаг 2. Кручение.** \(\tilde\Gamma^\lambda_{\mu\nu} \equiv \Gamma^\lambda_{\nu\mu}\) — тоже связность:
    неоднородный член симметричен по нижним индексам (\(\pd^2 x^{\nu'}/\pd x^\mu\pd x^\lambda\) симметрична),
    поэтому при перестановке нижних индексов закон \(\eqref{eq:gamma-transform}\) не меняется.
    По шагу 1 \(T^\lambda{}_{\mu\nu} = \Gamma^\lambda_{\mu\nu} - \tilde\Gamma^\lambda_{\mu\nu}\) — тензор.

## 3.3. Связность Леви-Чивиты

!!! theorem "Основная теорема римановой геометрии"
    На многообразии с метрикой \(g_{\mu\nu}\) существует единственная связность, которая
    (а) не имеет кручения, \(\Gamma^\lambda_{\mu\nu} = \Gamma^\lambda_{\nu\mu}\), и
    (б) совместима с метрикой, \(\nabla_\rho g_{\mu\nu} = 0\). Её коэффициенты — **символы Кристоффеля**

    \begin{equation}
    \Gamma^\lambda_{\mu\nu} = \tfrac12 g^{\lambda\sigma}\left(\pd_\mu g_{\nu\sigma} + \pd_\nu g_{\mu\sigma} - \pd_\sigma g_{\mu\nu}\right).
    \label{eq:christoffel}
    \end{equation}

??? info "Доказательство"
    Распишем условие совместимости для трёх циклических перестановок индексов:

    \[
    \begin{aligned}
    \nabla_\rho g_{\mu\nu} &= \pd_\rho g_{\mu\nu} - \Gamma^\lambda_{\rho\mu}g_{\lambda\nu} - \Gamma^\lambda_{\rho\nu}g_{\mu\lambda} = 0,\\
    \nabla_\mu g_{\nu\rho} &= \pd_\mu g_{\nu\rho} - \Gamma^\lambda_{\mu\nu}g_{\lambda\rho} - \Gamma^\lambda_{\mu\rho}g_{\nu\lambda} = 0,\\
    \nabla_\nu g_{\rho\mu} &= \pd_\nu g_{\rho\mu} - \Gamma^\lambda_{\nu\rho}g_{\lambda\mu} - \Gamma^\lambda_{\nu\mu}g_{\rho\lambda} = 0.
    \end{aligned}
    \]

    Вычтем из первого второе и третье и воспользуемся симметрией \(\Gamma\):
    \(\pd_\rho g_{\mu\nu} - \pd_\mu g_{\nu\rho} - \pd_\nu g_{\rho\mu} + 2\Gamma^\lambda_{\mu\nu}g_{\lambda\rho} = 0\).
    Умножая на \(\tfrac12 g^{\sigma\rho}\), получаем \(\eqref{eq:christoffel}\). Единственность следует
    из того, что мы явно выразили \(\Gamma\) через \(g\).

    ??? calc "Вычисления"

        **Шаг 1. Комбинация «первое минус второе минус третье».**

        \[
        \begin{aligned}
        0 = {}&\pd_\rho g_{\mu\nu} - \pd_\mu g_{\nu\rho} - \pd_\nu g_{\rho\mu}\\
        &- \Gamma^\lambda_{\rho\mu}g_{\lambda\nu} - \Gamma^\lambda_{\rho\nu}g_{\mu\lambda}
        + \Gamma^\lambda_{\mu\nu}g_{\lambda\rho} + \Gamma^\lambda_{\mu\rho}g_{\nu\lambda}
        + \Gamma^\lambda_{\nu\rho}g_{\lambda\mu} + \Gamma^\lambda_{\nu\mu}g_{\rho\lambda} .
        \end{aligned}
        \]

        **Шаг 2. Сокращения по симметрии \(\Gamma^\lambda_{\alpha\beta} = \Gamma^\lambda_{\beta\alpha}\) и \(g_{\alpha\beta} = g_{\beta\alpha}\).**

        - \(-\Gamma^\lambda_{\rho\mu}g_{\lambda\nu}\) и \(+\Gamma^\lambda_{\mu\rho}g_{\nu\lambda}\) сокращаются;
        - \(-\Gamma^\lambda_{\rho\nu}g_{\mu\lambda}\) и \(+\Gamma^\lambda_{\nu\rho}g_{\lambda\mu}\) сокращаются;
        - \(\Gamma^\lambda_{\mu\nu}g_{\lambda\rho} + \Gamma^\lambda_{\nu\mu}g_{\rho\lambda} = 2\Gamma^\lambda_{\mu\nu}g_{\lambda\rho}\).

        Отсюда

        \[
        2\Gamma^\lambda_{\mu\nu}g_{\lambda\rho} = \pd_\mu g_{\nu\rho} + \pd_\nu g_{\rho\mu} - \pd_\rho g_{\mu\nu} .
        \]

        **Шаг 3. Обращение метрики.** Умножаем на \(\tfrac12 g^{\sigma\rho}\) и суммируем по \(\rho\);
        \(g_{\lambda\rho}g^{\rho\sigma} = \delta^\sigma_\lambda\) снимает сумму по \(\lambda\):

        \[
        \Gamma^\sigma_{\mu\nu} = \tfrac12 g^{\sigma\rho}\left(\pd_\mu g_{\nu\rho} + \pd_\nu g_{\mu\rho} - \pd_\rho g_{\mu\nu}\right).
        \]

        Переименовав \(\sigma\to\lambda\), \(\rho\to\sigma\), получаем \(\eqref{eq:christoffel}\).

Полезные следствия совместимости с метрикой: подъём и опускание индексов коммутирует с \(\nabla\)
(\(\nabla_\rho V_\mu = g_{\mu\nu}\nabla_\rho V^\nu\)), а из формулы \(\pd_\mu \ln|g| = g^{\alpha\beta}\pd_\mu g_{\alpha\beta}\)
следует свёртка

\begin{equation}
\Gamma^\lambda_{\mu\lambda} = \pd_\mu \ln\sqrt{|g|}, \qquad
\nabla_\mu V^\mu = \frac{1}{\sqrt{|g|}}\,\pd_\mu\!\left(\sqrt{|g|}\,V^\mu\right).
\label{eq:divergence}
\end{equation}

??? calc "Вычисления"

    **Шаг 1. Свёртка формулы \(\eqref{eq:christoffel}\).** Полагаем \(\nu = \lambda\) и суммируем:

    \[
    \Gamma^\lambda_{\mu\lambda} = \tfrac12 g^{\lambda\sigma}\left(\pd_\mu g_{\lambda\sigma} + \pd_\lambda g_{\mu\sigma} - \pd_\sigma g_{\mu\lambda}\right).
    \]

    **Шаг 2. Два последних члена сокращаются.** В \(g^{\lambda\sigma}\pd_\sigma g_{\mu\lambda}\) переименуем
    немые \(\lambda\leftrightarrow\sigma\): получится \(g^{\sigma\lambda}\pd_\lambda g_{\mu\sigma} = g^{\lambda\sigma}\pd_\lambda g_{\mu\sigma}\),
    что совпадает со вторым членом. Остаётся

    \[
    \Gamma^\lambda_{\mu\lambda} = \tfrac12 g^{\lambda\sigma}\pd_\mu g_{\lambda\sigma} .
    \]

    **Шаг 3. Формула Якоби.** \(\pd_\mu\ln|\det M| = \mathrm{tr}(M^{-1}\pd_\mu M)\); для \(M = g\) это
    \(\pd_\mu\ln|g| = g^{\alpha\beta}\pd_\mu g_{\alpha\beta}\). Поэтому

    \[
    \Gamma^\lambda_{\mu\lambda} = \tfrac12\pd_\mu\ln|g| = \pd_\mu\ln\sqrt{|g|} = \frac{\pd_\mu\sqrt{|g|}}{\sqrt{|g|}} .
    \]

    **Шаг 4. Дивергенция.** Из \(\eqref{eq:cov-vector}\) при \(\nu = \mu\):

    \[
    \nabla_\mu V^\mu = \pd_\mu V^\mu + \frac{\pd_\lambda\sqrt{|g|}}{\sqrt{|g|}}V^\lambda
    = \frac{1}{\sqrt{|g|}}\left(\sqrt{|g|}\,\pd_\mu V^\mu + V^\mu\pd_\mu\sqrt{|g|}\right)
    = \frac{1}{\sqrt{|g|}}\pd_\mu\!\left(\sqrt{|g|}\,V^\mu\right).
    \]

Вторая формула — ковариантная дивергенция; вместе с инвариантностью \(\sqrt{|g|}\,\d^nx\) она даёт
теорему Гаусса на многообразии. Аналогично лапласиан скаляра:
\(\Box f = \nabla^\mu\nabla_\mu f = |g|^{-1/2}\pd_\mu\big(\sqrt{|g|}\,g^{\mu\nu}\pd_\nu f\big)\).

!!! example "Пример: плоскость в полярных координатах"
    Для \(\d s^2 = \d r^2 + r^2\d\theta^2\) единственная ненулевая производная метрики —
    \(\pd_r g_{\theta\theta} = 2r\). По \(\eqref{eq:christoffel}\)

    \[
    \Gamma^r_{\theta\theta} = -\tfrac12 g^{rr}\pd_r g_{\theta\theta} = -r, \qquad
    \Gamma^\theta_{r\theta} = \Gamma^\theta_{\theta r} = \tfrac12 g^{\theta\theta}\pd_r g_{\theta\theta} = \frac1r .
    \]

    Символы Кристоффеля отличны от нуля, хотя пространство плоское: в декартовых координатах
    все \(\Gamma = 0\). Связность — не тензор, и её можно занулить в точке подходящим выбором
    координат (локально инерциальные координаты из [гл. 2](02-manifolds-tensors.md)).
    Проверка: \(\nabla_\mu V^\mu = r^{-1}\pd_r(rV^r) + \pd_\theta V^\theta\) — знакомая дивергенция.

    ??? calc "Вычисления"

        **Шаг 1. Метрика и обратная.** \(g_{rr} = 1\), \(g_{\theta\theta} = r^2\), \(g_{r\theta} = 0\);
        \(g^{rr} = 1\), \(g^{\theta\theta} = r^{-2}\). Единственная ненулевая производная: \(\pd_r g_{\theta\theta} = 2r\).

        **Шаг 2. \(\Gamma^r_{\theta\theta}\).** В \(\eqref{eq:christoffel}\) метрика диагональна, так что \(\sigma = r\):

        \[
        \Gamma^r_{\theta\theta} = \tfrac12 g^{rr}\left(\pd_\theta g_{\theta r} + \pd_\theta g_{\theta r} - \pd_r g_{\theta\theta}\right)
        = \tfrac12\cdot 1\cdot(0 + 0 - 2r) = -r .
        \]

        **Шаг 3. \(\Gamma^\theta_{r\theta}\).** Здесь \(\sigma = \theta\):

        \[
        \Gamma^\theta_{r\theta} = \tfrac12 g^{\theta\theta}\left(\pd_r g_{\theta\theta} + \pd_\theta g_{r\theta} - \pd_\theta g_{r\theta}\right)
        = \tfrac12\cdot\frac{1}{r^2}\cdot 2r = \frac1r .
        \]

        **Шаг 4. Остальные.** \(\Gamma^r_{rr}\), \(\Gamma^r_{r\theta}\), \(\Gamma^\theta_{rr}\), \(\Gamma^\theta_{\theta\theta}\)
        содержат только \(\pd_r g_{rr}\), \(\pd_\theta g_{rr}\), \(\pd_\theta g_{\theta\theta}\) или \(g_{r\theta}\) — все равны нулю.

        **Шаг 5. Дивергенция.** \(\sqrt{g} = \sqrt{1\cdot r^2} = r\), и по \(\eqref{eq:divergence}\)

        \[
        \nabla_\mu V^\mu = \frac1r\left[\pd_r(rV^r) + \pd_\theta(rV^\theta)\right] = \frac1r\pd_r(rV^r) + \pd_\theta V^\theta .
        \]

!!! example "Пример: двумерная сфера"
    Для \(\d s^2 = a^2(\d\theta^2 + \sin^2\theta\,\d\phi^2)\):

    \begin{equation}
    \Gamma^\theta_{\phi\phi} = -\sin\theta\cos\theta, \qquad
    \Gamma^\phi_{\theta\phi} = \Gamma^\phi_{\phi\theta} = \cot\theta ,
    \label{eq:sphere-christoffel}
    \end{equation}

    остальные равны нулю (радиус \(a\) выпадает).

    ??? calc "Вычисления"

        **Шаг 1. Данные.** \(g_{\theta\theta} = a^2\), \(g_{\phi\phi} = a^2\sin^2\theta\); обратная
        \(g^{\theta\theta} = a^{-2}\), \(g^{\phi\phi} = (a^2\sin^2\theta)^{-1}\). Единственная ненулевая производная:
        \(\pd_\theta g_{\phi\phi} = 2a^2\sin\theta\cos\theta\).

        **Шаг 2. \(\Gamma^\theta_{\phi\phi}\).**

        \[
        \Gamma^\theta_{\phi\phi} = \tfrac12 g^{\theta\theta}\left(2\pd_\phi g_{\phi\theta} - \pd_\theta g_{\phi\phi}\right)
        = -\frac{1}{2a^2}\cdot 2a^2\sin\theta\cos\theta = -\sin\theta\cos\theta .
        \]

        **Шаг 3. \(\Gamma^\phi_{\theta\phi}\).**

        \[
        \Gamma^\phi_{\theta\phi} = \tfrac12 g^{\phi\phi}\left(\pd_\theta g_{\phi\phi} + \pd_\phi g_{\theta\phi} - \pd_\phi g_{\theta\phi}\right)
        = \frac{2a^2\sin\theta\cos\theta}{2a^2\sin^2\theta} = \cot\theta .
        \]

        **Шаг 4. Остальные.** Любой другой символ содержит \(\pd_\theta g_{\theta\theta} = 0\), \(\pd_\phi(\ldots) = 0\)
        или недиагональную \(g_{\theta\phi} = 0\). Множитель \(a^2\) в \(g^{\lambda\sigma}\) и в производной сокращается,
        поэтому \(a\) выпадает.

## 3.4. Параллельный перенос

Связность позволяет переносить вектор вдоль кривой \(x^\mu(\lambda)\) «не меняя его».
Направленная ковариантная производная вдоль кривой —
\(\frac{D}{\d\lambda} = \frac{\d x^\mu}{\d\lambda}\nabla_\mu\).

!!! definition "Определение: параллельный перенос"
    Тензор \(T\) **параллельно переносится** вдоль кривой, если \(\frac{D T}{\d\lambda} = 0\).
    Для вектора:

    \begin{equation}
    \frac{\d V^\mu}{\d\lambda} + \Gamma^\mu_{\sigma\rho}\,\frac{\d x^\sigma}{\d\lambda}\,V^\rho = 0 .
    \label{eq:parallel-transport}
    \end{equation}

Это линейное ОДУ первого порядка, поэтому начальный вектор однозначно определяет перенесённый
вдоль всей кривой. Совместимость с метрикой гарантирует, что параллельный перенос сохраняет
скалярные произведения: \(\frac{\d}{\d\lambda}\big(g_{\mu\nu}V^\mu W^\nu\big) = 0\). Значит, сохраняются
длины векторов и углы между ними, а времениподобный вектор остаётся времениподобным.

??? calc "Вычисления"

    **Шаг 1. Производная скаляра вдоль кривой.** Для скаляра \(\frac{\d}{\d\lambda} = \frac{\d x^\sigma}{\d\lambda}\pd_\sigma = \frac{\d x^\sigma}{\d\lambda}\nabla_\sigma\).

    **Шаг 2. Правило Лейбница.**

    \[
    \frac{\d}{\d\lambda}\big(g_{\mu\nu}V^\mu W^\nu\big)
    = \frac{\d x^\sigma}{\d\lambda}\Big[(\nabla_\sigma g_{\mu\nu})V^\mu W^\nu
    + g_{\mu\nu}(\nabla_\sigma V^\mu)W^\nu + g_{\mu\nu}V^\mu(\nabla_\sigma W^\nu)\Big].
    \]

    **Шаг 3. Зануление.** Первый член равен нулю по совместимости \(\nabla_\sigma g_{\mu\nu} = 0\);
    второй и третий содержат \(\frac{\d x^\sigma}{\d\lambda}\nabla_\sigma V^\mu = \frac{DV^\mu}{\d\lambda} = 0\) и
    \(\frac{DW^\nu}{\d\lambda} = 0\) по \(\eqref{eq:parallel-transport}\). Итог: \(\frac{\d}{\d\lambda}(g_{\mu\nu}V^\mu W^\nu) = 0\).

Ключевое отличие от плоского пространства: **результат переноса зависит от пути**. Перенося вектор
по замкнутому контуру, мы возвращаемся в исходную точку с повёрнутым вектором. Этот эффект
(голономия) — прямое проявление кривизны, см. [гл. 4](04-curvature.md).

!!! example "Пример: перенос вдоль широты сферы"
    Возьмём кривую \(\theta = \theta_0\), \(\phi = \lambda\). Из \(\eqref{eq:parallel-transport}\) и
    \(\eqref{eq:sphere-christoffel}\)

    \[
    \frac{\d V^\theta}{\d\phi} = \sin\theta_0\cos\theta_0\,V^\phi, \qquad
    \frac{\d V^\phi}{\d\phi} = -\cot\theta_0\,V^\theta .
    \]

    В ортонормированных компонентах \(V^{\hat\theta} = V^\theta\), \(V^{\hat\phi} = \sin\theta_0\,V^\phi\)
    это уравнения вращения с угловой частотой \(\cos\theta_0\):

    \begin{equation}
    V^{\hat\theta} = \cos(\phi\cos\theta_0), \qquad V^{\hat\phi} = -\sin(\phi\cos\theta_0)
    \label{eq:latitude-transport}
    \end{equation}

    для начального \(V = \hat e_\theta\). После полного оборота вектор повёрнут относительно
    исходного на угол \(2\pi\cos\theta_0\), что по модулю \(2\pi\) равно
    \(2\pi(1-\cos\theta_0)\) — **телесному углу** шапки, ограниченной широтой, т. е. её площади,
    делённой на \(a^2\). На экваторе (\(\theta_0 = \pi/2\)) поворота нет: экватор — геодезическая.

    ??? calc "Вычисления"

        **Шаг 1. Касательная к кривой.** \(\d\theta/\d\lambda = 0\), \(\d\phi/\d\lambda = 1\), поэтому в
        \(\eqref{eq:parallel-transport}\) остаются только члены с \(\sigma = \phi\), и \(\lambda = \phi\).

        **Шаг 2. Компонента \(\theta\).** Ненулевой символ с \(\sigma = \phi\) и верхним \(\theta\) — \(\Gamma^\theta_{\phi\phi}\):

        \[
        \frac{\d V^\theta}{\d\phi} + \Gamma^\theta_{\phi\phi}V^\phi = 0
        \;\Longrightarrow\;
        \frac{\d V^\theta}{\d\phi} = \sin\theta_0\cos\theta_0\,V^\phi .
        \]

        **Шаг 3. Компонента \(\phi\).** Ненулевой — \(\Gamma^\phi_{\phi\theta} = \cot\theta_0\):

        \[
        \frac{\d V^\phi}{\d\phi} + \Gamma^\phi_{\phi\theta}V^\theta = 0
        \;\Longrightarrow\;
        \frac{\d V^\phi}{\d\phi} = -\cot\theta_0\,V^\theta .
        \]

        **Шаг 4. Ортонормированные компоненты.** \(V^{\hat\phi} = \sin\theta_0V^\phi\) (\(\theta_0\) постоянно):

        \[
        \frac{\d V^{\hat\theta}}{\d\phi} = \cos\theta_0\,(\sin\theta_0V^\phi) = \cos\theta_0\,V^{\hat\phi},
        \qquad
        \frac{\d V^{\hat\phi}}{\d\phi} = -\sin\theta_0\cot\theta_0\,V^{\hat\theta} = -\cos\theta_0\,V^{\hat\theta} .
        \]

        **Шаг 5. Решение.** Это гармонический осциллятор с частотой \(\cos\theta_0\). С начальными
        данными \(V^{\hat\theta}(0) = 1\), \(V^{\hat\phi}(0) = 0\) решение — \(\eqref{eq:latitude-transport}\).
        Подстановка: \(\frac{\d}{\d\phi}\cos(\phi\cos\theta_0) = -\cos\theta_0\sin(\phi\cos\theta_0) = \cos\theta_0V^{\hat\phi}\) и
        \(\frac{\d}{\d\phi}\big(-\sin(\phi\cos\theta_0)\big) = -\cos\theta_0V^{\hat\theta}\).

        **Шаг 6. Угол поворота.** При \(\phi = 2\pi\) вектор повёрнут на угол \(2\pi\cos\theta_0\) (от \(\hat e_\theta\)
        к \(-\hat e_\phi\)). Так как \(2\pi\cos\theta_0 = 2\pi - 2\pi(1-\cos\theta_0)\), это то же, что поворот на
        \(2\pi(1-\cos\theta_0)\) в противоположную сторону. Площадь шапки:
        \(\int_0^{2\pi}\!\int_0^{\theta_0} a^2\sin\theta\,\d\theta\,\d\phi = 2\pi a^2(1-\cos\theta_0)\).

### Интерактив: голономия на сфере

Выберите широту \(\theta_0\) (полярный угол) и протащите вектор вдоль параллели ползунком \(\phi\).
Жёлтые стрелки — параллельно перенесённый вектор \(\eqref{eq:latitude-transport}\), бледная стрелка
в начальной точке — исходный вектор. После полного оборота угол между ними равен
\(2\pi(1-\cos\theta_0)\) (по модулю \(2\pi\)).

<div class="interactive" id="transport-demo">
  <canvas id="transport-canvas" width="520" height="520"></canvas>
  <div class="controls">
    <label for="transport-theta"><span class="arithmatex">\(\theta_0\)</span> = <span id="transport-theta-val">60°</span></label>
    <input type="range" id="transport-theta" min="5" max="90" step="1" value="60">
    <label for="transport-phi"><span class="arithmatex">\(\phi\)</span> = <span id="transport-phi-val">360°</span></label>
    <input type="range" id="transport-phi" min="0" max="360" step="1" value="360">
    <span>поворот: <span id="transport-angle">180°</span></span>
  </div>
</div>

## 3.5. Геодезические

В плоском пространстве прямая — кривая, касательный вектор которой переносится параллельно
вдоль неё самой. Это определение переносится на многообразие дословно.

!!! definition "Определение: геодезическая"
    Кривая \(x^\mu(\lambda)\) — **геодезическая**, если её касательный вектор параллельно
    переносится вдоль неё: \(\frac{D}{\d\lambda}\frac{\d x^\mu}{\d\lambda} = 0\), т. е.

    \begin{equation}
    \frac{\d^2 x^\mu}{\d\lambda^2} + \Gamma^\mu_{\rho\sigma}\frac{\d x^\rho}{\d\lambda}\frac{\d x^\sigma}{\d\lambda} = 0 .
    \label{eq:geodesic}
    \end{equation}

Параметр \(\lambda\), в котором уравнение имеет вид \(\eqref{eq:geodesic}\), называется **аффинным**;
он определён с точностью до \(\lambda \to a\lambda + b\). Величина \(g_{\mu\nu}\dot x^\mu\dot x^\nu\)
сохраняется вдоль геодезической, поэтому геодезические бывают времениподобными, изотропными и
пространственноподобными по всей длине. Для времениподобных удобно взять \(\lambda = \tau\); тогда
\(U^\mu = \d x^\mu/\d\tau\), \(U_\mu U^\mu = -1\), и \(\eqref{eq:geodesic}\) — это уравнение движения
свободной частицы, \(U^\nu\nabla_\nu U^\mu = 0\) (обобщение \(\d U^\mu/\d\tau = 0\) из СТО).

!!! theorem "Геодезические как экстремали"
    Времениподобные геодезические — экстремали функционала собственного времени
    \(\tau = \int\sqrt{-g_{\mu\nu}\dot x^\mu\dot x^\nu}\,\d\lambda\). Эквивалентно (и удобнее),
    уравнение \(\eqref{eq:geodesic}\) в аффинном параметре — уравнение Эйлера–Лагранжа для

    \begin{equation}
    L = \tfrac12 g_{\mu\nu}(x)\,\dot x^\mu \dot x^\nu .
    \label{eq:geodesic-lagrangian}
    \end{equation}

Действительно, \(\frac{\d}{\d\lambda}(g_{\mu\nu}\dot x^\nu) - \frac12\pd_\mu g_{\nu\sigma}\dot x^\nu\dot x^\sigma = 0\)
после раскрытия производной и умножения на \(g^{\lambda\mu}\) даёт \(\eqref{eq:geodesic}\) с символами
\(\eqref{eq:christoffel}\). На практике это самый быстрый способ найти \(\Gamma\): выписать уравнения
Эйлера–Лагранжа для \(L\) и прочитать коэффициенты при \(\dot x\dot x\). В лоренцевой сигнатуре
времениподобная геодезическая локально **максимизирует** собственное время — это «парадокс близнецов»
на языке геометрии.

??? calc "Вычисления"

    **Шаг 1. Производные лагранжиана.** Для \(L = \tfrac12 g_{\nu\sigma}\dot x^\nu\dot x^\sigma\):

    \[
    \frac{\pd L}{\pd\dot x^\mu} = g_{\mu\nu}\dot x^\nu, \qquad
    \frac{\pd L}{\pd x^\mu} = \tfrac12\pd_\mu g_{\nu\sigma}\dot x^\nu\dot x^\sigma .
    \]

    (Множитель \(\tfrac12\) в первой формуле съедается двумя одинаковыми вкладами от \(\dot x^\nu\) и \(\dot x^\sigma\).)

    **Шаг 2. Полная производная.** \(g_{\mu\nu}\) зависит от \(\lambda\) через \(x(\lambda)\):

    \[
    \frac{\d}{\d\lambda}\big(g_{\mu\nu}\dot x^\nu\big) = \pd_\sigma g_{\mu\nu}\,\dot x^\sigma\dot x^\nu + g_{\mu\nu}\ddot x^\nu .
    \]

    **Шаг 3. Симметризация.** \(\dot x^\sigma\dot x^\nu\) симметрично, поэтому
    \(\pd_\sigma g_{\mu\nu}\dot x^\sigma\dot x^\nu = \tfrac12(\pd_\sigma g_{\mu\nu} + \pd_\nu g_{\mu\sigma})\dot x^\sigma\dot x^\nu\).
    Уравнение Эйлера–Лагранжа принимает вид

    \[
    g_{\mu\nu}\ddot x^\nu + \tfrac12\left(\pd_\sigma g_{\mu\nu} + \pd_\nu g_{\mu\sigma} - \pd_\mu g_{\nu\sigma}\right)\dot x^\sigma\dot x^\nu = 0 .
    \]

    **Шаг 4. Умножение на \(g^{\lambda\mu}\).** \(g^{\lambda\mu}g_{\mu\nu} = \delta^\lambda_\nu\):

    \[
    \ddot x^\lambda + \tfrac12 g^{\lambda\mu}\left(\pd_\sigma g_{\nu\mu} + \pd_\nu g_{\sigma\mu} - \pd_\mu g_{\sigma\nu}\right)\dot x^\sigma\dot x^\nu = 0 ,
    \]

    где скобка с множителем — в точности \(\Gamma^\lambda_{\sigma\nu}\) из \(\eqref{eq:christoffel}\). Это \(\eqref{eq:geodesic}\).

    **Шаг 5. Сохранение \(g_{\mu\nu}\dot x^\mu\dot x^\nu\).** \(L\) не зависит явно от \(\lambda\), поэтому сохраняется
    «энергия» \(\dot x^\mu\,\pd L/\pd\dot x^\mu - L = g_{\mu\nu}\dot x^\mu\dot x^\nu - L = L\).

Если метрика не зависит от координаты \(x^k\), то \(\pd L/\pd x^k = 0\), и сохраняется
импульс \(p_k = g_{k\nu}\dot x^\nu\). Так, в метрике Шварцшильда сохраняются энергия
\(E = -p_t\) и момент импульса \(L = p_\phi\) — основа анализа орбит в [гл. 7](../part2-gr/07-schwarzschild.md).

!!! theorem "Ньютонов предел"
    Для медленной частицы (\(\d x^i/\d\tau \ll \d t/\d\tau\)) в слабом статическом поле
    \(g_{00} = -(1+2\Phi)\), \(|\Phi| \ll 1\), уравнение геодезической сводится к
    \(\d^2x^i/\d t^2 = -\pd_i\Phi\).

??? info "Вывод"
    Остаётся \(\ddot x^\mu + \Gamma^\mu_{00}\,\dot t^2 = 0\). Для статической метрики
    \(\Gamma^i_{00} = -\tfrac12 g^{ii}\pd_i g_{00} \approx \pd_i\Phi\), а \(\Gamma^0_{00} = 0\),
    так что \(\dot t = \mathrm{const}\) и \(\d^2x^i/\d t^2 = -\pd_i\Phi\).

    ??? calc "Вычисления"

        **Шаг 1. Отбрасываем малые члены.** В \(\ddot x^\mu + \Gamma^\mu_{\rho\sigma}\dot x^\rho\dot x^\sigma = 0\)
        (точка — \(\d/\d\tau\)) члены с \(\dot x^i\) малы по сравнению с \(\dot t^2\), остаётся \(\rho = \sigma = 0\).

        **Шаг 2. \(\Gamma^\mu_{00}\) для статической метрики.** По \(\eqref{eq:christoffel}\) с \(\pd_0 g_{\mu\nu} = 0\):

        \[
        \Gamma^\mu_{00} = \tfrac12 g^{\mu\sigma}\left(2\pd_0 g_{0\sigma} - \pd_\sigma g_{00}\right) = -\tfrac12 g^{\mu\sigma}\pd_\sigma g_{00} .
        \]

        **Шаг 3. Временная компонента.** С \(g^{0i} = 0\): \(\Gamma^0_{00} = -\tfrac12 g^{00}\pd_0 g_{00} = 0\), поэтому
        \(\ddot t = 0\), \(\dot t = \mathrm{const}\).

        **Шаг 4. Пространственные компоненты.** В первом порядке по \(\Phi\) \(g^{ij} \approx \delta^{ij}\),
        \(\pd_j g_{00} = -2\pd_j\Phi\):

        \[
        \Gamma^i_{00} \approx -\tfrac12\delta^{ij}(-2\pd_j\Phi) = \pd_i\Phi .
        \]

        **Шаг 5. Переход к координатному времени.** \(\ddot x^i = -\pd_i\Phi\,\dot t^2\). Так как \(\dot t\) постоянно,
        \(\d^2x^i/\d\tau^2 = \dot t^2\,\d^2x^i/\d t^2\); деля на \(\dot t^2\), получаем \(\d^2x^i/\d t^2 = -\pd_i\Phi\).

### Пример на Python: геодезические на сфере

Проинтегрируем \(\eqref{eq:geodesic}\) на единичной сфере и убедимся, что геодезическая — большой круг:
нормаль \(\vb n = \vb r\times\dot{\vb r}\) к плоскости кривой постоянна.

```python
import numpy as np
from scipy.integrate import solve_ivp

def rhs(lam, y):
    th, ph, dth, dph = y
    # Gamma^th_phph = -sin cos,  Gamma^ph_thph = cot
    ddth = np.sin(th)*np.cos(th)*dph**2
    ddph = -2.0*np.cos(th)/np.sin(th)*dth*dph
    return [dth, dph, ddth, ddph]

y0 = [1.0, 0.0, 0.3, 1.2]            # theta, phi, dtheta, dphi
sol = solve_ivp(rhs, [0, 6], y0, rtol=1e-10, atol=1e-12, dense_output=True)

def cart(th, ph, dth, dph):
    r = np.array([np.sin(th)*np.cos(ph), np.sin(th)*np.sin(ph), np.cos(th)])
    e_th = np.array([np.cos(th)*np.cos(ph), np.cos(th)*np.sin(ph), -np.sin(th)])
    e_ph = np.array([-np.sin(ph), np.cos(ph), 0.0])
    return r, dth*e_th + np.sin(th)*dph*e_ph

n0 = np.cross(*cart(*y0))
n0 /= np.linalg.norm(n0)
dev = max(np.linalg.norm(np.cross(*cart(*sol.sol(l))) / np.linalg.norm(np.cross(*cart(*sol.sol(l)))) - n0)
          for l in np.linspace(0, 6, 200))
print(f"max |n - n0| = {dev:.1e}")    # max |n - n0| ~ 3e-10  (плоскость большого круга)

# сохранение "энергии" L = (dth^2 + sin^2 th dph^2)/2 и импульса p_phi = sin^2 th dph
th, ph, dth, dph = sol.y
E = 0.5*(dth**2 + np.sin(th)**2*dph**2)
p = np.sin(th)**2*dph
print(f"{E.min():.8f} {E.max():.8f}")  # 0.55481286 0.55481286
print(f"{p.min():.8f} {p.max():.8f}")  # 0.84968810 0.84968810
```

## 3.6. Производная Ли и векторы Киллинга

Ковариантная производная требует связности. Существует и другая производная, определённая без
неё, — вдоль векторного поля \(V\), с помощью сдвига вдоль его интегральных кривых (потока).
**Производная Ли** \(\mathcal{L}_V T\) измеряет, как меняется тензор \(T\) при переносе потоком \(V\).
В координатах:

\begin{equation}
\mathcal{L}_V f = V^\mu\pd_\mu f, \qquad
\mathcal{L}_V W^\mu = [V, W]^\mu = V^\nu\pd_\nu W^\mu - W^\nu\pd_\nu V^\mu,
\label{eq:lie-vector}
\end{equation}

\begin{equation}
\mathcal{L}_V g_{\mu\nu} = V^\sigma\pd_\sigma g_{\mu\nu} + g_{\sigma\nu}\pd_\mu V^\sigma + g_{\mu\sigma}\pd_\nu V^\sigma
= \nabla_\mu V_\nu + \nabla_\nu V_\mu .
\label{eq:lie-metric}
\end{equation}

Во втором равенстве частные производные можно заменить ковариантными (для связности без кручения
символы \(\Gamma\) сокращаются) — это показывает, что \(\mathcal{L}_V g\) тензорна.

??? calc "Вычисления"

    **Шаг 1. Опускаем индекс внутри \(\nabla\).** \(V_\nu = g_{\nu\sigma}V^\sigma\), и по \(\eqref{eq:cov-form}\)

    \[
    \nabla_\mu V_\nu = \pd_\mu(g_{\nu\sigma}V^\sigma) - \Gamma^\lambda_{\mu\nu}g_{\lambda\sigma}V^\sigma
    = g_{\nu\sigma}\pd_\mu V^\sigma + V^\sigma\pd_\mu g_{\nu\sigma} - \Gamma_{\sigma\mu\nu}V^\sigma ,
    \]

    где \(\Gamma_{\sigma\mu\nu} \equiv g_{\sigma\lambda}\Gamma^\lambda_{\mu\nu} = \tfrac12(\pd_\mu g_{\nu\sigma} + \pd_\nu g_{\mu\sigma} - \pd_\sigma g_{\mu\nu})\).

    **Шаг 2. Симметризация по \(\mu\nu\).** \(\Gamma_{\sigma\mu\nu}\) симметричен по \(\mu\nu\), поэтому

    \[
    \nabla_\mu V_\nu + \nabla_\nu V_\mu = g_{\nu\sigma}\pd_\mu V^\sigma + g_{\mu\sigma}\pd_\nu V^\sigma
    + V^\sigma\left(\pd_\mu g_{\nu\sigma} + \pd_\nu g_{\mu\sigma}\right) - 2\Gamma_{\sigma\mu\nu}V^\sigma .
    \]

    **Шаг 3. Сокращение.** \(2\Gamma_{\sigma\mu\nu}V^\sigma = V^\sigma(\pd_\mu g_{\nu\sigma} + \pd_\nu g_{\mu\sigma} - \pd_\sigma g_{\mu\nu})\);
    первые два члена сокращаются со скобкой, остаётся \(+V^\sigma\pd_\sigma g_{\mu\nu}\):

    \[
    \nabla_\mu V_\nu + \nabla_\nu V_\mu = V^\sigma\pd_\sigma g_{\mu\nu} + g_{\sigma\nu}\pd_\mu V^\sigma + g_{\mu\sigma}\pd_\nu V^\sigma ,
    \]

    что совпадает с первым выражением \(\eqref{eq:lie-metric}\).

!!! definition "Определение: вектор Киллинга"
    Векторное поле \(K\) — **вектор Киллинга**, если поток вдоль него сохраняет метрику,
    \(\mathcal{L}_K g = 0\), т. е.

    \begin{equation}
    \nabla_\mu K_\nu + \nabla_\nu K_\mu = 0 .
    \label{eq:killing}
    \end{equation}

Векторы Киллинга описывают непрерывные симметрии (изометрии) пространства-времени. Если метрика
в некоторых координатах не зависит от \(x^k\), то \(\pd_k\) — вектор Киллинга. Главное
физическое следствие:

!!! theorem "Сохраняющиеся величины"
    Если \(K^\mu\) — вектор Киллинга, а \(x^\mu(\lambda)\) — геодезическая с касательной \(p^\mu\),
    то \(K_\mu p^\mu\) постоянно вдоль геодезической:
    \(p^\nu\nabla_\nu(K_\mu p^\mu) = p^\nu p^\mu\nabla_{(\nu}K_{\mu)} + K_\mu\,p^\nu\nabla_\nu p^\mu = 0.\)

    ??? calc "Вычисления"

        **Шаг 1. Лейбниц.** \(p^\nu\nabla_\nu(K_\mu p^\mu) = p^\nu p^\mu\nabla_\nu K_\mu + K_\mu\,p^\nu\nabla_\nu p^\mu\).

        **Шаг 2. Первый член.** Разложим \(\nabla_\nu K_\mu = \nabla_{(\nu}K_{\mu)} + \nabla_{[\nu}K_{\mu]}\). Свёртка
        антисимметричной части с симметричным \(p^\nu p^\mu\) равна нулю (переименование \(\mu\leftrightarrow\nu\) меняет
        её знак), а симметричная часть равна нулю по \(\eqref{eq:killing}\).

        **Шаг 3. Второй член.** \(p^\nu\nabla_\nu p^\mu = 0\) — уравнение геодезической \(\eqref{eq:geodesic}\).
        Итак, \(\frac{\d}{\d\lambda}(K_\mu p^\mu) = 0\).

        **Шаг 4. Ток \(J^\mu = T^{\mu\nu}K_\nu\).**

        \[
        \nabla_\mu J^\mu = (\nabla_\mu T^{\mu\nu})K_\nu + T^{\mu\nu}\nabla_\mu K_\nu = 0 + T^{\mu\nu}\nabla_{(\mu}K_{\nu)} = 0 ,
        \]

        так как \(T^{\mu\nu}\) симметричен и выделяет только симметричную часть \(\nabla_\mu K_\nu\).

Для тензора энергии-импульса с \(\nabla_\mu T^{\mu\nu}=0\) ток \(J^\mu = T^{\mu\nu}K_\nu\) сохраняется,
\(\nabla_\mu J^\mu = 0\), и, по \(\eqref{eq:divergence}\), даёт сохраняющийся заряд. В
пространстве Минковского 10 векторов Киллинга (4 трансляции, 3 поворота, 3 буста) отвечают
сохранению энергии-импульса и углового момента. Это максимальное число для \(n=4\):
\(n(n+1)/2 = 10\). Пространства с максимальной симметрией (сфера, de Sitter) важны в космологии.
Вселенная Фридмана имеет 6 пространственных векторов Киллинга, но **не** имеет времениподобного,
поэтому энергия фотонов не сохраняется — отсюда космологическое красное смещение
(см. [гл. 10](../part3-cosmology/10-frw.md)).

## Задачи

??? question "3.1. Символы Кристоффеля сферы"
    Выведите \(\eqref{eq:sphere-christoffel}\) из лагранжиана \(\eqref{eq:geodesic-lagrangian}\).

    ??? success "Решение"
        \(L = \tfrac{a^2}{2}(\dot\theta^2 + \sin^2\theta\,\dot\phi^2)\). Уравнения Эйлера–Лагранжа:
        \(\ddot\theta - \sin\theta\cos\theta\,\dot\phi^2 = 0\) и
        \(\frac{\d}{\d\lambda}(\sin^2\theta\,\dot\phi) = 0 \Rightarrow \ddot\phi + 2\cot\theta\,\dot\theta\dot\phi = 0\).
        Сравнивая с \(\eqref{eq:geodesic}\): \(\Gamma^\theta_{\phi\phi} = -\sin\theta\cos\theta\),
        \(2\Gamma^\phi_{\theta\phi} = 2\cot\theta\) (множитель 2 — от двух слагаемых \(\theta\phi\) и \(\phi\theta\)).

??? question "3.2. Совместимость с метрикой"
    Докажите, что для связности Леви-Чивиты \(\nabla_\rho g^{\mu\nu} = 0\) и \(\nabla_\rho\delta^\mu_\nu = 0\).

    ??? success "Решение"
        \(\nabla_\rho\delta^\mu_\nu = \pd_\rho\delta^\mu_\nu + \Gamma^\mu_{\rho\lambda}\delta^\lambda_\nu - \Gamma^\lambda_{\rho\nu}\delta^\mu_\lambda = 0\).
        Далее \(0 = \nabla_\rho(g^{\mu\lambda}g_{\lambda\nu}) = (\nabla_\rho g^{\mu\lambda})g_{\lambda\nu}\);
        умножая на \(g^{\nu\sigma}\), получаем \(\nabla_\rho g^{\mu\sigma} = 0\).

??? question "3.3. Ковариантная дивергенция"
    Докажите \(\Gamma^\lambda_{\mu\lambda} = \pd_\mu\ln\sqrt{|g|}\) и выведите отсюда
    выражение лапласиана в сферических координатах \(\mathbb{R}^3\).

    ??? success "Решение"
        Из \(\eqref{eq:christoffel}\) \(\Gamma^\lambda_{\mu\lambda} = \tfrac12 g^{\lambda\sigma}\pd_\mu g_{\lambda\sigma}\)
        (два других слагаемых сокращаются по симметрии), а \(\pd_\mu\ln|g| = g^{\lambda\sigma}\pd_\mu g_{\lambda\sigma}\)
        (формула Якоби). При \(\sqrt g = r^2\sin\theta\):
        \(\nabla^2 f = \frac{1}{r^2}\pd_r(r^2\pd_r f) + \frac{1}{r^2\sin\theta}\pd_\theta(\sin\theta\,\pd_\theta f) + \frac{1}{r^2\sin^2\theta}\pd_\phi^2 f\).

??? question "3.4. Векторы Киллинга сферы"
    Проверьте, что \(K = \pd_\phi\) и \(K' = \sin\phi\,\pd_\theta + \cot\theta\cos\phi\,\pd_\phi\) —
    векторы Киллинга на \(S^2\).

    ??? success "Решение"
        Удобно использовать первую форму \(\eqref{eq:lie-metric}\). Для \(\pd_\phi\) метрика не зависит
        от \(\phi\), \(\mathcal{L}_K g = 0\). Для \(K'\): компонента \(\theta\theta\):
        \(2g_{\theta\theta}\pd_\theta K'^\theta = 0\); \(\phi\phi\): \(K'^\theta\pd_\theta g_{\phi\phi} + 2g_{\phi\phi}\pd_\phi K'^\phi = 2\sin\theta\cos\theta\sin\phi - 2\sin^2\theta\cot\theta\sin\phi = 0\);
        \(\theta\phi\): \(g_{\theta\theta}\pd_\phi K'^\theta + g_{\phi\phi}\pd_\theta K'^\phi = \cos\phi - \sin^2\theta\,\cos\phi/\sin^2\theta = 0\)
        (опущен общий множитель \(a^2\)).

??? question "3.5. Гравитационное красное смещение"
    В статической метрике \(\d s^2 = -(1+2\Phi)\d t^2 + \d\vb x^2\) покоящийся излучатель в точке
    с потенциалом \(\Phi_1\) испускает фотон, принимаемый покоящимся наблюдателем при \(\Phi_2\).
    Используя вектор Киллинга \(\pd_t\), найдите отношение частот.

    ??? success "Решение"
        \(E = -K_\mu p^\mu = -p_t\) сохраняется. Покоящийся наблюдатель:
        \(U^\mu = (1+2\Phi)^{-1/2}\delta^\mu_0\), измеряемая частота
        \(\omega = -p_\mu U^\mu = E/\sqrt{1+2\Phi}\). Отсюда
        \(\omega_2/\omega_1 = \sqrt{(1+2\Phi_1)/(1+2\Phi_2)} \approx 1 + \Phi_1 - \Phi_2\):
        фотон, выбирающийся из потенциальной ямы, краснеет.

## Что дальше

Параллельный перенос по замкнутому контуру поворачивает векторы, а вторые ковариантные
производные не коммутируют. Оба факта измеряет один тензор — тензор Римана, которому посвящена
[глава 4](04-curvature.md).
