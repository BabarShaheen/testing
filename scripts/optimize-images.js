import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');
const QUALITY = 80;

async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    const image = sharp(inputPath);
    
    // Get image metadata (for future use)
    // const metadata = await image.metadata();
    
    // Determine output format and options
    const isWebP = outputPath.endsWith('.webp');
    const isJPG = outputPath.endsWith('.jpg') || outputPath.endsWith('.jpeg');
    const isPNG = outputPath.endsWith('.png');
    
    if (isWebP) {
      await image.webp({ quality: QUALITY, ...options }).toFile(outputPath);
    } else if (isJPG) {
      await image.jpeg({ quality: QUALITY, progressive: true, ...options }).toFile(outputPath);
    } else if (isPNG) {
      await image.png({ quality: QUALITY, progressive: true, ...options }).toFile(outputPath);
    }
    
    const stats = fs.statSync(outputPath);
    const originalSize = fs.statSync(inputPath).size;
    const compressedSize = stats.size;
    const savings = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${savings}% smaller)`);
    
    return { success: true, savings };
  } catch (error) {
    console.error(`❌ Error processing ${inputPath}:`, error.message);
    return { success: false, error: error.message };
  }
}

async function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const baseName = path.basename(item, ext);
        const dirName = path.dirname(fullPath);
        
        // Create WebP version
        const webpPath = path.join(dirName, `${baseName}.webp`);
        await optimizeImage(fullPath, webpPath);
        
        // Optimize original format
        const optimizedPath = path.join(dirName, `${baseName}_optimized${ext}`);
        await optimizeImage(fullPath, optimizedPath);
      }
    }
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  try {
    await processDirectory(PUBLIC_DIR);
    console.log('\n✨ Image optimization completed successfully!');
  } catch (error) {
    console.error('\n💥 Error during optimization:', error);
    /* eslint-env node */
    process.exit(1);
  }
}

main();
