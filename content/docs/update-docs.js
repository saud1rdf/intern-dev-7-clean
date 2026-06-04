const fs = require('fs');
const path = require('path');

// السكربت سيقرأ المحتوى من الملف مباشرة ولن يخطئ
const rawContent = fs.readFileSync('content.txt', 'utf8');

const files = rawContent.split('***').filter(Boolean);

files.forEach(fileData => {
  const match = fileData.match(/\/\/ File: (.+?)\n([\s\S]+)/);
  if (match) {
    const filePath = match[1].trim();
    const content = match[2].trim();
    const fullPath = path.join(process.cwd(), filePath);
    
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, content);
    console.log(`✅ تم تحديث الملف: ${filePath}`);
  }
});