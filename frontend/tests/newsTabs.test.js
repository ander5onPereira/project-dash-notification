import { test, fixture } from 'testcafe';
import { Selector } from 'testcafe';

fixture`NewsTabs - Filtros`.page('http://localhost:5173/news');

test('Renders filter buttons and switches active state', async (t) => {
  const todosBtn = Selector('[data-testid="filter-all"]');
  const ativosBtn = Selector('[data-testid="filter-active"]');
  const inativosBtn = Selector('[data-testid="filter-inactive"]');

  await t
    .expect(todosBtn.exists)
    .ok()
    .expect(ativosBtn.exists)
    .ok()
    .expect(inativosBtn.exists)
    .ok();

  await t
    .click(ativosBtn)
    .expect(ativosBtn.classNames)
    .contains('bg-primary')
    .expect(todosBtn.classNames)
    .notContains('bg-primary');

  await t
    .click(inativosBtn)
    .expect(inativosBtn.classNames)
    .contains('bg-primary')
    .expect(ativosBtn.classNames)
    .notContains('bg-primary');

  await t
    .click(todosBtn)
    .expect(todosBtn.classNames)
    .contains('bg-primary')
    .expect(inativosBtn.classNames)
    .notContains('bg-primary');
});
