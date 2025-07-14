import { test, fixture, ClientFunction } from 'testcafe';
import { Selector } from 'testcafe';

fixture`Sidebar Component`.page('http://localhost:5173/news');
const getPathname = ClientFunction(() => window.location.pathname);

test('Sidebar renders all links and buttons correctly', async (t) => {
  const logo = Selector('img[alt="Ritix"]');
  const dashboardLink = Selector('a[href="/dashboard"]').withText('Dashboard');
  const licenseLink = Selector('a[href="/license"]').withText('Licenças');
  const walletLink = Selector('a[href="/wallet"]').withText('Carteira');
  const shoppingLink = Selector('a[href="/shopping"]').withText('Loja');
  const newsLink = Selector('a[href="/news"]').withText('Notícias');
  const developerLink = Selector('a[href="/developer"]').withText('Developer');
  const logoutButton = Selector('button').withText('Sair');
  const versionText = Selector('div').withText('v2.0.1/2025');

  await t.expect(logo.exists).ok();

  await t
    .expect(dashboardLink.exists)
    .ok()
    .expect(licenseLink.exists)
    .ok()
    .expect(walletLink.exists)
    .ok()
    .expect(shoppingLink.exists)
    .ok()
    .expect(newsLink.exists)
    .ok()
    .expect(developerLink.exists)
    .ok();

  await t.expect(versionText.exists).ok();

  await t.expect(logoutButton.exists).ok();
  await t.click(logoutButton);

  await t.expect(getPathname()).eql('/');
});
