// Test script to verify default theme behavior
const { JSDOM } = require('jsdom');

async function testTheme() {
  // Create a DOM environment
  const dom = await JSDOM.fromFile('./dist/index.html', {
    runScripts: 'dangerously',
    resources: 'usable',
    url: 'http://localhost:3000/'
  });

  // Wait for the page to load
  await new Promise(resolve => {
    dom.window.addEventListener('load', resolve);
  });

  // Check if dark mode is applied
  const documentElement = dom.window.document.documentElement;
  const hasDarkClass = documentElement.classList.contains('dark');
  const hasLightClass = documentElement.classList.contains('light');
  const localStorageTheme = dom.window.localStorage.getItem('theme');

  console.log('Theme Test Results:');
  console.log('==================');
  console.log('Document classes:', documentElement.className);
  console.log('Has dark class:', hasDarkClass);
  console.log('Has light class:', hasLightClass);
  console.log('LocalStorage theme:', localStorageTheme);
  console.log('==================');

  // Verify expectations
  const expectationsMet = 
    hasDarkClass && 
    !hasLightClass && 
    localStorageTheme === 'dark';

  console.log('\n✅ Test Results:');
  console.log(`Dark mode applied: ${hasDarkClass ? '✅' : '❌'}`);
  console.log(`Light mode NOT applied: ${!hasLightClass ? '✅' : '❌'}`);
  console.log(`LocalStorage set to dark: ${localStorageTheme === 'dark' ? '✅' : '❌'}`);
  console.log(`Overall test: ${expectationsMet ? '✅ PASSED' : '❌ FAILED'}`);

  dom.window.close();
  return expectationsMet;
}

testTheme().catch(console.error);