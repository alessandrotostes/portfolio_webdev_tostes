import { translations } from '../src/i18n/translations.ts';

console.log('🔍 Starting i18n Key Parity & Mappings Validation...');

let errorsCount = 0;

function compareObjects(objA, objB, path = '') {
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // Check missing keys in B
  for (const key of keysA) {
    const currentPath = path ? `${path}.${key}` : key;
    if (!(key in objB)) {
      console.error(`❌ Mismatch: Key "${currentPath}" is present in PT but missing in EN.`);
      errorsCount++;
      continue;
    }

    const valA = objA[key];
    const valB = objB[key];

    if (typeof valA !== typeof valB) {
      console.error(`❌ Mismatch type at "${currentPath}": PT has ${typeof valA}, EN has ${typeof valB}`);
      errorsCount++;
      continue;
    }

    if (Array.isArray(valA)) {
      if (!Array.isArray(valB)) {
        console.error(`❌ Mismatch at "${currentPath}": PT is Array, EN is not Array.`);
        errorsCount++;
      } else if (valA.length !== valB.length) {
        console.warn(`⚠️ Warning at "${currentPath}": Array length differs (PT: ${valA.length}, EN: ${valB.length})`);
      }
    } else if (typeof valA === 'object' && valA !== null && valB !== null) {
      compareObjects(valA, valB, currentPath);
    }
  }

  // Check missing keys in A
  for (const key of keysB) {
    const currentPath = path ? `${path}.${key}` : key;
    if (!(key in objA)) {
      console.error(`❌ Mismatch: Key "${currentPath}" is present in EN but missing in PT.`);
      errorsCount++;
    }
  }
}

compareObjects(translations.pt, translations.en, 'translations');

if (errorsCount > 0) {
  console.error(`\n❌ Validation Failed with ${errorsCount} error(s)!`);
  process.exit(1);
} else {
  console.log('\n✅ 100% Key Parity Verified successfully between PT and EN!');
  process.exit(0);
}
