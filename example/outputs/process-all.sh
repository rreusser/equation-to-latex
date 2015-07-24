#!/bin/bash

for i in `ls *.tex`; do
  pdflatex $i
done

\documentclass[preview,margin=10pt]{standalone}
\usepackage{adjustbox}
\usepackage[utf8x]{inputenc}
\usepackage[T1]{fontenc}

\usepackage{amsmath, amssymb, graphics, setspace, varwidth}
\newcommand{\mathsym}[1]{{}}
\newcommand{\unicode}[1]{{}}

\begin{document}
\begin{varwidth}{\linewidth}

\begin{equation*} \textstyle
\int_0^\pi \sin(x^2)\, dx
\end{equation*}

\end{varwidth}
\end{document}
