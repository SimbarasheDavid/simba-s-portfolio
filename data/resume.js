function downloadResume() {
    const link = document.createElement('a');
    link.href = 'public/my rsume.pdf';  // Replace with the path to your resume
    link.download = 'my resume.pdf';  // Desired file name for download
    link.click();
  }
  export default downloadResume