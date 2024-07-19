// composables/useResume.js
import { useState } from '#app'

export const useResume = () => {
  const resume = useState('resume', () => ({
    personalInfo: {
      name: '',
      phone: '',
      email: '',
      website: '',
      github: '',
      linkedin: ''
    },
    careerProfile: '',
    experience: [],
    skills: [],
    education: [],
    projects: [],
    achievements: [],
    languages: '',
    interests: ''
  }))

  const addExperience = () => {
    resume.value.experience.push({ role: '', period: '', company: '', location: '', achievements: '' })
  }

  const addSkillSet = () => {
    resume.value.skills.push({ category: '', items: '' })
  }

  const addEducation = () => {
    resume.value.education.push({ 
      institution: '', 
      period: '', 
      degree: '', 
      gpa: '', 
      modules: '', 
      project: '', 
      achievements: '' 
    })
  }

  const addProject = () => {
    resume.value.projects.push({ name: '', period: '', tools: '', description: '' })
  }

  const addAchievement = () => {
    resume.value.achievements.push({ title: '', description: '' })
  }

  const generateLatex = () => {
    let latexContent = `
%-------------------------
%------------------------
%-------------------------

%------------------------

\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}
% only for pdflatex
% \\input{glyphtounicode}

% fontawesome
\\usepackage{fontawesome5}

% fixed width
\\usepackage[scale=0.90,lf]{FiraMono}

% light-grey
\\definecolor{light-grey}{gray}{0.83}
\\definecolor{dark-grey}{gray}{0.3}
\\definecolor{text-grey}{gray}{.08}

\\DeclareRobustCommand{\\ebseries}{\\fontseries{eb}\\selectfont}
\\DeclareTextFontCommand{\\texteb}{\\ebseries}

% custom underline
\\usepackage{contour}
\\usepackage[normalem]{ulem}
\\renewcommand{\\ULdepth}{1.8pt}
\\contourlength{0.8pt}
\\newcommand{\\myuline}[1]{%
  \\uline{\\phantom{#1}}%
  \\llap{\\contour{white}{#1}}%
}

% custom font: helvetica-style
\\usepackage{tgheros}
\\renewcommand*\\familydefault{\\sfdefault} 
%% Only if the base font of the document is to be sans serif
\\usepackage[T1]{fontenc}

\\pagestyle{fancy}
\\fancyhf{} % clear all header and footer fields
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

% Adjust margins
\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{0in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in}
\\addtolength{\\textheight}{1.0in}

\\urlstyle{same}

\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

% only for pdflatex
\\input{glyphtounicode}
\\pdfgentounicode=1

% Sections formatting - serif
% \\titleformat{\\section}{
%   \\vspace{2pt} \\scshape \\raggedright\\large % header section
% }{}{0em}{}[\\color{black} \\titlerule \\vspace{-5pt}]

% TODO EBSERIES
% sans serif sections
\\titleformat{\\section}{
    \\bfseries \\vspace{-2pt} \\raggedright \\large % header section
}{}{0em}{}[\\color{light-grey} {\\titlerule[2pt]} \\vspace{-4pt}]

% Ensure that generated pdf is machine readable/ATS parsable
\\pdfgentounicode=1

%-------------------------
% Custom commands
\\newcommand{\\resumeItem}[1]{
  \\item\\small{
    {#1 \\vspace{-1pt}}
  }
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-1pt}\\item
    \\begin{tabular*}{\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & {\\color{dark-grey}\\small #2}\\vspace{1pt}\\\\ % top row of resume entry
      \\textit{#3} & {\\color{dark-grey} \\small #4}\\\\ % second row of resume entry
    \\end{tabular*}\\vspace{-2pt}
}

\\newcommand{\\resumeSubSubheading}[2]{
    \\item
    \\begin{tabular*}{\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\textit{\\small#1} & \\textit{\\small #2} \\\\
    \\end{tabular*}\\vspace{-2pt}
}

\\newcommand{\\resumeProjectHeading}[2]{
    \\item
    \\begin{tabular*}{\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & {\\color{dark-grey}\\small \\textit{#2} } \\\\
    \\end{tabular*}\\vspace{-2pt}
}

\\newcommand{\\resumeSubItem}[1]{\\resumeItem{#1}\\vspace{-2pt}}

\\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}

% CHANGED default leftmargin  0.15 in
\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{0pt}}

\\color{text-grey}


\\begin{document}

%----------HEADING----------
\\begin{center}
    \\textbf{\\Huge ${resume.value.personalInfo.name}} \\\\ \\vspace{2pt}
    \\small \\faPhone* \\texttt{${resume.value.personalInfo.phone}} \\hspace{1pt} $|$
    \\hspace{1pt} \\faEnvelope \\hspace{2pt} \\texttt{${resume.value.personalInfo.email}} \\hspace{1pt} $|$ 
    \\hspace{1pt} \\faLink \\hspace{2pt} \\href{${resume.value.personalInfo.website}}{\\uline{${resume.value.personalInfo.website}}} \\hspace{1pt}  $|$ 
    \\hspace{1pt} \\faGithub \\hspace{2pt} \\href{https://github.com/${resume.value.personalInfo.github}}{\\uline{${resume.value.personalInfo.github}}}  $|$ 
    \\hspace{1pt} \\faLinkedin \\hspace{2pt} \\href{https://www.linkedin.com/in/${resume.value.personalInfo.linkedin}/}{\\uline{${resume.value.personalInfo.linkedin}}}  
\\end{center}

\\section{Career Profile}
${resume.value.careerProfile}

%-----------EXPERIENCE-----------
\\section{EXPERIENCE}
  \\resumeSubHeadingListStart
    ${resume.value.experience.map(exp => `
    \\resumeSubheading
      {${exp.role}}
      {${exp.period}}
      {${exp.company}}
      {${exp.location}}
      \\resumeItemListStart
        ${exp.achievements.split('\n').map(achievement => `\\resumeItem{${achievement}}`).join('\n        ')}
      \\resumeItemListEnd
    `).join('\n    ')}
  \\resumeSubHeadingListEnd

%----------- SKILLS-----------
\\section{SKILLS}
 \\begin{itemize}[leftmargin=0in, label={}]
   ${resume.value.skills.map(skill => `
   \\item{\\textbf{
  ${skill.category}} :
  ${skill.items}
  }`).join('\n   ')}
 \\end{itemize}
 \\vspace{3pt}

 %-----------EDUCATION-----------
\\section{EDUCATION}
\\resumeSubHeadingListStart
    ${resume.value.education.map(edu => `
    \\resumeSubheading
      {${edu.institution}}
      {${edu.period}}
      {${edu.degree}}
      {GPA: \\textbf{${edu.gpa}}}
    
        \\textbf{Relevant modules:} ${edu.modules} \\hspace{2pt}
        \\textbf{Project:} ${edu.project}
      \\begin{itemize}
          ${edu.achievements.split('\n').map(achievement => `\\item {${achievement}}`).join('\n          ')}
      \\end{itemize}
    `).join('\n    ')}
\\resumeItemListEnd

%-----------PROJECTS-----------
\\section{PROJECTS}
  \\resumeSubHeadingListStart
    ${resume.value.projects.map(project => `
    \\resumeProjectHeading{\\textbf{${project.name}} ${project.period}}{${project.tools}}
      \\resumeItemListStart
        ${project.description.split('\n').map(desc => `\\resumeItem{${desc}}`).join('\n        ')}
      \\resumeItemListEnd
    `).join('\n    ')}
  \\resumeSubHeadingListEnd

 %-----------ACHIEVEMENTS-----------
\\section{ACHIEVEMENTS}
 \\begin{itemize}[leftmargin=0in, label={}]
   ${resume.value.achievements.map(achievement => `
   \\item{ \\textbf{${achievement.title}} 
   : ${achievement.description}} 
   `).join('\n   ')}
 \\end{itemize}
 
%-----------LANGUAGES-----------
\\section{LANGUAGES}
${resume.value.languages}

%-----------INTERESTS-----------
\\section{INTERESTS}
${resume.value.interests}

 % --------- References --------
 \\section*{Reference details are available upon request}

\\end{document}
`

    const blob = new Blob([latexContent], { type: 'application/x-latex' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'resume.tex'
    link.click()
    URL.revokeObjectURL(link.href)
  }

  return {
    resume,
    addEducation,
    addSkillSet,
    addExperience,
    addProject,
    addAchievement,
    generateLatex
  }
}