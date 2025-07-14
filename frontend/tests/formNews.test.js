import { test, fixture } from 'testcafe';

import { Selector } from 'testcafe';

fixture`Teste básico`.page('http://localhost:5173/news');

test('Open the modal, fill out and submit the form', async (t) => {
  const openModalButton = Selector('[data-testid="open-news-form"]');
  const titleInput = Selector('input[name="title"]');
  const resumeInput = Selector('input[name="resume"]');
  const descriptionTextarea = Selector('textarea[name="description"]');
  const toggle = Selector('[data-testid="toggle-isActive"]');
  const submitButton = Selector('button[type="submit"]');

  await t
    .click(openModalButton)
    .expect(titleInput.exists).ok('O campo de título deve estar visível');

  await t
    .typeText(titleInput, 'Título Teste')
    .typeText(resumeInput, 'Resumo Teste')
    .typeText(descriptionTextarea, 'Descrição longa para teste.')
    .click(toggle)
    .click(submitButton);
});
