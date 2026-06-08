import { execSync } from 'child_process';
import * as fs from 'fs';

try {
  console.log('Rolling back temporary commit...');
  execSync('git reset --soft HEAD~1', { stdio: 'inherit' });

  console.log('Unstaging git-commit.ts...');
  execSync('git reset HEAD git-commit.ts', { stdio: 'inherit' });

  // Delete git-commit.ts physically
  if (fs.existsSync('git-commit.ts')) {
    fs.unlinkSync('git-commit.ts');
    console.log('git-commit.ts deleted.');
  }

  // Delete rollback.ts physically (this current script) so we don't commit it either!
  if (fs.existsSync('rollback.ts')) {
    fs.unlinkSync('rollback.ts');
    console.log('rollback.ts deleted.');
  }

  console.log('Committing the changes cleanly...');
  execSync('git commit -m "Restore entire site structure and clean up image asset imports"', { stdio: 'inherit' });

  console.log('Running git status:');
  const status = execSync('git status', { encoding: 'utf-8' });
  console.log(status);
} catch (e: any) {
  console.error('Clean commit failed:', e.message || e);
}
