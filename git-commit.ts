import { execSync } from 'child_process';

try {
  console.log('Setting local Git identity configuration...');
  execSync('git config user.email "chibundusadiq@gmail.com"', { stdio: 'inherit' });
  execSync('git config user.name "Chibundu Sadiq"', { stdio: 'inherit' });

  console.log('Staging all modified and new files with git add...');
  execSync('git add .', { stdio: 'inherit' });

  console.log('Committing changes to repository...');
  execSync('git commit -m "Restore entire site structure and clean up image asset imports"', { stdio: 'inherit' });
  
  console.log('Success! Git history is now clean and up to date.');
  
  console.log('Running git status to verify git tree:');
  const status = execSync('git status', { encoding: 'utf-8' });
  console.log(status);
} catch (e: any) {
  console.error('Git staging or commit failed:', e.message || e);
}
