import { PortfolioData } from './types';

export const generateCVContent = (data: PortfolioData): string => {
  const content = `
================================================================================
${data.name.toUpperCase()}
${data.title}
================================================================================

CONTACT INFORMATION
================================================================================
Phone: ${data.contact.phone}
Email: ${data.contact.email}
GitHub: ${data.contact.github}
LinkedIn: ${data.contact.linkedin}

PROFESSIONAL SUMMARY
================================================================================
${data.summary}

EDUCATION
================================================================================
Degree: ${data.education.degree}
Institution: ${data.education.institution}
Graduation: ${data.education.period}
GPA: ${data.education.gpa}

PROFESSIONAL EXPERIENCE & INTERNSHIPS
================================================================================
${data.internships
  .map(
    (internship) => `
Role: ${internship.role}
Company: ${internship.company}
Period: ${internship.period}
Description: ${internship.description}
Achievements:
${internship.achievements.map((achievement) => `  • ${achievement}`).join('\n')}
`
  )
  .join('\n')}

PROJECTS
================================================================================
${data.projects
  .map(
    (project) => `
Title: ${project.title}
Description: ${project.description}
Metrics: ${project.metrics}
Technologies: ${project.tools.join(', ')}
GitHub: ${project.githubLink || 'N/A'}
${project.liveLink && project.liveLink !== '#' ? `Live Demo: ${project.liveLink}` : ''}
`
  )
  .join('\n')}

TECHNICAL SKILLS
================================================================================
${data.skillGroups
  .map(
    (group) => `
${group.category}:
${group.skills.map((skill) => `  • ${skill}`).join('\n')}
`
  )
  .join('\n')}

COURSES & CERTIFICATIONS
================================================================================
${data.courses
  .map((course) => `• ${course.name} - ${course.platform}${course.duration ? ` (${course.duration})` : ''}`)
  .join('\n')}

LANGUAGES
================================================================================
${data.languages.map((lang) => `• ${lang.language}: ${lang.level}`).join('\n')}

================================================================================
Generated: ${new Date().toLocaleDateString()}
================================================================================
`;

  return content;
};

export const downloadCV = (data: PortfolioData, format: 'txt' | 'pdf' | 'word' = 'pdf'): void => {
  const content = generateCVContent(data);
  const fileName = `${data.name.replace(/\s+/g, '_')}_CV`;

  if (format === 'txt') {
    const element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(content)
    );
    element.setAttribute('download', `${fileName}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  } else if (format === 'word') {
    // Create Word document (.docx) using HTML to DOCX conversion
    const wordContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: 'Calibri', 'Arial', sans-serif;
      line-height: 1.5;
      margin: 0.5in;
      color: #333;
    }
    h1 {
      text-align: center;
      font-size: 20pt;
      margin-bottom: 0;
    }
    h2 {
      text-align: center;
      font-size: 14pt;
      margin-top: 0;
      margin-bottom: 20pt;
      color: #0070C0;
    }
    h3 {
      font-size: 12pt;
      font-weight: bold;
      margin-top: 15pt;
      margin-bottom: 8pt;
      border-bottom: 1pt solid #0070C0;
      padding-bottom: 4pt;
    }
    h4 {
      font-size: 11pt;
      font-weight: bold;
      margin-top: 8pt;
      margin-bottom: 4pt;
    }
    p {
      margin: 4pt 0;
      font-size: 11pt;
    }
    ul {
      margin: 4pt 0;
      padding-left: 20pt;
    }
    li {
      margin: 2pt 0;
      font-size: 11pt;
    }
    .contact-info {
      text-align: center;
      margin-bottom: 20pt;
      font-size: 10pt;
    }
    .section {
      margin-bottom: 15pt;
    }
  </style>
</head>
<body>
  <h1>${data.name}</h1>
  <h2>${data.title}</h2>
  
  <div class="contact-info">
    <p><strong>Phone:</strong> ${data.contact.phone} | <strong>Email:</strong> ${data.contact.email}</p>
    <p><strong>GitHub:</strong> ${data.contact.github}</p>
    <p><strong>LinkedIn:</strong> ${data.contact.linkedin}</p>
  </div>

  <div class="section">
    <h3>Professional Summary</h3>
    <p>${data.summary}</p>
  </div>

  <div class="section">
    <h3>Education</h3>
    <h4>${data.education.degree}</h4>
    <p>${data.education.institution} | ${data.education.period}</p>
    <p>GPA: ${data.education.gpa}</p>
  </div>

  <div class="section">
    <h3>Professional Experience</h3>
    ${data.internships
      .map(
        (internship) => `
      <div>
        <h4>${internship.role} at ${internship.company}</h4>
        <p><strong>Period:</strong> ${internship.period}</p>
        <p>${internship.description}</p>
        <h4 style="font-size: 10pt; margin-top: 4pt;">Key Achievements:</h4>
        <ul>
          ${internship.achievements.map((achievement) => `<li>${achievement}</li>`).join('')}
        </ul>
      </div>
    `
      )
      .join('')}
  </div>

  <div class="section">
    <h3>Projects</h3>
    ${data.projects
      .map(
        (project) => `
      <div>
        <h4>${project.title}</h4>
        <p>${project.description}</p>
        <p><strong>Metrics:</strong> ${project.metrics}</p>
        <p><strong>Technologies:</strong> ${project.tools.join(', ')}</p>
        ${project.githubLink ? `<p><strong>GitHub:</strong> <a href="${project.githubLink}">${project.githubLink}</a></p>` : ''}
      </div>
    `
      )
      .join('')}
  </div>

  <div class="section">
    <h3>Technical Skills</h3>
    ${data.skillGroups
      .map(
        (group) => `
      <div>
        <h4>${group.category}</h4>
        <ul>
          ${group.skills.map((skill) => `<li>${skill}</li>`).join('')}
        </ul>
      </div>
    `
      )
      .join('')}
  </div>

  <div class="section">
    <h3>Courses & Certifications</h3>
    <ul>
      ${data.courses.map((course) => `<li>${course.name} - ${course.platform}${course.duration ? ` (${course.duration})` : ''}</li>`).join('')}
    </ul>
  </div>

  <div class="section">
    <h3>Languages</h3>
    <ul>
      ${data.languages.map((lang) => `<li>${lang.language}: ${lang.level}</li>`).join('')}
    </ul>
  </div>
</body>
</html>
    `;

    const blob = new Blob([wordContent], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}.docx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } else if (format === 'pdf') {
    // Create PDF using HTML content
    const pdfContent = `
<!DOCTYPE html>
<html>
<head>
  <title>${data.name} CV</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 20px;
      color: #333;
    }
    h1, h2 {
      border-bottom: 2px solid #0070C0;
      padding-bottom: 10px;
    }
    h1 {
      text-align: center;
      font-size: 28px;
      margin: 0 0 5px 0;
    }
    h3 {
      text-align: center;
      font-size: 16px;
      margin: 0 0 20px 0;
      color: #0070C0;
    }
    h2 {
      font-size: 16px;
      margin: 20px 0 10px 0;
    }
    h4 {
      font-size: 12px;
      margin: 10px 0 5px 0;
    }
    p {
      margin: 5px 0;
    }
    ul {
      margin: 5px 0;
      padding-left: 20px;
    }
    li {
      margin: 3px 0;
    }
    .section {
      margin-bottom: 20px;
      page-break-inside: avoid;
    }
    .contact-info {
      text-align: center;
      margin-bottom: 20px;
      font-size: 12px;
    }
    .contact-info p {
      margin: 2px 0;
    }
    @media print {
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <h1>${data.name}</h1>
  <h3>${data.title}</h3>
  
  <div class="contact-info">
    <p><strong>Phone:</strong> ${data.contact.phone} | <strong>Email:</strong> ${data.contact.email}</p>
    <p><strong>GitHub:</strong> ${data.contact.github} | <strong>LinkedIn:</strong> ${data.contact.linkedin}</p>
  </div>

  <div class="section">
    <h2>Professional Summary</h2>
    <p>${data.summary}</p>
  </div>

  <div class="section">
    <h2>Education</h2>
    <h4>${data.education.degree}</h4>
    <p>${data.education.institution} | ${data.education.period}</p>
    <p><strong>GPA:</strong> ${data.education.gpa}</p>
  </div>

  <div class="section">
    <h2>Professional Experience</h2>
    ${data.internships
      .map(
        (internship) => `
      <div>
        <h4>${internship.role} at ${internship.company}</h4>
        <p><strong>${internship.period}</strong></p>
        <p>${internship.description}</p>
        <strong style="font-size: 11px;">Key Achievements:</strong>
        <ul>
          ${internship.achievements.map((achievement) => `<li>${achievement}</li>`).join('')}
        </ul>
      </div>
    `
      )
      .join('')}
  </div>

  <div class="section">
    <h2>Projects</h2>
    ${data.projects
      .map(
        (project) => `
      <div>
        <h4>${project.title}</h4>
        <p>${project.description}</p>
        <p><strong>Metrics:</strong> ${project.metrics}</p>
        <p><strong>Technologies:</strong> ${project.tools.join(', ')}</p>
      </div>
    `
      )
      .join('')}
  </div>

  <div class="section">
    <h2>Technical Skills</h2>
    ${data.skillGroups
      .map(
        (group) => `
      <div>
        <h4>${group.category}</h4>
        <ul>
          ${group.skills.map((skill) => `<li>${skill}</li>`).join('')}
        </ul>
      </div>
    `
      )
      .join('')}
  </div>

  <div class="section">
    <h2>Courses & Certifications</h2>
    <ul>
      ${data.courses.map((course) => `<li>${course.name} - ${course.platform}${course.duration ? ` (${course.duration})` : ''}</li>`).join('')}
    </ul>
  </div>

  <div class="section">
    <h2>Languages</h2>
    <ul>
      ${data.languages.map((lang) => `<li>${lang.language}: ${lang.level}</li>`).join('')}
    </ul>
  </div>

  <script>
    window.print();
  </script>
</body>
</html>
    `;

    const printWindow = window.open('', '', 'width=900,height=600');
    if (printWindow) {
      printWindow.document.write(pdfContent);
      printWindow.document.close();
      setTimeout(() => {
        printWindow.print();
      }, 250);
    }
  }
};
