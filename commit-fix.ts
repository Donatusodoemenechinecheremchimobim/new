import { execSync } from 'child_process';
import * as fs from 'fs';

try {
  console.log('Setting local Git identity configuration...');
  execSync('git config user.email "chibundusadiq@gmail.com"', { stdio: 'inherit' });
  execSync('git config user.name "Chibundu Sadiq"', { stdio: 'inherit' });

  console.log('Staging vercel.json...');
  execSync('git add vercel.json', { stdio: 'inherit' });

  console.log('Committing changes to repository...');
  execSync('git commit -m "Configure Vercel filesystem handle to fix static asset 404s on custom domain"', { stdio: 'inherit' });
  
  console.log('Git commit created successfully!');
  
  console.log('\n--- ATTEMPTING TO PUSH TO GITHUB ---');
  try {
    // Attempt git push
    execSync('git push origin main', { stdio: 'inherit' });
    console.log('SUCCESS: Pushed committing changes directly to GitHub origin/main!');
  } catch (pushErr: any) {
    console.log('Note: Local commit succeeded, but remote git push is blocked or requires authentication.');
    console.log('Error message:', pushErr.message || pushErr);
  }

  console.log('\n--- CURRENT GIT STATUS ---');
  const status = execSync('git status', { encoding: 'utf-8' });
  console.log(status);

  // Clean up this script
  if (fs.existsSync('commit-fix.ts')) {
    fs.unlinkSync('commit-fix.ts');
  }
} catch (e: any) {
  console.error('Git operation failed:', e.message || e);
}
